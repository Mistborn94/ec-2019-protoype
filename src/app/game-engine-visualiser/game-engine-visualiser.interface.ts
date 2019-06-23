export interface MapCell {
  occupier: Worm;
  powerup: Powerup;
  type: CellType;
  x: number;
  y: number;
  isInDigMoveRange: boolean;
  isAttackable: boolean;
}

export interface CellType {
  name$: string;
}

interface Weapon {
  damage: number;
  range: number;
}

interface Bananas {
}

export interface Worm {
  diggingRange: number;
  health: number;
  id: number;
  movementRange: number;
  roundHit: number;
  roundMoved: number;
  weapon: Weapon;
  bananas: Bananas;
  dead: boolean;
  player: Player;
  position: Position;
  previousPosition: Position;
}

export interface Position {
  x: number;
  y: number;
}

export interface Pair<T, U> {
  first: T;
  second: U;
}

export interface Powerup {
  type: string;
  value: number;
}

export interface Player {
  id: string;
}

export enum SurfaceTypeEnum {
  DEEP_SPACE = 'DEEP_SPACE',
  DIRT = 'DIRT',
  AIR = 'AIR',
}

export enum ActionsEnum {
  MOVE = 'move',
  DIG = 'dig',
  SHOOT = 'shoot',
  BANANA = 'banana',
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

export class GridsCell {
  x: number;
  y: number;
  type: SurfaceTypeEnum;
  occupier: OldWorm;
  isInDigMoveRange: boolean;
  isInBananaRange: boolean;
}

export class GridsRow {
  columns: GridsCell[];
}

export class WormsPlayer {
  commandScore: number;
  consecutiveDoNothingsCount: number;
  currentWorm: Worm;
  id: 1;
  previousWorm: Worm;
  wormSelectionTokens: 5;
  worms: Worm[];
  dead: boolean;
  disqualified: boolean;
  health: number;
  livingWorms: Worm[];
  totalScore: number;
}

export class OldWorm {
  id: number;
  score = 0;
  x: number;
  y: number;
}
