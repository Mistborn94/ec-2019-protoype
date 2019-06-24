import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EndGameDialogComponent } from 'src/app/end-game-dialog/end-game-dialog.component';
import {
  ActionsEnum,
  GridsCell,
  GridsRow,
  MapCell,
  Pair,
  Position,
  SurfaceTypeEnum,
  WormsPlayer,
} from './game-engine-visualiser.interface';
import ec2019 from 'ec-2019-game-engine';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { bufferCount, takeUntil } from 'rxjs/operators';
import { getArrayRange, getRandomFromArray } from '../common/utils';

@Component({
  selector: 'app-game-engine-visualiser',
  templateUrl: './game-engine-visualiser.component.html',
  styleUrls: ['./game-engine-visualiser.component.scss'],
})
export class GameEngineVisualiserComponent implements OnInit, OnDestroy {

  player1: WormsPlayer;
  player2: WormsPlayer;
  actionsEnum = ActionsEnum;

  config: any;
  rows: GridsRow[];
  gameRunner: ec2019.GameRunner;
  gameMap: any;
  flatCells: any;

  commandsCollector$ = new Subject<Pair<WormsPlayer, string>>();
  unsubscribe$ = new Subject<void>();

  constructor(private dialog: MatDialog,
              private http: HttpClient) {
    this.http.get('assets/config.json')
      .subscribe((item: any) => {
        this.config = item;

        this.gameRunner = new ec2019.GameRunner(0, this.config, 2);
        this.gameMap = this.gameRunner.getGeneratedMap();
        this.flatCells = this.gameMap.cells.toArray();

        this.rows = getArrayRange(item.mapSize)
          .map(y => (<GridsRow>{
            columns: getArrayRange(item.mapSize)
              .map(x => this.flatCells.find(c => x === c.x && y === c.y)),
          }));

        this.player1 = this.gameMap.players.toArray()[0];
        this.player2 = this.gameMap.players.toArray()[1];

        this.refreshMap();

        console.log(this.gameRunner, this.gameMap);
      });

    this.commandsCollector$
      .pipe(
        bufferCount(2),
        takeUntil(this.unsubscribe$),
      )
      .subscribe(commands => {
        this.gameRunner.processRound(this.gameMap,
          commands[0].first, commands[0].second,
          commands[1].first, commands[1].second);

        setTimeout(_ => this.refreshMap(), 0);
      });
  }

  doBotAction() {
    let stateJson = this.gameRunner.renderJson(this.gameMap, this.player2);
    // TODO: send to bot file

    let nearCells = this.getNearCells(<Position>this.player2.currentWorm.position)
      .filter(c => c.type.name$ === SurfaceTypeEnum.AIR);
    let commandCell = getRandomFromArray(nearCells);

    this.commandsCollector$.next({first: this.player2, second: `move ${commandCell.x} ${commandCell.y}`});
  }

  private refreshMap(): void {
    if (this.gameRunner.isGameComplete(this.gameMap)) {
      this.showEndGameDialog(``);
    }

    this.doBotAction();

    let currentWorm = this.player1.currentWorm;
    let bananaRange = this.config.agentWorms.bananas.range;
    let wormOnTurnPosition = currentWorm.position;
    let wormOnTurnCell = this.flatCells.find(c => c.x === wormOnTurnPosition.x && c.y === wormOnTurnPosition.y);
    this.flatCells.forEach(c => c.isInDigMoveRange = c.isInBananaRange = false);
    this.getNearCells(wormOnTurnCell)
      .filter(c => !(c.x === currentWorm.position.x && c.y === currentWorm.position.y))
      .forEach(c => c.isInDigMoveRange = true);

    if (currentWorm.bananas && currentWorm.bananas.count) {
      this.flatCells
        .filter(c => this.shootingDistance(currentWorm.position, c) <= bananaRange
          && !(c.x === currentWorm.position.x && c.y === currentWorm.position.y))
        .forEach(c => c.isInBananaRange = true);
    }
  }

  private shootingDistance(a: Position, b: Position) {
    return Math.floor(Math.hypot(b.x - a.x, b.y - a.y));
  }

  private getNearCells(center: Position): MapCell[] {
    return this.flatCells.filter(c => Math.abs(c.x - center.x) <= 1 && Math.abs(c.y - center.y) <= 1);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  public doPlayerAction(cell: GridsCell, action: ActionsEnum) {
    switch (action) {
      case ActionsEnum.DIG:
        this.commandsCollector$.next({first: this.player1, second: `dig ${cell.x} ${cell.y}`});
        break;

      case ActionsEnum.MOVE:
        this.commandsCollector$.next({first: this.player1, second: `move ${cell.x} ${cell.y}`});
        break;

      case ActionsEnum.SHOOT:
        let direction = this.getRelativeDirection(this.player1.currentWorm.position, cell);
        this.commandsCollector$.next({first: this.player1, second: `shoot ${direction}`});
        break;

      case ActionsEnum.BANANA:
        this.commandsCollector$.next({first: this.player1, second: `banana ${cell.x} ${cell.y}`});
        break;
    }
  }

  private showEndGameDialog(message: string) {
    // https://github.com/angular/material2/issues/5268
    // TODO: work-around for expression change on dialog factory
    setTimeout(() => {
      this.dialog.open(EndGameDialogComponent, {
        data: {
          players: []/*this.players*/,
          message: message,
        },
      })
        .afterClosed()
        .subscribe();
    });
  }

  private getRelativeDirection(center: Position, cell: GridsCell) {
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
}

