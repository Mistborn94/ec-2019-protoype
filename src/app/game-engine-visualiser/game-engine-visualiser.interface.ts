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

export enum EffectsEnum {
  HOT = 'hot',
  COLD = 'cold',
  OIL = 'oil'
}

export enum ActionsEnum {
  MOVE = 'move',
  HEAT = 'heat',
  FREEZE = 'freeze',
  SPILL_OIL = 'spill_oil',
  DIG = 'dig',
  SHOOT = 'shoot'
}

export class ActiveEffect {
  placedByPlayer: WormsPlayer;
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

export class GridsRow {
  columns: GridsCell[];
}

export class WormsPlayer {
  id: number;
  name: string;
  weapon = new BasicGun();
  worms: Worm[];
  wormCycleTracker: number = 1;
  score: number;

  updateWormCycleTracker() {
    this.wormCycleTracker = ((this.wormCycleTracker + 1) % this.worms.length) + 1;
  }
}

export class Worm {
  id: number;
  hitPoints = 100;
  score = 0;
  x: number;
  y: number;
  activeEffect: ActiveEffect;
  unitClass: UnitClassEnum = UnitClassEnum.centurion;
}

export class UnitClassEnum {
  constructor(public label: string) {
  }

  static centurion = new UnitClassEnum('centurion');
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
  squadSize = 3;
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

  getCenter() {
    return {
      x: ((this.xMax + 1) / 2) - 0.5,
      y: ((this.yMax + 1) / 2) - 0.5,
    };
  }

  getRadius() {
    let center = this.getCenter();
    return Math.min(center.x, center.y) + 1;
  }
}
