(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-logging'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-logging'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ec-2019-game-engine'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ec-2019-game-engine'.");
    }
    if (typeof this['kotlin-logging'] === 'undefined') {
      throw new Error("Error loading module 'ec-2019-game-engine'. Its dependency 'kotlin-logging' was not found. Please, check whether 'kotlin-logging' is loaded prior to 'ec-2019-game-engine'.");
    }
    root['ec-2019-game-engine'] = factory(typeof this['ec-2019-game-engine'] === 'undefined' ? {} : this['ec-2019-game-engine'], kotlin, this['kotlin-logging']);
  }
}(this, function (_, Kotlin, $module$kotlin_logging) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var mu = $module$kotlin_logging.mu;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var equals = Kotlin.equals;
  var NotImplementedError = Kotlin.kotlin.NotImplementedError;
  var toString = Kotlin.toString;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var any = Kotlin.kotlin.collections.any_7wnvza$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Pair = Kotlin.kotlin.Pair;
  var flatten = Kotlin.kotlin.collections.flatten_u0ad8z$;
  var math = Kotlin.kotlin.math;
  var numberToInt = Kotlin.numberToInt;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var Triple = Kotlin.kotlin.Triple;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var sequence = Kotlin.kotlin.sequences.sequence_o0x0bg$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var throwUPAE = Kotlin.throwUPAE;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var Map = Kotlin.kotlin.collections.Map;
  var throwCCE = Kotlin.throwCCE;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var chunked = Kotlin.kotlin.collections.chunked_ba2ldo$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var toShort = Kotlin.toShort;
  var Random = Kotlin.kotlin.random.Random;
  CommandStrings.prototype = Object.create(Enum.prototype);
  CommandStrings.prototype.constructor = CommandStrings;
  BananaCommandFeedback.prototype = Object.create(CommandFeedback.prototype);
  BananaCommandFeedback.prototype.constructor = BananaCommandFeedback;
  BananaResult.prototype = Object.create(Enum.prototype);
  BananaResult.prototype.constructor = BananaResult;
  StandardCommandFeedback.prototype = Object.create(CommandFeedback.prototype);
  StandardCommandFeedback.prototype.constructor = StandardCommandFeedback;
  DigCommandFeedback.prototype = Object.create(CommandFeedback.prototype);
  DigCommandFeedback.prototype.constructor = DigCommandFeedback;
  DoNothingCommandFeedback.prototype = Object.create(CommandFeedback.prototype);
  DoNothingCommandFeedback.prototype.constructor = DoNothingCommandFeedback;
  SelectCommandFeedback.prototype = Object.create(CommandFeedback.prototype);
  SelectCommandFeedback.prototype.constructor = SelectCommandFeedback;
  ShootCommandFeedback.prototype = Object.create(CommandFeedback.prototype);
  ShootCommandFeedback.prototype.constructor = ShootCommandFeedback;
  ShootResult.prototype = Object.create(Enum.prototype);
  ShootResult.prototype.constructor = ShootResult;
  TeleportCommandFeedback.prototype = Object.create(CommandFeedback.prototype);
  TeleportCommandFeedback.prototype.constructor = TeleportCommandFeedback;
  TeleportResult.prototype = Object.create(Enum.prototype);
  TeleportResult.prototype.constructor = TeleportResult;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  CellType.prototype = Object.create(Enum.prototype);
  CellType.prototype.constructor = CellType;
  function CommandExecutor(player, map, command, config) {
    CommandExecutor$Companion_getInstance();
    this.player_0 = player;
    this.map_0 = map;
    this.command_0 = command;
    this.config_0 = config;
    this.worm = this.player_0.currentWorm;
    this.moveValidation_0 = this.command_0.validate_h65yh6$(this.map_0, this.worm);
  }
  function CommandExecutor$execute$lambda(this$CommandExecutor) {
    return function () {
      return 'Executing command ' + this$CommandExecutor.worm + ' Command(' + this$CommandExecutor.command_0 + ') ' + this$CommandExecutor.moveValidation_0 + ' ';
    };
  }
  function CommandExecutor$execute$lambda_0(this$CommandExecutor, closure$commandFeedback) {
    return function () {
      return 'Executed command ' + this$CommandExecutor.worm + ' ' + closure$commandFeedback;
    };
  }
  CommandExecutor.prototype.execute = function () {
    var tmp$, tmp$_0;
    CommandExecutor$Companion_getInstance().logger_0.info_nq59yw$(CommandExecutor$execute$lambda(this));
    if (this.moveValidation_0.isNothing) {
      var tmp$_1;
      tmp$_1 = this.player_0;
      tmp$_1.consecutiveDoNothingsCount = tmp$_1.consecutiveDoNothingsCount + 1 | 0;
    }
     else
      this.player_0.consecutiveDoNothingsCount = 0;
    if (this.moveValidation_0.isValid) {
      var commandFeedback = this.command_0.execute_h65yh6$(this.map_0, this.worm);
      CommandExecutor$Companion_getInstance().logger_0.info_nq59yw$(CommandExecutor$execute$lambda_0(this, commandFeedback));
      tmp$ = this.player_0;
      tmp$.commandScore = tmp$.commandScore + commandFeedback.score | 0;
      this.map_0.addFeedback_xntwic$(commandFeedback);
      if (!commandFeedback.success) {
        this.addErrorToMap_0(commandFeedback.message);
      }
    }
     else {
      this.map_0.addFeedback_xntwic$(new StandardCommandFeedback('invalid', this.config_0.scores.invalidCommand, this.player_0.id, false));
      this.addErrorToMap_0(this.moveValidation_0.reason);
      tmp$_0 = this.player_0;
      tmp$_0.commandScore = tmp$_0.commandScore + this.config_0.scores.invalidCommand | 0;
    }
  };
  CommandExecutor.prototype.addErrorToMap_0 = function (message) {
    this.map_0.addError_witgeo$(new GameError(message, this.player_0, this.worm, this.map_0.currentRound));
  };
  CommandExecutor.prototype.toString = function () {
    return 'CommandExecutor(worm=' + this.worm + ', command=' + '"' + this.command_0 + '"' + ')';
  };
  function CommandExecutor$Companion() {
    CommandExecutor$Companion_instance = this;
    this.logger_0 = mu.KotlinLogging.logger_o14v8n$(CommandExecutor$Companion$logger$lambda);
  }
  function CommandExecutor$Companion$logger$lambda() {
    return Unit;
  }
  CommandExecutor$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CommandExecutor$Companion_instance = null;
  function CommandExecutor$Companion_getInstance() {
    if (CommandExecutor$Companion_instance === null) {
      new CommandExecutor$Companion();
    }
    return CommandExecutor$Companion_instance;
  }
  CommandExecutor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandExecutor',
    interfaces: []
  };
  function CommandStrings(name, ordinal, string) {
    Enum.call(this);
    this.string = string;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CommandStrings_initFields() {
    CommandStrings_initFields = function () {
    };
    CommandStrings$MOVE_instance = new CommandStrings('MOVE', 0, 'move');
    CommandStrings$DIG_instance = new CommandStrings('DIG', 1, 'dig');
    CommandStrings$SHOOT_instance = new CommandStrings('SHOOT', 2, 'shoot');
    CommandStrings$BANANA_instance = new CommandStrings('BANANA', 3, 'banana');
    CommandStrings$SELECT_instance = new CommandStrings('SELECT', 4, 'select');
    CommandStrings$NOTHING_instance = new CommandStrings('NOTHING', 5, 'nothing');
  }
  var CommandStrings$MOVE_instance;
  function CommandStrings$MOVE_getInstance() {
    CommandStrings_initFields();
    return CommandStrings$MOVE_instance;
  }
  var CommandStrings$DIG_instance;
  function CommandStrings$DIG_getInstance() {
    CommandStrings_initFields();
    return CommandStrings$DIG_instance;
  }
  var CommandStrings$SHOOT_instance;
  function CommandStrings$SHOOT_getInstance() {
    CommandStrings_initFields();
    return CommandStrings$SHOOT_instance;
  }
  var CommandStrings$BANANA_instance;
  function CommandStrings$BANANA_getInstance() {
    CommandStrings_initFields();
    return CommandStrings$BANANA_instance;
  }
  var CommandStrings$SELECT_instance;
  function CommandStrings$SELECT_getInstance() {
    CommandStrings_initFields();
    return CommandStrings$SELECT_instance;
  }
  var CommandStrings$NOTHING_instance;
  function CommandStrings$NOTHING_getInstance() {
    CommandStrings_initFields();
    return CommandStrings$NOTHING_instance;
  }
  CommandStrings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandStrings',
    interfaces: [Enum]
  };
  function CommandStrings$values() {
    return [CommandStrings$MOVE_getInstance(), CommandStrings$DIG_getInstance(), CommandStrings$SHOOT_getInstance(), CommandStrings$BANANA_getInstance(), CommandStrings$SELECT_getInstance(), CommandStrings$NOTHING_getInstance()];
  }
  CommandStrings.values = CommandStrings$values;
  function CommandStrings$valueOf(name) {
    switch (name) {
      case 'MOVE':
        return CommandStrings$MOVE_getInstance();
      case 'DIG':
        return CommandStrings$DIG_getInstance();
      case 'SHOOT':
        return CommandStrings$SHOOT_getInstance();
      case 'BANANA':
        return CommandStrings$BANANA_getInstance();
      case 'SELECT':
        return CommandStrings$SELECT_getInstance();
      case 'NOTHING':
        return CommandStrings$NOTHING_getInstance();
      default:throwISE('No enum constant za.co.entelect.challenge.game.engine.command.CommandStrings.' + name);
    }
  }
  CommandStrings.valueOf_61zpoe$ = CommandStrings$valueOf;
  function BananaCommandFeedback(command, worm, score, result, target, affectedCells) {
    CommandFeedback.call(this, command, score, worm.player.id, result !== BananaResult$DEEP_SPACE_getInstance());
    this.result = result;
    this.target = target;
    this.start_0 = worm.position;
    this.message_rrp026$_0 = 'Banana hit ' + this.result + ' at ' + this.target + ' from ' + this.start_0;
    this.visualizerEvent_e3jjct$_0 = new VisualizerEvent(CommandStrings$BANANA_getInstance().string, this.result.name, worm, this.start_0, this.target, affectedCells);
  }
  Object.defineProperty(BananaCommandFeedback.prototype, 'message', {
    get: function () {
      return this.message_rrp026$_0;
    }
  });
  Object.defineProperty(BananaCommandFeedback.prototype, 'visualizerEvent', {
    get: function () {
      return this.visualizerEvent_e3jjct$_0;
    }
  });
  BananaCommandFeedback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BananaCommandFeedback',
    interfaces: [CommandFeedback]
  };
  function BananaResult(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BananaResult_initFields() {
    BananaResult_initFields = function () {
    };
    BananaResult$BULLSEYE_instance = new BananaResult('BULLSEYE', 0);
    BananaResult$TERRAIN_instance = new BananaResult('TERRAIN', 1);
    BananaResult$DEEP_SPACE_instance = new BananaResult('DEEP_SPACE', 2);
  }
  var BananaResult$BULLSEYE_instance;
  function BananaResult$BULLSEYE_getInstance() {
    BananaResult_initFields();
    return BananaResult$BULLSEYE_instance;
  }
  var BananaResult$TERRAIN_instance;
  function BananaResult$TERRAIN_getInstance() {
    BananaResult_initFields();
    return BananaResult$TERRAIN_instance;
  }
  var BananaResult$DEEP_SPACE_instance;
  function BananaResult$DEEP_SPACE_getInstance() {
    BananaResult_initFields();
    return BananaResult$DEEP_SPACE_instance;
  }
  BananaResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BananaResult',
    interfaces: [Enum]
  };
  function BananaResult$values() {
    return [BananaResult$BULLSEYE_getInstance(), BananaResult$TERRAIN_getInstance(), BananaResult$DEEP_SPACE_getInstance()];
  }
  BananaResult.values = BananaResult$values;
  function BananaResult$valueOf(name) {
    switch (name) {
      case 'BULLSEYE':
        return BananaResult$BULLSEYE_getInstance();
      case 'TERRAIN':
        return BananaResult$TERRAIN_getInstance();
      case 'DEEP_SPACE':
        return BananaResult$DEEP_SPACE_getInstance();
      default:throwISE('No enum constant za.co.entelect.challenge.game.engine.command.feedback.BananaResult.' + name);
    }
  }
  BananaResult.valueOf_61zpoe$ = BananaResult$valueOf;
  function CommandFeedback(command, score, playerId, success) {
    if (success === void 0)
      success = true;
    this.command = command;
    this.score = score;
    this.playerId = playerId;
    this.success = success;
  }
  CommandFeedback.prototype.toString = function () {
    return 'CommandFeedback(command=' + this.command + ',success=' + this.success + ',message=' + this.message + ')';
  };
  CommandFeedback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandFeedback',
    interfaces: []
  };
  function StandardCommandFeedback(command, score, playerId, success, message, visualizerEvent) {
    if (success === void 0)
      success = true;
    if (message === void 0)
      message = 'Success';
    if (visualizerEvent === void 0)
      visualizerEvent = null;
    CommandFeedback.call(this, command, score, playerId, success);
    this.message_ejs852$_0 = message;
    this.visualizerEvent_c6om51$_0 = visualizerEvent;
  }
  Object.defineProperty(StandardCommandFeedback.prototype, 'message', {
    get: function () {
      return this.message_ejs852$_0;
    }
  });
  Object.defineProperty(StandardCommandFeedback.prototype, 'visualizerEvent', {
    get: function () {
      return this.visualizerEvent_c6om51$_0;
    }
  });
  StandardCommandFeedback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StandardCommandFeedback',
    interfaces: [CommandFeedback]
  };
  function CommandValidation(isValid, isNothing, reason) {
    CommandValidation$Companion_getInstance();
    this.isValid = isValid;
    this.isNothing = isNothing;
    this.reason = reason;
  }
  function CommandValidation$Companion() {
    CommandValidation$Companion_instance = this;
    this.VALID_MOVE_0 = 'Valid Move';
  }
  CommandValidation$Companion.prototype.invalidMove_61zpoe$ = function (reason) {
    return new CommandValidation(false, true, reason);
  };
  CommandValidation$Companion.prototype.validMove_8kj6y5$ = function (doNothing, reason) {
    if (doNothing === void 0)
      doNothing = false;
    if (reason === void 0)
      reason = this.VALID_MOVE_0;
    return new CommandValidation(true, doNothing, reason);
  };
  CommandValidation$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CommandValidation$Companion_instance = null;
  function CommandValidation$Companion_getInstance() {
    if (CommandValidation$Companion_instance === null) {
      new CommandValidation$Companion();
    }
    return CommandValidation$Companion_instance;
  }
  CommandValidation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandValidation',
    interfaces: []
  };
  CommandValidation.prototype.component1 = function () {
    return this.isValid;
  };
  CommandValidation.prototype.component2 = function () {
    return this.isNothing;
  };
  CommandValidation.prototype.component3 = function () {
    return this.reason;
  };
  CommandValidation.prototype.copy_rat6w2$ = function (isValid, isNothing, reason) {
    return new CommandValidation(isValid === void 0 ? this.isValid : isValid, isNothing === void 0 ? this.isNothing : isNothing, reason === void 0 ? this.reason : reason);
  };
  CommandValidation.prototype.toString = function () {
    return 'CommandValidation(isValid=' + Kotlin.toString(this.isValid) + (', isNothing=' + Kotlin.toString(this.isNothing)) + (', reason=' + Kotlin.toString(this.reason)) + ')';
  };
  CommandValidation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.isValid) | 0;
    result = result * 31 + Kotlin.hashCode(this.isNothing) | 0;
    result = result * 31 + Kotlin.hashCode(this.reason) | 0;
    return result;
  };
  CommandValidation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.isValid, other.isValid) && Kotlin.equals(this.isNothing, other.isNothing) && Kotlin.equals(this.reason, other.reason)))));
  };
  function DigCommandFeedback(command, worm, score, end) {
    CommandFeedback.call(this, command, score, worm.player.id, true);
    this.message_56spnb$_0 = 'Worm dug out ' + end;
    this.visualizerEvent_vagkpq$_0 = new VisualizerEvent(CommandStrings$DIG_getInstance().string, null, worm, null, end, null);
  }
  Object.defineProperty(DigCommandFeedback.prototype, 'message', {
    get: function () {
      return this.message_56spnb$_0;
    }
  });
  Object.defineProperty(DigCommandFeedback.prototype, 'visualizerEvent', {
    get: function () {
      return this.visualizerEvent_vagkpq$_0;
    }
  });
  DigCommandFeedback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DigCommandFeedback',
    interfaces: [CommandFeedback]
  };
  function DoNothingCommandFeedback(command, worm, score) {
    CommandFeedback.call(this, command, score, worm.player.id, true);
    this.message_m454vd$_0 = worm.toString() + ' successfully did nothing';
    this.visualizerEvent_e4wv4u$_0 = new VisualizerEvent(CommandStrings$NOTHING_getInstance().string, null, worm, null, null, null);
  }
  Object.defineProperty(DoNothingCommandFeedback.prototype, 'message', {
    get: function () {
      return this.message_m454vd$_0;
    }
  });
  Object.defineProperty(DoNothingCommandFeedback.prototype, 'visualizerEvent', {
    get: function () {
      return this.visualizerEvent_e4wv4u$_0;
    }
  });
  DoNothingCommandFeedback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoNothingCommandFeedback',
    interfaces: [CommandFeedback]
  };
  function SelectCommandFeedback(command, worm, score) {
    CommandFeedback.call(this, command, score, worm.player.id, true);
    this.message_36zvnt$_0 = 'Selected ' + worm;
    this.visualizerEvent_r1hqhg$_0 = new VisualizerEvent(CommandStrings$SELECT_getInstance().string, null, worm, null, null, null);
  }
  Object.defineProperty(SelectCommandFeedback.prototype, 'message', {
    get: function () {
      return this.message_36zvnt$_0;
    }
  });
  Object.defineProperty(SelectCommandFeedback.prototype, 'visualizerEvent', {
    get: function () {
      return this.visualizerEvent_r1hqhg$_0;
    }
  });
  SelectCommandFeedback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SelectCommandFeedback',
    interfaces: [CommandFeedback]
  };
  function ShootCommandFeedback(command, worm, score, result, target) {
    CommandFeedback.call(this, command, score, worm.player.id, result === ShootResult$HIT_getInstance());
    this.result = result;
    this.target = target;
    this.start_0 = worm.position;
    this.message_378pe4$_0 = worm.toString() + "'s shot " + this.result + ' at ' + this.target + ' from ' + this.start_0;
    this.visualizerEvent_4v6og1$_0 = new VisualizerEvent(CommandStrings$SHOOT_getInstance().string, this.result.name, worm, this.start_0, this.target, null);
  }
  Object.defineProperty(ShootCommandFeedback.prototype, 'message', {
    get: function () {
      return this.message_378pe4$_0;
    }
  });
  Object.defineProperty(ShootCommandFeedback.prototype, 'visualizerEvent', {
    get: function () {
      return this.visualizerEvent_4v6og1$_0;
    }
  });
  ShootCommandFeedback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShootCommandFeedback',
    interfaces: [CommandFeedback]
  };
  function ShootResult(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ShootResult_initFields() {
    ShootResult_initFields = function () {
    };
    ShootResult$HIT_instance = new ShootResult('HIT', 0);
    ShootResult$BLOCKED_instance = new ShootResult('BLOCKED', 1);
    ShootResult$OUT_OF_RANGE_instance = new ShootResult('OUT_OF_RANGE', 2);
  }
  var ShootResult$HIT_instance;
  function ShootResult$HIT_getInstance() {
    ShootResult_initFields();
    return ShootResult$HIT_instance;
  }
  var ShootResult$BLOCKED_instance;
  function ShootResult$BLOCKED_getInstance() {
    ShootResult_initFields();
    return ShootResult$BLOCKED_instance;
  }
  var ShootResult$OUT_OF_RANGE_instance;
  function ShootResult$OUT_OF_RANGE_getInstance() {
    ShootResult_initFields();
    return ShootResult$OUT_OF_RANGE_instance;
  }
  ShootResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShootResult',
    interfaces: [Enum]
  };
  function ShootResult$values() {
    return [ShootResult$HIT_getInstance(), ShootResult$BLOCKED_getInstance(), ShootResult$OUT_OF_RANGE_getInstance()];
  }
  ShootResult.values = ShootResult$values;
  function ShootResult$valueOf(name) {
    switch (name) {
      case 'HIT':
        return ShootResult$HIT_getInstance();
      case 'BLOCKED':
        return ShootResult$BLOCKED_getInstance();
      case 'OUT_OF_RANGE':
        return ShootResult$OUT_OF_RANGE_getInstance();
      default:throwISE('No enum constant za.co.entelect.challenge.game.engine.command.feedback.ShootResult.' + name);
    }
  }
  ShootResult.valueOf_61zpoe$ = ShootResult$valueOf;
  function TeleportCommandFeedback(command, worm, score, result, start, end) {
    CommandFeedback.call(this, command, score, worm.player.id, result === TeleportResult$MOVED_getInstance());
    this.message_psoaig$_0 = 'Worm ' + result + ' from ' + start + ' to ' + end;
    this.visualizerEvent_bmt477$_0 = new VisualizerEvent(CommandStrings$MOVE_getInstance().string, result.name, worm, start, end, null);
  }
  Object.defineProperty(TeleportCommandFeedback.prototype, 'message', {
    get: function () {
      return this.message_psoaig$_0;
    }
  });
  Object.defineProperty(TeleportCommandFeedback.prototype, 'visualizerEvent', {
    get: function () {
      return this.visualizerEvent_bmt477$_0;
    }
  });
  TeleportCommandFeedback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TeleportCommandFeedback',
    interfaces: [CommandFeedback]
  };
  function TeleportResult(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TeleportResult_initFields() {
    TeleportResult_initFields = function () {
    };
    TeleportResult$MOVED_instance = new TeleportResult('MOVED', 0);
    TeleportResult$SWAPPED_instance = new TeleportResult('SWAPPED', 1);
    TeleportResult$PUSHEDBACK_instance = new TeleportResult('PUSHEDBACK', 2);
  }
  var TeleportResult$MOVED_instance;
  function TeleportResult$MOVED_getInstance() {
    TeleportResult_initFields();
    return TeleportResult$MOVED_instance;
  }
  var TeleportResult$SWAPPED_instance;
  function TeleportResult$SWAPPED_getInstance() {
    TeleportResult_initFields();
    return TeleportResult$SWAPPED_instance;
  }
  var TeleportResult$PUSHEDBACK_instance;
  function TeleportResult$PUSHEDBACK_getInstance() {
    TeleportResult_initFields();
    return TeleportResult$PUSHEDBACK_instance;
  }
  TeleportResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TeleportResult',
    interfaces: [Enum]
  };
  function TeleportResult$values() {
    return [TeleportResult$MOVED_getInstance(), TeleportResult$SWAPPED_getInstance(), TeleportResult$PUSHEDBACK_getInstance()];
  }
  TeleportResult.values = TeleportResult$values;
  function TeleportResult$valueOf(name) {
    switch (name) {
      case 'MOVED':
        return TeleportResult$MOVED_getInstance();
      case 'SWAPPED':
        return TeleportResult$SWAPPED_getInstance();
      case 'PUSHEDBACK':
        return TeleportResult$PUSHEDBACK_getInstance();
      default:throwISE('No enum constant za.co.entelect.challenge.game.engine.command.feedback.TeleportResult.' + name);
    }
  }
  TeleportResult.valueOf_61zpoe$ = TeleportResult$valueOf;
  function BananaCommand(target, config) {
    this.target = target;
    this.config = config;
    this.order_9ijg77$_0 = 3;
  }
  Object.defineProperty(BananaCommand.prototype, 'order', {
    get: function () {
      return this.order_9ijg77$_0;
    }
  });
  BananaCommand.prototype.validate_h65yh6$ = function (gameMap, worm) {
    var tmp$;
    if (worm.bananas == null)
      tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$('This worm is not trained to use Banana bombs');
    else {
      var tmp$_0;
      if (((tmp$_0 = worm.bananas) != null ? tmp$_0.count : null) === 0)
        tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$('No bananas bombs in inventory');
      else if (!gameMap.contains_kszl2s$(this.target))
        tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$(this.target.toString() + ' out of map bounds');
      else {
        var tmp$_1;
        if (this.target.shootingDistance_kszl2s$(worm.position) > ensureNotNull((tmp$_1 = worm.bananas) != null ? tmp$_1.range : null))
          tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$('Cell ' + this.target + ' is too far away');
        else
          tmp$ = CommandValidation$Companion_getInstance().validMove_8kj6y5$();
      }
    }
    return tmp$;
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  BananaCommand.prototype.getAllPointsOfSquare_0 = function (start, end) {
    var $receiver = new IntRange(start, end);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = new IntRange(start, end);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(new Point(element, item));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return destination;
  };
  BananaCommand.prototype.execute_h65yh6$ = function (gameMap, worm) {
    var wormBananas = ensureNotNull(worm.bananas);
    wormBananas.count = wormBananas.count - 1 | 0;
    if (gameMap.get_kszl2s$(this.target).type === CellType$DEEP_SPACE_getInstance()) {
      return new BananaCommandFeedback(this.toString(), worm, this.config.scores.missedAttack, BananaResult$DEEP_SPACE_getInstance(), this.target, emptyList());
    }
    var damageRadius = wormBananas.damageRadius;
    var damage = wormBananas.damage;
    var totalDamageDone = {v: 0};
    var totalDirtDestroyed = {v: 0};
    var enemyWormHit = gameMap.get_kszl2s$(this.target).isOccupied() ? BananaResult$BULLSEYE_getInstance() : BananaResult$TERRAIN_getInstance();
    var iOffset = this.target.x - damageRadius | 0;
    var jOffset = this.target.y - damageRadius | 0;
    var affectedCells = ArrayList_init_0();
    var $receiver = this.getAllPointsOfSquare_0(0, damageRadius * 2 | 0);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.plus_kszl2s$(new Point(iOffset, jOffset)));
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    loop_label: while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      action$break: do {
        var tmp$_1;
        if (!gameMap.contains_kszl2s$(element)) {
          break action$break;
        }
        var cell = gameMap.get_kszl2s$(element);
        var distance = cell.position.euclideanDistance_kszl2s$(this.target);
        if (distance > damageRadius) {
          break action$break;
        }
        if (cell.type === CellType$DIRT_getInstance() || cell.destroyedInRound === gameMap.currentRound) {
          cell.type = CellType$AIR_getInstance();
          cell.destroyedInRound = gameMap.currentRound;
          totalDirtDestroyed.v = totalDirtDestroyed.v + 1 | 0;
          affectedCells.add_11rb$(cell);
        }
        cell.powerup = null;
        if (cell.isOccupied()) {
          var occupier = ensureNotNull(cell.occupier);
          var isAlly = (tmp$_1 = occupier.player) != null ? tmp$_1.equals(worm.player) : null;
          var specialDamageRadius = damageRadius + 1 | 0;
          var damageTier = damage * ((specialDamageRadius - distance) / specialDamageRadius);
          var damageToTarget = occupier.takeDamage_s4o3j$(roundToInt(damageTier), gameMap.currentRound, worm.player);
          if (isAlly)
            totalDamageDone.v = totalDamageDone.v - damageToTarget | 0;
          else
            totalDamageDone.v = totalDamageDone.v + damageToTarget | 0;
        }
      }
       while (false);
    }
    var totalScore = Kotlin.imul(totalDirtDestroyed.v, this.config.scores.dig) + Kotlin.imul(totalDamageDone.v, this.config.scores.attack) | 0;
    return new BananaCommandFeedback(this.toString(), worm, totalScore, enemyWormHit, this.target, affectedCells);
  };
  BananaCommand.prototype.toString = function () {
    return CommandStrings$BANANA_getInstance().string + ' ' + this.target;
  };
  BananaCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BananaCommand',
    interfaces: [WormsCommand]
  };
  function DigCommand(target, config) {
    this.target = target;
    this.config = config;
    this.order_dhdwke$_0 = 2;
  }
  Object.defineProperty(DigCommand.prototype, 'order', {
    get: function () {
      return this.order_dhdwke$_0;
    }
  });
  DigCommand.prototype.validate_h65yh6$ = function (gameMap, worm) {
    var tmp$;
    if (!gameMap.contains_kszl2s$(this.target))
      return CommandValidation$Companion_getInstance().invalidMove_61zpoe$(this.target.toString() + ' out of map bounds');
    var targetCell = gameMap.get_kszl2s$(this.target);
    if (!targetCell.type.diggable)
      tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$('Cell type ' + targetCell.type + ' not diggable');
    else if (this.target.movementDistance_kszl2s$(worm.position) > worm.diggingRange)
      tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$('Cell ' + this.target + ' too far away');
    else
      tmp$ = CommandValidation$Companion_getInstance().validMove_8kj6y5$();
    return tmp$;
  };
  DigCommand.prototype.execute_h65yh6$ = function (gameMap, worm) {
    var targetCell = gameMap.get_kszl2s$(this.target);
    targetCell.type = CellType$AIR_getInstance();
    return new DigCommandFeedback(this.toString(), worm, this.config.scores.dig, this.target);
  };
  DigCommand.prototype.toString = function () {
    return CommandStrings$DIG_getInstance().string + ' ' + this.target;
  };
  DigCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DigCommand',
    interfaces: [WormsCommand]
  };
  function DigCommand_init(x, y, config, $this) {
    $this = $this || Object.create(DigCommand.prototype);
    DigCommand.call($this, new Point(x, y), config);
    return $this;
  }
  function Direction(name, ordinal, shortCardinal, x, y) {
    Enum.call(this);
    this.shortCardinal = shortCardinal;
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.vector = new Point(x, y);
  }
  function Direction_initFields() {
    Direction_initFields = function () {
    };
    Direction$UP_instance = new Direction('UP', 0, 'N', 0, -1);
    Direction$UP_RIGHT_instance = new Direction('UP_RIGHT', 1, 'NE', 1, -1);
    Direction$RIGHT_instance = new Direction('RIGHT', 2, 'E', 1, 0);
    Direction$DOWN_RIGHT_instance = new Direction('DOWN_RIGHT', 3, 'SE', 1, 1);
    Direction$DOWN_instance = new Direction('DOWN', 4, 'S', 0, 1);
    Direction$DOWN_LEFT_instance = new Direction('DOWN_LEFT', 5, 'SW', -1, 1);
    Direction$LEFT_instance = new Direction('LEFT', 6, 'W', -1, 0);
    Direction$UP_LEFT_instance = new Direction('UP_LEFT', 7, 'NW', -1, -1);
    Direction$Companion_getInstance();
  }
  var Direction$UP_instance;
  function Direction$UP_getInstance() {
    Direction_initFields();
    return Direction$UP_instance;
  }
  var Direction$UP_RIGHT_instance;
  function Direction$UP_RIGHT_getInstance() {
    Direction_initFields();
    return Direction$UP_RIGHT_instance;
  }
  var Direction$RIGHT_instance;
  function Direction$RIGHT_getInstance() {
    Direction_initFields();
    return Direction$RIGHT_instance;
  }
  var Direction$DOWN_RIGHT_instance;
  function Direction$DOWN_RIGHT_getInstance() {
    Direction_initFields();
    return Direction$DOWN_RIGHT_instance;
  }
  var Direction$DOWN_instance;
  function Direction$DOWN_getInstance() {
    Direction_initFields();
    return Direction$DOWN_instance;
  }
  var Direction$DOWN_LEFT_instance;
  function Direction$DOWN_LEFT_getInstance() {
    Direction_initFields();
    return Direction$DOWN_LEFT_instance;
  }
  var Direction$LEFT_instance;
  function Direction$LEFT_getInstance() {
    Direction_initFields();
    return Direction$LEFT_instance;
  }
  var Direction$UP_LEFT_instance;
  function Direction$UP_LEFT_getInstance() {
    Direction_initFields();
    return Direction$UP_LEFT_instance;
  }
  function Direction$Companion() {
    Direction$Companion_instance = this;
  }
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  Direction$Companion.prototype.fromShortened_61zpoe$ = function (shortened) {
    var $receiver = Direction$values();
    var first$result;
    first$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var upperCase = shortened.toUpperCase();
        if (equals(element.shortCardinal, upperCase)) {
          first$result = element;
          break first$break;
        }
      }
      throw new NoSuchElementException_init('Array contains no element matching the predicate.');
    }
     while (false);
    return first$result;
  };
  Direction$Companion.prototype.containsShortened_61zpoe$ = function (shortened) {
    var $receiver = Direction$values();
    var any$result;
    any$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var upperCase = shortened.toUpperCase();
        if (equals(element.shortCardinal, upperCase)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  Direction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Direction$Companion_instance = null;
  function Direction$Companion_getInstance() {
    Direction_initFields();
    if (Direction$Companion_instance === null) {
      new Direction$Companion();
    }
    return Direction$Companion_instance;
  }
  Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: [Enum]
  };
  function Direction$values() {
    return [Direction$UP_getInstance(), Direction$UP_RIGHT_getInstance(), Direction$RIGHT_getInstance(), Direction$DOWN_RIGHT_getInstance(), Direction$DOWN_getInstance(), Direction$DOWN_LEFT_getInstance(), Direction$LEFT_getInstance(), Direction$UP_LEFT_getInstance()];
  }
  Direction.values = Direction$values;
  function Direction$valueOf(name) {
    switch (name) {
      case 'UP':
        return Direction$UP_getInstance();
      case 'UP_RIGHT':
        return Direction$UP_RIGHT_getInstance();
      case 'RIGHT':
        return Direction$RIGHT_getInstance();
      case 'DOWN_RIGHT':
        return Direction$DOWN_RIGHT_getInstance();
      case 'DOWN':
        return Direction$DOWN_getInstance();
      case 'DOWN_LEFT':
        return Direction$DOWN_LEFT_getInstance();
      case 'LEFT':
        return Direction$LEFT_getInstance();
      case 'UP_LEFT':
        return Direction$UP_LEFT_getInstance();
      default:throwISE('No enum constant za.co.entelect.challenge.game.engine.command.implementation.Direction.' + name);
    }
  }
  Direction.valueOf_61zpoe$ = Direction$valueOf;
  function DoNothingCommand(config, reason) {
    if (reason === void 0)
      reason = 'Player chose to do nothing';
    this.config = config;
    this.reason_0 = reason;
    this.order_s7invm$_0 = 0;
  }
  Object.defineProperty(DoNothingCommand.prototype, 'order', {
    get: function () {
      return this.order_s7invm$_0;
    }
  });
  DoNothingCommand.prototype.validate_h65yh6$ = function (gameMap, worm) {
    return CommandValidation$Companion_getInstance().validMove_8kj6y5$(true, this.reason_0);
  };
  DoNothingCommand.prototype.execute_h65yh6$ = function (gameMap, worm) {
    return new DoNothingCommandFeedback(this.toString(), worm, this.config.scores.doNothing);
  };
  DoNothingCommand.prototype.toString = function () {
    return CommandStrings$NOTHING_getInstance().string + ' ' + '"' + this.reason_0 + '"';
  };
  DoNothingCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoNothingCommand',
    interfaces: [WormsCommand]
  };
  function InvalidCommand(reason) {
    this.reason = reason;
    this.order_v70i5l$_0 = 0;
  }
  Object.defineProperty(InvalidCommand.prototype, 'order', {
    get: function () {
      return this.order_v70i5l$_0;
    }
  });
  InvalidCommand.prototype.validate_h65yh6$ = function (gameMap, worm) {
    return CommandValidation$Companion_getInstance().invalidMove_61zpoe$(this.reason);
  };
  InvalidCommand.prototype.execute_h65yh6$ = function (gameMap, worm) {
    throw new NotImplementedError('Cannot execute invalid command');
  };
  InvalidCommand.prototype.toString = function () {
    return 'invalid command ' + this.reason;
  };
  InvalidCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidCommand',
    interfaces: [WormsCommand]
  };
  function SelectCommand(wormId) {
    this.wormId = wormId;
    this.order_ul39ju$_0 = -1;
  }
  Object.defineProperty(SelectCommand.prototype, 'order', {
    get: function () {
      return this.order_ul39ju$_0;
    }
  });
  SelectCommand.prototype.validate_h65yh6$ = function (gameMap, worm) {
    var tmp$;
    var player = worm.player;
    var $receiver = player.worms;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.id === this.wormId) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var newWorm = firstOrNull$result;
    if (player.wormSelectionTokens === 0)
      tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$('Player has no selection tokens');
    else if (newWorm == null)
      tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$('Worm with id ' + this.wormId + ' not found');
    else if (newWorm.dead)
      tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$('Worm with id ' + this.wormId + ' not alive');
    else
      tmp$ = CommandValidation$Companion_getInstance().validMove_8kj6y5$();
    return tmp$;
  };
  SelectCommand.prototype.execute_h65yh6$ = function (gameMap, worm) {
    var tmp$;
    var player = worm.player;
    var $receiver = player.worms;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.id === this.wormId) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var newWorm = firstOrNull$result;
    if (newWorm != null && !newWorm.dead) {
      player.updateCurrentWorm_d5o6kq$(newWorm);
      player.wormSelectionTokens = player.wormSelectionTokens - 1 | 0;
      tmp$ = new SelectCommandFeedback(this.toString(), newWorm, 0);
    }
     else {
      tmp$ = new StandardCommandFeedback(this.toString(), 0, player.id, false, 'Invalid worm selection');
    }
    return tmp$;
  };
  SelectCommand.prototype.toString = function () {
    return CommandStrings$SELECT_getInstance().string + ' ' + this.wormId;
  };
  SelectCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SelectCommand',
    interfaces: [WormsCommand]
  };
  function ShootCommand(direction, config) {
    ShootCommand$Companion_getInstance();
    this.direction = direction;
    this.config = config;
    this.order_isno1r$_0 = 4;
  }
  Object.defineProperty(ShootCommand.prototype, 'order', {
    get: function () {
      return this.order_isno1r$_0;
    }
  });
  ShootCommand.prototype.validate_h65yh6$ = function (gameMap, worm) {
    return CommandValidation$Companion_getInstance().validMove_8kj6y5$();
  };
  function ShootCommand$execute$lambda(closure$worm, this$ShootCommand) {
    return function () {
      return 'Starting shoot command: ' + closure$worm + ' at ' + closure$worm.position + ' shooting ' + this$ShootCommand.direction.shortCardinal;
    };
  }
  function ShootCommand$execute$lambda_0(closure$worm, closure$cell) {
    return function () {
      return 'Executing shoot command: ' + closure$worm + ' at ' + closure$cell;
    };
  }
  function ShootCommand$execute$lambda_1(closure$worm, closure$position) {
    return function () {
      return 'Shot out of range: ' + closure$worm + ' at ' + closure$position.v;
    };
  }
  ShootCommand.prototype.execute_h65yh6$ = function (gameMap, worm) {
    var position = {v: worm.position.plus_kszl2s$(this.direction.vector)};
    ShootCommand$Companion_getInstance().logger_0.info_nq59yw$(ShootCommand$execute$lambda(worm, this));
    while (gameMap.contains_kszl2s$(position.v) && position.v.shootingDistance_kszl2s$(worm.position) <= worm.weapon.range) {
      var cell = gameMap.get_kszl2s$(position.v);
      ShootCommand$Companion_getInstance().logger_0.debug_nq59yw$(ShootCommand$execute$lambda_0(worm, cell));
      if (!cell.type.open)
        return this.shotBlocked_0(worm, cell, position.v);
      else if (cell.isOccupied())
        return this.shotHitWorm_0(worm, cell, gameMap, position.v);
      else
        position.v = position.v.plus_kszl2s$(this.direction.vector);
    }
    ShootCommand$Companion_getInstance().logger_0.debug_nq59yw$(ShootCommand$execute$lambda_1(worm, position));
    return this.buildBasicShootCommandFeedback_0(worm, this.config.scores.missedAttack, ShootResult$OUT_OF_RANGE_getInstance(), position.v);
  };
  ShootCommand.prototype.buildBasicShootCommandFeedback_0 = function (worm, score, result, target) {
    return new ShootCommandFeedback(this.toString(), worm, score, result, target);
  };
  function ShootCommand$shotHitWorm$lambda(closure$worm, closure$cell) {
    return function () {
      return 'Shot hit: ' + closure$worm + ' shooting ' + closure$cell + ' ' + toString(closure$cell.occupier);
    };
  }
  ShootCommand.prototype.shotHitWorm_0 = function (worm, cell, gameMap, position) {
    var tmp$, tmp$_0;
    ShootCommand$Companion_getInstance().logger_0.debug_nq59yw$(ShootCommand$shotHitWorm$lambda(worm, cell));
    var occupier = ensureNotNull(cell.occupier);
    var damageScore = Kotlin.imul(this.config.scores.attack, occupier.takeDamage_s4o3j$(worm.weapon.damage, gameMap.currentRound, worm.player));
    var isAllyWorm = (tmp$ = occupier.player) != null ? tmp$.equals(worm.player) : null;
    if (isAllyWorm)
      tmp$_0 = this.buildBasicShootCommandFeedback_0(worm, -damageScore | 0, ShootResult$HIT_getInstance(), position);
    else
      tmp$_0 = this.buildBasicShootCommandFeedback_0(worm, damageScore, ShootResult$HIT_getInstance(), position);
    return tmp$_0;
  };
  function ShootCommand$shotBlocked$lambda(closure$worm, closure$cell) {
    return function () {
      return 'Shot blocked: ' + closure$worm + ' ' + closure$cell;
    };
  }
  ShootCommand.prototype.shotBlocked_0 = function (worm, cell, position) {
    ShootCommand$Companion_getInstance().logger_0.debug_nq59yw$(ShootCommand$shotBlocked$lambda(worm, cell));
    return this.buildBasicShootCommandFeedback_0(worm, this.config.scores.missedAttack, ShootResult$BLOCKED_getInstance(), position);
  };
  ShootCommand.prototype.toString = function () {
    return CommandStrings$SHOOT_getInstance().string + ' ' + this.direction.shortCardinal;
  };
  function ShootCommand$Companion() {
    ShootCommand$Companion_instance = this;
    this.logger_0 = mu.KotlinLogging.logger_o14v8n$(ShootCommand$Companion$logger$lambda);
  }
  function ShootCommand$Companion$logger$lambda() {
    return Unit;
  }
  ShootCommand$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ShootCommand$Companion_instance = null;
  function ShootCommand$Companion_getInstance() {
    if (ShootCommand$Companion_instance === null) {
      new ShootCommand$Companion();
    }
    return ShootCommand$Companion_instance;
  }
  ShootCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShootCommand',
    interfaces: [WormsCommand]
  };
  function TeleportCommand(target, random, config) {
    this.target = target;
    this.random_0 = random;
    this.config = config;
    this.order_iaj3ux$_0 = 1;
  }
  Object.defineProperty(TeleportCommand.prototype, 'order', {
    get: function () {
      return this.order_iaj3ux$_0;
    }
  });
  TeleportCommand.prototype.validate_h65yh6$ = function (gameMap, worm) {
    var tmp$;
    if (!gameMap.contains_kszl2s$(this.target))
      return CommandValidation$Companion_getInstance().invalidMove_61zpoe$(this.target.toString() + ' out of map bounds');
    var targetCell = gameMap.get_kszl2s$(this.target);
    var occupier = targetCell.occupier;
    if (this.target.movementDistance_kszl2s$(worm.position) > worm.movementRange)
      tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$('Target too far away');
    else if (!targetCell.type.open)
      tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$('Cannot move to ' + targetCell.type);
    else if (occupier != null && !this.wormsCollide_0(gameMap, worm, occupier))
      tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$('Target occupied');
    else
      tmp$ = CommandValidation$Companion_getInstance().validMove_8kj6y5$();
    return tmp$;
  };
  TeleportCommand.prototype.wormsCollide_0 = function (gameMap, movingWorm, occupier) {
    return !equals(occupier, movingWorm) && occupier.roundMoved === gameMap.currentRound;
  };
  TeleportCommand.prototype.execute_h65yh6$ = function (gameMap, worm) {
    var tmp$;
    var targetCell = gameMap.get_kszl2s$(this.target);
    var occupier = targetCell.occupier;
    if (occupier != null && this.wormsCollide_0(gameMap, worm, occupier)) {
      worm.takeDamage_s4o3j$(this.config.pushbackDamage, gameMap.currentRound);
      occupier.takeDamage_s4o3j$(this.config.pushbackDamage, gameMap.currentRound);
      if (this.random_0.nextBoolean())
        tmp$ = this.pushbackWorms_0(worm, occupier, gameMap);
      else
        tmp$ = this.swapWorms_0(worm, occupier, gameMap);
      return tmp$;
    }
     else {
      worm.moveTo_r1n0co$(gameMap, this.target);
      return new TeleportCommandFeedback(this.toString(), worm, this.config.scores.move, TeleportResult$MOVED_getInstance(), worm.previousPosition, this.target);
    }
  };
  TeleportCommand.prototype.pushbackWorms_0 = function (worm, occupier, gameMap) {
    var wormPosition = worm.position;
    var occupierPosition = occupier.previousPosition;
    worm.moveTo_r1n0co$(gameMap, wormPosition);
    occupier.moveTo_r1n0co$(gameMap, occupierPosition);
    return new TeleportCommandFeedback(this.toString(), worm, this.config.scores.move, TeleportResult$PUSHEDBACK_getInstance(), worm.previousPosition, wormPosition);
  };
  TeleportCommand.prototype.swapWorms_0 = function (worm, occupier, gameMap) {
    var wormPosition = worm.position;
    var occupierPosition = occupier.previousPosition;
    worm.moveTo_r1n0co$(gameMap, occupierPosition);
    occupier.moveTo_r1n0co$(gameMap, wormPosition);
    return new TeleportCommandFeedback(this.toString(), worm, this.config.scores.move, TeleportResult$SWAPPED_getInstance(), worm.previousPosition, wormPosition);
  };
  TeleportCommand.prototype.toString = function () {
    return CommandStrings$MOVE_getInstance().string + ' ' + this.target;
  };
  TeleportCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TeleportCommand',
    interfaces: [WormsCommand]
  };
  function TeleportCommand_init(x, y, random, config, $this) {
    $this = $this || Object.create(TeleportCommand.prototype);
    TeleportCommand.call($this, new Point(x, y), random, config);
    return $this;
  }
  function WormsCommand() {
  }
  WormsCommand.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WormsCommand',
    interfaces: []
  };
  function GameConfig(maxRounds, maxDoNothings, pushbackDamage, commandoWorms, agentWorms, mapSize, healthPackHp, totalHealthPacks, scores, csvSeparator, wormSelectTokens) {
    this.maxRounds = maxRounds;
    this.maxDoNothings = maxDoNothings;
    this.pushbackDamage = pushbackDamage;
    this.commandoWorms = commandoWorms;
    this.agentWorms = agentWorms;
    this.mapSize = mapSize;
    this.healthPackHp = healthPackHp;
    this.totalHealthPacks = totalHealthPacks;
    this.scores = scores;
    this.csvSeparator = csvSeparator;
    this.wormSelectTokens = wormSelectTokens;
  }
  GameConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameConfig',
    interfaces: []
  };
  function PlayerWormDefinition(count, initialHp, movementRage, diggingRange, weapon, bananas, professionName) {
    this.count = count;
    this.initialHp = initialHp;
    this.movementRage = movementRage;
    this.diggingRange = diggingRange;
    this.weapon = weapon;
    this.bananas = bananas;
    this.professionName = professionName;
  }
  PlayerWormDefinition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerWormDefinition',
    interfaces: []
  };
  function Scores(attack, killShot, missedAttack, powerup, dig, move, invalidCommand, doNothing) {
    this.attack = attack;
    this.killShot = killShot;
    this.missedAttack = missedAttack;
    this.powerup = powerup;
    this.dig = dig;
    this.move = move;
    this.invalidCommand = invalidCommand;
    this.doNothing = doNothing;
  }
  Scores.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Scores',
    interfaces: []
  };
  function SelectTokenConfig(count) {
    this.count = count;
  }
  SelectTokenConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SelectTokenConfig',
    interfaces: []
  };
  function CommandParser(commandRandom, config) {
    CommandParser$Companion_getInstance();
    this.commandRandom_0 = commandRandom;
    this.config_0 = config;
  }
  function CommandParser$parseCommand$lambda(closure$rawCommand) {
    return function () {
      return 'Parsing command ' + '"' + closure$rawCommand + '"';
    };
  }
  CommandParser.prototype.parseCommand_61zpoe$ = function (rawCommand) {
    var tmp$, tmp$_0;
    CommandParser$Companion_getInstance().logger_0.info_nq59yw$(CommandParser$parseCommand$lambda(rawCommand));
    var splitCommand = split(rawCommand, [' '], void 0, 4);
    tmp$ = splitCommand.get_za3lpa$(0).toLowerCase();
    if (equals(tmp$, CommandStrings$MOVE_getInstance().string))
      tmp$_0 = this.teleportCommand_0(splitCommand);
    else if (equals(tmp$, CommandStrings$DIG_getInstance().string))
      tmp$_0 = this.digCommand_0(splitCommand);
    else if (equals(tmp$, CommandStrings$SHOOT_getInstance().string))
      tmp$_0 = this.shootCommand_0(splitCommand);
    else if (equals(tmp$, CommandStrings$BANANA_getInstance().string))
      tmp$_0 = this.bananaCommand_0(splitCommand);
    else if (equals(tmp$, CommandStrings$SELECT_getInstance().string))
      tmp$_0 = this.selectCommand_0(splitCommand);
    else if (equals(tmp$, CommandStrings$NOTHING_getInstance().string))
      tmp$_0 = new DoNothingCommand(this.config_0);
    else
      tmp$_0 = new InvalidCommand('Unknown command: ' + rawCommand);
    return tmp$_0;
  };
  CommandParser.prototype.bananaCommand_0 = function (splitCommand) {
    var tmp$;
    if (splitCommand.size !== 3) {
      return new InvalidCommand('Cannot parse banana command: Invalid length ' + splitCommand.size + ', expected 3');
    }
    var x = toIntOrNull(splitCommand.get_za3lpa$(1));
    var y = toIntOrNull(splitCommand.get_za3lpa$(2));
    if (x == null || y == null)
      tmp$ = new InvalidCommand('Cannot parse coordinates: Invalid coordinate x:' + toString(x) + ' y:' + toString(y));
    else
      tmp$ = new BananaCommand(new Point(x, y), this.config_0);
    return tmp$;
  };
  CommandParser.prototype.selectCommand_0 = function (splitCommand) {
    var tmp$;
    if (splitCommand.size !== 2) {
      return new InvalidCommand('Cannot parse select command: Invalid length ' + splitCommand.size + ', expected 2');
    }
    var wormId = toIntOrNull(splitCommand.get_za3lpa$(1));
    if (wormId == null) {
      tmp$ = new InvalidCommand('Cannot parse worm Id as a number: ' + splitCommand.get_za3lpa$(1));
    }
     else {
      tmp$ = new SelectCommand(wormId);
    }
    return tmp$;
  };
  CommandParser.prototype.shootCommand_0 = function (splitCommand) {
    var tmp$;
    if (splitCommand.size !== 2) {
      return new InvalidCommand('Cannot parse move command: Invalid length ' + splitCommand.size + ', expected 2');
    }
    var direction = splitCommand.get_za3lpa$(1);
    if (!Direction$Companion_getInstance().containsShortened_61zpoe$(direction)) {
      tmp$ = new InvalidCommand('Cannot parse direction command: Invalid direction ' + direction);
    }
     else {
      tmp$ = new ShootCommand(Direction$Companion_getInstance().fromShortened_61zpoe$(direction), this.config_0);
    }
    return tmp$;
  };
  CommandParser.prototype.digCommand_0 = function (splitCommand) {
    if (splitCommand.size !== 3) {
      return new InvalidCommand('Cannot parse dig command: Invalid length ' + splitCommand.size + ', expected 3');
    }
    var x = toIntOrNull(splitCommand.get_za3lpa$(1));
    var y = toIntOrNull(splitCommand.get_za3lpa$(2));
    if (x == null || y == null) {
      return new InvalidCommand('Cannot parse dig coordinates as numbers: ' + splitCommand.subList_vux9f0$(1, 2));
    }
    return DigCommand_init(x, y, this.config_0);
  };
  CommandParser.prototype.teleportCommand_0 = function (splitCommand) {
    if (splitCommand.size !== 3) {
      return new InvalidCommand('Cannot parse move command: Invalid length ' + splitCommand.size + ', expected 3');
    }
    var x = toIntOrNull(splitCommand.get_za3lpa$(1));
    var y = toIntOrNull(splitCommand.get_za3lpa$(2));
    if (x == null || y == null) {
      return new InvalidCommand('Cannot parse move coordinates as numbers: ' + splitCommand.subList_vux9f0$(1, 2));
    }
    return TeleportCommand_init(x, y, this.commandRandom_0, this.config_0);
  };
  function CommandParser$Companion() {
    CommandParser$Companion_instance = this;
    this.logger_0 = mu.KotlinLogging.logger_o14v8n$(CommandParser$Companion$logger$lambda);
  }
  function CommandParser$Companion$logger$lambda() {
    return Unit;
  }
  CommandParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CommandParser$Companion_instance = null;
  function CommandParser$Companion_getInstance() {
    if (CommandParser$Companion_instance === null) {
      new CommandParser$Companion();
    }
    return CommandParser$Companion_instance;
  }
  CommandParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandParser',
    interfaces: []
  };
  function Printable() {
  }
  Printable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Printable',
    interfaces: []
  };
  function CellType(name, ordinal, diggable, open, printable) {
    Enum.call(this);
    this.diggable = diggable;
    this.open = open;
    this.printable_9zdouv$_0 = printable;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CellType_initFields() {
    CellType_initFields = function () {
    };
    CellType$AIR_instance = new CellType('AIR', 0, false, true, '\u2591\u2591');
    CellType$DIRT_instance = new CellType('DIRT', 1, true, false, '\u2593\u2593');
    CellType$DEEP_SPACE_instance = new CellType('DEEP_SPACE', 2, false, false, '\u2588\u2588');
  }
  Object.defineProperty(CellType.prototype, 'printable', {
    get: function () {
      return this.printable_9zdouv$_0;
    }
  });
  var CellType$AIR_instance;
  function CellType$AIR_getInstance() {
    CellType_initFields();
    return CellType$AIR_instance;
  }
  var CellType$DIRT_instance;
  function CellType$DIRT_getInstance() {
    CellType_initFields();
    return CellType$DIRT_instance;
  }
  var CellType$DEEP_SPACE_instance;
  function CellType$DEEP_SPACE_getInstance() {
    CellType_initFields();
    return CellType$DEEP_SPACE_instance;
  }
  CellType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CellType',
    interfaces: [Printable, Enum]
  };
  function CellType$values() {
    return [CellType$AIR_getInstance(), CellType$DIRT_getInstance(), CellType$DEEP_SPACE_getInstance()];
  }
  CellType.values = CellType$values;
  function CellType$valueOf(name) {
    switch (name) {
      case 'AIR':
        return CellType$AIR_getInstance();
      case 'DIRT':
        return CellType$DIRT_getInstance();
      case 'DEEP_SPACE':
        return CellType$DEEP_SPACE_getInstance();
      default:throwISE('No enum constant za.co.entelect.challenge.game.engine.map.CellType.' + name);
    }
  }
  CellType.valueOf_61zpoe$ = CellType$valueOf;
  function ImageProcessingInfo() {
    this.srcValue = null;
    this.cookedValue = null;
    this.flag = null;
  }
  ImageProcessingInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageProcessingInfo',
    interfaces: []
  };
  function MapCell(x, y, type) {
    MapCell$Companion_getInstance();
    if (x === void 0)
      x = -1;
    if (y === void 0)
      y = -1;
    if (type === void 0)
      type = CellType$AIR_getInstance();
    this.x = x;
    this.y = y;
    this.type = type;
    this.destroyedInRound = null;
    this.occupier = null;
    this.powerup = null;
    this.ipInfo = new ImageProcessingInfo();
  }
  Object.defineProperty(MapCell.prototype, 'position', {
    get: function () {
      return new Point(this.x, this.y);
    }
  });
  MapCell.prototype.isOccupied = function () {
    return this.occupier != null;
  };
  MapCell.prototype.toString = function () {
    return 'MapCell(x=' + this.x + ', y=' + this.y + ', type=' + this.type + ')';
  };
  var wrapFunction = Kotlin.wrapFunction;
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var thenBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (this$thenBy, closure$selector) {
      return function (a, b) {
        var previousCompare = this$thenBy.compare(a, b);
        var tmp$;
        if (previousCompare !== 0)
          tmp$ = previousCompare;
        else {
          var selector = closure$selector;
          tmp$ = compareValues(selector(a), selector(b));
        }
        return tmp$;
      };
    };
  });
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function MapCell$Companion() {
    MapCell$Companion_instance = this;
    this.comparator = new Comparator$ObjectLiteral_0(thenBy$lambda(new Comparator$ObjectLiteral(compareBy$lambda(MapCell$Companion$comparator$lambda)), MapCell$Companion$comparator$lambda_0));
  }
  function MapCell$Companion$comparator$lambda(it) {
    return it.y;
  }
  function MapCell$Companion$comparator$lambda_0(it) {
    return it.x;
  }
  MapCell$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MapCell$Companion_instance = null;
  function MapCell$Companion_getInstance() {
    if (MapCell$Companion_instance === null) {
      new MapCell$Companion();
    }
    return MapCell$Companion_instance;
  }
  MapCell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapCell',
    interfaces: []
  };
  function MapCell_init(cellType, $this) {
    if (cellType === void 0)
      cellType = CellType$AIR_getInstance();
    $this = $this || Object.create(MapCell.prototype);
    MapCell.call($this, void 0, void 0, cellType);
    return $this;
  }
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  var Math_0 = Math;
  Point.prototype.pow_0 = function ($receiver, i) {
    return Math_0.pow($receiver, i);
  };
  Point.prototype.movementDistance_kszl2s$ = function (other) {
    return this.maximumDimension_kszl2s$(other);
  };
  Point.prototype.shootingDistance_kszl2s$ = function (other) {
    var x = this.euclideanDistance_kszl2s$(other);
    return Math_0.floor(x);
  };
  Point.prototype.manhattanDistance_kszl2s$ = function (other) {
    return abs(this.x - other.x | 0) + abs(this.y - other.y | 0) | 0;
  };
  Point.prototype.euclideanDistance_kszl2s$ = function (other) {
    var x = this.pow_0(this.x - other.x | 0, 2) + this.pow_0(this.y - other.y | 0, 2);
    return Math_0.sqrt(x);
  };
  Point.prototype.euclideanDistance_ot2paf$ = function (other) {
    var $receiver = this.x - other.first;
    var tmp$ = Math_0.pow($receiver, 2);
    var $receiver_0 = this.y - other.second;
    var x = tmp$ + Math_0.pow($receiver_0, 2);
    return Math_0.sqrt(x);
  };
  Point.prototype.maximumDimension_kszl2s$ = function (other) {
    var a = abs(this.x - other.x | 0);
    var b = abs(this.y - other.y | 0);
    return Math_0.max(a, b);
  };
  Point.prototype.abs = function () {
    return new Point(abs(this.x), abs(this.y));
  };
  Point.prototype.minus_kszl2s$ = function (other) {
    return new Point(this.x - other.x | 0, this.y - other.y | 0);
  };
  Point.prototype.plus_kszl2s$ = function (other) {
    return new Point(this.x + other.x | 0, this.y + other.y | 0);
  };
  Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
  };
  Point.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Point',
    interfaces: []
  };
  Point.prototype.component1 = function () {
    return this.x;
  };
  Point.prototype.component2 = function () {
    return this.y;
  };
  Point.prototype.copy_vux9f0$ = function (x, y) {
    return new Point(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Point.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Point.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function GameMap() {
  }
  GameMap.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GameMap',
    interfaces: []
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function WormsMap(players, size, cells) {
    this.players_h4nxgi$_0 = players;
    this.size = size;
    this.allFeedback_0 = LinkedHashMap_init();
    this.currentRound_81ybcf$_0 = 0;
    this.cells_wj2s9r$_0 = null;
    this.errorList_0 = ArrayList_init_0();
    this.xRange_0 = until(0, this.size);
    this.yRange_0 = until(0, this.size);
    this.refereeIssues_0 = ArrayList_init_0();
    var requiredSize = Kotlin.imul(this.size, this.size);
    if (cells.size !== requiredSize) {
      throw IllegalArgumentException_init('Need ' + requiredSize + ' cells to fill the map, received ' + cells.size);
    }
     else {
      this.cells_wj2s9r$_0 = sortedWith(cells, MapCell$Companion_getInstance().comparator);
    }
    var tmp$;
    tmp$ = this.players.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = element.worms.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        this.placeWorm_0(element_0);
      }
    }
  }
  Object.defineProperty(WormsMap.prototype, 'players', {
    get: function () {
      return this.players_h4nxgi$_0;
    }
  });
  Object.defineProperty(WormsMap.prototype, 'currentRound', {
    get: function () {
      return this.currentRound_81ybcf$_0;
    },
    set: function (currentRound) {
      this.currentRound_81ybcf$_0 = currentRound;
    }
  });
  Object.defineProperty(WormsMap.prototype, 'cells', {
    get: function () {
      return this.cells_wj2s9r$_0;
    }
  });
  Object.defineProperty(WormsMap.prototype, 'currentRoundErrors', {
    get: function () {
      var $receiver = this.errorList_0;
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.round === this.currentRound)
          destination.add_11rb$(element);
      }
      return destination;
    }
  });
  Object.defineProperty(WormsMap.prototype, 'livingPlayers', {
    get: function () {
      var $receiver = this.players;
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!element.dead && !element.disqualified)
          destination.add_11rb$(element);
      }
      return destination;
    }
  });
  Object.defineProperty(WormsMap.prototype, 'winningPlayer', {
    get: function () {
      var tmp$;
      if (this.livingPlayers.size > 1)
        tmp$ = this.maxByScore_0(this.livingPlayers);
      else if (this.livingPlayers.isEmpty())
        tmp$ = this.maxByScore_0(this.players);
      else
        tmp$ = this.livingPlayers.get_za3lpa$(0);
      return tmp$;
    }
  });
  WormsMap.prototype.contains_kszl2s$ = function (target) {
    return this.xRange_0.contains_mef7kx$(target.x) && this.yRange_0.contains_mef7kx$(target.y);
  };
  WormsMap.prototype.get_kszl2s$ = function (target) {
    return this.get_vux9f0$(target.x, target.y);
  };
  WormsMap.prototype.get_vux9f0$ = function (x, y) {
    if (!this.xRange_0.contains_mef7kx$(x)) {
      throw new IndexOutOfBoundsException('x=' + x + ' out of range ' + this.xRange_0);
    }
    if (!this.yRange_0.contains_mef7kx$(y)) {
      throw new IndexOutOfBoundsException('y=' + y + ' out of range ' + this.yRange_0);
    }
    return this.cells.get_za3lpa$(Kotlin.imul(y, this.size) + x | 0);
  };
  WormsMap.prototype.placeWorm_0 = function (worm) {
    this.get_kszl2s$(worm.position).occupier = worm;
  };
  WormsMap.prototype.addError_witgeo$ = function (gameError) {
    this.errorList_0.add_11rb$(gameError);
  };
  WormsMap.prototype.addFeedback_xntwic$ = function (feedback) {
    var $receiver = this.allFeedback_0;
    var key = this.currentRound;
    var tmp$;
    var value = $receiver.get_11rb$(key);
    if (value == null) {
      var answer = ArrayList_init_0();
      $receiver.put_xwzc9p$(key, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    tmp$.add_11rb$(feedback);
  };
  WormsMap.prototype.getFeedback_za3lpa$ = function (round) {
    var tmp$;
    return (tmp$ = this.allFeedback_0.get_11rb$(round)) != null ? tmp$ : emptyList();
  };
  WormsMap.prototype.removeDeadWorms = function () {
    var $receiver = this.players;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.worms;
      addAll(destination, list);
    }
    var destination_0 = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.dead || element_0.player.disqualified)
        destination_0.add_11rb$(element_0);
    }
    var tmp$_1;
    tmp$_1 = destination_0.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      this.removeWorm_0(element_1);
    }
  };
  WormsMap.prototype.maxByScore_0 = function (players) {
    var tmp$;
    var destination = LinkedHashMap_init();
    var tmp$_0;
    tmp$_0 = players.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var key = element.totalScore;
      var tmp$_0_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element);
    }
    var $receiver_0 = destination.entries;
    var maxBy$result;
    maxBy$break: do {
      var iterator = $receiver_0.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = iterator.next();
      var maxValue = maxElem.key;
      while (iterator.hasNext()) {
        var e = iterator.next();
        var v = e.key;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
      maxBy$result = maxElem;
    }
     while (false);
    var highestScoringPlayers = (tmp$ = maxBy$result) != null ? tmp$.value : null;
    if (highestScoringPlayers == null || highestScoringPlayers.size !== 1) {
      return null;
    }
    return highestScoringPlayers.get_za3lpa$(0);
  };
  WormsMap.prototype.removeWorm_0 = function (worm) {
    var mapCell = this.get_kszl2s$(worm.position);
    if (equals(mapCell.occupier, worm)) {
      mapCell.occupier = null;
    }
  };
  WormsMap.prototype.applyHealthPacks = function () {
    var $receiver = this.players;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.worms;
      addAll(destination, list);
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var tmp$_1;
      var cell = this.get_kszl2s$(element_0.position);
      if (equals(cell.occupier, element_0)) {
        (tmp$_1 = cell.powerup) != null ? (tmp$_1.applyTo_d5o6kq$(element_0), Unit) : null;
        cell.powerup = null;
      }
    }
  };
  WormsMap.prototype.detectRefereeIssues = function () {
    var doNothingsCountLimit = 3;
    var tmp$;
    tmp$ = this.livingPlayers.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.consecutiveDoNothingsCount === doNothingsCountLimit) {
        this.refereeIssues_0.add_11rb$('DoNothingsCount for @Player(' + element.id + ') ' + ('reached a count of ' + doNothingsCountLimit + ' @Round(' + this.currentRound + ')'));
      }
    }
  };
  WormsMap.prototype.getRefereeIssues = function () {
    return this.refereeIssues_0;
  };
  WormsMap.prototype.setScoresForKilledWorms_8h9dqi$ = function (config) {
    var $receiver = this.players;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.worms;
      addAll(destination, list);
    }
    var destination_0 = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.dead && any(element_0.lastAttackedBy))
        destination_0.add_11rb$(element_0);
    }
    var tmp$_1;
    tmp$_1 = destination_0.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      var tmp$_2;
      tmp$_2 = distinct(element_1.lastAttackedBy).iterator();
      while (tmp$_2.hasNext()) {
        var element_2 = tmp$_2.next();
        if (equals(element_2, element_1.player))
          element_2.commandScore = element_2.commandScore - config.scores.killShot | 0;
        else
          element_2.commandScore = element_2.commandScore + config.scores.killShot | 0;
      }
      element_1.lastAttackedBy.clear();
    }
  };
  var mapNotNullTo$lambda = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  WormsMap.prototype.getVisualizerEvents = function () {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = this.allFeedback_0.get_11rb$(this.currentRound)) != null) {
      var destination = ArrayList_init_0();
      var tmp$_2;
      tmp$_2 = tmp$.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        var tmp$_0_0;
        if ((tmp$_0_0 = element.visualizerEvent) != null) {
          destination.add_11rb$(tmp$_0_0);
        }
      }
      tmp$_1 = destination;
    }
     else
      tmp$_1 = null;
    return (tmp$_0 = tmp$_1) != null ? tmp$_0 : emptyList();
  };
  WormsMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WormsMap',
    interfaces: [GameMap]
  };
  function WormsMapGenerator(config, seed) {
    WormsMapGenerator$Companion_getInstance();
    this.config_0 = config;
    this.seed_0 = seed;
    this.noise_0 = new SimplexNoise(this.seed_0);
    this.mapZoom_0 = 0.3;
    this.amountOfDirt_0 = 0.5;
    this.mapCenter_0 = null;
    this.mapRadiusFit_0 = 0;
    this.wormSpawnDistanceFromEdge_0 = 1;
    this.mapCenter_0 = this.getMapCenter_0(this.config_0);
    this.mapRadiusFit_0 = this.getMapRadiusFit_0(this.mapCenter_0);
  }
  WormsMapGenerator.prototype.getMapCenter_0 = function (config) {
    var center = (config.mapSize - 1 | 0) / 2.0;
    return new Pair(center, center);
  };
  WormsMapGenerator.prototype.getMapRadiusFit_0 = function (mapCenter) {
    var a = mapCenter.first;
    var b = mapCenter.second;
    return Math_0.min(a, b);
  };
  function WormsMapGenerator$getMap$lambda(this$WormsMapGenerator) {
    return function () {
      return 'Generating Map: Size=' + this$WormsMapGenerator.config_0.mapSize + ', Seed=' + this$WormsMapGenerator.seed_0;
    };
  }
  function WormsMapGenerator$getMap$lambda_0() {
    return 'Generating blank map';
  }
  function WormsMapGenerator$getMap$lambda_1() {
    return 'Populating cell types';
  }
  function WormsMapGenerator$getMap$lambda_2() {
    return 'Placing worms';
  }
  function WormsMapGenerator$getMap$lambda_3() {
    return 'Creating worm rooms';
  }
  function WormsMapGenerator$getMap$lambda_4() {
    return 'Creating map boundary';
  }
  function WormsMapGenerator$getMap$lambda_5() {
    return 'Placing powerups';
  }
  function WormsMapGenerator$getMap$lambda_6() {
    return 'Map generation finished';
  }
  WormsMapGenerator.prototype.getMap_y1ag0d$ = function (wormsPlayers) {
    WormsMapGenerator$Companion_getInstance().logger_0.info_nq59yw$(WormsMapGenerator$getMap$lambda(this));
    WormsMapGenerator$Companion_getInstance().logger_0.info_nq59yw$(WormsMapGenerator$getMap$lambda_0);
    var $receiver = until(0, this.config_0.mapSize);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = until(0, this.config_0.mapSize);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(new MapCell(item, item_0, CellType$AIR_getInstance()));
      }
      tmp$_0.call(destination, destination_0);
    }
    var blankMap = destination;
    var flatBlankMap = flatten(blankMap);
    WormsMapGenerator$Companion_getInstance().logger_0.info_nq59yw$(WormsMapGenerator$getMap$lambda_1);
    var tmp$_2;
    tmp$_2 = flatBlankMap.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      this.populateCell_0(element);
    }
    WormsMapGenerator$Companion_getInstance().logger_0.info_nq59yw$(WormsMapGenerator$getMap$lambda_2);
    this.setWormsIntoSpawnLocations_0(blankMap, wormsPlayers);
    WormsMapGenerator$Companion_getInstance().logger_0.info_nq59yw$(WormsMapGenerator$getMap$lambda_3);
    this.createWormWalledSpawnLocations_0(wormsPlayers, blankMap);
    WormsMapGenerator$Companion_getInstance().logger_0.info_nq59yw$(WormsMapGenerator$getMap$lambda_4);
    this.setBattleRoyaleMapEdges_0(flatBlankMap);
    WormsMapGenerator$Companion_getInstance().logger_0.info_nq59yw$(WormsMapGenerator$getMap$lambda_5);
    this.placePowerups_0(blankMap, 2.2, this.config_0.totalHealthPacks);
    WormsMapGenerator$Companion_getInstance().logger_0.info_nq59yw$(WormsMapGenerator$getMap$lambda_6);
    return new WormsMap(wormsPlayers, this.config_0.mapSize, flatBlankMap);
  };
  WormsMapGenerator.prototype.placePowerups_0 = function (blankMap, radius, count) {
    var tmp$;
    tmp$ = this.getCirclePositions_0(blankMap, radius, count, this.noise_0.n1d_za3lpa$(count)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.powerup = HealthPack$Companion_getInstance().build_8h9dqi$(this.config_0);
      element.type = CellType$AIR_getInstance();
    }
  };
  WormsMapGenerator.prototype.setBattleRoyaleMapEdges_0 = function (flatBlankMap) {
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = flatBlankMap.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.position.euclideanDistance_ot2paf$(this.mapCenter_0) > this.mapRadiusFit_0 + 1)
        destination.add_11rb$(element);
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      element_0.type = CellType$DEEP_SPACE_getInstance();
    }
  };
  WormsMapGenerator.prototype.getCirclePositions_0 = function (blankMap, radius, count, tilt) {
    if (tilt === void 0)
      tilt = 0.0;
    var $receiver = until(0, count);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var t = 2.0 * math.PI * (item / count) + tilt;
      var x = radius * Math_0.cos(t) + this.mapCenter_0.first;
      var y = radius * Math_0.sin(t) + this.mapCenter_0.second;
      tmp$_0.call(destination, ensureNotNull(this.getCellAt_0(this.roundCoordinatesToIntByAngle_0(t, x, y), blankMap)));
    }
    return destination;
  };
  WormsMapGenerator.prototype.roundCoordinatesToIntByAngle_0 = function (angle, x, y) {
    var tmp$;
    var angleCapped = angle % (2.0 * math.PI);
    if (angleCapped <= math.PI * 0.5) {
      tmp$ = new Point(numberToInt(Math_0.ceil(x)), numberToInt(Math_0.floor(y)));
    }
     else if (angleCapped <= math.PI * 1.0) {
      tmp$ = new Point(numberToInt(Math_0.floor(x)), numberToInt(Math_0.floor(y)));
    }
     else if (angleCapped <= math.PI * 1.5) {
      tmp$ = new Point(numberToInt(Math_0.floor(x)), numberToInt(Math_0.ceil(y)));
    }
     else {
      tmp$ = new Point(numberToInt(Math_0.ceil(x)), numberToInt(Math_0.ceil(y)));
    }
    return tmp$;
  };
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  function WormsMapGenerator$createWormWalledSpawnLocations$lambda(it) {
    return new Triple(it.first, it.second.first, it.second.second);
  }
  WormsMapGenerator.prototype.createWormWalledSpawnLocations_0 = function (wormsPlayers, blankMap) {
    var dirtChar = String.fromCharCode(35);
    var $receiver = lines(trimMargin('\n            |#####\n            |#...#\n            |#...#\n            |#...#\n            |#####\n            '));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_1 = destination.add_11rb$;
      var y = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var offset = item.length / 2 | 0;
      var tmp$_2;
      var $receiver_0 = split(trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString(), ['']);
      var destination_0 = ArrayList_init_0();
      var tmp$_3;
      tmp$_3 = $receiver_0.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        if (element.length > 0)
          destination_0.add_11rb$(element);
      }
      var destination_1 = ArrayList_init(collectionSizeOrDefault(destination_0, 10));
      var tmp$_4, tmp$_0_0;
      var index_0 = 0;
      tmp$_4 = destination_0.iterator();
      while (tmp$_4.hasNext()) {
        var item_0 = tmp$_4.next();
        var tmp$_5 = destination_1.add_11rb$;
        var x = checkIndexOverflow((tmp$_0_0 = index_0, index_0 = tmp$_0_0 + 1 | 0, tmp$_0_0));
        var cellType = equals(item_0, dirtChar) ? CellType$DIRT_getInstance() : CellType$AIR_getInstance();
        tmp$_5.call(destination_1, new Pair(new Point(x - offset | 0, y - offset | 0), cellType));
      }
      tmp$_1.call(destination, destination_1);
    }
    var spawnRoom = flatten(destination);
    var destination_2 = ArrayList_init_0();
    var tmp$_6;
    tmp$_6 = wormsPlayers.iterator();
    while (tmp$_6.hasNext()) {
      var element_0 = tmp$_6.next();
      var list = element_0.worms;
      addAll(destination_2, list);
    }
    var tmp$_7;
    tmp$_7 = map(this.joinLists_0(destination_2, spawnRoom), WormsMapGenerator$createWormWalledSpawnLocations$lambda).iterator();
    while (tmp$_7.hasNext()) {
      var element_1 = tmp$_7.next();
      var w = element_1.component1()
      , pointDelta = element_1.component2()
      , cellType_0 = element_1.component3();
      var tmp$_8;
      (tmp$_8 = this.getCellAt_0(w.position.plus_kszl2s$(pointDelta), blankMap)) != null ? (tmp$_8.type = cellType_0) : null;
    }
  };
  WormsMapGenerator.prototype.getCellAt_0 = function (point, blankMap) {
    var tmp$;
    return (tmp$ = getOrNull(blankMap, point.x)) != null ? getOrNull(tmp$, point.y) : null;
  };
  function Coroutine$WormsMapGenerator$joinLists$lambda(closure$aList_0, closure$bList_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$aList = closure$aList_0;
    this.local$closure$bList = closure$bList_0;
    this.local$tmp$ = void 0;
    this.local$element = void 0;
    this.local$tmp$_0 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$WormsMapGenerator$joinLists$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$WormsMapGenerator$joinLists$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WormsMapGenerator$joinLists$lambda.prototype.constructor = Coroutine$WormsMapGenerator$joinLists$lambda;
  Coroutine$WormsMapGenerator$joinLists$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$aList.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }

            this.local$element = this.local$tmp$.next();
            this.local$tmp$_0 = this.local$closure$bList.iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$_0.hasNext()) {
              this.state_0 = 5;
              continue;
            }

            var element = this.local$tmp$_0.next();
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.yield_11rb$(new Pair(this.local$element, element), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 3;
            continue;
          case 5:
            this.state_0 = 2;
            continue;
          case 6:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function WormsMapGenerator$joinLists$lambda(closure$aList_0, closure$bList_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$WormsMapGenerator$joinLists$lambda(closure$aList_0, closure$bList_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  WormsMapGenerator.prototype.joinLists_0 = function (aList, bList) {
    return sequence(WormsMapGenerator$joinLists$lambda(aList, bList));
  };
  function WormsMapGenerator$setWormsIntoSpawnLocations$lambda(closure$count, closure$radius) {
    return function () {
      return 'Placing ' + closure$count + ' worms in radius ' + closure$radius;
    };
  }
  function WormsMapGenerator$setWormsIntoSpawnLocations$lambda$lambda(closure$index, closure$playerIndex) {
    return function () {
      return 'Placing worm: Index=' + closure$index + ', Player=' + closure$playerIndex;
    };
  }
  function WormsMapGenerator$setWormsIntoSpawnLocations$lambda$lambda_0(closure$wormToPlace, closure$seat) {
    return function () {
      return 'Placed worm: ' + closure$wormToPlace + ' in seat=' + closure$seat;
    };
  }
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  WormsMapGenerator.prototype.setWormsIntoSpawnLocations_0 = function (blankMap, wormsPlayers) {
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = wormsPlayers.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.worms;
      addAll(destination, list);
    }
    var allWorms = destination;
    var destination_0 = LinkedHashMap_init();
    var tmp$_0;
    tmp$_0 = allWorms.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var key = element_0.player.id;
      var tmp$_0_0;
      var value = destination_0.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination_0.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list_0 = tmp$_0_0;
      list_0.add_11rb$(element_0);
    }
    var destination_1 = LinkedHashMap_init_0(mapCapacity(destination_0.size));
    var tmp$_1;
    tmp$_1 = destination_0.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      var tmp$_2 = destination_1.put_xwzc9p$;
      var tmp$_3 = element_1.key;
      var value_0 = element_1.value;
      tmp$_2.call(destination_1, tmp$_3, toMutableList(value_0));
    }
    var unplacedWorms = destination_1;
    var radius = this.mapRadiusFit_0 - this.wormSpawnDistanceFromEdge_0;
    var count = allWorms.size;
    WormsMapGenerator$Companion_getInstance().logger_0.info_nq59yw$(WormsMapGenerator$setWormsIntoSpawnLocations$lambda(count, radius));
    var tmp$_4, tmp$_0_1;
    var index = 0;
    tmp$_4 = this.getCirclePositions_0(blankMap, radius, count).iterator();
    while (tmp$_4.hasNext()) {
      var item = tmp$_4.next();
      var index_0 = checkIndexOverflow((tmp$_0_1 = index, index = tmp$_0_1 + 1 | 0, tmp$_0_1));
      var playerIndex = (index_0 + 1 | 0) % wormsPlayers.size;
      WormsMapGenerator$Companion_getInstance().logger_0.debug_nq59yw$(WormsMapGenerator$setWormsIntoSpawnLocations$lambda$lambda(index_0, playerIndex));
      var player = wormsPlayers.get_za3lpa$(playerIndex);
      var wormToPlace = getValue(unplacedWorms, player.id).removeAt_za3lpa$(0);
      wormToPlace.initPositions_kszl2s$(item.position);
      item.occupier = wormToPlace;
      WormsMapGenerator$Companion_getInstance().logger_0.debug_nq59yw$(WormsMapGenerator$setWormsIntoSpawnLocations$lambda$lambda_0(wormToPlace, item));
    }
  };
  function WormsMapGenerator$populateCell$lambda(closure$cell) {
    return function () {
      return 'Populating cell ' + closure$cell;
    };
  }
  function WormsMapGenerator$populateCell$lambda_0(closure$cell, closure$noiseValue) {
    return function () {
      return 'Populated cell ' + closure$cell + ' based on noise ' + closure$noiseValue;
    };
  }
  WormsMapGenerator.prototype.populateCell_0 = function (cell) {
    WormsMapGenerator$Companion_getInstance().logger_0.debug_nq59yw$(WormsMapGenerator$populateCell$lambda(cell));
    var mapSize = this.config_0.mapSize - 1 | 0;
    var x = cell.x > (mapSize / 2 | 0) ? mapSize - cell.x | 0 : cell.x;
    var noiseValue = this.noise_0.n2d_lu1900$(x * this.mapZoom_0, cell.y * this.mapZoom_0);
    cell.ipInfo.srcValue = noiseValue;
    cell.type = ensureNotNull(cell.ipInfo.srcValue) > this.amountOfDirt_0 ? CellType$AIR_getInstance() : CellType$DIRT_getInstance();
    WormsMapGenerator$Companion_getInstance().logger_0.debug_nq59yw$(WormsMapGenerator$populateCell$lambda_0(cell, noiseValue));
  };
  function WormsMapGenerator$Companion() {
    WormsMapGenerator$Companion_instance = this;
    this.logger_0 = mu.KotlinLogging.logger_o14v8n$(WormsMapGenerator$Companion$logger$lambda);
  }
  function WormsMapGenerator$Companion$logger$lambda() {
    return Unit;
  }
  WormsMapGenerator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WormsMapGenerator$Companion_instance = null;
  function WormsMapGenerator$Companion_getInstance() {
    if (WormsMapGenerator$Companion_instance === null) {
      new WormsMapGenerator$Companion();
    }
    return WormsMapGenerator$Companion_instance;
  }
  WormsMapGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WormsMapGenerator',
    interfaces: []
  };
  function AgentWorm() {
    AgentWorm_instance = this;
  }
  AgentWorm.prototype.buildWithPositions = function (id, config, position) {
    return Worm_init(id, config.agentWorms.initialHp, position, Weapon$Companion_getInstance().fromWeapon_12afb5$(config.agentWorms.weapon), Bananas$Companion_getInstance().fromBananas_ok0wac$(config.agentWorms.bananas), config.agentWorms.diggingRange, config.agentWorms.movementRage, config.agentWorms.professionName);
  };
  AgentWorm.prototype.build = function (id, config) {
    return new Worm(id, config.agentWorms.initialHp, Weapon$Companion_getInstance().fromWeapon_12afb5$(config.agentWorms.weapon), Bananas$Companion_getInstance().fromBananas_ok0wac$(config.agentWorms.bananas), config.agentWorms.diggingRange, config.agentWorms.movementRage, config.agentWorms.professionName);
  };
  AgentWorm.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AgentWorm',
    interfaces: []
  };
  var AgentWorm_instance = null;
  function AgentWorm_getInstance() {
    if (AgentWorm_instance === null) {
      new AgentWorm();
    }
    return AgentWorm_instance;
  }
  function Bananas(damage, range, count, damageRadius) {
    Bananas$Companion_getInstance();
    this.damage = damage;
    this.range = range;
    this.count = count;
    this.damageRadius = damageRadius;
  }
  function Bananas$Companion() {
    Bananas$Companion_instance = this;
  }
  Bananas$Companion.prototype.fromBananas_ok0wac$ = function (bananas) {
    var tmp$;
    if (bananas != null)
      tmp$ = new Bananas(bananas.damage, bananas.range, bananas.count, bananas.damageRadius);
    else
      tmp$ = null;
    return tmp$;
  };
  Bananas$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Bananas$Companion_instance = null;
  function Bananas$Companion_getInstance() {
    if (Bananas$Companion_instance === null) {
      new Bananas$Companion();
    }
    return Bananas$Companion_instance;
  }
  Bananas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bananas',
    interfaces: []
  };
  Bananas.prototype.component1 = function () {
    return this.damage;
  };
  Bananas.prototype.component2 = function () {
    return this.range;
  };
  Bananas.prototype.component3 = function () {
    return this.count;
  };
  Bananas.prototype.component4 = function () {
    return this.damageRadius;
  };
  Bananas.prototype.copy_tjonv8$ = function (damage, range, count, damageRadius) {
    return new Bananas(damage === void 0 ? this.damage : damage, range === void 0 ? this.range : range, count === void 0 ? this.count : count, damageRadius === void 0 ? this.damageRadius : damageRadius);
  };
  Bananas.prototype.toString = function () {
    return 'Bananas(damage=' + Kotlin.toString(this.damage) + (', range=' + Kotlin.toString(this.range)) + (', count=' + Kotlin.toString(this.count)) + (', damageRadius=' + Kotlin.toString(this.damageRadius)) + ')';
  };
  Bananas.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.damage) | 0;
    result = result * 31 + Kotlin.hashCode(this.range) | 0;
    result = result * 31 + Kotlin.hashCode(this.count) | 0;
    result = result * 31 + Kotlin.hashCode(this.damageRadius) | 0;
    return result;
  };
  Bananas.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.damage, other.damage) && Kotlin.equals(this.range, other.range) && Kotlin.equals(this.count, other.count) && Kotlin.equals(this.damageRadius, other.damageRadius)))));
  };
  function CommandoWorm() {
    CommandoWorm_instance = this;
  }
  CommandoWorm.prototype.buildWithPositions = function (id, config, position) {
    return Worm_init(id, config.commandoWorms.initialHp, position, Weapon$Companion_getInstance().fromWeapon_12afb5$(config.commandoWorms.weapon), void 0, config.commandoWorms.diggingRange, config.commandoWorms.movementRage, config.commandoWorms.professionName);
  };
  CommandoWorm.prototype.build = function (id, config) {
    return new Worm(id, config.commandoWorms.initialHp, Weapon$Companion_getInstance().fromWeapon_12afb5$(config.commandoWorms.weapon), void 0, config.commandoWorms.diggingRange, config.commandoWorms.movementRage, config.commandoWorms.professionName);
  };
  CommandoWorm.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CommandoWorm',
    interfaces: []
  };
  var CommandoWorm_instance = null;
  function CommandoWorm_getInstance() {
    if (CommandoWorm_instance === null) {
      new CommandoWorm();
    }
    return CommandoWorm_instance;
  }
  function Weapon(damage, range) {
    Weapon$Companion_getInstance();
    this.damage = damage;
    this.range = range;
  }
  function Weapon$Companion() {
    Weapon$Companion_instance = this;
  }
  Weapon$Companion.prototype.fromWeapon_12afb5$ = function (weapon) {
    return new Weapon(weapon.damage, weapon.range);
  };
  Weapon$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Weapon$Companion_instance = null;
  function Weapon$Companion_getInstance() {
    if (Weapon$Companion_instance === null) {
      new Weapon$Companion();
    }
    return Weapon$Companion_instance;
  }
  Weapon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Weapon',
    interfaces: []
  };
  function Worm(id, health, weapon, bananas, diggingRange, movementRange, profession) {
    if (bananas === void 0)
      bananas = null;
    this.id = id;
    this.health = health;
    this.weapon = weapon;
    this.bananas = bananas;
    this.diggingRange = diggingRange;
    this.movementRange = movementRange;
    this.profession = profession;
    this.roundMoved_fj2rkz$_0 = -1;
    this.roundHit_xwo8l9$_0 = -1;
    this.position_8sujuv$_0 = this.position_8sujuv$_0;
    this.previousPosition_vgcpq6$_0 = this.previousPosition_vgcpq6$_0;
    this.player_4l370h$_0 = this.player_4l370h$_0;
    this.lastAttackedBy = ArrayList_init_0();
  }
  Object.defineProperty(Worm.prototype, 'printable', {
    get: function () {
      return this.player.id.toString() + this.id;
    }
  });
  Object.defineProperty(Worm.prototype, 'roundMoved', {
    get: function () {
      return this.roundMoved_fj2rkz$_0;
    },
    set: function (roundMoved) {
      this.roundMoved_fj2rkz$_0 = roundMoved;
    }
  });
  Object.defineProperty(Worm.prototype, 'roundHit', {
    get: function () {
      return this.roundHit_xwo8l9$_0;
    },
    set: function (roundHit) {
      this.roundHit_xwo8l9$_0 = roundHit;
    }
  });
  Object.defineProperty(Worm.prototype, 'position', {
    get: function () {
      if (this.position_8sujuv$_0 == null)
        return throwUPAE('position');
      return this.position_8sujuv$_0;
    },
    set: function (position) {
      this.position_8sujuv$_0 = position;
    }
  });
  Object.defineProperty(Worm.prototype, 'previousPosition', {
    get: function () {
      if (this.previousPosition_vgcpq6$_0 == null)
        return throwUPAE('previousPosition');
      return this.previousPosition_vgcpq6$_0;
    },
    set: function (previousPosition) {
      this.previousPosition_vgcpq6$_0 = previousPosition;
    }
  });
  Object.defineProperty(Worm.prototype, 'player', {
    get: function () {
      if (this.player_4l370h$_0 == null)
        return throwUPAE('player');
      return this.player_4l370h$_0;
    },
    set: function (player) {
      this.player_4l370h$_0 = player;
    }
  });
  Object.defineProperty(Worm.prototype, 'dead', {
    get: function () {
      return this.health <= 0;
    }
  });
  Worm.prototype.initPositions_kszl2s$ = function (position) {
    this.position = position;
    this.previousPosition = position;
  };
  Worm.prototype.moveTo_r1n0co$ = function (gameMap, target) {
    var originCell = gameMap.get_kszl2s$(this.position);
    var targetCell = gameMap.get_kszl2s$(target);
    originCell.occupier = null;
    this.previousPosition = this.position;
    this.roundMoved = gameMap.currentRound;
    this.position = target;
    targetCell.occupier = this;
  };
  Worm.prototype.takeDamage_s4o3j$ = function (damage, round, attacker) {
    if (attacker === void 0)
      attacker = null;
    this.health = this.health - damage | 0;
    this.roundHit = round;
    if (attacker != null)
      this.lastAttackedBy.add_11rb$(attacker);
    return damage;
  };
  Worm.prototype.toString = function () {
    return 'Worm(player=' + this.player.id + ', id=' + this.id + ')';
  };
  Worm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Worm',
    interfaces: [Printable]
  };
  function Worm_init(id, health, position, weapon, bananas, diggingRange, movementRange, profession, $this) {
    if (bananas === void 0)
      bananas = null;
    if (diggingRange === void 0)
      diggingRange = 1;
    if (movementRange === void 0)
      movementRange = 1;
    $this = $this || Object.create(Worm.prototype);
    Worm.call($this, id, health, weapon, bananas, diggingRange, movementRange, profession);
    $this.position = position;
    $this.previousPosition = position;
    return $this;
  }
  function WormsPlayer(id, worms, config) {
    WormsPlayer$Companion_getInstance();
    this.id = id;
    this.worms = worms;
    this.config_0 = config;
    this.currentWorm_uu4y0y$_0 = this.worms.get_za3lpa$(0);
    this.previousWorm_4yu2jk$_0 = this.worms.get_za3lpa$(0);
    var tmp$;
    tmp$ = this.worms.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.player = this;
    }
    this.commandScore = 0;
    this.consecutiveDoNothingsCount = 0;
    this.wormSelectionTokens = this.config_0.wormSelectTokens.count;
  }
  Object.defineProperty(WormsPlayer.prototype, 'currentWorm', {
    get: function () {
      return this.currentWorm_uu4y0y$_0;
    },
    set: function (currentWorm) {
      this.currentWorm_uu4y0y$_0 = currentWorm;
    }
  });
  Object.defineProperty(WormsPlayer.prototype, 'previousWorm', {
    get: function () {
      return this.previousWorm_4yu2jk$_0;
    },
    set: function (previousWorm) {
      this.previousWorm_4yu2jk$_0 = previousWorm;
    }
  });
  Object.defineProperty(WormsPlayer.prototype, 'health', {
    get: function () {
      var tmp$;
      var sum = 0;
      tmp$ = this.livingWorms.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        sum = sum + element.health | 0;
      }
      return sum;
    }
  });
  var Collection = Kotlin.kotlin.collections.Collection;
  Object.defineProperty(WormsPlayer.prototype, 'dead', {
    get: function () {
      var $receiver = this.worms;
      var all$result;
      all$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (!element.dead) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      return all$result;
    }
  });
  Object.defineProperty(WormsPlayer.prototype, 'livingWorms', {
    get: function () {
      var $receiver = this.worms;
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!element.dead)
          destination.add_11rb$(element);
      }
      return destination;
    }
  });
  Object.defineProperty(WormsPlayer.prototype, 'totalScore', {
    get: function () {
      return this.commandScore + (this.health / this.worms.size | 0) | 0;
    }
  });
  Object.defineProperty(WormsPlayer.prototype, 'disqualified', {
    get: function () {
      return this.consecutiveDoNothingsCount > this.config_0.maxDoNothings;
    }
  });
  WormsPlayer.prototype.selectNextWorm = function () {
    var livingWorms = this.livingWorms;
    if (!livingWorms.isEmpty()) {
      var nextIndex = (livingWorms.indexOf_11rb$(this.currentWorm) + 1 | 0) % livingWorms.size;
      this.updateCurrentWorm_d5o6kq$(livingWorms.get_za3lpa$(nextIndex));
    }
  };
  WormsPlayer.prototype.updateCurrentWorm_d5o6kq$ = function (newWorm) {
    this.previousWorm = this.currentWorm;
    this.currentWorm = newWorm;
  };
  WormsPlayer.prototype.toString = function () {
    return 'WormsPlayer(id=' + this.id + ')';
  };
  WormsPlayer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, WormsPlayer))
      return false;
    if (this.id !== other.id)
      return false;
    return true;
  };
  WormsPlayer.prototype.hashCode = function () {
    return this.id;
  };
  function WormsPlayer$Companion() {
    WormsPlayer$Companion_instance = this;
  }
  WormsPlayer$Companion.prototype.build = function (id, config) {
    var $receiver = until(0, config.commandoWorms.count);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(CommandoWorm_getInstance().build(item + 1 | 0, config));
    }
    var commandoWorms = destination;
    var $receiver_0 = until(0, config.agentWorms.count);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(AgentWorm_getInstance().build(item_0 + 3 | 0, config));
    }
    var agentWorms = destination_0;
    return new WormsPlayer(id, plus(commandoWorms, agentWorms), config);
  };
  WormsPlayer$Companion.prototype.buildWithWorms = function (id, worms, config) {
    return new WormsPlayer(id, worms, config);
  };
  WormsPlayer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WormsPlayer$Companion_instance = null;
  function WormsPlayer$Companion_getInstance() {
    if (WormsPlayer$Companion_instance === null) {
      new WormsPlayer$Companion();
    }
    return WormsPlayer$Companion_instance;
  }
  WormsPlayer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WormsPlayer',
    interfaces: []
  };
  function HealthPack(value) {
    HealthPack$Companion_getInstance();
    this.value_481e0f$_0 = value;
    this.printable_olqe11$_0 = HealthPack$Companion_getInstance().PRINTABLE;
    this.type_w8egfc$_0 = 'HEALTH_PACK';
  }
  Object.defineProperty(HealthPack.prototype, 'value', {
    get: function () {
      return this.value_481e0f$_0;
    }
  });
  Object.defineProperty(HealthPack.prototype, 'printable', {
    get: function () {
      return this.printable_olqe11$_0;
    }
  });
  Object.defineProperty(HealthPack.prototype, 'type', {
    get: function () {
      return this.type_w8egfc$_0;
    }
  });
  HealthPack.prototype.applyTo_d5o6kq$ = function (worm) {
    worm.health = worm.health + this.value | 0;
  };
  function HealthPack$Companion() {
    HealthPack$Companion_instance = this;
    this.PRINTABLE = '\u2560\u2563';
  }
  HealthPack$Companion.prototype.build_8h9dqi$ = function (config) {
    return new HealthPack(config.healthPackHp);
  };
  HealthPack$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HealthPack$Companion_instance = null;
  function HealthPack$Companion_getInstance() {
    if (HealthPack$Companion_instance === null) {
      new HealthPack$Companion();
    }
    return HealthPack$Companion_instance;
  }
  HealthPack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HealthPack',
    interfaces: [Powerup]
  };
  function Powerup() {
  }
  Powerup.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Powerup',
    interfaces: [Printable]
  };
  function GameError(message, player, worm, round) {
    this.message = message;
    this.player = player;
    this.worm = worm;
    this.round = round;
  }
  GameError.prototype.toString = function () {
    return 'GameError - Player ' + this.player.id + ', worm ' + this.worm.id + ', round ' + this.round + ': ' + this.message;
  };
  GameError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameError',
    interfaces: []
  };
  function WormsRoundProcessor(config) {
    WormsRoundProcessor$Companion_getInstance();
    this.config = config;
  }
  function WormsRoundProcessor$processRound$lambda(closure$wormsMap) {
    return function () {
      return 'Processing round: Round=' + closure$wormsMap.currentRound;
    };
  }
  function WormsRoundProcessor$processRound$lambda_0() {
    return "Updating player's active worms";
  }
  function WormsRoundProcessor$processRound$lambda_1() {
    return 'Applying powerups';
  }
  function WormsRoundProcessor$processRound$lambda_2() {
    return 'Adding kill scores for dead worms';
  }
  function WormsRoundProcessor$processRound$lambda_3() {
    return 'Removing dead worms from the map';
  }
  function WormsRoundProcessor$processRound$lambda_4() {
    return 'Checking for referee issues';
  }
  WormsRoundProcessor.prototype.processRound_wfe2xc$ = function (wormsMap, wormsCommands) {
    var tmp$;
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$processRound$lambda(wormsMap));
    var mutableCommandsMap = toMutableMap(wormsCommands);
    this.executeSelectCommands_0(mutableCommandsMap, wormsMap);
    this.executeOtherCommands_0(mutableCommandsMap, wormsMap);
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$processRound$lambda_0);
    tmp$ = wormsMap.livingPlayers.iterator();
    while (tmp$.hasNext()) {
      var player = tmp$.next();
      player.selectNextWorm();
    }
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$processRound$lambda_1);
    wormsMap.applyHealthPacks();
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$processRound$lambda_2);
    wormsMap.setScoresForKilledWorms_8h9dqi$(this.config);
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$processRound$lambda_3);
    wormsMap.removeDeadWorms();
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$processRound$lambda_4);
    wormsMap.detectRefereeIssues();
    return true;
  };
  function WormsRoundProcessor$executeSelectCommands$lambda(closure$wormsMap, closure$commandExecutors) {
    return function () {
      return 'Executing Round Select commands: Round=' + closure$wormsMap.currentRound + ', commands=' + closure$commandExecutors;
    };
  }
  WormsRoundProcessor.prototype.executeSelectCommands_0 = function (commands, wormsMap) {
    var destination = LinkedHashMap_init_0(mapCapacity(commands.size));
    var tmp$;
    tmp$ = commands.entries.iterator();
    loop_label: while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0 = destination.put_xwzc9p$;
      var tmp$_1 = element.key;
      var $receiver = element.value;
      var lastOrNull$result;
      lastOrNull$break: do {
        var iterator = $receiver.listIterator_za3lpa$($receiver.size);
        while (iterator.hasPrevious()) {
          var element_0 = iterator.previous();
          if (Kotlin.isType(element_0, SelectCommand)) {
            lastOrNull$result = element_0;
            break lastOrNull$break;
          }
        }
        lastOrNull$result = null;
      }
       while (false);
      tmp$_0.call(destination, tmp$_1, lastOrNull$result);
    }
    var selectCommands = filterNullValues(destination);
    var commandExecutors = this.buildCommandExecutors_0(selectCommands, wormsMap);
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$executeSelectCommands$lambda(wormsMap, commandExecutors));
    var tmp$_2;
    tmp$_2 = commandExecutors.iterator();
    while (tmp$_2.hasNext()) {
      var element_1 = tmp$_2.next();
      element_1.execute();
    }
  };
  function WormsRoundProcessor$executeOtherCommands$lambda(closure$wormsMap, closure$commandExecutors) {
    return function () {
      return 'Executing Round commands: Round=' + closure$wormsMap.currentRound + ', commands=' + closure$commandExecutors;
    };
  }
  WormsRoundProcessor.prototype.executeOtherCommands_0 = function (commands, wormsMap) {
    var destination = LinkedHashMap_init_0(mapCapacity(commands.size));
    var tmp$;
    tmp$ = commands.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0 = destination.put_xwzc9p$;
      var tmp$_1 = element.key;
      var $receiver = element.value;
      var destination_0 = ArrayList_init_0();
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        if (!Kotlin.isType(element_0, SelectCommand))
          destination_0.add_11rb$(element_0);
      }
      tmp$_0.call(destination, tmp$_1, destination_0);
    }
    var otherCommands = this.withMissingCommands_0(destination, wormsMap.players);
    var commandExecutors = this.buildCommandExecutors_0(otherCommands, wormsMap);
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$executeOtherCommands$lambda(wormsMap, commandExecutors));
    var tmp$_3;
    tmp$_3 = commandExecutors.iterator();
    while (tmp$_3.hasNext()) {
      var element_1 = tmp$_3.next();
      element_1.execute();
    }
  };
  WormsRoundProcessor.prototype.withMissingCommands_0 = function ($receiver, players) {
    var doNothingCommand = new DoNothingCommand(this.config, 'No command received for player');
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = players.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(lastOrDefault($receiver.get_11rb$(element), doNothingCommand));
    }
    var destination_0 = LinkedHashMap_init_0(mapCapacity(destination.size));
    var tmp$_1;
    tmp$_1 = destination.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var tmp$_2 = destination_0.put_xwzc9p$;
      var tmp$_3 = element_0.key;
      var commands = element_0.value;
      tmp$_2.call(destination_0, tmp$_3, last(commands));
    }
    return destination_0;
  };
  function WormsRoundProcessor$buildCommandExecutors$lambda(it) {
    return it.value.order;
  }
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_1(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_1.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  WormsRoundProcessor.prototype.buildCommandExecutors_0 = function (commands, wormsMap) {
    var $receiver = sortedWith(commands.entries, new Comparator$ObjectLiteral_1(compareBy$lambda_0(WormsRoundProcessor$buildCommandExecutors$lambda)));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var player = item.key;
      var command = item.value;
      tmp$_0.call(destination, new CommandExecutor(player, wormsMap, command, this.config));
    }
    return destination;
  };
  WormsRoundProcessor.prototype.getErrorList_fubnl6$ = function (wormsMap, wormsPlayer) {
    var $receiver = wormsMap.currentRoundErrors;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if ((tmp$_0 = element.player) != null ? tmp$_0.equals(wormsPlayer) : null)
        destination.add_11rb$(element);
    }
    return destination;
  };
  WormsRoundProcessor.prototype.getErrorList_dzyvvs$ = function (wormsMap) {
    return wormsMap.currentRoundErrors;
  };
  function WormsRoundProcessor$Companion() {
    WormsRoundProcessor$Companion_instance = this;
    this.logger_0 = mu.KotlinLogging.logger_o14v8n$(WormsRoundProcessor$Companion$logger$lambda);
  }
  function WormsRoundProcessor$Companion$logger$lambda() {
    return Unit;
  }
  WormsRoundProcessor$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WormsRoundProcessor$Companion_instance = null;
  function WormsRoundProcessor$Companion_getInstance() {
    if (WormsRoundProcessor$Companion_instance === null) {
      new WormsRoundProcessor$Companion();
    }
    return WormsRoundProcessor$Companion_instance;
  }
  WormsRoundProcessor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WormsRoundProcessor',
    interfaces: []
  };
  function filterNullValues($receiver) {
    var tmp$;
    var tmp$_0;
    var result = LinkedHashMap_init();
    tmp$_0 = $receiver.entries.iterator();
    while (tmp$_0.hasNext()) {
      var entry = tmp$_0.next();
      if (entry.value != null) {
        result.put_xwzc9p$(entry.key, entry.value);
      }
    }
    return Kotlin.isType(tmp$ = result, Map) ? tmp$ : throwCCE();
  }
  function lastOrDefault($receiver, default_0) {
    var tmp$;
    return (tmp$ = $receiver != null ? lastOrNull($receiver) : null) != null ? tmp$ : default_0;
  }
  function PrintableMapCell(cell) {
    PrintableMapCell$Companion_getInstance();
    this.x = cell.x;
    this.y = cell.y;
    this.type = cell.type;
    this.occupier = null;
    this.powerup = cell.powerup;
  }
  function PrintableMapCell$Companion() {
    PrintableMapCell$Companion_instance = this;
  }
  PrintableMapCell$Companion.prototype.buildForPerspectivePlayer_v81off$ = function (cell, perspectivePlayer) {
    var cellForPerspectivePlayer = new PrintableMapCell(cell);
    if (cell.isOccupied() && !ensureNotNull(cell.occupier).dead) {
      cellForPerspectivePlayer.occupier = PrintableWorm$Companion_getInstance().buildForMapPerspectivePlayer_cwi4jt$(ensureNotNull(cell.occupier), perspectivePlayer);
    }
    return cellForPerspectivePlayer;
  };
  function PrintableMapCell$Companion$getStringMap$lambda$lambda(cell) {
    var tmp$;
    if (cell.powerup != null)
      return cell.powerup.printable;
    else if (cell.occupier != null)
      return toString((tmp$ = cell.occupier) != null ? tmp$.printable : null);
    else
      return cell.type.printable;
  }
  function PrintableMapCell$Companion$getStringMap$lambda(it) {
    return joinToString(it, '', void 0, void 0, void 0, void 0, PrintableMapCell$Companion$getStringMap$lambda$lambda);
  }
  PrintableMapCell$Companion.prototype.getStringMap_n0bbco$ = function (arrayMap) {
    return joinToString(arrayMap, WormsRenderer$Companion_getInstance().EOL, void 0, void 0, void 0, void 0, PrintableMapCell$Companion$getStringMap$lambda);
  };
  PrintableMapCell$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PrintableMapCell$Companion_instance = null;
  function PrintableMapCell$Companion_getInstance() {
    if (PrintableMapCell$Companion_instance === null) {
      new PrintableMapCell$Companion();
    }
    return PrintableMapCell$Companion_instance;
  }
  PrintableMapCell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrintableMapCell',
    interfaces: []
  };
  function PrintablePlayer(player) {
    PrintablePlayer$Companion_getInstance();
    this.id = player.id;
    this.score = player.totalScore;
    this.health = null;
    this.currentWormId = player.currentWorm.id;
    this.remainingWormSelections = player.wormSelectionTokens;
    this.worms = emptyList();
    this.consoleHealth = player.health;
  }
  function PrintablePlayer$Companion() {
    PrintablePlayer$Companion_instance = this;
  }
  PrintablePlayer$Companion.prototype.isPerspectivePlayer_jenssx$ = function (player, perspectivePlayer) {
    return equals(player, perspectivePlayer) || perspectivePlayer == null;
  };
  PrintablePlayer$Companion.prototype.buildForPerspectivePlayer_jenssx$ = function (player, perspectivePlayer) {
    var playerForPerspectivePlayer = new PrintablePlayer(player);
    var $receiver = player.worms;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(PrintableWorm$Companion_getInstance().buildForDetailsPerspectivePlayer_cwi4jt$(item, perspectivePlayer));
    }
    playerForPerspectivePlayer.worms = destination;
    if (this.isPerspectivePlayer_jenssx$(player, perspectivePlayer)) {
      playerForPerspectivePlayer.health = player.health;
    }
    return playerForPerspectivePlayer;
  };
  PrintablePlayer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PrintablePlayer$Companion_instance = null;
  function PrintablePlayer$Companion_getInstance() {
    if (PrintablePlayer$Companion_instance === null) {
      new PrintablePlayer$Companion();
    }
    return PrintablePlayer$Companion_instance;
  }
  PrintablePlayer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrintablePlayer',
    interfaces: []
  };
  function PrintableVisualizerEvent(visualizerEvent) {
    this.type = visualizerEvent.type;
    this.result = visualizerEvent.result;
    this.positionStart = visualizerEvent.positionStart;
    this.positionEnd = visualizerEvent.positionEnd;
    this.wormCommanded = PrintableWorm$Companion_getInstance().buildForVisualizerEvent_d5o6kq$(visualizerEvent.wormCommanded);
    var tmp$;
    var tmp$_0;
    if ((tmp$ = visualizerEvent.affectedCells) != null) {
      var destination = ArrayList_init(collectionSizeOrDefault(tmp$, 10));
      var tmp$_1;
      tmp$_1 = tmp$.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(new PrintableMapCell(item));
      }
      tmp$_0 = destination;
    }
     else
      tmp$_0 = null;
    this.affectedCells = tmp$_0;
  }
  PrintableVisualizerEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrintableVisualizerEvent',
    interfaces: []
  };
  function PrintableWorm(worm) {
    PrintableWorm$Companion_getInstance();
    this.id = worm.id;
    this.playerId_w1zjih$_0 = null;
    this.health = worm.health;
    this.position = new Point(worm.position.x, worm.position.y);
    this.weapon = null;
    this.bananaBombs = null;
    this.diggingRange = worm.diggingRange;
    this.movementRange = worm.movementRange;
    this.profession = worm.profession;
    this.printable = worm.printable;
  }
  Object.defineProperty(PrintableWorm.prototype, 'playerId', {
    get: function () {
      return this.playerId_w1zjih$_0;
    },
    set: function (playerId) {
      this.playerId_w1zjih$_0 = playerId;
    }
  });
  function PrintableWorm$Companion() {
    PrintableWorm$Companion_instance = this;
  }
  PrintableWorm$Companion.prototype.buildForDetailsPerspectivePlayer_cwi4jt$ = function (worm, perspectivePlayer) {
    var wormForPerspectivePlayer = new PrintableWorm(worm);
    if (PrintablePlayer$Companion_getInstance().isPerspectivePlayer_jenssx$(worm.player, perspectivePlayer)) {
      wormForPerspectivePlayer.weapon = worm.weapon;
      wormForPerspectivePlayer.bananaBombs = worm.bananas;
    }
    return wormForPerspectivePlayer;
  };
  PrintableWorm$Companion.prototype.buildForMapPerspectivePlayer_cwi4jt$ = function (worm, perspectivePlayer) {
    var wormForPerspectivePlayer = this.buildForDetailsPerspectivePlayer_cwi4jt$(worm, perspectivePlayer);
    wormForPerspectivePlayer.playerId = worm.player.id;
    return wormForPerspectivePlayer;
  };
  PrintableWorm$Companion.prototype.buildForVisualizerEvent_d5o6kq$ = function (worm) {
    var result = new PrintableWorm(worm);
    result.playerId = worm.player.id;
    result.health = null;
    result.position = null;
    result.weapon = null;
    result.bananaBombs = null;
    result.diggingRange = null;
    result.movementRange = null;
    result.profession = null;
    return result;
  };
  PrintableWorm$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PrintableWorm$Companion_instance = null;
  function PrintableWorm$Companion_getInstance() {
    if (PrintableWorm$Companion_instance === null) {
      new PrintableWorm$Companion();
    }
    return PrintableWorm$Companion_instance;
  }
  PrintableWorm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrintableWorm',
    interfaces: []
  };
  function VisualizerEvent(type, result, wormCommanded, positionStart, positionEnd, affectedCells) {
    this.type = type;
    this.result = result;
    this.wormCommanded = wormCommanded;
    this.positionStart = positionStart;
    this.positionEnd = positionEnd;
    this.affectedCells = affectedCells;
  }
  VisualizerEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VisualizerEvent',
    interfaces: []
  };
  function WormsGameDetails(config, wormsMap, player) {
    this.currentRound = wormsMap.currentRound;
    this.maxRounds = config.maxRounds;
    this.pushbackDamage = config.pushbackDamage;
    this.mapSize = wormsMap.size;
    var tmp$, tmp$_0;
    this.currentWormId = (tmp$ = player != null ? player.currentWorm : null) != null ? tmp$.id : null;
    this.consecutiveDoNothingCount = player != null ? player.consecutiveDoNothingsCount : null;
    if (player != null)
      tmp$_0 = PrintablePlayer$Companion_getInstance().buildForPerspectivePlayer_jenssx$(player, player);
    else
      tmp$_0 = null;
    this.myPlayer = tmp$_0;
    var $receiver = wormsMap.players;
    var destination = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (!equals(element, player))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_2;
    tmp$_2 = destination.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      destination_0.add_11rb$(PrintablePlayer$Companion_getInstance().buildForPerspectivePlayer_jenssx$(item, player));
    }
    this.opponents = destination_0;
    this.map = chunked(this.modifyCellsForPlayer_0(wormsMap.cells, player), wormsMap.size);
    var $receiver_0 = wormsMap.getVisualizerEvents();
    var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_3;
    tmp$_3 = $receiver_0.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      destination_1.add_11rb$(new PrintableVisualizerEvent(item_0));
    }
    this.visualizerEvents = destination_1;
  }
  WormsGameDetails.prototype.modifyCellsForPlayer_0 = function (arrayMap, player) {
    var destination = ArrayList_init(collectionSizeOrDefault(arrayMap, 10));
    var tmp$;
    tmp$ = arrayMap.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(PrintableMapCell$Companion_getInstance().buildForPerspectivePlayer_v81off$(item, player));
    }
    return destination;
  };
  WormsGameDetails.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WormsGameDetails',
    interfaces: []
  };
  function WormsRenderer() {
    WormsRenderer$Companion_getInstance();
  }
  function WormsRenderer$Companion() {
    WormsRenderer$Companion_instance = this;
    this.EOL = '\n';
  }
  WormsRenderer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WormsRenderer$Companion_instance = null;
  function WormsRenderer$Companion_getInstance() {
    if (WormsRenderer$Companion_instance === null) {
      new WormsRenderer$Companion();
    }
    return WormsRenderer$Companion_instance;
  }
  WormsRenderer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WormsRenderer',
    interfaces: []
  };
  function WormsRendererConsole(config) {
    this.config_0 = config;
  }
  function WormsRendererConsole$commandPrompt$lambda(it) {
    return it.shortCardinal;
  }
  WormsRendererConsole.prototype.commandPrompt_f07rk2$ = function (wormsPlayer) {
    var directionsString = joinToString_0(Direction$values(), ', ', void 0, void 0, void 0, void 0, WormsRendererConsole$commandPrompt$lambda);
    return 'Player ' + wormsPlayer.id + ', enter a command (move x y)/(dig x y)/(shoot ' + directionsString + ')/(nothing)';
  };
  WormsRendererConsole.prototype.render_63r2jv$ = function (wormsMap, player) {
    var tmp$, tmp$_0;
    var wormPosition = ensureNotNull(player).currentWorm.position;
    var wormGameDetails = new WormsGameDetails(this.config_0, wormsMap, player);
    var selfPlayer = 'My Player:H=' + toString((tmp$ = wormGameDetails.myPlayer) != null ? tmp$.consoleHealth : null) + ' S=' + toString((tmp$_0 = wormGameDetails.myPlayer) != null ? tmp$_0.score : null) + ' ' + ('W=' + toString(wormGameDetails.currentWormId) + ' X,Y=' + wormPosition.x + ',' + wormPosition.y);
    var tmp$_1;
    var accumulator = '';
    tmp$_1 = wormGameDetails.opponents.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      accumulator = accumulator + ('Player ' + element.id + ' :H=' + element.consoleHealth + ' S=' + element.score) + WormsRenderer$Companion_getInstance().EOL;
    }
    var enemyPlayers = accumulator;
    var header = trimMargin('\n' + '            |' + selfPlayer + '\n' + '            |' + enemyPlayers + '\n' + '            ');
    var map = PrintableMapCell$Companion_getInstance().getStringMap_n0bbco$(wormGameDetails.map);
    return trimMargin('\n' + '            |' + header + '\n' + '            |' + map + '\n' + '            ');
  };
  WormsRendererConsole.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WormsRendererConsole',
    interfaces: [WormsRenderer]
  };
  function WormsRendererCsv(config) {
    this.config = config;
    this.standardHeaders_0 = listOf(['Round', 'LastCommandType', 'LastCommand', 'ActiveWorm', 'Score', 'Health']);
  }
  WormsRendererCsv.prototype.commandPrompt_f07rk2$ = function (wormsPlayer) {
    return 'Not implemented for the csv state file';
  };
  WormsRendererCsv.prototype.render_63r2jv$ = function (wormsMap, player) {
    var tmp$, tmp$_0;
    if (wormsMap.currentRound === 1) {
      var $receiver = ensureNotNull(player).worms;
      var destination = ArrayList_init_0();
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        var list = listOf(['Worm' + element.id + ' Health', 'Worm' + element.id + ' x', 'Worm' + element.id + ' y']);
        addAll(destination, list);
      }
      var wormHeaders = destination;
      tmp$ = joinToString(plus(this.standardHeaders_0, wormHeaders), this.config.csvSeparator, void 0, WormsRenderer$Companion_getInstance().EOL);
    }
     else
      tmp$ = '';
    var header = tmp$;
    var $receiver_0 = wormsMap.getFeedback_za3lpa$(wormsMap.currentRound - 1 | 0);
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        if (element_0.playerId === ensureNotNull(player).id && !startsWith(element_0.command, 'select')) {
          firstOrNull$result = element_0;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var command = (tmp$_0 = firstOrNull$result) != null ? tmp$_0.command : null;
    var tmp$_3;
    if (command != null) {
      var block$result;
      var firstSpace = indexOf(command, 32);
      if (firstSpace !== -1) {
        block$result = command.substring(0, firstSpace);
      }
       else {
        block$result = command;
      }
      tmp$_3 = block$result;
    }
     else
      tmp$_3 = null;
    var commandType = tmp$_3;
    var standardFields = listOf([wormsMap.currentRound, commandType, '"' + toString(command) + '"', ensureNotNull(player).previousWorm.id, player.totalScore, player.health]);
    var $receiver_1 = player.worms;
    var destination_0 = ArrayList_init_0();
    var tmp$_4;
    tmp$_4 = $receiver_1.iterator();
    while (tmp$_4.hasNext()) {
      var element_1 = tmp$_4.next();
      var list_0 = listOf([element_1.health, element_1.position.x, element_1.position.y]);
      addAll(destination_0, list_0);
    }
    var wormFields = destination_0;
    var values = joinToString(plus(standardFields, wormFields), this.config.csvSeparator);
    return header + values;
  };
  WormsRendererCsv.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WormsRendererCsv',
    interfaces: [WormsRenderer]
  };
  function WormsRendererJson(config) {
    this.config_0 = config;
    this.json_0 = new JsonSerializer();
  }
  WormsRendererJson.prototype.commandPrompt_f07rk2$ = function (wormsPlayer) {
    return 'Not supported in JSON state file';
  };
  WormsRendererJson.prototype.render_63r2jv$ = function (wormsMap, player) {
    var wormGameDetails = new WormsGameDetails(this.config_0, wormsMap, player);
    return this.json_0.toJson_za3rmp$(wormGameDetails);
  };
  WormsRendererJson.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WormsRendererJson',
    interfaces: [WormsRenderer]
  };
  function WormsRendererText(config) {
    this.config_0 = config;
  }
  WormsRendererText.prototype.commandPrompt_f07rk2$ = function (wormsPlayer) {
    return 'Not supported in Text state file';
  };
  WormsRendererText.prototype.render_63r2jv$ = function (wormsMap, player) {
    var wormGameDetails = new WormsGameDetails(this.config_0, wormsMap, player);
    var matchDetails = trimMargin('\n' + '            |@01 Match Details' + '\n' + '            |Current round: ' + wormGameDetails.currentRound + '\n' + '            |Max rounds: ' + wormGameDetails.maxRounds + '\n' + '            |Map size: ' + wormGameDetails.mapSize + '\n' + '            |Current worm id: ' + toString(wormGameDetails.currentWormId) + '\n' + '            |Consecutive do nothing count: ' + toString(wormGameDetails.consecutiveDoNothingCount) + '\n' + '            |Players count: ' + wormsMap.players.size + '\n' + '            |Worms per player: ' + first(wormsMap.players).worms.size + '\n' + '            |Pushback damage: ' + wormGameDetails.pushbackDamage + '\n' + '            ');
    var tmp$;
    var accumulator = '';
    tmp$ = ensureNotNull(wormGameDetails.myPlayer).worms.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = accumulator + trimMargin('\n' + '                        ' + this.getBaseWormText_0(element) + '\n' + '                        ' + this.getWormWeaponDetails_0(element) + '\n' + '                        ' + this.getWormBananasDetails_0(element) + '\n' + '                        ');
    }
    var myPlayerWorms = accumulator;
    var myPlayer = trimMargin('\n' + '            |@02 My Player' + '\n' + '            ' + this.getBasePlayerText_0(wormGameDetails.myPlayer) + '\n' + '            |Health: ' + toString(wormGameDetails.myPlayer.health) + '\n' + '            |Current Worm: ' + wormGameDetails.myPlayer.currentWormId + '\n' + '            |Worms: ' + myPlayerWorms + '\n' + '            ');
    var tmp$_0;
    var accumulator_0 = '@03 Opponents\n';
    tmp$_0 = wormGameDetails.opponents.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var pSum = accumulator_0;
      var tmp$_1;
      var accumulator_1 = '';
      tmp$_1 = element_0.worms.iterator();
      while (tmp$_1.hasNext()) {
        var element_1 = tmp$_1.next();
        accumulator_1 = accumulator_1 + trimMargin('\n' + '                            ' + this.getBaseWormText_0(element_1) + '\n' + '                            ');
      }
      var worms = accumulator_1 + WormsRenderer$Companion_getInstance().EOL;
      accumulator_0 = pSum + trimMargin('\n' + '                        ' + this.getBasePlayerText_0(element_0) + '\n' + '                        |Current Worm: ' + element_0.currentWormId + '\n' + '                        |Worms: ' + worms + '\n' + '                        |' + WormsRenderer$Companion_getInstance().EOL + ' ');
    }
    var opponentPlayers = accumulator_0;
    var specialItems = trimMargin('\n' + '            |@04 Special Items' + '\n' + '            |HEALTH_PACK: ' + HealthPack$Companion_getInstance().build_8h9dqi$(this.config_0).value + '\n' + '            ');
    var legend = trimMargin('\n' + '            |@05 Legend' + '\n' + '            |DEEP_SPACE: ' + CellType$DEEP_SPACE_getInstance().printable + ' ASCII:219' + '\n' + '            |DIRT: ' + CellType$DIRT_getInstance().printable + ' ASCII:178' + '\n' + '            |AIR: ' + CellType$AIR_getInstance().printable + ' ASCII:176' + '\n' + '            |HEALTH_PACK: ' + HealthPack$Companion_getInstance().PRINTABLE + ' ASCII:204, 185' + '\n' + '            |WORM_MARKER: 13 Example for:Player1, Worm3' + '\n' + '            ');
    var map = trimMargin('\n' + '            |@06 World Map' + '\n' + '            |' + PrintableMapCell$Companion_getInstance().getStringMap_n0bbco$(wormGameDetails.map) + '\n' + '            ');
    return trimMargin('\n' + '            |' + this.addLinesCount_0(matchDetails) + '\n' + '            |' + '\n' + '            |' + this.addLinesCount_0(myPlayer) + '\n' + '            |' + '\n' + '            |' + this.addLinesCount_0(opponentPlayers) + '\n' + '            |' + this.addLinesCount_0(specialItems) + '\n' + '            |' + '\n' + '            |' + this.addLinesCount_0(legend) + '\n' + '            |' + '\n' + '            |' + this.addLinesCount_0(map) + '\n' + '            ');
  };
  WormsRendererText.prototype.getWormWeaponDetails_0 = function (worm) {
    var tmp$, tmp$_0;
    return '|Weapon damage: ' + toString((tmp$ = worm.weapon) != null ? tmp$.damage : null) + '\n' + '                            |Weapon range: ' + toString((tmp$_0 = worm.weapon) != null ? tmp$_0.range : null);
  };
  WormsRendererText.prototype.getWormBananasDetails_0 = function (worm) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return '|Banana bomb damage: ' + toString((tmp$ = worm.bananaBombs) != null ? tmp$.damage : null) + '\n' + '                            |Banana bomb range: ' + toString((tmp$_0 = worm.bananaBombs) != null ? tmp$_0.range : null) + '\n' + '                            |Banana bombs count: ' + toString((tmp$_1 = worm.bananaBombs) != null ? tmp$_1.count : null) + '\n' + '                            |Banana bomb damage radius: ' + toString((tmp$_2 = worm.bananaBombs) != null ? tmp$_2.damageRadius : null);
  };
  WormsRendererText.prototype.addLinesCount_0 = function (section) {
    var lines = toMutableList(split(section, [WormsRenderer$Companion_getInstance().EOL]));
    lines.add_wxm5ur$(1, 'Section lines count: ' + (lines.size + 1 | 0));
    return joinToString(lines, WormsRenderer$Companion_getInstance().EOL);
  };
  WormsRendererText.prototype.getBasePlayerText_0 = function (player) {
    return '|Player id: ' + player.id + '\n' + '                  |Score: ' + player.score + '\n' + '                  |Selection Tokens: ' + player.remainingWormSelections;
  };
  WormsRendererText.prototype.getBaseWormText_0 = function (worm) {
    var tmp$, tmp$_0;
    return '|' + WormsRenderer$Companion_getInstance().EOL + '\n' + '                  |Worm id: ' + worm.id + '\n' + '                  |Health: ' + toString(worm.health) + '\n' + '                  |Position x: ' + toString((tmp$ = worm.position) != null ? tmp$.x : null) + '\n' + '                  |Position y: ' + toString((tmp$_0 = worm.position) != null ? tmp$_0.y : null) + '\n' + '                  |Digging range: ' + toString(worm.diggingRange) + '\n' + '                  |Movement range: ' + toString(worm.movementRange) + '\n' + '                  |Profession: ' + toString(worm.profession);
  };
  WormsRendererText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WormsRendererText',
    interfaces: [WormsRenderer]
  };
  function SimplexNoise(seed) {
    if (seed === void 0)
      seed = 0;
    this.seed_0 = seed;
    this.grad3_0 = [SimplexNoise$SimplexNoise$Grad_init(1.0, 1.0, 0.0), SimplexNoise$SimplexNoise$Grad_init(-1.0, 1.0, 0.0), SimplexNoise$SimplexNoise$Grad_init(1.0, -1.0, 0.0), SimplexNoise$SimplexNoise$Grad_init(-1.0, -1.0, 0.0), SimplexNoise$SimplexNoise$Grad_init(1.0, 0.0, 1.0), SimplexNoise$SimplexNoise$Grad_init(-1.0, 0.0, 1.0), SimplexNoise$SimplexNoise$Grad_init(1.0, 0.0, -1.0), SimplexNoise$SimplexNoise$Grad_init(-1.0, 0.0, -1.0), SimplexNoise$SimplexNoise$Grad_init(0.0, 1.0, 1.0), SimplexNoise$SimplexNoise$Grad_init(0.0, -1.0, 1.0), SimplexNoise$SimplexNoise$Grad_init(0.0, 1.0, -1.0), SimplexNoise$SimplexNoise$Grad_init(0.0, -1.0, -1.0)];
    this.grad4_0 = [SimplexNoise$SimplexNoise$Grad_init_0(0.0, 1.0, 1.0, 1.0), SimplexNoise$SimplexNoise$Grad_init_0(0.0, 1.0, 1.0, -1.0), SimplexNoise$SimplexNoise$Grad_init_0(0.0, 1.0, -1.0, 1.0), SimplexNoise$SimplexNoise$Grad_init_0(0.0, 1.0, -1.0, -1.0), SimplexNoise$SimplexNoise$Grad_init_0(0.0, -1.0, 1.0, 1.0), SimplexNoise$SimplexNoise$Grad_init_0(0.0, -1.0, 1.0, -1.0), SimplexNoise$SimplexNoise$Grad_init_0(0.0, -1.0, -1.0, 1.0), SimplexNoise$SimplexNoise$Grad_init_0(0.0, -1.0, -1.0, -1.0), SimplexNoise$SimplexNoise$Grad_init_0(1.0, 0.0, 1.0, 1.0), SimplexNoise$SimplexNoise$Grad_init_0(1.0, 0.0, 1.0, -1.0), SimplexNoise$SimplexNoise$Grad_init_0(1.0, 0.0, -1.0, 1.0), SimplexNoise$SimplexNoise$Grad_init_0(1.0, 0.0, -1.0, -1.0), SimplexNoise$SimplexNoise$Grad_init_0(-1.0, 0.0, 1.0, 1.0), SimplexNoise$SimplexNoise$Grad_init_0(-1.0, 0.0, 1.0, -1.0), SimplexNoise$SimplexNoise$Grad_init_0(-1.0, 0.0, -1.0, 1.0), SimplexNoise$SimplexNoise$Grad_init_0(-1.0, 0.0, -1.0, -1.0), SimplexNoise$SimplexNoise$Grad_init_0(1.0, 1.0, 0.0, 1.0), SimplexNoise$SimplexNoise$Grad_init_0(1.0, 1.0, 0.0, -1.0), SimplexNoise$SimplexNoise$Grad_init_0(1.0, -1.0, 0.0, 1.0), SimplexNoise$SimplexNoise$Grad_init_0(1.0, -1.0, 0.0, -1.0), SimplexNoise$SimplexNoise$Grad_init_0(-1.0, 1.0, 0.0, 1.0), SimplexNoise$SimplexNoise$Grad_init_0(-1.0, 1.0, 0.0, -1.0), SimplexNoise$SimplexNoise$Grad_init_0(-1.0, -1.0, 0.0, 1.0), SimplexNoise$SimplexNoise$Grad_init_0(-1.0, -1.0, 0.0, -1.0), SimplexNoise$SimplexNoise$Grad_init_0(1.0, 1.0, 1.0, 0.0), SimplexNoise$SimplexNoise$Grad_init_0(1.0, 1.0, -1.0, 0.0), SimplexNoise$SimplexNoise$Grad_init_0(1.0, -1.0, 1.0, 0.0), SimplexNoise$SimplexNoise$Grad_init_0(1.0, -1.0, -1.0, 0.0), SimplexNoise$SimplexNoise$Grad_init_0(-1.0, 1.0, 1.0, 0.0), SimplexNoise$SimplexNoise$Grad_init_0(-1.0, 1.0, -1.0, 0.0), SimplexNoise$SimplexNoise$Grad_init_0(-1.0, -1.0, 1.0, 0.0), SimplexNoise$SimplexNoise$Grad_init_0(-1.0, -1.0, -1.0, 0.0)];
    this.p_0 = new Int16Array([151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180]);
    this.perm_0 = new Int16Array(512);
    this.permMod12_0 = new Int16Array(512);
    this.F2_0 = 0.5 * (Math_0.sqrt(3.0) - 1.0);
    this.G2_0 = (3.0 - Math_0.sqrt(3.0)) / 6.0;
    this.F3_0 = 1.0 / 3.0;
    this.G3_0 = 1.0 / 6.0;
    this.F4_0 = (Math_0.sqrt(5.0) - 1.0) / 4.0;
    this.G4_0 = (5.0 - Math_0.sqrt(5.0)) / 20.0;
    for (var i = 0; i <= 511; i++) {
      this.perm_0[i] = this.p_0[i & 255];
      this.permMod12_0[i] = toShort(this.perm_0[i] % 12);
    }
  }
  SimplexNoise.prototype.fastfloor_0 = function (x) {
    var xi = numberToInt(x);
    return x < xi ? xi - 1 | 0 : xi;
  };
  SimplexNoise.prototype.dot_0 = function (g, x, y) {
    return g.x_8be2vx$ * x + g.y_8be2vx$ * y;
  };
  SimplexNoise.prototype.dot_1 = function (g, x, y, z) {
    return g.x_8be2vx$ * x + g.y_8be2vx$ * y + g.z_8be2vx$ * z;
  };
  SimplexNoise.prototype.dot_2 = function (g, x, y, z, w) {
    return g.x_8be2vx$ * x + g.y_8be2vx$ * y + g.z_8be2vx$ * z + g.w_8be2vx$ * w;
  };
  SimplexNoise.prototype.n1d_za3lpa$ = function (xin) {
    return this.n1d_14dthe$(xin);
  };
  SimplexNoise.prototype.n1d_14dthe$ = function (xin) {
    return this.n2d_lu1900$(xin, 0.0);
  };
  SimplexNoise.prototype.n2d_vux9f0$ = function (xin, yin) {
    return this.n2d_lu1900$(xin, yin);
  };
  SimplexNoise.prototype.n2d_lu1900$ = function (xin, yin) {
    var n0;
    var n1;
    var n2;
    var n3;
    var s = (xin + yin + this.seed_0) * this.F3_0;
    var i = this.fastfloor_0(xin + s);
    var j = this.fastfloor_0(yin + s);
    var k = this.fastfloor_0(this.seed_0 + s);
    var t = (i + j + k | 0) * this.G3_0;
    var X0 = i - t;
    var Y0 = j - t;
    var Z0 = k - t;
    var x0 = xin - X0;
    var y0 = yin - Y0;
    var z0 = this.seed_0 - Z0;
    var i1;
    var j1;
    var k1;
    var i2;
    var j2;
    var k2;
    if (x0 >= y0) {
      if (y0 >= z0) {
        i1 = 1;
        j1 = 0;
        k1 = 0;
        i2 = 1;
        j2 = 1;
        k2 = 0;
      }
       else if (x0 >= z0) {
        i1 = 1;
        j1 = 0;
        k1 = 0;
        i2 = 1;
        j2 = 0;
        k2 = 1;
      }
       else {
        i1 = 0;
        j1 = 0;
        k1 = 1;
        i2 = 1;
        j2 = 0;
        k2 = 1;
      }
    }
     else {
      if (y0 < z0) {
        i1 = 0;
        j1 = 0;
        k1 = 1;
        i2 = 0;
        j2 = 1;
        k2 = 1;
      }
       else if (x0 < z0) {
        i1 = 0;
        j1 = 1;
        k1 = 0;
        i2 = 0;
        j2 = 1;
        k2 = 1;
      }
       else {
        i1 = 0;
        j1 = 1;
        k1 = 0;
        i2 = 1;
        j2 = 1;
        k2 = 0;
      }
    }
    var x1 = x0 - i1 + this.G3_0;
    var y1 = y0 - j1 + this.G3_0;
    var z1 = z0 - k1 + this.G3_0;
    var x2 = x0 - i2 + 2.0 * this.G3_0;
    var y2 = y0 - j2 + 2.0 * this.G3_0;
    var z2 = z0 - k2 + 2.0 * this.G3_0;
    var x3 = x0 - 1.0 + 3.0 * this.G3_0;
    var y3 = y0 - 1.0 + 3.0 * this.G3_0;
    var z3 = z0 - 1.0 + 3.0 * this.G3_0;
    var ii = i & 255;
    var jj = j & 255;
    var kk = k & 255;
    var gi0 = this.permMod12_0[ii + this.perm_0[jj + this.perm_0[kk]]];
    var gi1 = this.permMod12_0[ii + i1 + this.perm_0[jj + j1 + this.perm_0[kk + k1 | 0] | 0] | 0];
    var gi2 = this.permMod12_0[ii + i2 + this.perm_0[jj + j2 + this.perm_0[kk + k2 | 0] | 0] | 0];
    var gi3 = this.permMod12_0[ii + 1 + this.perm_0[jj + 1 + this.perm_0[kk + 1 | 0] | 0] | 0];
    var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
    if (t0 < 0)
      n0 = 0.0;
    else {
      t0 *= t0;
      n0 = t0 * t0 * this.dot_1(this.grad3_0[gi0], x0, y0, z0);
    }
    var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
    if (t1 < 0)
      n1 = 0.0;
    else {
      t1 *= t1;
      n1 = t1 * t1 * this.dot_1(this.grad3_0[gi1], x1, y1, z1);
    }
    var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
    if (t2 < 0)
      n2 = 0.0;
    else {
      t2 *= t2;
      n2 = t2 * t2 * this.dot_1(this.grad3_0[gi2], x2, y2, z2);
    }
    var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
    if (t3 < 0)
      n3 = 0.0;
    else {
      t3 *= t3;
      n3 = t3 * t3 * this.dot_1(this.grad3_0[gi3], x3, y3, z3);
    }
    return this.toSingleUnitDecimal_0(32.0 * (n0 + n1 + n2 + n3));
  };
  SimplexNoise.prototype.toSingleUnitDecimal_0 = function (incorrectValue) {
    return (incorrectValue + 0.8679777777778225) * 0.576051614;
  };
  function SimplexNoise$Grad() {
    this.x_8be2vx$ = 0.0;
    this.y_8be2vx$ = 0.0;
    this.z_8be2vx$ = 0.0;
    this.w_8be2vx$ = 0.0;
  }
  SimplexNoise$Grad.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Grad',
    interfaces: []
  };
  function SimplexNoise$SimplexNoise$Grad_init(x, y, z, $this) {
    $this = $this || Object.create(SimplexNoise$Grad.prototype);
    SimplexNoise$Grad.call($this);
    $this.x_8be2vx$ = x;
    $this.y_8be2vx$ = y;
    $this.z_8be2vx$ = z;
    return $this;
  }
  function SimplexNoise$SimplexNoise$Grad_init_0(x, y, z, w, $this) {
    $this = $this || Object.create(SimplexNoise$Grad.prototype);
    SimplexNoise$Grad.call($this);
    $this.x_8be2vx$ = x;
    $this.y_8be2vx$ = y;
    $this.z_8be2vx$ = z;
    $this.w_8be2vx$ = w;
    return $this;
  }
  SimplexNoise.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimplexNoise',
    interfaces: []
  };
  function WormsEngine(config) {
    this.config_0 = config;
  }
  WormsEngine.prototype.isGameComplete_xhsahe$ = function (wormsMap) {
    return wormsMap.currentRound >= this.config_0.maxRounds || wormsMap.livingPlayers.size <= 1;
  };
  WormsEngine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WormsEngine',
    interfaces: []
  };
  function GameRunner(seed, config, playerCount) {
    if (playerCount === void 0)
      playerCount = 2;
    this.seed = seed;
    this.config = config;
    this.playerCount = playerCount;
    this.rendererJson_0 = new WormsRendererJson(this.config);
  }
  GameRunner.prototype.getGeneratedMap = function () {
    var $receiver = new IntRange(1, this.playerCount);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(WormsPlayer$Companion_getInstance().build(item, this.config));
    }
    var players = destination;
    return (new WormsMapGenerator(this.config, this.seed)).getMap_y1ag0d$(players);
  };
  GameRunner.prototype.isGameComplete = function (wormsMap) {
    return (new WormsEngine(this.config)).isGameComplete_xhsahe$(wormsMap);
  };
  GameRunner.prototype.processRound = function (wormsMap, commandList) {
    var parser = new CommandParser(Random.Default, this.config);
    var destination = LinkedHashMap_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== commandList.length; ++tmp$) {
      var element = commandList[tmp$];
      var key = element.first;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var destination_0 = LinkedHashMap_init_0(mapCapacity(destination.size));
    var tmp$_1;
    tmp$_1 = destination.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var tmp$_2 = destination_0.put_xwzc9p$;
      var tmp$_3 = element_0.key;
      var values = element_0.value;
      var destination_1 = ArrayList_init(collectionSizeOrDefault(values, 10));
      var tmp$_4;
      tmp$_4 = values.iterator();
      while (tmp$_4.hasNext()) {
        var item = tmp$_4.next();
        destination_1.add_11rb$(parser.parseCommand_61zpoe$(item.second));
      }
      tmp$_2.call(destination_0, tmp$_3, destination_1);
    }
    var wormsCommands = destination_0;
    return (new WormsRoundProcessor(this.config)).processRound_wfe2xc$(wormsMap, wormsCommands);
  };
  GameRunner.prototype.renderJson = function (map, player) {
    return this.rendererJson_0.render_63r2jv$(map, player);
  };
  GameRunner.prototype.getErrorList = function (wormsMap, wormsPlayer) {
    return (new WormsRoundProcessor(this.config)).getErrorList_fubnl6$(wormsMap, wormsPlayer);
  };
  GameRunner.prototype.getAllErrorList = function (wormsMap) {
    return (new WormsRoundProcessor(this.config)).getErrorList_dzyvvs$(wormsMap);
  };
  GameRunner.prototype.getFeedback = function (wormsMap) {
    return wormsMap.getFeedback_za3lpa$(wormsMap.currentRound);
  };
  GameRunner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameRunner',
    interfaces: []
  };
  function JsonSerializer() {
  }
  JsonSerializer.prototype.toJson_za3rmp$ = function (obj) {
    return JSON.stringify(obj);
  };
  JsonSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonSerializer',
    interfaces: []
  };
  Object.defineProperty(CommandExecutor, 'Companion', {
    get: CommandExecutor$Companion_getInstance
  });
  var package$za = _.za || (_.za = {});
  var package$co = package$za.co || (package$za.co = {});
  var package$entelect = package$co.entelect || (package$co.entelect = {});
  var package$challenge = package$entelect.challenge || (package$entelect.challenge = {});
  var package$game = package$challenge.game || (package$challenge.game = {});
  var package$engine = package$game.engine || (package$game.engine = {});
  var package$command = package$engine.command || (package$engine.command = {});
  package$command.CommandExecutor = CommandExecutor;
  Object.defineProperty(CommandStrings, 'MOVE', {
    get: CommandStrings$MOVE_getInstance
  });
  Object.defineProperty(CommandStrings, 'DIG', {
    get: CommandStrings$DIG_getInstance
  });
  Object.defineProperty(CommandStrings, 'SHOOT', {
    get: CommandStrings$SHOOT_getInstance
  });
  Object.defineProperty(CommandStrings, 'BANANA', {
    get: CommandStrings$BANANA_getInstance
  });
  Object.defineProperty(CommandStrings, 'SELECT', {
    get: CommandStrings$SELECT_getInstance
  });
  Object.defineProperty(CommandStrings, 'NOTHING', {
    get: CommandStrings$NOTHING_getInstance
  });
  package$command.CommandStrings = CommandStrings;
  var package$feedback = package$command.feedback || (package$command.feedback = {});
  package$feedback.BananaCommandFeedback = BananaCommandFeedback;
  Object.defineProperty(BananaResult, 'BULLSEYE', {
    get: BananaResult$BULLSEYE_getInstance
  });
  Object.defineProperty(BananaResult, 'TERRAIN', {
    get: BananaResult$TERRAIN_getInstance
  });
  Object.defineProperty(BananaResult, 'DEEP_SPACE', {
    get: BananaResult$DEEP_SPACE_getInstance
  });
  package$feedback.BananaResult = BananaResult;
  package$feedback.CommandFeedback = CommandFeedback;
  package$feedback.StandardCommandFeedback = StandardCommandFeedback;
  Object.defineProperty(CommandValidation, 'Companion', {
    get: CommandValidation$Companion_getInstance
  });
  package$feedback.CommandValidation = CommandValidation;
  package$feedback.DigCommandFeedback = DigCommandFeedback;
  package$feedback.DoNothingCommandFeedback = DoNothingCommandFeedback;
  package$feedback.SelectCommandFeedback = SelectCommandFeedback;
  package$feedback.ShootCommandFeedback = ShootCommandFeedback;
  Object.defineProperty(ShootResult, 'HIT', {
    get: ShootResult$HIT_getInstance
  });
  Object.defineProperty(ShootResult, 'BLOCKED', {
    get: ShootResult$BLOCKED_getInstance
  });
  Object.defineProperty(ShootResult, 'OUT_OF_RANGE', {
    get: ShootResult$OUT_OF_RANGE_getInstance
  });
  package$feedback.ShootResult = ShootResult;
  package$feedback.TeleportCommandFeedback = TeleportCommandFeedback;
  Object.defineProperty(TeleportResult, 'MOVED', {
    get: TeleportResult$MOVED_getInstance
  });
  Object.defineProperty(TeleportResult, 'SWAPPED', {
    get: TeleportResult$SWAPPED_getInstance
  });
  Object.defineProperty(TeleportResult, 'PUSHEDBACK', {
    get: TeleportResult$PUSHEDBACK_getInstance
  });
  package$feedback.TeleportResult = TeleportResult;
  var package$implementation = package$command.implementation || (package$command.implementation = {});
  package$implementation.BananaCommand = BananaCommand;
  package$implementation.DigCommand_init_ha5r7a$ = DigCommand_init;
  package$implementation.DigCommand = DigCommand;
  Object.defineProperty(Direction, 'UP', {
    get: Direction$UP_getInstance
  });
  Object.defineProperty(Direction, 'UP_RIGHT', {
    get: Direction$UP_RIGHT_getInstance
  });
  Object.defineProperty(Direction, 'RIGHT', {
    get: Direction$RIGHT_getInstance
  });
  Object.defineProperty(Direction, 'DOWN_RIGHT', {
    get: Direction$DOWN_RIGHT_getInstance
  });
  Object.defineProperty(Direction, 'DOWN', {
    get: Direction$DOWN_getInstance
  });
  Object.defineProperty(Direction, 'DOWN_LEFT', {
    get: Direction$DOWN_LEFT_getInstance
  });
  Object.defineProperty(Direction, 'LEFT', {
    get: Direction$LEFT_getInstance
  });
  Object.defineProperty(Direction, 'UP_LEFT', {
    get: Direction$UP_LEFT_getInstance
  });
  Object.defineProperty(Direction, 'Companion', {
    get: Direction$Companion_getInstance
  });
  package$implementation.Direction = Direction;
  package$implementation.DoNothingCommand = DoNothingCommand;
  package$implementation.InvalidCommand = InvalidCommand;
  package$implementation.SelectCommand = SelectCommand;
  Object.defineProperty(ShootCommand, 'Companion', {
    get: ShootCommand$Companion_getInstance
  });
  package$implementation.ShootCommand = ShootCommand;
  package$implementation.TeleportCommand_init_lppp6n$ = TeleportCommand_init;
  package$implementation.TeleportCommand = TeleportCommand;
  package$command.WormsCommand = WormsCommand;
  var package$config = package$engine.config || (package$engine.config = {});
  package$config.GameConfig = GameConfig;
  package$config.PlayerWormDefinition = PlayerWormDefinition;
  package$config.Scores = Scores;
  package$config.SelectTokenConfig = SelectTokenConfig;
  Object.defineProperty(CommandParser, 'Companion', {
    get: CommandParser$Companion_getInstance
  });
  var package$factory = package$engine.factory || (package$engine.factory = {});
  package$factory.CommandParser = CommandParser;
  var package$interfaces = package$engine.interfaces || (package$engine.interfaces = {});
  package$interfaces.Printable = Printable;
  Object.defineProperty(CellType, 'AIR', {
    get: CellType$AIR_getInstance
  });
  Object.defineProperty(CellType, 'DIRT', {
    get: CellType$DIRT_getInstance
  });
  Object.defineProperty(CellType, 'DEEP_SPACE', {
    get: CellType$DEEP_SPACE_getInstance
  });
  var package$map = package$engine.map || (package$engine.map = {});
  package$map.CellType = CellType;
  package$map.ImageProcessingInfo = ImageProcessingInfo;
  Object.defineProperty(MapCell, 'Companion', {
    get: MapCell$Companion_getInstance
  });
  package$map.MapCell_init_tsn25k$ = MapCell_init;
  package$map.MapCell = MapCell;
  package$map.Point = Point;
  package$map.GameMap = GameMap;
  package$map.WormsMap = WormsMap;
  Object.defineProperty(WormsMapGenerator, 'Companion', {
    get: WormsMapGenerator$Companion_getInstance
  });
  package$map.WormsMapGenerator = WormsMapGenerator;
  var package$player = package$engine.player || (package$engine.player = {});
  Object.defineProperty(package$player, 'AgentWorm', {
    get: AgentWorm_getInstance
  });
  Object.defineProperty(Bananas, 'Companion', {
    get: Bananas$Companion_getInstance
  });
  package$player.Bananas = Bananas;
  Object.defineProperty(package$player, 'CommandoWorm', {
    get: CommandoWorm_getInstance
  });
  Object.defineProperty(Weapon, 'Companion', {
    get: Weapon$Companion_getInstance
  });
  package$player.Weapon = Weapon;
  package$player.Worm_init_oh7tet$ = Worm_init;
  package$player.Worm = Worm;
  Object.defineProperty(WormsPlayer, 'Companion', {
    get: WormsPlayer$Companion_getInstance
  });
  package$player.WormsPlayer = WormsPlayer;
  Object.defineProperty(HealthPack, 'Companion', {
    get: HealthPack$Companion_getInstance
  });
  var package$powerups = package$engine.powerups || (package$engine.powerups = {});
  package$powerups.HealthPack = HealthPack;
  package$powerups.Powerup = Powerup;
  var package$processor = package$engine.processor || (package$engine.processor = {});
  package$processor.GameError = GameError;
  Object.defineProperty(WormsRoundProcessor, 'Companion', {
    get: WormsRoundProcessor$Companion_getInstance
  });
  package$processor.WormsRoundProcessor = WormsRoundProcessor;
  Object.defineProperty(PrintableMapCell, 'Companion', {
    get: PrintableMapCell$Companion_getInstance
  });
  var package$renderer = package$engine.renderer || (package$engine.renderer = {});
  var package$printables = package$renderer.printables || (package$renderer.printables = {});
  package$printables.PrintableMapCell = PrintableMapCell;
  Object.defineProperty(PrintablePlayer, 'Companion', {
    get: PrintablePlayer$Companion_getInstance
  });
  package$printables.PrintablePlayer = PrintablePlayer;
  package$printables.PrintableVisualizerEvent = PrintableVisualizerEvent;
  Object.defineProperty(PrintableWorm, 'Companion', {
    get: PrintableWorm$Companion_getInstance
  });
  package$printables.PrintableWorm = PrintableWorm;
  package$printables.VisualizerEvent = VisualizerEvent;
  package$renderer.WormsGameDetails = WormsGameDetails;
  Object.defineProperty(WormsRenderer, 'Companion', {
    get: WormsRenderer$Companion_getInstance
  });
  package$renderer.WormsRenderer = WormsRenderer;
  package$renderer.WormsRendererConsole = WormsRendererConsole;
  package$renderer.WormsRendererCsv = WormsRendererCsv;
  package$renderer.WormsRendererJson = WormsRendererJson;
  package$renderer.WormsRendererText = WormsRendererText;
  var package$simplexNoise = package$engine.simplexNoise || (package$engine.simplexNoise = {});
  package$simplexNoise.SimplexNoise = SimplexNoise;
  package$engine.WormsEngine = WormsEngine;
  _.GameRunner = GameRunner;
  var package$delegate = package$game.delegate || (package$game.delegate = {});
  var package$json = package$delegate.json || (package$delegate.json = {});
  package$json.JsonSerializer = JsonSerializer;
  Kotlin.defineModule('ec-2019-game-engine', _);
  return _;
}));
