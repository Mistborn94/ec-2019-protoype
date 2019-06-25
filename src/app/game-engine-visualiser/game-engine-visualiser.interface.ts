export interface MapCell extends Position {
  occupier: Worm;
  powerup: Powerup;
  type: CellType;
  isAllyWormCell: boolean;
  isInDigMoveRange: boolean;
  isInBananaRange: boolean;
}

interface CellType {
  name$: string;
}

interface Weapon {
  damage: number;
  range: number;
}

interface Bananas {
  damage: number;
  range: number;
  count: number;
  damageRadius: number;
}

interface Worm {
  id: number;
  diggingRange: number;
  health: number;
  movementRange: number;
  roundHit: number;
  roundMoved: number;
  weapon: Weapon;
  bananas: Bananas;
  dead: boolean;
  player: WormsPlayer;
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

interface KotlinList<T> {
  toArray(): T[];
}

interface Powerup {
  type: string;
  value: number;
}

export enum SurfaceTypeEnum {
  DEEP_SPACE = 'DEEP_SPACE',
  DIRT = 'DIRT',
  AIR = 'AIR',
}

export enum ActionsEnum {
  NOTHING = 'nothing',
  SELECT = 'select',
  MOVE = 'move',
  DIG = 'dig',
  SHOOT = 'shoot',
  BANANA = 'banana',
}

export interface WormsPlayer {
  id: 1;
  commandScore: number;
  consecutiveDoNothingsCount: number;
  currentWorm: Worm;
  previousWorm: Worm;
  wormSelectionTokens: number;
  worms: Worm[];
  dead: boolean;
  disqualified: boolean;
  health: number;
  livingWorms: KotlinList<Worm>;
  totalScore: number;
}

interface MapStyle {
  gridStyle: string;
  cellSize: number;
  powerupSize: string;
}

export interface GameMap {
  size: number;
  mapStyle: MapStyle;
  cells: KotlinList<MapCell>;
  currentRound: number;
  currentRoundErrors: any;
  livingPlayers: KotlinList<WormsPlayer>;
  players: KotlinList<WormsPlayer>;
  winningPlayer: WormsPlayer;

  applyHealthPacks(): any;
  detectRefereeIssues(): any;
  getRefereeIssues(): any;
  removeDeadWorms(): any;
}

export interface GameRunner {
  config: GameConfig;
  playerCount: number;
  seed: number;

  getGeneratedMap(): GameMap;
  isGameComplete(wormsMap): boolean;
  processRound(wormsMap, commandList: Pair<WormsPlayer, string>[]): boolean;
  renderJson(map, player): string;
  getErrorList(wormsMap, wormsPlayer): any[];
  getAllErrorList(wormsMap): GameMap;
}

export interface GameConfig {
  agentWorms: any;
  commandoWorms: any;
  csvSeparator: string;
  healthPackHp: number;
  mapSize: number;
  maxDoNothings: number;
  maxRounds: number;
  pushbackDamage: number;
  scores: any;
  totalHealthPacks: number;
  wormSelectTokens: any;
}

