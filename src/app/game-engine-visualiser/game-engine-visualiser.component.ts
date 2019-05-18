import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EndGameDialogComponent } from 'src/app/end-game-dialog/end-game-dialog.component';
import { ActionsEnum, GridsCell, GridsRow, MapCell, SurfaceTypeEnum, WormsPlayer } from './game-engine-visualiser.interface';
import { intRange } from './static-functions';
import ec2019 from 'ec-2019-game-engine';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-engine-visualiser',
  templateUrl: './game-engine-visualiser.component.html',
  styleUrls: ['./game-engine-visualiser.component.scss'],
})
export class GameEngineVisualiserComponent implements OnInit {


  public playerOnTurn: WormsPlayer;

  public surfaceTypeEnum = SurfaceTypeEnum;
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

        this.wormOnTurn = this.gameMap.players.toArray()[0].currentWorm;

        let wormOnTurnPosition = this.gameMap.players.toArray()[0].currentWorm.position;
        let wormOnTurnCell = flatCells.find(c => c.x === wormOnTurnPosition.x && c.y === wormOnTurnPosition.y);
        this.getNearCells(flatCells, wormOnTurnCell)
          .forEach(c => c.isActionable = true);
      });

  }

  public getNearCells(flatCells: MapCell[], cell: MapCell): MapCell[] {
    return flatCells.filter(c => Math.abs(c.x - cell.x) <= 1 && Math.abs(c.y - cell.y) <= 1);
  }

  ngOnInit() {
    // this.setupNewGame();
  }

  public doPlayerAction(cell: GridsCell, action: ActionsEnum) {
    /*const w = this.playerOnTurn.worms.find(w => w.id === this.playerOnTurn.wormCycleTracker);
    switch (action) {

      case ActionsEnum.DIG:
        cell.surfaceType = SurfaceTypeEnum.SPACE;
        this.rows[w.y].columns[w.x].occupier = undefined;
        this.setWormAsOccupier(w, cell);
        break;

      case ActionsEnum.MOVE:
        this.rows[w.y].columns[w.x].occupier = undefined;
        this.setWormAsOccupier(w, cell);
        break;

      case ActionsEnum.HEAT:
        cell.activeEffect = <ActiveEffect>{
          placedByPlayer: this.playerOnTurn,
          type: EffectsEnum.HOT,
          value: 20,
          timeLeft: 1,
        };
        break;

      case ActionsEnum.FREEZE:
        cell.activeEffect = <ActiveEffect>{
          placedByPlayer: this.playerOnTurn,
          type: EffectsEnum.COLD,
          value: 10,
          timeLeft: 2,
        };
        break;

      case ActionsEnum.SPILL_OIL:
        cell.activeEffect = <ActiveEffect>{
          placedByPlayer: this.playerOnTurn,
          type: EffectsEnum.OIL,
          value: 0,
          timeLeft: 4,
        };
        break;

      case ActionsEnum.SHOOT:
        cell.occupier.hitPoints -= this.playerOnTurn.weapon.damage;
        break;

    }*/

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

