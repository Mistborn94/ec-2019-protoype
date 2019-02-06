import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as SimplexNoise from 'simplex-noise';
import { EndGameDialogComponent } from 'src/app/compression-crash-course/compression-showcase/page-data-and-information/end-game-dialog/end-game-dialog.component';
import { generateMapTemplate } from './map-generator';

/**
 * Returns an array of integers in range [0..count]
 * @param count
 * @returns {number[]}
 */
export function intRange(count): number[] {
  return [...Array(count).keys()];
}

export function euclideanDistance(a, b): number {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

/**
 * Returns a flat array of array, where propertyGetter determines the inner property to be pulled out
 * @param {any[]} array
 * @param {Function} propertyGetter
 * @returns {T[]}
 */
export function flatMap<T>(array: any[], propertyGetter: Function = x => x): T[] {
  return array.reduce((acc, x) => acc.concat(propertyGetter(x)), []);
}

export enum SurfaceTypeEnum {
  AIR = 'air',
  SOIL = 'soil',
  WATER = 'water',
  LEAF = 'leaf',
  BIO = 'bio',
  SPACE = 'space',
  ASTEROID = 'asteroid',
  ROCK = 'rock',
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
  SPILL_OIL = 'spill_oil',
  DIG = 'dig',
  SHOOT = 'shoot'
}

class ActiveEffect {
  placedByPLayer: Worm;
  type: EffectsEnum;
  value: number;
  timeLeft: number;
}

export class NearCells {
  above: GridsCell;
  below: GridsCell;
  left: GridsCell;
  right: GridsCell;

  constructor(nearCells: NearCells = <NearCells>{}) {
    this.above = nearCells.above;
    this.below = nearCells.below;
    this.left = nearCells.left;
    this.right = nearCells.right;
  }

  /**
   * Returns an array of existing neighbouring cells in cardinal directions
   * @returns {GridsCell[]}
   */
  cardinalList() {
    return [this.above, this.below, this.left, this.right].filter(gc => gc !== undefined);
  }
}

export class ImageProcessingInfo {
  srcValue: number;
  cookedValue: number;
  flag: number;
}

export class GridsCell {
  x: number;
  y: number;
  surfaceType: SurfaceTypeEnum;
  activeEffect: ActiveEffect;
  occupier: Worm;
  isActionable: boolean;
  isAttackable: boolean;
  nearCells: NearCells = <NearCells>{};
  ipInfo: ImageProcessingInfo = <ImageProcessingInfo>{}; // Image Processing Info, used ONLY during map generation
}

class GridsRow {
  columns: GridsCell[];
}

class Worm {
  id: number;
  name: string;
  hitPoints = 100;
  resources = 1000;
  score = 0;
  x: number;
  y: number;
  activeEffect: ActiveEffect;
  weapon = new BasicGun();
}

class BasicGun {
  damage = 20;
  range = 20;
}

export class MapConfig {
  xMax = 31;
  yMax = 31;
  seed: number = Math.round(Math.random() * 10e15);
  playersCount = 2;
  roundsMax = 400;
  round = 0;
  private altitude = 0.3; // Height of map completely filled

  /**
   * Returns the inverse of altitude, which is the intended Y value for altitude
   * @returns {number}
   */
  getAltitude() {
    return this.yMax * (1 - this.altitude);
  }
}

@Component({
  selector: 'app-page-data-and-information',
  templateUrl: './page-data-and-information.component.html',
  styleUrls: ['./stylings.scss'],
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

  private simplex: SimplexNoise;
  private loading: boolean;

  constructor(private dialog: MatDialog) {
    this.simplex = new SimplexNoise(this.mapConfig.seed.toString());
  }

  ngOnInit() {
    this.setupNewGame();
  }

  public doPlayerAction(cell: GridsCell, action: ActionsEnum) {
    switch (action) {

      case ActionsEnum.DIG:
        cell.surfaceType = SurfaceTypeEnum.SPACE;
        this.rows[this.playerOnTurn.y].columns[this.playerOnTurn.x].occupier = undefined;
        this.setPlayerAsOccupier(this.playerOnTurn, cell);
        break;

      case ActionsEnum.MOVE:
        this.rows[this.playerOnTurn.y].columns[this.playerOnTurn.x].occupier = undefined;
        this.setPlayerAsOccupier(this.playerOnTurn, cell);
        break;

      case ActionsEnum.HEAT:
        cell.activeEffect = <ActiveEffect>{
          placedByPLayer: this.playerOnTurn,
          type: EffectsEnum.HOT,
          value: 20,
          timeLeft: 1,
        };
        break;

      case ActionsEnum.FREEZE:
        cell.activeEffect = <ActiveEffect>{
          placedByPLayer: this.playerOnTurn,
          type: EffectsEnum.COLD,
          value: 10,
          timeLeft: 2,
        };
        break;

      case ActionsEnum.SPILL_OIL:
        cell.activeEffect = <ActiveEffect>{
          placedByPLayer: this.playerOnTurn,
          type: EffectsEnum.OIL,
          value: 0,
          timeLeft: 4,
        };
        break;

      case ActionsEnum.SHOOT:
        cell.occupier.hitPoints -= this.playerOnTurn.weapon.damage;
        break;

    }

    this.processRound();

  }

  public setMapMode(event) {
    this.loading = true;
    setTimeout(() => {
      // this.setupNewGame();
      this.loading = false;
    }, 0);
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
          message: message,
        },
      })
        .afterClosed()
        .subscribe();
    });
  }

  private processRound() {
    this.mapConfig.round++;
    this.applyEffectResultsToPlayers();

    const playersAlive = this.players.filter(p => p.hitPoints > 0);
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

    this.allCellsRef.forEach(cell => {
      cell.isAttackable = false;
      cell.isActionable = false;
    });
    this.playerOnTurn = this.players.find(p => p.id === this.playerOnTurn.id % this.mapConfig.playersCount + 1);

    this.markAdjacentCellsAsActionable();
    this.markPlayersInRangeAsActionable();
  }

  private markPlayersInRangeAsActionable() {
    const activeWeapon = this.playerOnTurn.weapon;
    this.players.filter(p => p !== this.playerOnTurn && euclideanDistance(this.playerOnTurn, p) <= activeWeapon.range)
      .forEach(p => this.rows[p.y].columns[p.x].isAttackable = true);
  }

  private markAdjacentCellsAsActionable() {
    const maskArray = intRange(3)
      .map(i => i - 1)
      .reduce((sum, c, i, a) => {
        sum.push(...a.map(j => ({x: c, y: j})));
        return sum;
      }, []);

    const p = this.playerOnTurn;
    maskArray.forEach(pos => {
      const affectedY = p.y + pos.y;
      const affectedX = (p.x + pos.x + this.rows[0].columns.length) % this.rows[0].columns.length;
      if (!this.rows[affectedY] || !this.rows[affectedY].columns[affectedX]) {
        return;
      }
      const cellToEnable = this.rows[affectedY].columns[affectedX];
      if (cellToEnable.occupier) {
        return;
      }
      cellToEnable.isActionable = true;
    });
  }

  private applyCellEffectsToPlayers() {
    this.allCellsRef
      .filter(cell => cell.occupier && cell.activeEffect)
      .forEach(cell => {
        switch (cell.activeEffect.type) {
          case EffectsEnum.HOT:
            cell.occupier.activeEffect = <ActiveEffect>{
              placedByPLayer: cell.activeEffect.placedByPLayer,
              type: EffectsEnum.HOT,
              value: 20,
              timeLeft: 1,
            };
            break;

          case EffectsEnum.COLD:
            cell.occupier.activeEffect = <ActiveEffect>{
              placedByPLayer: cell.activeEffect.placedByPLayer,
              type: EffectsEnum.COLD,
              value: 10,
              timeLeft: 2,
            };
            break;

          case EffectsEnum.OIL:
            cell.occupier.activeEffect = <ActiveEffect>{
              placedByPLayer: cell.activeEffect.placedByPLayer,
              type: EffectsEnum.OIL,
              value: 0,
              timeLeft: 4,
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
    this.players = intRange(this.mapConfig.playersCount)
      .map(i => {
        const player = new Worm();
        player.id = i + 1;
        player.name = String.fromCharCode(i + 65);

        return player;
      });

    // Set starting locations for players as far away from other players as possible
    this.players
      .forEach(player => { // TODO: check overlapping player positions
        const validSpawnPoint = this.allCellsRef.filter(
          cell => cell.surfaceType === SurfaceTypeEnum.AIR || cell.surfaceType === SurfaceTypeEnum.SPACE)
          .map(cell => {
            const playerDistances = this.players
              .filter(p => p.x !== undefined && p.y !== undefined)
              .map(p => euclideanDistance(cell, p));

            const minDistance = playerDistances.sort((a, b) => a - b)[0];
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

  private setupNewGame() {
    // Make a map. This is ref connected by each cell inside
    const mapCells = generateMapTemplate(this.mapConfig, this.simplex);

    // Convert map into HTML friendly version
    this.allCellsRef = flatMap<GridsCell>(mapCells);
    this.rows = intRange(this.mapConfig.yMax + 1)
      .map(y => (<GridsRow>{
        columns: intRange(this.mapConfig.xMax + 1)
          .map(x => mapCells[x][y]),
      }));

    this.generatePlayers();

    this.mapConfig.round = 0;
    this.processRound();
  }

}

