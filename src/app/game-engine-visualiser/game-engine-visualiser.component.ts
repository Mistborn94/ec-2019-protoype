import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EndGameDialogComponent } from 'src/app/end-game-dialog/end-game-dialog.component';
import {
  ActionsEnum,
  Dashboard,
  GameConfig,
  GameMap,
  GameRunner,
  MapCell,
  Position,
  SurfaceTypeEnum,
  WormsPlayer,
} from './game-engine-visualiser.interface';
import ec2019 from 'ec-2019-game-engine';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getArrayRange, getRandomFromArray, getRandomInteger } from '../common/utils';
import { CommandPair } from './command-pair';

@Component({
  selector: 'app-game-engine-visualiser',
  templateUrl: './game-engine-visualiser.component.html',
  styleUrls: ['./game-engine-visualiser.component.scss'],
})
export class GameEngineVisualiserComponent implements OnDestroy {

  player1: WormsPlayer;
  private player2: WormsPlayer;
  actionsEnum = ActionsEnum;
  dashboard: Dashboard;

  isPaused: boolean;

  private config: GameConfig;
  private gameRunner: GameRunner;
  gameMap: GameMap;
  flatCells: MapCell[];

  private commandsCollector$ = new Subject<CommandPair>();
  private unsubscribe$ = new Subject<void>();

  constructor(private dialog: MatDialog,
              private http: HttpClient) {
    this.initializeNewGame();
  }

  private initializeNewGame() {
    this.unsubscribe$.next();

    this.http.get('assets/config.json')
      .subscribe((item: any) => {
        this.config = item;

        this.gameRunner = new ec2019.GameRunner(getRandomInteger(999), this.config, 2);
        this.gameMap = this.gameRunner.getGeneratedMap();
        this.setMapStyle(this.gameMap);
        this.flatCells = this.gameMap.cells.toArray();
        this.flatCells.forEach(c => c.styleNumber = getRandomInteger(3));

        let playersList = this.gameMap.players.toArray();
        this.player1 = playersList[0];
        this.player2 = playersList[1];

        this.nextRound();

        console.log(this.gameRunner, this.gameMap, this.config);
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

          commandsBucket = [];
          setTimeout(_ => this.nextRound(), 0);
        }
      });
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
      currentRound: this.gameMap.currentRound,
    };
  }

  private setMapStyle(map) {
    let cellSize = 900 / map.size;
    map.mapStyle = {
      gridStyle: getArrayRange(map.size).map(_ => `${cellSize}px`).join(' '),
      cellSize,
      powerupSize: `${cellSize * 0.7}px`,
    };
  }

  doBotAction() {
    let stateJson = this.gameRunner.renderJson(this.gameMap, this.player2);
    // TODO: send to bot file

    let nearCells = this.getNearCells(<Position>this.player2.currentWorm.position)
      .filter(c => c.type.name$ === SurfaceTypeEnum.AIR && !this.isSamePosition(c, this.player2.currentWorm.position));
    let commandCell = getRandomFromArray(nearCells);

    this.commandsCollector$.next(new CommandPair(this.player2, `move ${commandCell.x} ${commandCell.y}`, ActionsEnum.MOVE));
  }

  private nextRound(): void {
    if (this.gameRunner.isGameComplete(this.gameMap)) {
      this.showEndGameDialog();
    }

    this.doBotAction();
    this.refreshMap();
  }

  private refreshMap(): void {
    this.dashboard = this.getDashBoard();

    let currentWorm = this.player1.currentWorm;
    let bananaRange = this.config.agentWorms.bananas.range;
    let wormOnTurnCell = this.flatCells.find(c => this.isSamePosition(c, currentWorm.position));
    this.flatCells.forEach(c =>
      c.isAllyWormCell
        = c.isInDigMoveRange
        = c.isInBananaRange
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

    let state = this.gameRunner.renderJson(this.gameMap, this.player2);
    // JSON.parse(state)
    //   .visualizerEvents
    [{
      type: 'used-banana-bomb',
      details: {
        positionStart: {
          x: 3,
          y: 3,
        },
        positionEnd: {
          x: 5,
          y: 5,
        },
      },
    },
      {
        type: 'used-shoot',
        details: {
          positionStart: {
            x: 3,
            y: 3,
          },
          positionEnd: {
            x: 5,
            y: 5,
          },
        },
      }]
      .forEach(e => {
        this.flatCells.find(c => this.isSamePosition(c, e.details.positionEnd))
          .event = e;
      });

  }

  private isSamePosition(a: Position, b: Position) {
    return a.x === b.x && a.y === b.y;
  }

  private shootingDistance(a: Position, b: Position) {
    return Math.floor(Math.hypot(b.x - a.x, b.y - a.y));
  }

  private getNearCells(center: Position, range: number = 1): MapCell[] {
    return this.flatCells.filter(c => this.shootingDistance(c, center) <= range);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
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
            ? 'You won!!! 🥳'
            : 'How about another try?🥺',
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

  cheatKillPlayer2() {
    this.player2.worms.toArray().forEach(w => w.health = 0);
    this.doPlayerAction(null, ActionsEnum.NOTHING);
  }
}

