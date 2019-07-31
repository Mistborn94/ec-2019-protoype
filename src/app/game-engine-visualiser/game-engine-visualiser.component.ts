import { Component, OnDestroy } from '@angular/core';
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
  SurfaceTypeEnum,
  VisualizerEvent,
  Worm,
  WormsPlayer,
  ZIndexLevelsEnum,
} from './game-engine-visualiser.interface';
import ec2019 from 'ec-2019-game-engine';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommandPair } from './command-pair';
import * as bot from './bot';

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
  commandStringsEnum = CommandStringsEnum;
  zIndexLevelsEnum = ZIndexLevelsEnum;
  shootEvents: VisualizerEvent[];
  bananaEvents: VisualizerEvent[];
  snowballEvents: VisualizerEvent[];
  lastEventIndex = 0;
  dashboard: Dashboard;

  isPaused: boolean;
  private gameRunner: GameRunner;
  gameMap: GameMap;

  flatCells: MapCell[];
  private commandsCollector$ = new Subject<CommandPair>();
  private unsubscribe$ = new Subject<void>();
  private currentRoundTracker: number;

  constructor(private dialog: MatDialog,
              private http: HttpClient) {
    this.initializeNewGame();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  private initializeNewGame() {
    this.unsubscribe$.next();

    this.http.get('assets/visualizer-assets/config.json')
      .subscribe((config: GameConfig) => {
        this.gameRunner = new ec2019.GameRunner(this.getRandomInteger(999), config, 2);
        this.gameMap = this.gameRunner.getGeneratedMap();
        this.gameMap = this.getMapStyle(this.gameMap, config);
        this.flatCells = this.gameMap.cells.toArray();
        this.flatCells.forEach(c => c.styleNumber = this.getRandomInteger(3));

        this.fixJsEngineIssues();
        this.currentRoundTracker = 0;

        let playersList = this.gameMap.players.toArray();
        this.player1 = playersList[0];
        this.player2 = playersList[1];
        this.worms = this.getLivingWorms();

        this.nextRound();

        // console.log(this.gameRunner, this.gameMap, config);
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

  private fixJsEngineIssues() {
    // let wormToEdit = this.gameMap.players.toArray()[0].worms.toArray()[1];
    // wormToEdit.position.x++;
    // let playerPropertyKey = Object.keys(wormToEdit).find(key => key.includes('player_'));
    // wormToEdit[playerPropertyKey] = null;

    // this.flatCells.find(c => c.occupier == wormToEdit).occupier = null;
    // this.flatCells.find(c => this.isSamePosition(c, wormToEdit.position)).occupier = wormToEdit;
    //
    // [0, 1, 2].forEach(y => {
    //   let lCell = this.flatCells.find(c => this.isSamePosition(c, {x: 3, y: y}));
    //   let rCell = this.flatCells.find(c => this.isSamePosition(c, {x: 6, y: y}));
    //   let lCellClone = this.clone(lCell);
    //   lCell.type = this.clone(rCell.type);
    //   rCell.type = lCellClone.type;
    // });

    let halfSize = Math.round((this.gameMap.size - 1) / 2);
    let centerCell = this.flatCells.find(c => this.isSamePosition(c, {x: halfSize, y: halfSize}));
    let airType = this.flatCells.find(c => c.type.name$ == 'AIR').type;
    this.flatCells.filter(c => c.powerup)
      .forEach(powerCell => {
        let newPowerUpCell = this.getRandomFromArray(this.getNearCells(centerCell).filter(c => !c.powerup && c));
        newPowerUpCell.powerup = powerCell.powerup;
        newPowerUpCell.type = airType;

        powerCell.powerup = null;
      });
  }

  private getLivingWorms(): Worm[] {
    return this.flatMap(this.gameMap.players.toArray().map(p => p.livingWorms.toArray())).filter(w => w.health > 0);
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
            .map(w => w.bananas ? w.bananas.count : null)
            .filter(count => count !== null)[0]
          || 0,
        activeWormImage: `${p.id}${p.currentWorm.id}`,
        roundErrors: this.gameRunner.getErrorList(this.gameMap, p),
        worms: p.worms.toArray(),
      })),
      currentRound: this.currentRoundTracker,
    };
  }

  private getArrayRange(count: number = 1) {
    return Array.from({length: count}, (v, k) => k + 1);
  }

  private getMapStyle(map: GameMap, config: GameConfig): GameMap {
    let cellSize = 600 / map.size;
    map.mapStyle = {
      gridStyle: this.getArrayRange(map.size).map(_ => `${cellSize}px`).join(' '),
      cellSize,
      powerupSize: cellSize * 0.7,
      bananaBombScale: config.agentWorms.bananas.damageRadius * 2 + 1,
      snowballScale: config.technologistWorms.snowballs.freezeRadius * 2 + 1,
    };
    return map;
  }

  doBotAction() {
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
    this.gameMap.currentRound = this.currentRoundTracker;
    this.doBotAction();
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

    if (currentWorm.bananas && currentWorm.bananas.count) {
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

    let state = JSON.parse(this.gameRunner.renderJson(this.gameMap, null));
    let events: VisualizerEvent[] = state.visualizerEvents;
    if (events.length > 0) {
      let lastRoundEventsLength = this.lastEventIndex;
      this.lastEventIndex = events.length;
      events = events.slice(lastRoundEventsLength);


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
          gameMape: this.gameMap,
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

  private clone(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  private getRandomFromArray(array: any[]) {
    return array[Math.floor((Math.random() * array.length))];
  }

  private getRandomInteger(max: number = 9) {
    return Math.round(Math.random() * max);
  }

  private flatMap(array: any[]) {
    return array.reduce((acc, x) => acc.concat(x), []);
  }

  cheatKillPlayer2() {
    this.player2.worms.toArray().forEach(w => w.health = 0);
    this.doPlayerAction(null, ActionsEnum.NOTHING);
  }
}

