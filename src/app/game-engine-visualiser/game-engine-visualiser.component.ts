import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as SimplexNoise from 'simplex-noise';
import { EndGameDialogComponent } from 'src/app/end-game-dialog/end-game-dialog.component';
import { generateMapTemplate } from './map-generator/space-map-generator';
import {
  ActionsEnum,
  ActiveEffect,
  EffectsEnum,
  GridsCell,
  GridsRow,
  MapConfig,
  SurfaceTypeEnum,
  Worm,
  WormsPlayer,
} from './game-engine-visualiser.interface';
import { euclideanDistance, flatMap, intRange } from './static-functions';

@Component({
  selector: 'app-game-engine-visualiser',
  templateUrl: './game-engine-visualiser.component.html',
  styleUrls: ['./game-engine-visualiser.component.scss'],
})
export class GameEngineVisualiserComponent implements OnInit {

  public rows: GridsRow[];
  public allCellsRef: GridsCell[];
  public players: WormsPlayer[];
  public allWorms: Worm[];
  public mapConfig = new MapConfig();
  public playerOnTurn: WormsPlayer;

  public surfaceTypeEnum = SurfaceTypeEnum;
  public actionsEnum = ActionsEnum;

  private readonly simplex: SimplexNoise;
  private loading: boolean;

  constructor(private dialog: MatDialog) {
    this.simplex = new SimplexNoise(this.mapConfig.seed.toString());
  }

  ngOnInit() {
    this.setupNewGame();
  }

  public doPlayerAction(cell: GridsCell, action: ActionsEnum) {
    const w = this.playerOnTurn.worms.find(w => w.id === this.playerOnTurn.wormCycleTracker);
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

    }

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

  private showEndGameDialog(message: string) {
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
    if (this.isEndOfMatch()) {
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

  private isEndOfMatch(): boolean {
    const playersAlive = this.players.filter(p => p.worms.some(w => w.hitPoints > 0));
    if (playersAlive.length === 0) {
      this.showEndGameDialog('Draw!');
      return true;
    } else if (playersAlive.length === 1) {
      this.showEndGameDialog('The last survivor has emerged');
      return true;
    } else {
      return false;
    }
  }

  private markPlayersInRangeAsActionable() {
    const activeWeapon = this.playerOnTurn.weapon;
    this.allWorms.filter(w => euclideanDistance(this.playerOnTurn, w) <= activeWeapon.range)
      .forEach(p => this.rows[p.y].columns[p.x].isAttackable = true);
  }

  private markAdjacentCellsAsActionable() {
    const maskArray = intRange(3)
      .map(i => i - 1)
      .reduce((sum, c, i, a) => {
        sum.push(...a.map(j => ({x: c, y: j})));
        return sum;
      }, []);

    const w = this.playerOnTurn.worms.find(w => w.id === this.playerOnTurn.wormCycleTracker);
    maskArray.forEach(pos => {
      const affectedY = w.y + pos.y;
      const affectedX = (w.x + pos.x + this.rows[0].columns.length) % this.rows[0].columns.length;
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
              placedByPlayer: cell.activeEffect.placedByPlayer,
              type: EffectsEnum.HOT,
              value: 20,
              timeLeft: 1,
            };
            break;

          case EffectsEnum.COLD:
            cell.occupier.activeEffect = <ActiveEffect>{
              placedByPlayer: cell.activeEffect.placedByPlayer,
              type: EffectsEnum.COLD,
              value: 10,
              timeLeft: 2,
            };
            break;

          case EffectsEnum.OIL:
            cell.occupier.activeEffect = <ActiveEffect>{
              placedByPlayer: cell.activeEffect.placedByPlayer,
              type: EffectsEnum.OIL,
              value: 0,
              timeLeft: 4,
            };
            break;
        }
      });
  }

  private applyEffectResultsToPlayers() {
    this.allWorms
      .filter(p => p.activeEffect)
      .forEach(p => {
        switch (p.activeEffect.type) {
          case EffectsEnum.HOT:
            p.activeEffect.placedByPlayer.score += p.activeEffect.value;
            p.hitPoints -= p.activeEffect.value;
            p.activeEffect.value = 0;
            this.updatePlayerEffectValues(p);
            break;

          case EffectsEnum.COLD:
            p.activeEffect.placedByPlayer.score += p.activeEffect.value;
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
        const player = new WormsPlayer();
        player.id = i + 1;
        player.name = String.fromCharCode(i + 65);
        player.worms = intRange(this.mapConfig.squadSize)
          .map(j => <Worm>({
            id: j + 1,
          }));

        return player;
      });
    this.allWorms = flatMap<Worm>(this.players, p => p.worms);

    // Create circle with equidistant seats
    let mapCenter = this.mapConfig.getCenter();
    let radiusFit = this.mapConfig.getRadius() * 0.8;
    let seatCount = this.mapConfig.playersCount * this.mapConfig.squadSize;
    let drumcircleSeatPositions = intRange(seatCount)
      .map(i => {
        let t = 2 * Math.PI * (i / seatCount);
        let x = Math.round(radiusFit * Math.cos(t) + mapCenter.x);
        let y = Math.round(radiusFit * Math.sin(t) + mapCenter.y);

        return {
          x: x,
          y: y,
          cell: this.allCellsRef.find(c => c.x === x && c.y === y),
        };
      });

    // Put worms in seats, a different player for the next seat
    drumcircleSeatPositions.forEach((seat, i) => {
      let playerNumber = ((i + 1) % this.mapConfig.playersCount) + 1;

      let wormToPlace = this.players
        .find(p => p.id === playerNumber)
        .worms
        .find(w => w.x == undefined && w.y == undefined);
      this.setWormAsOccupier(wormToPlace, seat.cell);
    });

    // Random player is selected to start the match.
    let seededRandom = this.simplex.noise2D(0, 0) * 0.5 + 0.5;
    this.playerOnTurn = this.players[Math.floor(seededRandom * this.players.length)];
  }

  private setWormAsOccupier(worm, cell) {
    worm.x = cell.x;
    worm.y = cell.y;
    cell.occupier = worm;
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

