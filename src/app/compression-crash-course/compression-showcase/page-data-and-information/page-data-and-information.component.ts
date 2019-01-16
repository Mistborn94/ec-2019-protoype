import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EndGameDialogComponent } from 'src/app/compression-crash-course/compression-showcase/page-data-and-information/end-game-dialog/end-game-dialog.component';

function euclideanDistance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

function flatMap(array: any[], propertyGetter: Function) {
  return array.reduce((acc, x) => acc.concat(propertyGetter(x)), []);
}

enum SurfaceTypeEnum {
  AIR = 'air',
  SOIL = 'soil',
  WATER = 'water',
  LEAF = 'leaf',
  BIO = 'bio'
}

enum EffectsEnum {
  HOT = 'hot',
  COLD = 'cold',
  OIL = 'oil'
}

enum ActionsEnum {
  MOVE = 'move',
  HEAT = 'heat',
  FREEZE = 'freeze',
  SPILL_OIL = 'spill_oil'
}

class ActiveEffect {
  placedByPLayer: Worm;
  type: EffectsEnum;
  value: number;
  timeLeft: number;
}

class GridsCell {
  x: number;
  y: number;
  surfaceType: SurfaceTypeEnum;
  activeEffect: ActiveEffect;
  occupier: Worm;
  isActionable: boolean;
  cellAboveMe: GridsCell;
  cellBelowMe: GridsCell;
}

class GridsRow {
  columns: GridsCell[];
}

class Worm {
  id: number;
  name: string;
  hitPoints: number = 100;
  resources: number = 1000;
  score: number = 0;
  x: number;
  y: number;
  activeEffect: ActiveEffect;
}

class MapConfig {
  xMax: number = 31;
  yMax: number = 15;
  seed: number = Math.random();
  playersCount: number = 2;
  roundsMax: number = 400;
  round: number = 0;
}

@Component({
             selector: 'app-page-data-and-information',
             templateUrl: './page-data-and-information.component.html',
             styleUrls: ['./stylings.scss']
           })
export class PageDataAndInformationComponent implements OnInit {

  public rows: GridsRow[];
  public allCellsRef: GridsCell[];
  public players: Worm[];
  public mapConfig = new MapConfig();
  public playerOnTurn: Worm;

  public surfaceTypeEnum = SurfaceTypeEnum;
  public effectsEnum = EffectsEnum;
  public actionsEnum = ActionsEnum;

  constructor(private dialog: MatDialog) {
    this.generateCells();
    this.generatePlayers();
  }

  ngOnInit() {
    this.processRound();
  }

  private updatePlayerEffectValues(player) {
    if (player.activeEffect.timeLeft > 0) {
      player.activeEffect.timeLeft--;
    } else {
      player.activeEffect = undefined;
    }
  }

  private updateActiveEffect(effect: ActiveEffect) {
    if (effect.timeLeft > 0) {
      effect.timeLeft--;
      return effect;
    } else {
      return undefined;
    }
  }

  private endGameState(message: string) {
    // https://github.com/angular/material2/issues/5268
    // TODO: work-around for expression change on dialog factory
    setTimeout(() => {
      this.dialog.open(EndGameDialogComponent, {
        data: {
          players: this.players,
          message: message
        }
      })
          .afterClosed()
          .subscribe();
    });
  }

  private processRound() {
    this.mapConfig.round++;
    this.applyEffectResultsToPlayers();

    let playersAlive = this.players.filter(p => p.hitPoints > 0);
    if (playersAlive.length === 0) {
      this.endGameState('Draw!');
      return;
    } else if (playersAlive.length === 1) {
      this.endGameState('The last survivor has emerged');
      return;
    }
    this.applyCellEffectsToPlayers();

    this.allCellsRef.filter(cell => cell.activeEffect)
        .forEach(cell => cell.activeEffect = this.updateActiveEffect(cell.activeEffect));

    this.allCellsRef.forEach(cell => cell.isActionable = false);
    let maskArray = [...Array(3)
      .keys()]
      .map(i => i - 1)
      .reduce((sum, c, i, a) => {
        sum.push(...a.map(j => ({x: c, y: j})));
        return sum;
      }, []);

    this.playerOnTurn = this.players.find(p => p.id === this.playerOnTurn.id % this.mapConfig.playersCount + 1);
    let p = this.playerOnTurn;
    maskArray.forEach(pos => {
      if (!this.rows[p.y + pos.y] || !this.rows[p.y + pos.y].columns[p.x + pos.x]) {
        return;
      }
      let cellToEnable = this.rows[p.y + pos.y].columns[p.x + pos.x];
      if (cellToEnable.occupier
        || (cellToEnable.surfaceType === SurfaceTypeEnum.AIR && cellToEnable.cellBelowMe.surfaceType === SurfaceTypeEnum.AIR)
        || (cellToEnable.surfaceType === SurfaceTypeEnum.AIR && p.activeEffect && p.activeEffect.type === EffectsEnum.OIL)) {
        return;
      }
      cellToEnable.isActionable = true;
    });
  }

  private applyCellEffectsToPlayers() {
    this.allCellsRef
        .filter(cell => cell.cellAboveMe && cell.cellAboveMe.occupier && cell.activeEffect)
        .forEach(cell => {
          switch (cell.activeEffect.type) {
            case EffectsEnum.HOT:
              cell.cellAboveMe.occupier.activeEffect = <ActiveEffect>{
                placedByPLayer: cell.activeEffect.placedByPLayer,
                type: EffectsEnum.HOT,
                value: 20,
                timeLeft: 1
              };
              break;

            case EffectsEnum.COLD:
              cell.cellAboveMe.occupier.activeEffect = <ActiveEffect>{
                placedByPLayer: cell.activeEffect.placedByPLayer,
                type: EffectsEnum.COLD,
                value: 10,
                timeLeft: 2
              };
              break;

            case EffectsEnum.OIL:
              cell.cellAboveMe.occupier.activeEffect = <ActiveEffect>{
                placedByPLayer: cell.activeEffect.placedByPLayer,
                type: EffectsEnum.OIL,
                value: 0,
                timeLeft: 4
              };
              break;
          }
        });
  }

  private applyEffectResultsToPlayers() {
    this.players
        .filter(p => p.activeEffect)
        .forEach(p => {
          switch (p.activeEffect.type) {
            case EffectsEnum.HOT:
              p.activeEffect.placedByPLayer.score += p.activeEffect.value;
              p.hitPoints -= p.activeEffect.value;
              p.activeEffect.value = 0;
              this.updatePlayerEffectValues(p);
              break;

            case EffectsEnum.COLD:
              p.activeEffect.placedByPLayer.score += p.activeEffect.value;
              p.hitPoints -= p.activeEffect.value;
              p.activeEffect.value = 0;
              this.updatePlayerEffectValues(p);
              break;

            case EffectsEnum.OIL:
              this.updatePlayerEffectValues(p);
              break;
          }
        });
  }

  private generatePlayers() {
    this.players = [...Array(this.mapConfig.playersCount)
      .keys()]
      .map(i => {
        let player = new Worm();
        player.id = i + 1;
        player.name = String.fromCharCode(i + 65);

        return player;
      });

    // Set starting locations for players as far away from other players as possible
    this.players
        .forEach(player => { // TODO: check overlapping player positions
          let validSpawnPoint = this.allCellsRef.filter(cell => cell.surfaceType === SurfaceTypeEnum.AIR
            && this.rows[cell.y + 1]
            && this.rows[cell.y + 1].columns[cell.x].surfaceType === SurfaceTypeEnum.SOIL)
                                    .map(cell => {
                                      let playerDistances = this.players
                                                                .filter(p => p.x !== undefined && p.y !== undefined)
                                                                .map(p => euclideanDistance(cell, p));

                                      let minDistance = playerDistances.sort((a, b) => a - b)[0];
                                      return {cell, minDistance};
                                    })
                                    .sort((a, b) => b.minDistance - a.minDistance)[0];

          if (validSpawnPoint) {
            this.setPlayerAsOccupier(player, validSpawnPoint.cell);
          } else {
            throw new Error(`Could not find a spawn location for player ${player.id}, ${player.name}`);
          }
        });

    // Random player is selected to start the match
    this.playerOnTurn = this.players[Math.floor(Math.random() * this.players.length)];
  }

  private setPlayerAsOccupier(player, cell) {
    player.x = cell.x;
    player.y = cell.y;
    cell.occupier = player;
  }

  private generateCells() {
    this.rows = [...Array(this.mapConfig.yMax + 1)
      .keys()]
      .map(i => <GridsRow>{
        columns: <GridsCell[]>[...Array(this.mapConfig.xMax + 1)
          .keys()]
          .map(j => <GridsCell>{
            x: j,
            y: i,
            surfaceType: this.generateSurfaceType(j, i)
          })
      });

    this.allCellsRef = flatMap(this.rows, (x: GridsRow) => x.columns);
    this.allCellsRef.forEach(cell => {
      if (this.rows[cell.y - 1]) {
        cell.cellAboveMe = this.rows[cell.y - 1].columns[cell.x];
      }
      if (this.rows[cell.y + 1]) {
        cell.cellBelowMe = this.rows[cell.y + 1].columns[cell.x];
      }
    });
  }

  private generateSurfaceType(x: number, y: number): SurfaceTypeEnum {
    let slopeMagnitude = 0.3;
    let slopeAltitudeDifference = 0.3;
    let groundLevel = Math.sin(x * slopeMagnitude + this.mapConfig.seed * this.mapConfig.xMax)
      * (this.mapConfig.yMax * slopeAltitudeDifference)
      + (this.mapConfig.yMax - this.mapConfig.yMax * slopeAltitudeDifference);

    if (y > (this.mapConfig.yMax - 2) && y < groundLevel) {
      return SurfaceTypeEnum.WATER;
    } else if (y < groundLevel) {
      return SurfaceTypeEnum.AIR;
    }

    let rng = Math.random();
    if (rng > 0.95) {
      return SurfaceTypeEnum.BIO;
    } else if (rng > 0.7) {
      return SurfaceTypeEnum.LEAF;
    }
    return SurfaceTypeEnum.SOIL;
  }

  public doPlayerAction(cell: GridsCell, action: ActionsEnum) {
    switch (action) {

      case ActionsEnum.MOVE:
        this.rows[this.playerOnTurn.y].columns[this.playerOnTurn.x].occupier = undefined;
        this.setPlayerAsOccupier(this.playerOnTurn, cell);
        break;

      case ActionsEnum.HEAT:
        cell.activeEffect = <ActiveEffect>{
          placedByPLayer: this.playerOnTurn,
          type: EffectsEnum.HOT,
          value: 20,
          timeLeft: 1
        };
        break;

      case ActionsEnum.FREEZE:
        cell.activeEffect = <ActiveEffect>{
          placedByPLayer: this.playerOnTurn,
          type: EffectsEnum.COLD,
          value: 10,
          timeLeft: 2
        };
        break;

      case ActionsEnum.SPILL_OIL:
        cell.activeEffect = <ActiveEffect>{
          placedByPLayer: this.playerOnTurn,
          type: EffectsEnum.OIL,
          value: 0,
          timeLeft: 4
        };
        break;
    }

    this.processRound();

  }


}

