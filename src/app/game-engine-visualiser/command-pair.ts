import { ActionsEnum, Pair, WormsPlayer } from './game-engine-visualiser.interface';

export class CommandPair {

  player: WormsPlayer;
  command: string;
  type: ActionsEnum;

  constructor(player: WormsPlayer, command: string, type: ActionsEnum) {
    this.player = player;
    this.command = command;
    this.type = type;
  }

  static fromCommandPair(commandPair: CommandPair): CommandPair {
    return new CommandPair(commandPair.player, commandPair.command, commandPair.type);
  }

  toPair(): Pair<WormsPlayer, string> {
    return {first: this.player, second: this.command};
  }

}
