import { Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EndGameDialogComponent } from './end-game-dialog/end-game-dialog.component';
import {
  ActionsEnum,
  CommandStringsEnum,
  Dashboard,
  GameConfig,
  GameMap,
  GameRunner,
  MapCell,
  Position,
  VisualizerEvent,
  Worm,
  WormsPlayer,
  ZIndexLevelsEnum,
} from './game-engine-visualiser.interface';
import ec2019 from 'ec-2019-game-engine';
import { HttpClient } from '@angular/common/http';
import { interval, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CommandPair } from './command-pair';
import * as bot from './bot/index';
import { MatSlider } from '@angular/material/slider';

function getArrayRange(count: number = 1) {
  return Array.from({length: count}, (v, k) => k + 1);
}

function getRandomInteger(max: number = 9) {
  return Math.round(Math.random() * max);
}

function flatMap(array: any[]) {
  return array.reduce((acc, x) => acc.concat(x), []);
}

interface StateFile {
  currentRound: number;
  lavaDamage: number;
  map: any[];
  mapSize: number;
  maxRounds: number;
  opponents: any[];
  pushbackDamage: number;
  visualizerEvents: any[];
}

@Component({
  selector: 'app-game-engine-visualiser',
  templateUrl: './game-engine-visualiser.component.html',
  styleUrls: ['./game-engine-visualiser.component.scss'],
})
export class GameEngineVisualiserComponent implements OnDestroy {

  player1: WormsPlayer;
  private player2: WormsPlayer;
  worms: Worm[];
  actionsEnum = ActionsEnum;
  zIndexLevelsEnum = ZIndexLevelsEnum;
  shootEvents: VisualizerEvent[];
  bananaEvents: VisualizerEvent[];
  snowballEvents: VisualizerEvent[];
  dashboard: Dashboard;

  isPaused: boolean;
  private gameRunner: GameRunner;
  gameMap: GameMap;

  flatCells: MapCell[];
  private selectedRound: number;
  private commandsCollector$ = new Subject<CommandPair>();
  private unsubscribe$ = new Subject<void>();
  private currentRoundTracker: number;

  private replayPause$ = new Subject<void>();
  maxRoundNumber: number = 400;
  private allRounds: StateFile[];

  @ViewChild('slider') slider: MatSlider;

  constructor(private dialog: MatDialog,
              private http: HttpClient,
              private ngZone: NgZone) {
    this.initializeNewGame();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.replayPause$.next();
  }

  private initializeNewGame() {
    this.unsubscribe$.next();

    this.http.get('assets/visualizer-assets/config.json')
      .subscribe((config: GameConfig) => {
        this.gameRunner = new ec2019.GameRunner(getRandomInteger(999), config, 2);
        this.gameMap = this.gameRunner.getGeneratedMap();
        this.gameMap = this.getMapStyle(this.gameMap, config);
        this.flatCells = this.gameMap.cells.toArray();
        this.flatCells.forEach(c => c.styleNumber = getRandomInteger(3));

        this.currentRoundTracker = 0;

        let playersList = this.gameMap.players.toArray();
        this.player1 = playersList[0];
        this.player2 = playersList[1];
        this.worms = this.getLivingWorms();

        this.nextRound();
      });

    let commandsBucket = <CommandPair[]>[];
    this.commandsCollector$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(command => {
        if (command.type === ActionsEnum.SELECT) {
          commandsBucket = commandsBucket.filter(c => !(c.player === command.player && c.type === ActionsEnum.SELECT));
        }
        commandsBucket.push(command);

        let commandsList = commandsBucket.map(cp => cp.toPair());

        if (commandsBucket.filter(c => !c.command.includes('select')).length === 2) {
          this.gameRunner.processRound(this.gameMap, commandsList);
          commandsBucket.filter(command => command.type === ActionsEnum.SELECT)
            .forEach(command => this.gameMap
              .players.toArray()
              .find(p => p == command.player)
              .wormSelectionTokens--);

          commandsBucket = [];
          setTimeout(_ => this.nextRound(), 0);
        }
      });
  }

  private getLivingWorms(): Worm[] {
    return flatMap(this.gameMap.players.toArray().map(p => p.livingWorms.toArray())).filter(w => w.health > 0);
  }

  private getDashBoard(): Dashboard {
    return {
      players: [this.player1, this.player2].map(p => ({
        playerId: p.id,
        health: p.health,
        livingWormsCount: p.livingWorms.toArray().length,
        totalScore: p.totalScore,
        wormSelectionTokens: p.wormSelectionTokens,
        bananasCount: p.livingWorms.toArray()
            .map(w => w.bananaBombs ? w.bananaBombs.count : null)
            .filter(count => count !== null)[0]
          || 0,
        snowballsCount: p.livingWorms.toArray()
            .map(w => w.snowballs ? w.snowballs.count : null)
            .filter(count => count !== null)[0]
          || 0,
        activeWormImage: `${p.id}${p.currentWorm.id}`,
        roundErrors: this.gameRunner.getErrorList(this.gameMap, p),
        worms: p.worms.toArray(),
      })),
      currentRound: this.gameMap.currentRound,
    };
  }

  private getMapStyle(map: GameMap, config: GameConfig): GameMap {
    let cellSize = config.websitePixelSize
      ? config.websitePixelSize / map.size
      : 600 / map.size;
    map.mapStyle = {
      gridStyle: getArrayRange(map.size).map(_ => `${cellSize}px`).join(' '),
      cellSize,
      powerupSize: cellSize * 0.7,
      bananaBombScale: config.agentWorms.bananas.damageRadius * 2 + 1,
      snowballScale: config.technologistWorms.snowballs.freezeRadius * 2 + 1,
    };
    return map;
  }

  private doBotAction() {
    let stateJson = this.gameRunner.renderJson(this.gameMap, this.player2);
    let state = JSON.parse(stateJson);
    // JS engine doesn't render json state correctly
    state.map.forEach(x => {
      x.forEach(y => {
        y.type = y.type.name$;
        if (y.occupier) {
          let playerIdPropertyName = Object.keys(y.occupier).find(key => key.includes('playerId'));
          y.occupier.playerId = y.occupier[playerIdPropertyName];
        }
      });
    });
    let botCommand = bot.executeRound(state);
    if (botCommand.includes('select')) {
      let botCommands = botCommand.split(';');
      this.commandsCollector$.next(new CommandPair(this.player2, botCommands[0], ActionsEnum.MOVE));
      this.commandsCollector$.next(new CommandPair(this.player2, botCommands[1], ActionsEnum.MOVE));
    } else {
      this.commandsCollector$.next(new CommandPair(this.player2, botCommand, ActionsEnum.MOVE));
    }
  }

  private nextRound(): void {
    if (this.gameRunner.isGameComplete(this.gameMap)) {
      this.showEndGameDialog();
    }

    this.currentRoundTracker++;
    this.gameRunner.setCurrentRound(this.gameMap, this.currentRoundTracker);

    this.doBotAction();

    let state = JSON.parse(this.gameRunner.renderJson(this.gameMap, null));
    this.refreshMap();
  }

  private refreshMap(): void {
    this.dashboard = this.getDashBoard();

    let currentWorm = this.player1.currentWorm;
    let bananaRange = this.gameRunner.config.agentWorms.bananas.range;
    let snowballRange = this.gameRunner.config.technologistWorms.snowballs.range;
    let wormOnTurnCell = this.flatCells.find(c => this.isSamePosition(c, currentWorm.position));
    this.flatCells.forEach(c =>
      c.isAllyWormCell
        = c.isInDigMoveRange
        = c.isInBananaRange
        = c.isInSnowballRange
        = false);

    this.flatCells
      .filter(c => this.player1.livingWorms.toArray().some(w => this.isSamePosition(c, w.position)))
      .forEach(c => c.isAllyWormCell = true);

    this.getNearCells(wormOnTurnCell)
      .filter(c => !this.isSamePosition(c, currentWorm.position))
      .forEach(c => c.isInDigMoveRange = true);

    if (currentWorm.bananaBombs && currentWorm.bananaBombs.count) {
      this.getNearCells(wormOnTurnCell, bananaRange)
        .filter(c => !this.isSamePosition(c, currentWorm.position))
        .forEach(c => c.isInBananaRange = true);
    }

    if (currentWorm.snowballs && currentWorm.snowballs.count) {
      this.getNearCells(wormOnTurnCell, snowballRange)
        .filter(c => !this.isSamePosition(c, currentWorm.position))
        .forEach(c => c.isInSnowballRange = true);
    }

    this.worms = this.getLivingWorms();

    let allFeedback = this.gameRunner.getAllFeedback(this.gameMap).toArray();
    let events: VisualizerEvent[] = (allFeedback.length ? allFeedback[allFeedback.length - 1].toArray() : [])
      .map(e => this.getValueFromKey(e, 'visualizerEvent_'));

    // let state = JSON.parse(this.gameRunner.renderJson(this.gameMap, null));
    // let jsonEvents: VisualizerEvent[] = state.visualizerEvents;

    if (events.length > 0) {
      this.shootEvents = events.filter(e => e.type == CommandStringsEnum.SHOOT)
        .map(e => {
          let end = e.positionEnd;
          let start = e.positionStart;
          e.positionCenter = {
            x: (end.x + start.x) / 2,
            y: (end.y + start.y) / 2,
          };
          e.laserLength = this.euclideanDistance(end, start) - (e.result === 'HIT' ? 0 : 1);
          e.rotation = 360 * Math.atan2(start.y - end.y, start.x - end.x) / (Math.PI * 2);

          return e;
        });

      this.bananaEvents = events.filter(e => e.type == CommandStringsEnum.BANANA)
        .map(e => {
          let end = e.positionEnd;
          let start = e.positionStart;
          e.positionRelative = {
            x: (end.x - start.x),
            y: (end.y - start.y),
          };
          e.randomUrl = Math.random();
          setTimeout(() => e.timeout = true, 0);
          return e;
        });

      this.snowballEvents = events.filter(e => e.type == CommandStringsEnum.SNOWBALL)
        .map(e => {
          let end = e.positionEnd;
          let start = e.positionStart;
          e.positionRelative = {
            x: (end.x - start.x),
            y: (end.y - start.y),
          };
          e.randomUrl = Math.random();
          setTimeout(() => e.timeout = true, 0);
          return e;
        });
    }
  }

  private getValueFromKey(element, property) {
    return element[Object.keys(element).find(key => key.includes(property))];
  }

  private isSamePosition(a: Position, b: Position) {
    return a.x === b.x && a.y === b.y;
  }

  private shootingDistance(a: Position, b: Position) {
    return Math.floor(this.euclideanDistance(b, a));
  }

  private euclideanDistance(b: Position, a: Position) {
    return Math.hypot(b.x - a.x, b.y - a.y);
  }

  private getNearCells(center: Position, range: number = 1): MapCell[] {
    return this.flatCells.filter(c => this.shootingDistance(c, center) <= range);
  }

  doPlayerAction(cell: MapCell, action: ActionsEnum) {
    switch (action) {
      case ActionsEnum.NOTHING:
        this.commandsCollector$.next(new CommandPair(this.player1, ActionsEnum.NOTHING, ActionsEnum.NOTHING));
        break;

      case ActionsEnum.SELECT:
        this.commandsCollector$.next(new CommandPair(this.player1, `${ActionsEnum.SELECT} ${cell.x} ${cell.y}`, ActionsEnum.SELECT));
        this.player1.currentWorm = cell.occupier;
        this.refreshMap();
        break;

      case ActionsEnum.DIG:
        this.commandsCollector$.next(new CommandPair(this.player1, `${ActionsEnum.DIG} ${cell.x} ${cell.y}`, ActionsEnum.DIG));
        break;

      case ActionsEnum.MOVE:
        this.commandsCollector$.next(new CommandPair(this.player1, `${ActionsEnum.MOVE} ${cell.x} ${cell.y}`, ActionsEnum.MOVE));
        break;

      case ActionsEnum.SHOOT:
        let direction = this.getRelativeDirection(this.player1.currentWorm.position, cell);
        this.commandsCollector$.next(new CommandPair(this.player1, `${ActionsEnum.SHOOT} ${direction}`, ActionsEnum.SHOOT));
        break;

      case ActionsEnum.BANANA:
        this.commandsCollector$.next(new CommandPair(this.player1, `${ActionsEnum.BANANA} ${cell.x} ${cell.y}`, ActionsEnum.BANANA));
        break;

      case ActionsEnum.SNOWBALL:
        this.commandsCollector$.next(new CommandPair(this.player1, `${ActionsEnum.SNOWBALL} ${cell.x} ${cell.y}`, ActionsEnum.SNOWBALL));
        break;
    }
  }

  private showEndGameDialog() {
    this.isPaused = true;
    // https://github.com/angular/material2/issues/5268
    // TODO: work-around for expression change on dialog factory
    setTimeout(() => {
      this.dialog.open(EndGameDialogComponent, {
        data: {
          players: [],
          message: this.gameMap.winningPlayer == this.player1
            ? 'You won! 🏆'
            : 'Game Over 🥺',
          gameMap: this.gameMap,
        },
      })
        .afterClosed()
        .subscribe(() => {
          this.initializeNewGame();
          this.isPaused = false;
        });
    });
  }

  private getRelativeDirection(center: Position, cell: MapCell) {
    let directions = {
      E: [1, 0],
      NE: [1, -1],
      N: [0, -1],
      NW: [-1, -1],
      W: [-1, 0],
      SW: [-1, 1],
      S: [0, 1],
      SE: [1, 1],
    };

    return Object.keys(directions)
      .find(key => directions[key][0] === cell.x - center.x
        && directions[key][1] === cell.y - center.y);
  }

  handleFileInput(files: FileList) {
    if (!Array.from(files).some(f => f.name === 'GlobalState.json')) {
      throw 'Could not find any GlobalState.json files. Try match-logs from a new starter-pack release 2019.3.1';
    }

    let stateFiles = <{ round: number, stateFile: File | any }[]>
      Array.from(files).filter(f => f.name === 'GlobalState.json')
        .map(f => {
          let roundString = f.webkitRelativePath.split('/')[1];
          let extractedRound = roundString.match(/(\d+)/)[0];
          return {
            round: Number(extractedRound),
            stateFile: f,
          };
        })
        .sort((a, b) => a.round - b.round);

    this.allRounds = [];

    let fileReadPromises = stateFiles.map(f =>
      f.stateFile.text().then(result => {
        let resultParsed = JSON.parse(result);
        this.allRounds[resultParsed.currentRound] = resultParsed;
      }));

    Promise.all(fileReadPromises).then(() => this.startMatchLog());
  }

  private startMatchLog() {
    this.selectedRound = 1;
    this.maxRoundNumber = Object.keys(this.allRounds).length;

    this.startPlayback();
  }

  private startPlayback() {
    let currentState = this.allRounds[this.selectedRound];

    this.worms = flatMap(
      currentState.opponents.map(o => o.worms
        .map(w => {
          w.player = o;
          return w;
        })));

    this.gameMap = <GameMap>{size: currentState.mapSize};
    this.gameMap = this.getMapStyle(this.gameMap, <GameConfig>{
      websitePixelSize: 650,
      agentWorms: {bananas: {damageRadius: 5}},
      technologistWorms: {snowballs: {freezeRadius: 5}},
    });

    interval(1500)
      .pipe(takeUntil(this.replayPause$))
      .subscribe(() => {
        let stateFile = this.allRounds[this.selectedRound++];
        if (stateFile) {
          this.ngZone.runOutsideAngular(() => {
            this.updateToNextRound(stateFile);
          });
        } else {
          this.replayPause$.next();
        }
      });
  }

  private updateToNextRound(currentState) {
    let stateWorms = flatMap(
      currentState.opponents.map(o => o.worms
        .map(w => {
          w.player = o;
          return w;
        })));

    this.worms.forEach(gw => {
      let matchingWorm = stateWorms.find(sw => sw.id === gw.id && sw.player.id === gw.player.id);

      gw.bananaBombs = matchingWorm.bananaBombs;
      gw.health = matchingWorm.health;
      gw.position = matchingWorm.position;
      gw.roundsUntilUnfrozen = matchingWorm.roundsUntilUnfrozen;
      gw.snowballs = matchingWorm.snowballs;
    });
    this.worms = this.worms.filter(w => w.health > 0);

    this.flatCells = flatMap(currentState.map);

    let events = currentState.visualizerEvents;
    if (events.length > 0) {
      this.shootEvents = events.filter(e => e.type == CommandStringsEnum.SHOOT)
        .map(e => {
          let end = e.positionEnd;
          let start = e.positionStart;
          e.positionCenter = {
            x: (end.x + start.x) / 2,
            y: (end.y + start.y) / 2,
          };
          e.laserLength = this.euclideanDistance(end, start) - (e.result === 'HIT' ? 0 : 1);
          e.rotation = 360 * Math.atan2(start.y - end.y, start.x - end.x) / (Math.PI * 2);

          return e;
        });

      this.bananaEvents = events.filter(e => e.type == CommandStringsEnum.BANANA)
        .map(e => {
          let end = e.positionEnd;
          let start = e.positionStart;
          e.positionRelative = {
            x: (end.x - start.x),
            y: (end.y - start.y),
          };
          e.randomUrl = Math.random();
          setTimeout(() => e.timeout = true, 0);
          return e;
        });

      this.snowballEvents = events.filter(e => e.type == CommandStringsEnum.SNOWBALL)
        .map(e => {
          let end = e.positionEnd;
          let start = e.positionStart;
          e.positionRelative = {
            x: (end.x - start.x),
            y: (end.y - start.y),
          };
          e.randomUrl = Math.random();
          setTimeout(() => e.timeout = true, 0);
          return e;
        });
    }

    this.dashboard = {
      players: [currentState.opponents[0], currentState.opponents[1]].map(p => {
        const livingWorms = p.worms.filter(w => w.health > 0);
        return {
          playerId: p.id,
          health: p.health,
          livingWormsCount: livingWorms.length,
          totalScore: p.score,
          wormSelectionTokens: p.remainingWormSelections,
          bananasCount: livingWorms
              .map(w => w.bananaBombs ? w.bananaBombs.count : null)
              .filter(count => count !== null)[0]
            || 0,
          snowballsCount: livingWorms
              .map(w => w.snowballs ? w.snowballs.count : null)
              .filter(count => count !== null)[0]
            || 0,
          activeWormImage: `${p.id}${p.currentWormId}`,
          roundErrors: [],
          worms: p.worms,
        };
      }),
      currentRound: this.selectedRound,
    };
  }

  reloadPage(): void {
    window.location.reload();
  }
}

