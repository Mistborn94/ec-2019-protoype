export enum CommandStringsEnum {
  MOVE = 'move',
  DIG = 'dig',
  SHOOT = 'shoot',
  BANANA = 'banana',
  SELECT = 'select',
  NOTHING = 'nothing'
}

export enum ZIndexLevelsEnum {
  texture,
  powerup,
  explosion,
  worm,
  cornerSelector,
  actionMenu,
  bananaThrow,
  shootLaser,
}

export interface Dashboard {
  players: DashboardPlayerDetails[];
  currentRound: number;
}

interface DashboardPlayerDetails {
  playerId: number;
  health: number;
  livingWormsCount: number;
  totalScore: number;
  wormSelectionTokens: number;
  bananasCount: number;
  activeWormImage: string;
  roundErrors: any;
  worms: Worm[];
}

export interface MapCell extends Position {
  occupier?: Worm;
  powerup?: Powerup;
  type: CellType;
  isAllyWormCell: boolean;
  isInDigMoveRange: boolean;
  isInBananaRange: boolean;
  styleNumber: number;
  event: VisualizerEvent;
}

export interface VisualizerEvent {
  type: CommandStringsEnum;
  wormCommanded: Worm;
  result: string;
  positionStart?: Position;
  positionCenter?: Position;
  positionEnd: Position;
  positionRelative: Position;
  laserLength?: number;
  rotation?: number;
  randomUrl?: number;
  timeout?: boolean;
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

export interface Worm {
  id: number;
  diggingRange: number;
  health: number;
  movementRange: number;
  roundHit: number;
  roundMoved: number;
  weapon: Weapon;
  bananas?: Bananas;
  dead: boolean;
  player: WormsPlayer;
  position: Position;
  previousPosition: Position;
  profession: string;
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
  worms: KotlinList<Worm>;
  dead: boolean;
  disqualified: boolean;
  health: number;
  livingWorms: KotlinList<Worm>;
  totalScore: number;
}

interface MapStyle {
  gridStyle: string;
  cellSize: number;
  powerupSize: number;
  bananaBombScale: number;
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

