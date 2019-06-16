import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EndGameDialogComponent } from 'src/app/end-game-dialog/end-game-dialog.component';
import { ActionsEnum, GridsCell, GridsRow, MapCell, SurfaceTypeEnum, WormsPlayer } from './game-engine-visualiser.interface';
import { intRange } from './static-functions';
import ec2019 from 'ec-2019-game-engine';
import { HttpClient } from '@angular/common/http';
import { iterator } from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-game-engine-visualiser',
  templateUrl: './game-engine-visualiser.component.html',
  styleUrls: ['./game-engine-visualiser.component.scss'],
})
export class GameEngineVisualiserComponent implements OnInit {


  public playerOnTurn: WormsPlayer;
  public actionsEnum = ActionsEnum;

  private config: any;
  public rows: GridsRow[];
  public gameRunner: ec2019.GameRunner;
  public gameMap: any;
  public wormOnTurn: any;

  constructor(private dialog: MatDialog,
              private http: HttpClient) {
    this.http.get('assets/config.json')
      .subscribe((item: any) => {
        this.config = item;

        this.gameRunner = new ec2019.GameRunner(0, this.config, 2);
        this.gameMap = this.gameRunner.getGeneratedMap();
        let flatCells = this.gameMap.cells.toArray();

        this.rows = intRange(item.mapSize)
          .map(y => (<GridsRow>{
            columns: intRange(item.mapSize)
              .map(x => flatCells.find(c => x === c.x && y === c.y)),
          }));

        this.playerOnTurn = this.gameMap.players.toArray()[0];
        this.wormOnTurn = this.playerOnTurn.currentWorm;

        let wormOnTurnPosition = this.gameMap.players.toArray()[0].currentWorm.position;
        let wormOnTurnCell = flatCells.find(c => c.x === wormOnTurnPosition.x && c.y === wormOnTurnPosition.y);
        this.getNearCells(flatCells, wormOnTurnCell)
          .forEach(c => c.isActionable = true);


        console.log(this.gameRunner, this.gameMap);
      });

  }

  public getNearCells(flatCells: MapCell[], cell: MapCell): MapCell[] {
    return flatCells.filter(c => Math.abs(c.x - cell.x) <= 1 && Math.abs(c.y - cell.y) <= 1);
  }

  ngOnInit() {
    // this.setupNewGame();
  }

  public doPlayerAction(cell: GridsCell, action: ActionsEnum) {
    let commands = {
      entries: {
        iterator: _ => {
          let iterator = {
            idx: 0,
            size: 2,
            items: [{
              key: 1,
              value: 'C;0;move 1 1',
            }],
            hasNext: _ => iterator.idx < (commands.size - 1),
            next: _ => {
              let result = commands.entries.items[iterator.idx];
              iterator.idx++;
              return result;
            },
          };
          return iterator;
        },
        items: [{
          key: 1,
          value: 'C;0;move 1 1',
        }],
      },
      size: undefined,
    };
    commands.size = commands.entries.items.length;

    switch (action) {

      case ActionsEnum.DIG:

        break;

      case ActionsEnum.MOVE:
        this.gameRunner.processRound(this.gameMap, commands);
        break;

      case ActionsEnum.SHOOT:
        break;

    }

    // this.processRound();

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

  private processRound() {

  }

  private isEndOfMatch(): boolean {

    return true;
  }

}

