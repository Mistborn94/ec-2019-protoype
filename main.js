(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ec-2019-game-engine/ec-2019-game-engine.js":
/*!****************************************************!*\
  !*** ./ec-2019-game-engine/ec-2019-game-engine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true)
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! kotlin */ "./node_modules/kotlin/kotlin.js"), __webpack_require__(/*! kotlin-logging */ "./kotlin-logging/kotlin-logging.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
}(this, function (_, Kotlin, $module$kotlin_logging) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var mu = $module$kotlin_logging.mu;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var equals = Kotlin.equals;
  var NotImplementedError = Kotlin.kotlin.NotImplementedError;
  var toString = Kotlin.toString;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var any = Kotlin.kotlin.collections.any_7wnvza$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var Pair = Kotlin.kotlin.Pair;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_nig4hr$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
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
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var Map = Kotlin.kotlin.collections.Map;
  var throwCCE = Kotlin.throwCCE;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var chunked = Kotlin.kotlin.collections.chunked_ba2ldo$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
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
  SnowballCommandFeedback.prototype = Object.create(CommandFeedback.prototype);
  SnowballCommandFeedback.prototype.constructor = SnowballCommandFeedback;
  SnowballResult.prototype = Object.create(Enum.prototype);
  SnowballResult.prototype.constructor = SnowballResult;
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
  function CommandExecutor$execute$lambda_0(this$CommandExecutor) {
    return function () {
      return 'Tried to execute command ' + this$CommandExecutor.command_0 + ', but ' + this$CommandExecutor.worm + ' is still frozen for ' + this$CommandExecutor.worm.roundsUntilUnfrozen + ' round';
    };
  }
  function CommandExecutor$execute$lambda_1(this$CommandExecutor, closure$commandFeedback) {
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
    if (this.worm.roundsUntilUnfrozen > 0) {
      CommandExecutor$Companion_getInstance().logger_0.info_nq59yw$(CommandExecutor$execute$lambda_0(this));
      this.map_0.addFeedback_xntwic$(new StandardCommandFeedback(this.command_0.toString(), 0, this.player_0.id, false, 'Frozen worms cannot follow your commands', new VisualizerEvent(CommandStrings$NOTHING_getInstance().string, 'frozen', this.worm, null, null, null)));
    }
     else if (this.moveValidation_0.isValid) {
      var commandFeedback = this.command_0.execute_h65yh6$(this.map_0, this.worm);
      CommandExecutor$Companion_getInstance().logger_0.info_nq59yw$(CommandExecutor$execute$lambda_1(this, commandFeedback));
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
    CommandStrings$SNOWBALL_instance = new CommandStrings('SNOWBALL', 4, 'snowball');
    CommandStrings$SELECT_instance = new CommandStrings('SELECT', 5, 'select');
    CommandStrings$NOTHING_instance = new CommandStrings('NOTHING', 6, 'nothing');
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
  var CommandStrings$SNOWBALL_instance;
  function CommandStrings$SNOWBALL_getInstance() {
    CommandStrings_initFields();
    return CommandStrings$SNOWBALL_instance;
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
    return [CommandStrings$MOVE_getInstance(), CommandStrings$DIG_getInstance(), CommandStrings$SHOOT_getInstance(), CommandStrings$BANANA_getInstance(), CommandStrings$SNOWBALL_getInstance(), CommandStrings$SELECT_getInstance(), CommandStrings$NOTHING_getInstance()];
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
      case 'SNOWBALL':
        return CommandStrings$SNOWBALL_getInstance();
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
  function SnowballCommandFeedback(command, worm, score, result, target, affectedCells) {
    CommandFeedback.call(this, command, score, worm.player.id, result !== SnowballResult$DEEP_SPACE_getInstance());
    this.result = result;
    this.target = target;
    this.start_0 = worm.position;
    this.message_1eq6n$_0 = 'Snowball hit ' + this.result + ' at ' + this.target + ' from ' + this.start_0;
    this.visualizerEvent_4nz49m$_0 = new VisualizerEvent(CommandStrings$SNOWBALL_getInstance().string, this.result.name, worm, this.start_0, this.target, affectedCells);
  }
  Object.defineProperty(SnowballCommandFeedback.prototype, 'message', {
    get: function () {
      return this.message_1eq6n$_0;
    }
  });
  Object.defineProperty(SnowballCommandFeedback.prototype, 'visualizerEvent', {
    get: function () {
      return this.visualizerEvent_4nz49m$_0;
    }
  });
  SnowballCommandFeedback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SnowballCommandFeedback',
    interfaces: [CommandFeedback]
  };
  function SnowballResult(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SnowballResult_initFields() {
    SnowballResult_initFields = function () {
    };
    SnowballResult$BULLSEYE_instance = new SnowballResult('BULLSEYE', 0);
    SnowballResult$TERRAIN_instance = new SnowballResult('TERRAIN', 1);
    SnowballResult$DEEP_SPACE_instance = new SnowballResult('DEEP_SPACE', 2);
  }
  var SnowballResult$BULLSEYE_instance;
  function SnowballResult$BULLSEYE_getInstance() {
    SnowballResult_initFields();
    return SnowballResult$BULLSEYE_instance;
  }
  var SnowballResult$TERRAIN_instance;
  function SnowballResult$TERRAIN_getInstance() {
    SnowballResult_initFields();
    return SnowballResult$TERRAIN_instance;
  }
  var SnowballResult$DEEP_SPACE_instance;
  function SnowballResult$DEEP_SPACE_getInstance() {
    SnowballResult_initFields();
    return SnowballResult$DEEP_SPACE_instance;
  }
  SnowballResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SnowballResult',
    interfaces: [Enum]
  };
  function SnowballResult$values() {
    return [SnowballResult$BULLSEYE_getInstance(), SnowballResult$TERRAIN_getInstance(), SnowballResult$DEEP_SPACE_getInstance()];
  }
  SnowballResult.values = SnowballResult$values;
  function SnowballResult$valueOf(name) {
    switch (name) {
      case 'BULLSEYE':
        return SnowballResult$BULLSEYE_getInstance();
      case 'TERRAIN':
        return SnowballResult$TERRAIN_getInstance();
      case 'DEEP_SPACE':
        return SnowballResult$DEEP_SPACE_getInstance();
      default:throwISE('No enum constant za.co.entelect.challenge.game.engine.command.feedback.SnowballResult.' + name);
    }
  }
  SnowballResult.valueOf_61zpoe$ = SnowballResult$valueOf;
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
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
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
    var affectedCells = ArrayList_init();
    var $receiver = Point$Companion_getInstance().getAllPointsOfASquare_vux9f0$(0, damageRadius * 2 | 0);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
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
  function SnowballCommand(target, config) {
    this.target = target;
    this.config = config;
    this.order_6ovy74$_0 = 3;
  }
  Object.defineProperty(SnowballCommand.prototype, 'order', {
    get: function () {
      return this.order_6ovy74$_0;
    }
  });
  SnowballCommand.prototype.validate_h65yh6$ = function (gameMap, worm) {
    var tmp$;
    if (worm.snowballs == null)
      tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$('This worm is not technically adept in the arts of snowball fights');
    else {
      var tmp$_0;
      if (((tmp$_0 = worm.snowballs) != null ? tmp$_0.count : null) === 0)
        tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$('No snowballs bombs in inventory');
      else if (!gameMap.contains_kszl2s$(this.target))
        tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$(this.target.toString() + ' out of map bounds');
      else {
        var tmp$_1;
        if (this.target.shootingDistance_kszl2s$(worm.position) > ensureNotNull((tmp$_1 = worm.snowballs) != null ? tmp$_1.range : null))
          tmp$ = CommandValidation$Companion_getInstance().invalidMove_61zpoe$('Cell ' + this.target + ' is too far away');
        else
          tmp$ = CommandValidation$Companion_getInstance().validMove_8kj6y5$();
      }
    }
    return tmp$;
  };
  SnowballCommand.prototype.execute_h65yh6$ = function (gameMap, worm) {
    var wormSnowballs = ensureNotNull(worm.snowballs);
    wormSnowballs.count = wormSnowballs.count - 1 | 0;
    if (gameMap.get_kszl2s$(this.target).type === CellType$DEEP_SPACE_getInstance()) {
      return new SnowballCommandFeedback(this.toString(), worm, this.config.scores.missedAttack, SnowballResult$DEEP_SPACE_getInstance(), this.target, emptyList());
    }
    var freezeRadius = wormSnowballs.freezeRadius;
    var freezeDuration = wormSnowballs.freezeDuration;
    var wormsFrozen = {v: 0};
    var enemyWormHit = gameMap.get_kszl2s$(this.target).isOccupied() ? SnowballResult$BULLSEYE_getInstance() : SnowballResult$TERRAIN_getInstance();
    var iOffset = this.target.x - freezeRadius | 0;
    var jOffset = this.target.y - freezeRadius | 0;
    var affectedCells = ArrayList_init();
    var $receiver = Point$Companion_getInstance().getAllPointsOfASquare_vux9f0$(0, freezeRadius * 2 | 0);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
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
        var distance = cell.position.manhattanDistance_kszl2s$(this.target);
        if (distance > (freezeRadius * 2 | 0)) {
          break action$break;
        }
        affectedCells.add_11rb$(cell);
        if (cell.isOccupied()) {
          var occupier = ensureNotNull(cell.occupier);
          var isAlly = (tmp$_1 = occupier.player) != null ? tmp$_1.equals(worm.player) : null;
          occupier.setAsFrozen_za3lpa$(freezeDuration);
          if (isAlly) {
            wormsFrozen.v = wormsFrozen.v - 1 | 0;
          }
           else {
            wormsFrozen.v = wormsFrozen.v + 1 | 0;
          }
        }
      }
       while (false);
    }
    var totalScore = Kotlin.imul(wormsFrozen.v, this.config.scores.freeze);
    return new SnowballCommandFeedback(this.toString(), worm, totalScore, enemyWormHit, this.target, affectedCells);
  };
  SnowballCommand.prototype.toString = function () {
    return CommandStrings$SNOWBALL_getInstance().string + ' ' + this.target;
  };
  SnowballCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SnowballCommand',
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
  function GameConfig(maxRounds, maxDoNothings, pushbackDamage, lavaDamage, commandoWorms, agentWorms, technologistWorms, mapSize, healthPackHp, totalHealthPacks, scores, csvSeparator, wormSelectTokens, battleRoyaleStart, battleRoyaleEnd) {
    this.maxRounds = maxRounds;
    this.maxDoNothings = maxDoNothings;
    this.pushbackDamage = pushbackDamage;
    this.lavaDamage = lavaDamage;
    this.commandoWorms = commandoWorms;
    this.agentWorms = agentWorms;
    this.technologistWorms = technologistWorms;
    this.mapSize = mapSize;
    this.healthPackHp = healthPackHp;
    this.totalHealthPacks = totalHealthPacks;
    this.scores = scores;
    this.csvSeparator = csvSeparator;
    this.wormSelectTokens = wormSelectTokens;
    this.battleRoyaleStart = battleRoyaleStart;
    this.battleRoyaleEnd = battleRoyaleEnd;
  }
  GameConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameConfig',
    interfaces: []
  };
  function PlayerWormDefinition(count, initialHp, movementRage, diggingRange, weapon, bananas, snowballs, professionName) {
    this.count = count;
    this.initialHp = initialHp;
    this.movementRage = movementRage;
    this.diggingRange = diggingRange;
    this.weapon = weapon;
    this.bananas = bananas;
    this.snowballs = snowballs;
    this.professionName = professionName;
  }
  PlayerWormDefinition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerWormDefinition',
    interfaces: []
  };
  function Scores(attack, killShot, missedAttack, powerup, freeze, dig, move, invalidCommand, doNothing) {
    this.attack = attack;
    this.killShot = killShot;
    this.missedAttack = missedAttack;
    this.powerup = powerup;
    this.freeze = freeze;
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
    else if (equals(tmp$, CommandStrings$SNOWBALL_getInstance().string))
      tmp$_0 = this.snowballCommand_0(splitCommand);
    else if (equals(tmp$, CommandStrings$SELECT_getInstance().string))
      tmp$_0 = this.selectCommand_0(splitCommand);
    else if (equals(tmp$, CommandStrings$NOTHING_getInstance().string))
      tmp$_0 = new DoNothingCommand(this.config_0);
    else
      tmp$_0 = new InvalidCommand('Unknown command: ' + rawCommand);
    return tmp$_0;
  };
  CommandParser.prototype.snowballCommand_0 = function (splitCommand) {
    var tmp$;
    if (splitCommand.size !== 3) {
      return new InvalidCommand('Cannot parse snowball command: Invalid length ' + splitCommand.size + ', expected 3');
    }
    var x = toIntOrNull(splitCommand.get_za3lpa$(1));
    var y = toIntOrNull(splitCommand.get_za3lpa$(2));
    if (x == null || y == null)
      tmp$ = new InvalidCommand('Cannot parse coordinates: Invalid coordinate x:' + toString(x) + ' y:' + toString(y));
    else
      tmp$ = new SnowballCommand(new Point(x, y), this.config_0);
    return tmp$;
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
    CellType$LAVA_instance = new CellType('LAVA', 3, false, true, 'XX');
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
  var CellType$LAVA_instance;
  function CellType$LAVA_getInstance() {
    CellType_initFields();
    return CellType$LAVA_instance;
  }
  CellType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CellType',
    interfaces: [Printable, Enum]
  };
  function CellType$values() {
    return [CellType$AIR_getInstance(), CellType$DIRT_getInstance(), CellType$DEEP_SPACE_getInstance(), CellType$LAVA_getInstance()];
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
      case 'LAVA':
        return CellType$LAVA_getInstance();
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
    Point$Companion_getInstance();
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
    return this.x.toString() + ' ' + this.y;
  };
  function Point$Companion() {
    Point$Companion_instance = this;
  }
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  Point$Companion.prototype.getAllPointsOfASquare_vux9f0$ = function (start, end) {
    var $receiver = new IntRange(start, end);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = new IntRange(start, end);
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
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
  Point$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Point$Companion_instance = null;
  function Point$Companion_getInstance() {
    if (Point$Companion_instance === null) {
      new Point$Companion();
    }
    return Point$Companion_instance;
  }
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
    this.errorList_0 = ArrayList_init();
    this.xRange_0 = until(0, this.size);
    this.yRange_0 = until(0, this.size);
    this.refereeIssues_0 = ArrayList_init();
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
      var destination = ArrayList_init();
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
      var destination = ArrayList_init();
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
      var answer = ArrayList_init();
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
  WormsMap.prototype.getAllFeedback = function () {
    return this.allFeedback_0;
  };
  WormsMap.prototype.removeDeadWorms = function () {
    var $receiver = this.players;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.worms;
      addAll(destination, list);
    }
    var destination_0 = ArrayList_init();
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
        var answer = ArrayList_init();
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
    var destination = ArrayList_init();
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
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.worms;
      addAll(destination, list);
    }
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.dead && any(element_0.lastAttackedBy))
        destination_0.add_11rb$(element_0);
    }
    var destination_1 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = destination_0.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      var $receiver_0 = distinct(element_1.lastAttackedBy);
      var destination_2 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination_2.add_11rb$(new Pair(element_1, item));
      }
      var list_0 = destination_2;
      addAll(destination_1, list_0);
    }
    var tmp$_3;
    tmp$_3 = destination_1.iterator();
    while (tmp$_3.hasNext()) {
      var element_2 = tmp$_3.next();
      var worm = element_2.component1()
      , attacker = element_2.component2();
      if (equals(attacker, worm.player))
        attacker.commandScore = attacker.commandScore - config.scores.killShot | 0;
      else
        attacker.commandScore = attacker.commandScore + config.scores.killShot | 0;
    }
    var $receiver_1 = this.players;
    var destination_3 = ArrayList_init();
    var tmp$_4;
    tmp$_4 = $receiver_1.iterator();
    while (tmp$_4.hasNext()) {
      var element_3 = tmp$_4.next();
      var list_1 = element_3.worms;
      addAll(destination_3, list_1);
    }
    var tmp$_5;
    tmp$_5 = destination_3.iterator();
    while (tmp$_5.hasNext()) {
      var element_4 = tmp$_5.next();
      element_4.lastAttackedBy.clear();
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
      var destination = ArrayList_init();
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
  var Collection = Kotlin.kotlin.collections.Collection;
  WormsMap.prototype.progressBattleRoyale_8h9dqi$ = function (config) {
    var center = (config.mapSize - 1 | 0) / 2.0;
    var mapCenter = new Pair(center, center);
    var brStartRound = config.maxRounds * config.battleRoyaleStart;
    if (this.currentRound < brStartRound) {
      return;
    }
    var brEndRound = config.maxRounds * config.battleRoyaleEnd;
    var fullPercentageRange = (this.currentRound - brStartRound) / (brEndRound - brStartRound);
    var currentProgress = coerceIn(fullPercentageRange, 0.0, 1.0);
    var safeAreaRadius = (config.mapSize / 2 | 0) * (1 - currentProgress);
    var $receiver = this.cells;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.type === CellType$AIR_getInstance() && element.position.euclideanDistance_ot2paf$(mapCenter) > safeAreaRadius + 1)
        destination.add_11rb$(element);
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      element_0.type = CellType$LAVA_getInstance();
    }
    var $receiver_0 = this.livingPlayers;
    var destination_0 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      var list = element_1.livingWorms;
      addAll(destination_0, list);
    }
    var destination_1 = ArrayList_init();
    var tmp$_2;
    tmp$_2 = destination_0.iterator();
    loop_label: while (tmp$_2.hasNext()) {
      var element_2 = tmp$_2.next();
      var $receiver_1 = this.cells;
      var any$result;
      any$break: do {
        var tmp$_3;
        if (Kotlin.isType($receiver_1, Collection) && $receiver_1.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$_3 = $receiver_1.iterator();
        while (tmp$_3.hasNext()) {
          var element_3 = tmp$_3.next();
          var tmp$_4;
          if (element_3.type === CellType$LAVA_getInstance() && ((tmp$_4 = element_3.position) != null ? tmp$_4.equals(element_2.position) : null)) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      if (any$result)
        destination_1.add_11rb$(element_2);
    }
    var tmp$_5;
    tmp$_5 = destination_1.iterator();
    while (tmp$_5.hasNext()) {
      var element_4 = tmp$_5.next();
      element_4.takeDamage_s4o3j$(config.lavaDamage, this.currentRound);
    }
  };
  WormsMap.prototype.tickFrozenTimers = function () {
    var $receiver = this.livingPlayers;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.livingWorms;
      addAll(destination, list);
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      element_0.tickFrozenTimer();
    }
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
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = until(0, this.config_0.mapSize);
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
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
    var destination = ArrayList_init();
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
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
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
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
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
      var destination_0 = ArrayList_init();
      var tmp$_3;
      tmp$_3 = $receiver_0.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        if (element.length > 0)
          destination_0.add_11rb$(element);
      }
      var destination_1 = ArrayList_init_0(collectionSizeOrDefault(destination_0, 10));
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
    var destination_2 = ArrayList_init();
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
    var destination = ArrayList_init();
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
        var answer = ArrayList_init();
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
  AgentWorm.prototype.build_gi77j4$ = function (id, config, position) {
    return Worm_init(id, config.agentWorms.initialHp, position, Weapon$Companion_getInstance().fromWeapon_12afb5$(config.agentWorms.weapon), Bananas$Companion_getInstance().fromBananas_ok0wac$(config.agentWorms.bananas), void 0, config.agentWorms.diggingRange, config.agentWorms.movementRage, config.agentWorms.professionName);
  };
  AgentWorm.prototype.build_93d6f4$ = function (id, config) {
    return new Worm(id, config.agentWorms.initialHp, Weapon$Companion_getInstance().fromWeapon_12afb5$(config.agentWorms.weapon), Bananas$Companion_getInstance().fromBananas_ok0wac$(config.agentWorms.bananas), void 0, config.agentWorms.diggingRange, config.agentWorms.movementRage, void 0, config.agentWorms.professionName);
  };
  AgentWorm.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AgentWorm',
    interfaces: [WormBuilder]
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
  CommandoWorm.prototype.build_gi77j4$ = function (id, config, position) {
    return Worm_init(id, config.commandoWorms.initialHp, position, Weapon$Companion_getInstance().fromWeapon_12afb5$(config.commandoWorms.weapon), void 0, void 0, config.commandoWorms.diggingRange, config.commandoWorms.movementRage, config.commandoWorms.professionName);
  };
  CommandoWorm.prototype.build_93d6f4$ = function (id, config) {
    return new Worm(id, config.commandoWorms.initialHp, Weapon$Companion_getInstance().fromWeapon_12afb5$(config.commandoWorms.weapon), void 0, void 0, config.commandoWorms.diggingRange, config.commandoWorms.movementRage, void 0, config.commandoWorms.professionName);
  };
  CommandoWorm.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CommandoWorm',
    interfaces: [WormBuilder]
  };
  var CommandoWorm_instance = null;
  function CommandoWorm_getInstance() {
    if (CommandoWorm_instance === null) {
      new CommandoWorm();
    }
    return CommandoWorm_instance;
  }
  function Snowballs(freezeDuration, range, count, freezeRadius) {
    Snowballs$Companion_getInstance();
    this.freezeDuration = freezeDuration;
    this.range = range;
    this.count = count;
    this.freezeRadius = freezeRadius;
  }
  function Snowballs$Companion() {
    Snowballs$Companion_instance = this;
  }
  Snowballs$Companion.prototype.fromSnowballs_ah2773$ = function (snowballs) {
    var tmp$;
    if (snowballs != null)
      tmp$ = new Snowballs(snowballs.freezeDuration, snowballs.range, snowballs.count, snowballs.freezeRadius);
    else
      tmp$ = null;
    return tmp$;
  };
  Snowballs$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Snowballs$Companion_instance = null;
  function Snowballs$Companion_getInstance() {
    if (Snowballs$Companion_instance === null) {
      new Snowballs$Companion();
    }
    return Snowballs$Companion_instance;
  }
  Snowballs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Snowballs',
    interfaces: []
  };
  Snowballs.prototype.component1 = function () {
    return this.freezeDuration;
  };
  Snowballs.prototype.component2 = function () {
    return this.range;
  };
  Snowballs.prototype.component3 = function () {
    return this.count;
  };
  Snowballs.prototype.component4 = function () {
    return this.freezeRadius;
  };
  Snowballs.prototype.copy_tjonv8$ = function (freezeDuration, range, count, freezeRadius) {
    return new Snowballs(freezeDuration === void 0 ? this.freezeDuration : freezeDuration, range === void 0 ? this.range : range, count === void 0 ? this.count : count, freezeRadius === void 0 ? this.freezeRadius : freezeRadius);
  };
  Snowballs.prototype.toString = function () {
    return 'Snowballs(freezeDuration=' + Kotlin.toString(this.freezeDuration) + (', range=' + Kotlin.toString(this.range)) + (', count=' + Kotlin.toString(this.count)) + (', freezeRadius=' + Kotlin.toString(this.freezeRadius)) + ')';
  };
  Snowballs.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.freezeDuration) | 0;
    result = result * 31 + Kotlin.hashCode(this.range) | 0;
    result = result * 31 + Kotlin.hashCode(this.count) | 0;
    result = result * 31 + Kotlin.hashCode(this.freezeRadius) | 0;
    return result;
  };
  Snowballs.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.freezeDuration, other.freezeDuration) && Kotlin.equals(this.range, other.range) && Kotlin.equals(this.count, other.count) && Kotlin.equals(this.freezeRadius, other.freezeRadius)))));
  };
  function TechnologistWorm() {
    TechnologistWorm_instance = this;
  }
  TechnologistWorm.prototype.build_gi77j4$ = function (id, config, position) {
    return Worm_init(id, config.technologistWorms.initialHp, position, Weapon$Companion_getInstance().fromWeapon_12afb5$(config.technologistWorms.weapon), void 0, Snowballs$Companion_getInstance().fromSnowballs_ah2773$(config.technologistWorms.snowballs), config.technologistWorms.diggingRange, config.technologistWorms.movementRage, config.technologistWorms.professionName);
  };
  TechnologistWorm.prototype.build_93d6f4$ = function (id, config) {
    return new Worm(id, config.technologistWorms.initialHp, Weapon$Companion_getInstance().fromWeapon_12afb5$(config.technologistWorms.weapon), void 0, Snowballs$Companion_getInstance().fromSnowballs_ah2773$(config.technologistWorms.snowballs), config.technologistWorms.diggingRange, config.technologistWorms.movementRage, void 0, config.technologistWorms.professionName);
  };
  TechnologistWorm.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TechnologistWorm',
    interfaces: [WormBuilder]
  };
  var TechnologistWorm_instance = null;
  function TechnologistWorm_getInstance() {
    if (TechnologistWorm_instance === null) {
      new TechnologistWorm();
    }
    return TechnologistWorm_instance;
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
  function Worm(id, health, weapon, bananas, snowballs, diggingRange, movementRange, roundsUntilUnfrozen, profession) {
    if (bananas === void 0)
      bananas = null;
    if (snowballs === void 0)
      snowballs = null;
    if (roundsUntilUnfrozen === void 0)
      roundsUntilUnfrozen = 0;
    this.id = id;
    this.health = health;
    this.weapon = weapon;
    this.bananas = bananas;
    this.snowballs = snowballs;
    this.diggingRange = diggingRange;
    this.movementRange = movementRange;
    this.roundsUntilUnfrozen = roundsUntilUnfrozen;
    this.profession = profession;
    this.roundMoved_fj2rkz$_0 = -1;
    this.roundHit_xwo8l9$_0 = -1;
    this.position_8sujuv$_0 = this.position_8sujuv$_0;
    this.previousPosition_vgcpq6$_0 = this.previousPosition_vgcpq6$_0;
    this.player_4l370h$_0 = this.player_4l370h$_0;
    this.lastAttackedBy = ArrayList_init();
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
  Worm.prototype.setAsFrozen_za3lpa$ = function (freezeDuration) {
    this.roundsUntilUnfrozen = freezeDuration;
  };
  Worm.prototype.toString = function () {
    return 'Worm(player=' + this.player.id + ', id=' + this.id + ')';
  };
  Worm.prototype.tickFrozenTimer = function () {
    this.roundsUntilUnfrozen = coerceAtLeast((this.roundsUntilUnfrozen = this.roundsUntilUnfrozen - 1 | 0, this.roundsUntilUnfrozen), 0);
  };
  Worm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Worm',
    interfaces: [Printable]
  };
  function Worm_init(id, health, position, weapon, bananas, snowballs, diggingRange, movementRange, profession, $this) {
    if (bananas === void 0)
      bananas = null;
    if (snowballs === void 0)
      snowballs = null;
    if (diggingRange === void 0)
      diggingRange = 1;
    if (movementRange === void 0)
      movementRange = 1;
    $this = $this || Object.create(Worm.prototype);
    Worm.call($this, id, health, weapon, bananas, snowballs, diggingRange, movementRange, 0, profession);
    $this.position = position;
    $this.previousPosition = position;
    return $this;
  }
  function WormBuilder() {
  }
  WormBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WormBuilder',
    interfaces: []
  };
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
      var destination = ArrayList_init();
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
    var $receiver = listOf([new Pair(CommandoWorm_getInstance(), config.commandoWorms), new Pair(AgentWorm_getInstance(), config.agentWorms), new Pair(TechnologistWorm_getInstance(), config.technologistWorms)]);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var builder = element.component1()
      , details = element.component2();
      var $receiver_0 = until(0, details.count);
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(builder);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_1, tmp$_0_0;
    var index = 0;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_1.add_11rb$(item_0.build_93d6f4$(checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0)) + 1 | 0, config));
    }
    var worms = destination_1;
    return new WormsPlayer(id, worms, config);
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
    return 'Progressing BattleRoyale';
  }
  function WormsRoundProcessor$processRound$lambda_1() {
    return 'Ticking worm frozen timers';
  }
  function WormsRoundProcessor$processRound$lambda_2() {
    return "Updating player's active worms";
  }
  function WormsRoundProcessor$processRound$lambda_3() {
    return 'Applying powerups';
  }
  function WormsRoundProcessor$processRound$lambda_4() {
    return 'Adding kill scores for dead worms';
  }
  function WormsRoundProcessor$processRound$lambda_5() {
    return 'Removing dead worms from the map';
  }
  function WormsRoundProcessor$processRound$lambda_6() {
    return 'Checking for referee issues';
  }
  WormsRoundProcessor.prototype.processRound_wfe2xc$ = function (wormsMap, wormsCommands) {
    var tmp$;
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$processRound$lambda(wormsMap));
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$processRound$lambda_0);
    wormsMap.progressBattleRoyale_8h9dqi$(this.config);
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$processRound$lambda_1);
    wormsMap.tickFrozenTimers();
    var mutableCommandsMap = toMutableMap(wormsCommands);
    this.executeSelectCommands_0(mutableCommandsMap, wormsMap);
    this.executeOtherCommands_0(mutableCommandsMap, wormsMap);
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$processRound$lambda_2);
    tmp$ = wormsMap.livingPlayers.iterator();
    while (tmp$.hasNext()) {
      var player = tmp$.next();
      player.selectNextWorm();
    }
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$processRound$lambda_3);
    wormsMap.applyHealthPacks();
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$processRound$lambda_4);
    wormsMap.setScoresForKilledWorms_8h9dqi$(this.config);
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$processRound$lambda_5);
    wormsMap.removeDeadWorms();
    WormsRoundProcessor$Companion_getInstance().logger_0.info_nq59yw$(WormsRoundProcessor$processRound$lambda_6);
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
      var destination_0 = ArrayList_init();
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
        var answer = ArrayList_init();
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
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
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
    var destination = ArrayList_init();
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
    this.previousCommand = CommandStrings$NOTHING_getInstance().string;
    this.worms = emptyList();
    this.consoleHealth = player.health;
  }
  function PrintablePlayer$Companion() {
    PrintablePlayer$Companion_instance = this;
  }
  PrintablePlayer$Companion.prototype.isPerspectivePlayer_jenssx$ = function (player, perspectivePlayer) {
    return equals(player, perspectivePlayer) || perspectivePlayer == null;
  };
  PrintablePlayer$Companion.prototype.buildForPerspectivePlayer_oo18uz$ = function (player, perspectivePlayer, wormsMap) {
    var playerForPerspectivePlayer = new PrintablePlayer(player);
    var $receiver = player.worms;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
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
    playerForPerspectivePlayer.previousCommand = this.getLastCommand_0(wormsMap, player);
    return playerForPerspectivePlayer;
  };
  PrintablePlayer$Companion.prototype.getLastCommand_0 = function (wormsMap, player) {
    var tmp$;
    var $receiver = wormsMap.getFeedback_za3lpa$(wormsMap.currentRound - 1 | 0);
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.playerId === player.id)
        destination.add_11rb$(element);
    }
    var feedback = destination;
    switch (feedback.size) {
      case 1:
        tmp$ = feedback.get_za3lpa$(0).command;
        break;
      case 2:
        tmp$ = this.extractSelectCommand_0(feedback);
        break;
      default:tmp$ = CommandStrings$NOTHING_getInstance().string;
        break;
    }
    return tmp$;
  };
  PrintablePlayer$Companion.prototype.extractSelectCommand_0 = function (feedback) {
    var tmp$, tmp$_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      tmp$_1 = feedback.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (startsWith(element.command, 'select')) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var selectCommand = firstOrNull$result;
    var firstOrNull$result_0;
    firstOrNull$break: do {
      var tmp$_2;
      tmp$_2 = feedback.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        if (!startsWith(element_0.command, 'select')) {
          firstOrNull$result_0 = element_0;
          break firstOrNull$break;
        }
      }
      firstOrNull$result_0 = null;
    }
     while (false);
    var otherCommand = firstOrNull$result_0;
    return ((tmp$ = selectCommand != null ? selectCommand.command : null) != null ? tmp$ : CommandStrings$NOTHING_getInstance().string) + '; ' + ((tmp$_0 = otherCommand != null ? otherCommand.command : null) != null ? tmp$_0 : CommandStrings$NOTHING_getInstance().string);
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
      var destination = ArrayList_init_0(collectionSizeOrDefault(tmp$, 10));
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
    this.snowballs = null;
    this.diggingRange = worm.diggingRange;
    this.movementRange = worm.movementRange;
    this.roundsUntilUnfrozen = worm.roundsUntilUnfrozen;
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
      wormForPerspectivePlayer.snowballs = worm.snowballs;
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
    result.roundsUntilUnfrozen = null;
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
    this.lavaDamage = config.lavaDamage;
    this.mapSize = wormsMap.size;
    var tmp$, tmp$_0;
    this.currentWormId = (tmp$ = player != null ? player.currentWorm : null) != null ? tmp$.id : null;
    this.consecutiveDoNothingCount = player != null ? player.consecutiveDoNothingsCount : null;
    if (player != null)
      tmp$_0 = PrintablePlayer$Companion_getInstance().buildForPerspectivePlayer_oo18uz$(player, player, wormsMap);
    else
      tmp$_0 = null;
    this.myPlayer = tmp$_0;
    var $receiver = wormsMap.players;
    var destination = ArrayList_init();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (!equals(element, player))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_2;
    tmp$_2 = destination.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      destination_0.add_11rb$(PrintablePlayer$Companion_getInstance().buildForPerspectivePlayer_oo18uz$(item, player, wormsMap));
    }
    this.opponents = destination_0;
    this.map = chunked(this.modifyCellsForPlayer_0(wormsMap.cells, player), wormsMap.size);
    var $receiver_0 = wormsMap.getVisualizerEvents();
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_3;
    tmp$_3 = $receiver_0.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      destination_1.add_11rb$(new PrintableVisualizerEvent(item_0));
    }
    this.visualizerEvents = destination_1;
  }
  WormsGameDetails.prototype.modifyCellsForPlayer_0 = function (arrayMap, player) {
    var destination = ArrayList_init_0(collectionSizeOrDefault(arrayMap, 10));
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
    if (player == null) {
      throw UnsupportedOperationException_init('Cannot call Console Render with a null player parameter');
    }
    var wormPosition = player.currentWorm.position;
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
    if (player == null) {
      throw UnsupportedOperationException_init('Cannot call CSV Render with a null player parameter');
    }
    if (wormsMap.currentRound === 1) {
      var $receiver = player.worms;
      var destination = ArrayList_init();
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
        if (element_0.playerId === player.id && !startsWith(element_0.command, 'select')) {
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
    var standardFields = listOf([wormsMap.currentRound, commandType, '"' + toString(command) + '"', player.previousWorm.id, player.totalScore, player.health]);
    var $receiver_1 = player.worms;
    var destination_0 = ArrayList_init();
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
    if (player == null) {
      throw UnsupportedOperationException_init('Cannot call Text Render with a null player parameter');
    }
    var wormGameDetails = new WormsGameDetails(this.config_0, wormsMap, player);
    var matchDetails = trimMargin('\n' + '            |@01 Match Details' + '\n' + '            |Current round: ' + wormGameDetails.currentRound + '\n' + '            |Max rounds: ' + wormGameDetails.maxRounds + '\n' + '            |Map size: ' + wormGameDetails.mapSize + '\n' + '            |Current worm id: ' + toString(wormGameDetails.currentWormId) + '\n' + '            |Consecutive do nothing count: ' + toString(wormGameDetails.consecutiveDoNothingCount) + '\n' + '            |Players count: ' + wormsMap.players.size + '\n' + '            |Worms per player: ' + first(wormsMap.players).worms.size + '\n' + '            |Pushback damage: ' + wormGameDetails.pushbackDamage + '\n' + '            |Lava damage: ' + wormGameDetails.lavaDamage + '\n' + '            ');
    var tmp$;
    var accumulator = '';
    tmp$ = ensureNotNull(wormGameDetails.myPlayer).worms.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = accumulator + trimMargin('\n' + '                        ' + this.getBaseWormText_0(element) + '\n' + '                        ' + this.getWormWeaponDetails_0(element) + '\n' + '                        ' + this.getWormBananasDetails_0(element) + '\n' + '                        ' + this.getWormSnowballsDetails_0(element) + '\n' + '                        ');
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
    var legend = trimMargin('\n' + '            |@05 Legend' + '\n' + '            |DEEP_SPACE: ' + CellType$DEEP_SPACE_getInstance().printable + ' ASCII:219' + '\n' + '            |DIRT: ' + CellType$DIRT_getInstance().printable + ' ASCII:178' + '\n' + '            |AIR: ' + CellType$AIR_getInstance().printable + ' ASCII:176' + '\n' + '            |LAVA: ' + CellType$LAVA_getInstance().printable + '\n' + '            |HEALTH_PACK: ' + HealthPack$Companion_getInstance().PRINTABLE + ' ASCII:204, 185' + '\n' + '            |WORM_MARKER: 13 Example for:Player1, Worm3' + '\n' + '            ');
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
  WormsRendererText.prototype.getWormSnowballsDetails_0 = function (worm) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return '|Snowballs freeze duration: ' + toString((tmp$ = worm.snowballs) != null ? tmp$.freezeDuration : null) + '\n' + '                |Snowballs range: ' + toString((tmp$_0 = worm.snowballs) != null ? tmp$_0.range : null) + '\n' + '                |Snowballs count: ' + toString((tmp$_1 = worm.snowballs) != null ? tmp$_1.count : null) + '\n' + '                |Snowballs freeze radius: ' + toString((tmp$_2 = worm.snowballs) != null ? tmp$_2.freezeRadius : null);
  };
  WormsRendererText.prototype.addLinesCount_0 = function (section) {
    var lines = toMutableList(split(section, [WormsRenderer$Companion_getInstance().EOL]));
    lines.add_wxm5ur$(1, 'Section lines count: ' + (lines.size + 1 | 0));
    return joinToString(lines, WormsRenderer$Companion_getInstance().EOL);
  };
  WormsRendererText.prototype.getBasePlayerText_0 = function (player) {
    return '|Player id: ' + toString(player != null ? player.id : null) + '\n' + '                  |Score: ' + toString(player != null ? player.score : null) + '\n' + '                  |Selection Tokens: ' + toString(player != null ? player.remainingWormSelections : null) + '\n' + '                  |Previous Command: ' + toString(player != null ? player.previousCommand : null);
  };
  WormsRendererText.prototype.getBaseWormText_0 = function (worm) {
    var tmp$, tmp$_0;
    return '|' + WormsRenderer$Companion_getInstance().EOL + '\n' + '                  |Worm id: ' + worm.id + '\n' + '                  |Health: ' + toString(worm.health) + '\n' + '                  |Position x: ' + toString((tmp$ = worm.position) != null ? tmp$.x : null) + '\n' + '                  |Position y: ' + toString((tmp$_0 = worm.position) != null ? tmp$_0.y : null) + '\n' + '                  |Digging range: ' + toString(worm.diggingRange) + '\n' + '                  |Movement range: ' + toString(worm.movementRange) + '\n' + '                  |Rounds until unfrozen: ' + toString(worm.roundsUntilUnfrozen) + '\n' + '                  |Profession: ' + toString(worm.profession);
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
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
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
        var answer = ArrayList_init();
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
      var destination_1 = ArrayList_init_0(collectionSizeOrDefault(values, 10));
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
  GameRunner.prototype.getAllFeedback = function (wormsMap) {
    var $receiver = wormsMap.getAllFeedback();
    var destination = ArrayList_init_0($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.value);
    }
    return destination;
  };
  GameRunner.prototype.setCurrentRound = function (wormsMap, newValue) {
    wormsMap.currentRound = newValue;
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
  Object.defineProperty(CommandStrings, 'SNOWBALL', {
    get: CommandStrings$SNOWBALL_getInstance
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
  package$feedback.SnowballCommandFeedback = SnowballCommandFeedback;
  Object.defineProperty(SnowballResult, 'BULLSEYE', {
    get: SnowballResult$BULLSEYE_getInstance
  });
  Object.defineProperty(SnowballResult, 'TERRAIN', {
    get: SnowballResult$TERRAIN_getInstance
  });
  Object.defineProperty(SnowballResult, 'DEEP_SPACE', {
    get: SnowballResult$DEEP_SPACE_getInstance
  });
  package$feedback.SnowballResult = SnowballResult;
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
  package$implementation.SnowballCommand = SnowballCommand;
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
  Object.defineProperty(CellType, 'LAVA', {
    get: CellType$LAVA_getInstance
  });
  var package$map = package$engine.map || (package$engine.map = {});
  package$map.CellType = CellType;
  package$map.ImageProcessingInfo = ImageProcessingInfo;
  Object.defineProperty(MapCell, 'Companion', {
    get: MapCell$Companion_getInstance
  });
  package$map.MapCell_init_tsn25k$ = MapCell_init;
  package$map.MapCell = MapCell;
  Object.defineProperty(Point, 'Companion', {
    get: Point$Companion_getInstance
  });
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
  Object.defineProperty(Snowballs, 'Companion', {
    get: Snowballs$Companion_getInstance
  });
  package$player.Snowballs = Snowballs;
  Object.defineProperty(package$player, 'TechnologistWorm', {
    get: TechnologistWorm_getInstance
  });
  Object.defineProperty(Weapon, 'Companion', {
    get: Weapon$Companion_getInstance
  });
  package$player.Weapon = Weapon;
  package$player.Worm_init_g1yrkq$ = Worm_init;
  package$player.Worm = Worm;
  package$player.WormBuilder = WormBuilder;
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


/***/ }),

/***/ "./kotlin-logging/kotlin-logging.js":
/*!******************************************!*\
  !*** ./kotlin-logging/kotlin-logging.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true)
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! kotlin */ "./node_modules/kotlin/kotlin.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toString = Kotlin.toString;
  var equals = Kotlin.equals;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  KotlinLoggingLevel.prototype = Object.create(Enum.prototype);
  KotlinLoggingLevel.prototype.constructor = KotlinLoggingLevel;
  var toStringSafe = defineInlineFunction('kotlin-logging.mu.internal.toStringSafe_qhgloa$', wrapFunction(function () {
    var toString = Kotlin.toString;
    var Exception = Kotlin.kotlin.Exception;
    return function ($receiver) {
      var tmp$;
      try {
        tmp$ = toString($receiver());
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          tmp$ = 'Log message invocation failed: ' + e;
        }
         else
          throw e;
      }
      return tmp$;
    };
  }));
  function ConsoleOutputPipes() {
    ConsoleOutputPipes_instance = this;
  }
  ConsoleOutputPipes.prototype.trace_s8jyv4$ = function (message) {
    console.log(message);
  };
  ConsoleOutputPipes.prototype.debug_s8jyv4$ = function (message) {
    console.log(message);
  };
  ConsoleOutputPipes.prototype.info_s8jyv4$ = function (message) {
    console.info(message);
  };
  ConsoleOutputPipes.prototype.warn_s8jyv4$ = function (message) {
    console.warn(message);
  };
  ConsoleOutputPipes.prototype.error_s8jyv4$ = function (message) {
    console.error(message);
  };
  ConsoleOutputPipes.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConsoleOutputPipes',
    interfaces: [OutputPipes]
  };
  var ConsoleOutputPipes_instance = null;
  function ConsoleOutputPipes_getInstance() {
    if (ConsoleOutputPipes_instance === null) {
      new ConsoleOutputPipes();
    }
    return ConsoleOutputPipes_instance;
  }
  function DefaultMessageFormatter() {
    DefaultMessageFormatter_instance = this;
  }
  var Exception = Kotlin.kotlin.Exception;
  DefaultMessageFormatter.prototype.formatMessage_pijeg6$ = function (level, loggerName, msg) {
    var tmp$ = level.name + ': [' + loggerName + '] ';
    var tmp$_0;
    try {
      tmp$_0 = toString(msg());
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        tmp$_0 = 'Log message invocation failed: ' + e;
      }
       else
        throw e;
    }
    return tmp$ + tmp$_0;
  };
  DefaultMessageFormatter.prototype.formatMessage_hqgb2y$ = function (level, loggerName, t, msg) {
    var tmp$ = level.name + ': [' + loggerName + '] ';
    var tmp$_0;
    try {
      tmp$_0 = toString(msg());
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        tmp$_0 = 'Log message invocation failed: ' + e;
      }
       else
        throw e;
    }
    return tmp$ + tmp$_0 + this.throwableToString_0(t);
  };
  DefaultMessageFormatter.prototype.formatMessage_i9qi47$ = function (level, loggerName, marker, msg) {
    var tmp$ = level.name + ': [' + loggerName + '] ' + toString(marker != null ? marker.getName() : null) + ' ';
    var tmp$_0;
    try {
      tmp$_0 = toString(msg());
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        tmp$_0 = 'Log message invocation failed: ' + e;
      }
       else
        throw e;
    }
    return tmp$ + tmp$_0;
  };
  DefaultMessageFormatter.prototype.formatMessage_fud0c7$ = function (level, loggerName, marker, t, msg) {
    var tmp$ = level.name + ': [' + loggerName + '] ' + toString(marker != null ? marker.getName() : null) + ' ';
    var tmp$_0;
    try {
      tmp$_0 = toString(msg());
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        tmp$_0 = 'Log message invocation failed: ' + e;
      }
       else
        throw e;
    }
    return tmp$ + tmp$_0 + this.throwableToString_0(t);
  };
  DefaultMessageFormatter.prototype.throwableToString_0 = function ($receiver) {
    if ($receiver == null) {
      return '';
    }
    var msg = '';
    var current = $receiver;
    while (current != null && !equals(current.cause, current)) {
      msg += ", Caused by: '" + toString(current.message) + "'";
      current = current.cause;
    }
    return msg;
  };
  DefaultMessageFormatter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DefaultMessageFormatter',
    interfaces: [MessageFormatter]
  };
  var DefaultMessageFormatter_instance = null;
  function DefaultMessageFormatter_getInstance() {
    if (DefaultMessageFormatter_instance === null) {
      new DefaultMessageFormatter();
    }
    return DefaultMessageFormatter_instance;
  }
  function KLogger() {
  }
  KLogger.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KLogger',
    interfaces: []
  };
  function KMarkerFactory() {
    KMarkerFactory_instance = this;
  }
  KMarkerFactory.prototype.getMarker_61zpoe$ = function (name) {
    return new MarkerJS(name);
  };
  KMarkerFactory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KMarkerFactory',
    interfaces: []
  };
  var KMarkerFactory_instance = null;
  function KMarkerFactory_getInstance() {
    if (KMarkerFactory_instance === null) {
      new KMarkerFactory();
    }
    return KMarkerFactory_instance;
  }
  function KotlinLogging() {
    KotlinLogging_instance = this;
  }
  KotlinLogging.prototype.logger_o14v8n$ = function (func) {
    return new KLoggerJS(get_js(Kotlin.getKClassFromExpression(func)).name);
  };
  KotlinLogging.prototype.logger_61zpoe$ = function (name) {
    return new KLoggerJS(name);
  };
  KotlinLogging.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KotlinLogging',
    interfaces: []
  };
  var KotlinLogging_instance = null;
  function KotlinLogging_getInstance() {
    if (KotlinLogging_instance === null) {
      new KotlinLogging();
    }
    return KotlinLogging_instance;
  }
  var LOG_LEVEL;
  function KotlinLoggingLevel(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function KotlinLoggingLevel_initFields() {
    KotlinLoggingLevel_initFields = function () {
    };
    KotlinLoggingLevel$TRACE_instance = new KotlinLoggingLevel('TRACE', 0);
    KotlinLoggingLevel$DEBUG_instance = new KotlinLoggingLevel('DEBUG', 1);
    KotlinLoggingLevel$INFO_instance = new KotlinLoggingLevel('INFO', 2);
    KotlinLoggingLevel$WARN_instance = new KotlinLoggingLevel('WARN', 3);
    KotlinLoggingLevel$ERROR_instance = new KotlinLoggingLevel('ERROR', 4);
  }
  var KotlinLoggingLevel$TRACE_instance;
  function KotlinLoggingLevel$TRACE_getInstance() {
    KotlinLoggingLevel_initFields();
    return KotlinLoggingLevel$TRACE_instance;
  }
  var KotlinLoggingLevel$DEBUG_instance;
  function KotlinLoggingLevel$DEBUG_getInstance() {
    KotlinLoggingLevel_initFields();
    return KotlinLoggingLevel$DEBUG_instance;
  }
  var KotlinLoggingLevel$INFO_instance;
  function KotlinLoggingLevel$INFO_getInstance() {
    KotlinLoggingLevel_initFields();
    return KotlinLoggingLevel$INFO_instance;
  }
  var KotlinLoggingLevel$WARN_instance;
  function KotlinLoggingLevel$WARN_getInstance() {
    KotlinLoggingLevel_initFields();
    return KotlinLoggingLevel$WARN_instance;
  }
  var KotlinLoggingLevel$ERROR_instance;
  function KotlinLoggingLevel$ERROR_getInstance() {
    KotlinLoggingLevel_initFields();
    return KotlinLoggingLevel$ERROR_instance;
  }
  KotlinLoggingLevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KotlinLoggingLevel',
    interfaces: [Enum]
  };
  function KotlinLoggingLevel$values() {
    return [KotlinLoggingLevel$TRACE_getInstance(), KotlinLoggingLevel$DEBUG_getInstance(), KotlinLoggingLevel$INFO_getInstance(), KotlinLoggingLevel$WARN_getInstance(), KotlinLoggingLevel$ERROR_getInstance()];
  }
  KotlinLoggingLevel.values = KotlinLoggingLevel$values;
  function KotlinLoggingLevel$valueOf(name) {
    switch (name) {
      case 'TRACE':
        return KotlinLoggingLevel$TRACE_getInstance();
      case 'DEBUG':
        return KotlinLoggingLevel$DEBUG_getInstance();
      case 'INFO':
        return KotlinLoggingLevel$INFO_getInstance();
      case 'WARN':
        return KotlinLoggingLevel$WARN_getInstance();
      case 'ERROR':
        return KotlinLoggingLevel$ERROR_getInstance();
      default:throwISE('No enum constant mu.KotlinLoggingLevel.' + name);
    }
  }
  KotlinLoggingLevel.valueOf_61zpoe$ = KotlinLoggingLevel$valueOf;
  function isLoggingEnabled($receiver) {
    return $receiver.ordinal >= LOG_LEVEL.ordinal;
  }
  var outputPipes;
  var messageFormatter;
  function Marker() {
  }
  Marker.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Marker',
    interfaces: []
  };
  function MessageFormatter() {
  }
  MessageFormatter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MessageFormatter',
    interfaces: []
  };
  function OutputPipes() {
  }
  OutputPipes.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'OutputPipes',
    interfaces: []
  };
  function KLoggerJS(loggerName, pipes, formatter) {
    if (pipes === void 0)
      pipes = outputPipes;
    if (formatter === void 0)
      formatter = messageFormatter;
    this.loggerName_0 = loggerName;
    this.pipes_0 = pipes;
    this.formatter_0 = formatter;
  }
  KLoggerJS.prototype.trace_nq59yw$ = function (msg) {
    this.logIfEnabled_0(KotlinLoggingLevel$TRACE_getInstance(), msg, getCallableRef('trace', function ($receiver, message) {
      return $receiver.trace_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.debug_nq59yw$ = function (msg) {
    this.logIfEnabled_0(KotlinLoggingLevel$DEBUG_getInstance(), msg, getCallableRef('debug', function ($receiver, message) {
      return $receiver.debug_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.info_nq59yw$ = function (msg) {
    this.logIfEnabled_0(KotlinLoggingLevel$INFO_getInstance(), msg, getCallableRef('info', function ($receiver, message) {
      return $receiver.info_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.warn_nq59yw$ = function (msg) {
    this.logIfEnabled_0(KotlinLoggingLevel$WARN_getInstance(), msg, getCallableRef('warn', function ($receiver, message) {
      return $receiver.warn_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.error_nq59yw$ = function (msg) {
    this.logIfEnabled_0(KotlinLoggingLevel$ERROR_getInstance(), msg, getCallableRef('error', function ($receiver, message) {
      return $receiver.error_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.trace_ca4k3s$ = function (t, msg) {
    this.logIfEnabled_1(KotlinLoggingLevel$TRACE_getInstance(), msg, t, getCallableRef('trace', function ($receiver, message) {
      return $receiver.trace_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.debug_ca4k3s$ = function (t, msg) {
    this.logIfEnabled_1(KotlinLoggingLevel$DEBUG_getInstance(), msg, t, getCallableRef('debug', function ($receiver, message) {
      return $receiver.debug_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.info_ca4k3s$ = function (t, msg) {
    this.logIfEnabled_1(KotlinLoggingLevel$INFO_getInstance(), msg, t, getCallableRef('info', function ($receiver, message) {
      return $receiver.info_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.warn_ca4k3s$ = function (t, msg) {
    this.logIfEnabled_1(KotlinLoggingLevel$WARN_getInstance(), msg, t, getCallableRef('warn', function ($receiver, message) {
      return $receiver.warn_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.error_ca4k3s$ = function (t, msg) {
    this.logIfEnabled_1(KotlinLoggingLevel$ERROR_getInstance(), msg, t, getCallableRef('error', function ($receiver, message) {
      return $receiver.error_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.trace_8jakm3$ = function (marker, msg) {
    this.logIfEnabled_2(KotlinLoggingLevel$TRACE_getInstance(), marker, msg, getCallableRef('trace', function ($receiver, message) {
      return $receiver.trace_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.debug_8jakm3$ = function (marker, msg) {
    this.logIfEnabled_2(KotlinLoggingLevel$DEBUG_getInstance(), marker, msg, getCallableRef('debug', function ($receiver, message) {
      return $receiver.debug_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.info_8jakm3$ = function (marker, msg) {
    this.logIfEnabled_2(KotlinLoggingLevel$INFO_getInstance(), marker, msg, getCallableRef('info', function ($receiver, message) {
      return $receiver.info_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.warn_8jakm3$ = function (marker, msg) {
    this.logIfEnabled_2(KotlinLoggingLevel$WARN_getInstance(), marker, msg, getCallableRef('warn', function ($receiver, message) {
      return $receiver.warn_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.error_8jakm3$ = function (marker, msg) {
    this.logIfEnabled_2(KotlinLoggingLevel$ERROR_getInstance(), marker, msg, getCallableRef('error', function ($receiver, message) {
      return $receiver.error_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.trace_o4svvp$ = function (marker, t, msg) {
    this.logIfEnabled_3(KotlinLoggingLevel$TRACE_getInstance(), marker, msg, t, getCallableRef('trace', function ($receiver, message) {
      return $receiver.trace_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.debug_o4svvp$ = function (marker, t, msg) {
    this.logIfEnabled_3(KotlinLoggingLevel$DEBUG_getInstance(), marker, msg, t, getCallableRef('debug', function ($receiver, message) {
      return $receiver.debug_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.info_o4svvp$ = function (marker, t, msg) {
    this.logIfEnabled_3(KotlinLoggingLevel$INFO_getInstance(), marker, msg, t, getCallableRef('info', function ($receiver, message) {
      return $receiver.info_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.warn_o4svvp$ = function (marker, t, msg) {
    this.logIfEnabled_3(KotlinLoggingLevel$WARN_getInstance(), marker, msg, t, getCallableRef('warn', function ($receiver, message) {
      return $receiver.warn_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.error_o4svvp$ = function (marker, t, msg) {
    this.logIfEnabled_3(KotlinLoggingLevel$ERROR_getInstance(), marker, msg, t, getCallableRef('error', function ($receiver, message) {
      return $receiver.error_s8jyv4$(message), Unit;
    }.bind(null, this.pipes_0)));
  };
  KLoggerJS.prototype.logIfEnabled_0 = function ($receiver, msg, logFunction) {
    if (isLoggingEnabled($receiver)) {
      logFunction(this.formatMessage_pijeg6$($receiver, this.loggerName_0, msg));
    }
  };
  KLoggerJS.prototype.logIfEnabled_1 = function ($receiver, msg, t, logFunction) {
    if (isLoggingEnabled($receiver)) {
      logFunction(this.formatMessage_hqgb2y$($receiver, this.loggerName_0, t, msg));
    }
  };
  KLoggerJS.prototype.logIfEnabled_2 = function ($receiver, marker, msg, logFunction) {
    if (isLoggingEnabled($receiver)) {
      logFunction(this.formatMessage_i9qi47$($receiver, this.loggerName_0, marker, msg));
    }
  };
  KLoggerJS.prototype.logIfEnabled_3 = function ($receiver, marker, msg, t, logFunction) {
    if (isLoggingEnabled($receiver)) {
      logFunction(this.formatMessage_fud0c7$($receiver, this.loggerName_0, marker, t, msg));
    }
  };
  KLoggerJS.prototype.formatMessage_pijeg6$ = function (level, loggerName, msg) {
    return this.formatter_0.formatMessage_pijeg6$(level, loggerName, msg);
  };
  KLoggerJS.prototype.formatMessage_hqgb2y$ = function (level, loggerName, t, msg) {
    return this.formatter_0.formatMessage_hqgb2y$(level, loggerName, t, msg);
  };
  KLoggerJS.prototype.formatMessage_i9qi47$ = function (level, loggerName, marker, msg) {
    return this.formatter_0.formatMessage_i9qi47$(level, loggerName, marker, msg);
  };
  KLoggerJS.prototype.formatMessage_fud0c7$ = function (level, loggerName, marker, t, msg) {
    return this.formatter_0.formatMessage_fud0c7$(level, loggerName, marker, t, msg);
  };
  KLoggerJS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KLoggerJS',
    interfaces: [MessageFormatter, KLogger]
  };
  function MarkerJS(name) {
    this.name_0 = name;
  }
  MarkerJS.prototype.getName = function () {
    return this.name_0;
  };
  MarkerJS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MarkerJS',
    interfaces: [Marker]
  };
  var package$mu = _.mu || (_.mu = {});
  var package$internal = package$mu.internal || (package$mu.internal = {});
  package$internal.toStringSafe_qhgloa$ = toStringSafe;
  Object.defineProperty(package$mu, 'ConsoleOutputPipes', {
    get: ConsoleOutputPipes_getInstance
  });
  $$importsForInline$$['kotlin-logging'] = _;
  Object.defineProperty(package$mu, 'DefaultMessageFormatter', {
    get: DefaultMessageFormatter_getInstance
  });
  package$mu.KLogger = KLogger;
  Object.defineProperty(package$mu, 'KMarkerFactory', {
    get: KMarkerFactory_getInstance
  });
  Object.defineProperty(package$mu, 'KotlinLogging', {
    get: KotlinLogging_getInstance
  });
  Object.defineProperty(package$mu, 'LOG_LEVEL', {
    get: function () {
      return LOG_LEVEL;
    },
    set: function (value) {
      LOG_LEVEL = value;
    }
  });
  Object.defineProperty(KotlinLoggingLevel, 'TRACE', {
    get: KotlinLoggingLevel$TRACE_getInstance
  });
  Object.defineProperty(KotlinLoggingLevel, 'DEBUG', {
    get: KotlinLoggingLevel$DEBUG_getInstance
  });
  Object.defineProperty(KotlinLoggingLevel, 'INFO', {
    get: KotlinLoggingLevel$INFO_getInstance
  });
  Object.defineProperty(KotlinLoggingLevel, 'WARN', {
    get: KotlinLoggingLevel$WARN_getInstance
  });
  Object.defineProperty(KotlinLoggingLevel, 'ERROR', {
    get: KotlinLoggingLevel$ERROR_getInstance
  });
  package$mu.KotlinLoggingLevel = KotlinLoggingLevel;
  package$mu.isLoggingEnabled_pm19j7$ = isLoggingEnabled;
  Object.defineProperty(package$mu, 'outputPipes', {
    get: function () {
      return outputPipes;
    },
    set: function (value) {
      outputPipes = value;
    }
  });
  Object.defineProperty(package$mu, 'messageFormatter', {
    get: function () {
      return messageFormatter;
    },
    set: function (value) {
      messageFormatter = value;
    }
  });
  package$mu.Marker = Marker;
  package$mu.MessageFormatter = MessageFormatter;
  package$mu.OutputPipes = OutputPipes;
  package$internal.KLoggerJS = KLoggerJS;
  package$internal.MarkerJS = MarkerJS;
  LOG_LEVEL = KotlinLoggingLevel$INFO_getInstance();
  outputPipes = ConsoleOutputPipes_getInstance();
  messageFormatter = DefaultMessageFormatter_getInstance();
  Kotlin.defineModule('kotlin-logging', _);
  return _;
}));

//# sourceMappingURL=kotlin-logging.js.map


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        ],
        declarations: [],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <app-game-engine-visualiser></app-game-engine-visualiser>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _nested_game_engine_visualiser_game_engine_visualiser_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nested/game-engine-visualiser/game-engine-visualiser.component */ "./src/app/nested/game-engine-visualiser/game-engine-visualiser.component.ts");
/* harmony import */ var _nested_game_engine_visualiser_end_game_dialog_end_game_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nested/game-engine-visualiser/end-game-dialog/end-game-dialog.component */ "./src/app/nested/game-engine-visualiser/end-game-dialog/end-game-dialog.component.ts");
/* harmony import */ var _common_mat_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/mat-components.module */ "./src/app/common/mat-components.module.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _nested_game_engine_visualiser_game_engine_visualiser_component__WEBPACK_IMPORTED_MODULE_6__["GameEngineVisualiserComponent"],
            _nested_game_engine_visualiser_end_game_dialog_end_game_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EndGameDialogComponent"],
        ],
        entryComponents: [_nested_game_engine_visualiser_end_game_dialog_end_game_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EndGameDialogComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _common_mat_components_module__WEBPACK_IMPORTED_MODULE_8__["MatComponentsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
        ],
        providers: [
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: true } },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/mat-components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/common/mat-components.module.ts ***!
  \*************************************************/
/*! exports provided: MatComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatComponentsModule", function() { return MatComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let MatComponentsModule = class MatComponentsModule {
};
MatComponentsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
        ],
        entryComponents: [],
        declarations: []
    })
], MatComponentsModule);



/***/ }),

/***/ "./src/app/nested/game-engine-visualiser/bot/ReferenceBot.js":
/*!*******************************************************************!*\
  !*** ./src/app/nested/game-engine-visualiser/bot/ReferenceBot.js ***!
  \*******************************************************************/
/*! exports provided: executeRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeRound", function() { return executeRound; });
// "use strict";

// let fs = require('fs');
// let readline = require('readline');
const stateFileName = "state.json";

let myPlayer;
let opponent;
let gameMap;
let mapSize;

/**
 * @typedef Point {x: number, y: number}
 * @typedef Cell {x: number, y: number, type: string, occupier : object, powerup: object}
 * */

/**
 * @type {Cell[]}
 */
let cells;
let myCurrentWorm;

let strategies = {
    powerups: powerupStrategy,
    attack: attackStrategy,
    follow: followStrategy,
    hunt: huntStrategy,
};

/**
 * Maps worm ids to strategies
 */
let strategyPriorities = {
    1: [strategies.powerups(), strategies.hunt(1), strategies.attack()],
    2: [strategies.powerups(), strategies.hunt(1), strategies.follow(1), strategies.attack()],
    3: [strategies.powerups(), strategies.hunt(1), strategies.follow(1), strategies.follow(2), strategies.attack()]
};

let directions = [
    {name: 'E', x: 1, y: 0},
    {name: 'NE', x: 1, y: -1},
    {name: 'N', x: 0, y: -1},
    {name: 'NW', x: -1, y: -1},
    {name: 'W', x: -1, y: 0},
    {name: 'SW', x: -1, y: 1},
    {name: 'S', x: 0, y: 1},
    {name: 'SE', x: 1, y: 1}
];

let surfaceTypes = {
    DEEP_SPACE: 'DEEP_SPACE',
    AIR: 'AIR',
    DIRT: 'DIRT',
    LAVA: 'LAVA'
};

// let consoleReader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// consoleReader.on("line", (roundNumber) => {
//     executeRound(roundNumber); // Read in the current round number
// });

function executeRound(stateFile) {
    // Read the current state and choose an action
    // let stateFile = fs.readFileSync(`./rounds/${roundNumber}/${stateFileName}`);
    initializeEntities(stateFile);

    return runStrategy() || doNothingCommand();
}

/**
 * Initialize global variables from parsed state file
 */
function initializeEntities(gameState) {
    myPlayer = gameState.myPlayer;
    opponent = gameState.opponents[0];
    mapSize = gameState.mapSize;
    gameMap = gameState.map;
    cells = flatMap(gameMap);
    myCurrentWorm = myPlayer.worms.find(worm => worm.id === gameState.currentWormId);
}

/**
 * Run bot logic
 * @return {string} The bot's command
 */
function runStrategy() {
    let nearTarget = getApproachableOpponent();
    let targetPosition = nearTarget.worm.position;

    if (canBananaBombThem(nearTarget)) {
        return `banana ${targetPosition.x} ${targetPosition.y}`;
    } else if (canSnowballThem(nearTarget)) {
        return `snowball ${targetPosition.x} ${targetPosition.y}`;
    }

    // If other worms are in danger, we could SELECT them and give them a fighting chance
    if (myPlayer.remainingWormSelections > 0) {
        let otherWorms = myPlayer.worms.filter(worm => worm !== myCurrentWorm && worm.health > 0);
        for (let worm of otherWorms) {
            let cellAndTarget = getShootableOpponent(worm);
            if (cellAndTarget) {
                return `select ${worm.id};shoot ${cellAndTarget.direction}`;
            }
        }
    }

    // If myCurrentWorm is in danger, defend yourself
    let cellAndTarget = getShootableOpponent(myCurrentWorm);
    if (cellAndTarget) {
        return `shoot ${cellAndTarget.direction}`;
    }

    for (let strategy of strategyPriorities[myCurrentWorm.id]) {
        if (strategy.shouldExecute()) {
            return strategy.execute()
        }
    }
}

function canBananaBombThem(target) {
    return myCurrentWorm.bananaBombs
        && myCurrentWorm.bananaBombs.count > 0
        && target.distance <= myCurrentWorm.bananaBombs.range
        && target.distance > myCurrentWorm.bananaBombs.damageRadius * 0.75;
}

function canSnowballThem(target) {
    return myCurrentWorm.snowballs
        && myCurrentWorm.snowballs.count > 0
        && target.worm.roundsUntilUnfrozen == 0
        && target.distance <= myCurrentWorm.snowballs.range
        && target.distance > myCurrentWorm.snowballs.freezeRadius * Math.sqrt(2);
}

function doNothingCommand() {
    return `nothing`;
}

/**
 * A worm strategy that moves towards powerups
 */
function powerupStrategy() {
    return {
        name: 'powerups',
        shouldExecute: function () {
            return cells.some(c => c.powerup);
        },
        execute: function () {
            let nearPowerup = cells.filter(c => c.powerup)
                .map(c => ({
                    cell: c,
                    distance: euclideanDistance(myCurrentWorm.position, c)
                }))
                .sort((a, b) => a.distance - b.distance)[0];
            return digAndMoveTo(nearPowerup.cell);
        }
    };
}

/**
 * A worm strategy that moves towards the closest opponent
 */
function attackStrategy() {
    return {
        name: 'attack',
        shouldExecute: () => true,
        execute: function () {
            let nearTarget = getApproachableOpponent();
            return digAndMoveTo(nearTarget.worm.position);
        }
    }
}

/**
 * A worm strategy that follows another of my own worms
 */
function followStrategy(targetWormId) {
    return {
        name: 'follow',
        data: targetWormId,
        shouldExecute: function () {
            return myPlayer.worms
                .filter(w => w.health > 0)
                .find(w => w.id === targetWormId);
        },
        execute: function () {
            let leaderWorm = myPlayer.worms.find(w => w.id === targetWormId);
            if (euclideanDistance(myCurrentWorm.position, leaderWorm.position) > 3) {
                return digAndMoveTo(leaderWorm.position);
            }
            let nearTarget = getApproachableOpponent();
            return digAndMoveTo(nearTarget.worm.position);
        }
    };
}

/**
 * A worm strategy that moves towards a specific enemy worm
 * @param targetWormId
 */
function huntStrategy(targetWormId) {
    return {
        name: 'hunt',
        data: targetWormId,
        shouldExecute: function () {
            return opponent.worms
                .filter(w => w.health > 0)
                .find(w => w.id === targetWormId);
        },
        execute: function () {
            let preyWorm = opponent.worms.find(w => w.id === targetWormId);
            return digAndMoveTo(preyWorm.position);
        }
    }
}

/**
 * Returns a dig or move command towards the destination
 * @param destination {Point}
 * @return {string}
 */
function digAndMoveTo(destination) {
    let shortestPathCell = findNextCellInPath(myCurrentWorm.position, destination);

    if (shortestPathCell.occupier && shortestPathCell.occupier.playerId === myPlayer.id) {
        shortestPathCell = getRandomAdjacentCell();
    }

    if (shortestPathCell.type === surfaceTypes.DIRT) {
        return `dig ${shortestPathCell.x} ${shortestPathCell.y}`;

    } else if (shortestPathCell.type === surfaceTypes.AIR) {
        return `move ${shortestPathCell.x} ${shortestPathCell.y}`;
    }
}

/**
 * Find the cell adjacent to the origin that is the closest to the  destination
 * @param origin {Point}
 * @param destination {Point}
 * @return Cell
 */
function findNextCellInPath(origin, destination) {
    return cells.filter(c => !(c.x === origin.x && c.y === origin.y)
        && Math.abs(c.x - origin.x) <= 1
        && Math.abs(c.y - origin.y) <= 1)
        .map(c => ({
            cell: c,
            distance: euclideanDistance(destination, c)
        }))
        .sort((a, b) => a.distance - b.distance)[0]
        .cell;
}

/**
 * Find the closest opponent worm
 */
function getApproachableOpponent() {
    return opponent.worms.filter(w => w.health > 0)
        .map(w => ({
            worm: w,
            distance: euclideanDistance(myCurrentWorm.position, w.position)
        }))
        .sort((a, b) => a.distance - b.distance)[0];
}

/**
 * Get a random cell from all cells adjacent to my active worm
 * @return {Cell}
 */
function getRandomAdjacentCell() {
    let center = myCurrentWorm.position;
    let cellsAround = cells.filter(c => (c.x !== center.x || c.y !== center.y)
        && Math.abs(c.x - center.x) <= 1
        && Math.abs(c.y - center.y) <= 1);
    return cellsAround[Math.floor(Math.random() * cellsAround.length)];

}

/**
 * Add the x and y values of two coordinates together
 * @return Position
 */
function sumCoordinates(coordinateA, coordinateB) {
    return {
        x: coordinateA.x + coordinateB.x,
        y: coordinateA.y + coordinateB.y
    };
}

/**
 * Get any opponent worm that is in range and can be shot without being blocked
 */
function getShootableOpponent(worm) {
    let center = worm.position;
    let shootTemplates = getShootTemplates();

    for (let template of shootTemplates) {
        for (let deltaCoordinate of template.coordinates) {
            let coordinateToCheck = sumCoordinates(center, deltaCoordinate);
            if (coordinateIsOutOfBounds(coordinateToCheck)
                || euclideanDistance(coordinateToCheck, center) > worm.weapon.range) {
                break;
            }
            let cellToInspect = gameMap[coordinateToCheck.y][coordinateToCheck.x];
            if (cellToInspect.type === surfaceTypes.DIRT
                || cellToInspect.type === surfaceTypes.DEEP_SPACE
                || (cellToInspect.occupier && cellToInspect.occupier.playerId === myPlayer.id)) {
                break;
            }

            let isOccupiedByOpponentWorm = (cellToInspect.occupier && cellToInspect.occupier.playerId !== myPlayer.id);
            if (isOccupiedByOpponentWorm) {
                return {cell: cellToInspect, direction: template.name};
            }
        }
    }

    return null;
}

/**
 * Check if a coordinate is in the map bounds
 * @param coordinateToCheck {Point}
 * @return {boolean}
 */
function coordinateIsOutOfBounds(coordinateToCheck) {
    return coordinateToCheck.x < 0
        || coordinateToCheck.x >= mapSize
        || coordinateToCheck.y < 0
        || coordinateToCheck.y >= mapSize;
}

/**
 * Get the lines the active worm can shoot in
 */
function getShootTemplates() {
    let shootTemplates = [];

    for (let direction of directions) {
        let currentDirectionLine = buildDirectionLine(direction);
        shootTemplates.push({name: direction.name, coordinates: currentDirectionLine});
    }
    return shootTemplates;
}

/**
 * Build a list of all cells in a specific direction withing shooting range of my active worm
 * @param direction
 */
function buildDirectionLine(direction) {
    let currentDirectionLine = [];
    for (let i = 1; i <= myCurrentWorm.weapon.range; i++) {
        let cellOfLine = {x: i * direction.x, y: i * direction.y};
        currentDirectionLine.push(cellOfLine);
    }
    return currentDirectionLine;
}


/**
 * Calculate the distance between two points
 * https://en.wikipedia.org/wiki/Euclidean_distance
 *
 * @param positionA {Point}
 * @param positionB {Point}
 * @return {number}
 */
function euclideanDistance(positionA, positionB) {
    return Math.sqrt(Math.pow(positionA.x - positionB.x, 2) + Math.pow(positionA.y - positionB.y, 2));
}

/***
 * Returns an array with one less level of nesting
 * @param array
 * @returns {Array}
 */
function flatMap(array) {
    return array.reduce((acc, x) => acc.concat(x), []);
}


/***/ }),

/***/ "./src/app/nested/game-engine-visualiser/bot/index.js":
/*!************************************************************!*\
  !*** ./src/app/nested/game-engine-visualiser/bot/index.js ***!
  \************************************************************/
/*! exports provided: executeRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReferenceBot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReferenceBot */ "./src/app/nested/game-engine-visualiser/bot/ReferenceBot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "executeRound", function() { return _ReferenceBot__WEBPACK_IMPORTED_MODULE_0__["executeRound"]; });




/***/ }),

/***/ "./src/app/nested/game-engine-visualiser/command-pair.ts":
/*!***************************************************************!*\
  !*** ./src/app/nested/game-engine-visualiser/command-pair.ts ***!
  \***************************************************************/
/*! exports provided: CommandPair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandPair", function() { return CommandPair; });
class CommandPair {
    constructor(player, command, type) {
        this.player = player;
        this.command = command;
        this.type = type;
    }
    static fromCommandPair(commandPair) {
        return new CommandPair(commandPair.player, commandPair.command, commandPair.type);
    }
    toPair() {
        return { first: this.player, second: this.command };
    }
}


/***/ }),

/***/ "./src/app/nested/game-engine-visualiser/end-game-dialog/end-game-dialog.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/nested/game-engine-visualiser/end-game-dialog/end-game-dialog.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"orange-font title\">{{data.message}}</h1>\n<h1 class=\"blue-font subtitle\">How about another match?</h1>\n\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close\n          class=\"orange-font subtitle close-button\">\n    <mat-icon>gavel</mat-icon>\n    ANOTHER!\n  </button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/nested/game-engine-visualiser/end-game-dialog/end-game-dialog.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/nested/game-engine-visualiser/end-game-dialog/end-game-dialog.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orange-font {\n  color: #f49100; }\n\n.blue-font {\n  color: #00b0f0; }\n\n._blue-panel, ::ng-deep .mat-dialog-container, .close-button {\n  background-color: rgba(0, 0, 0, 0.67);\n  border: #00b0f0 3px solid;\n  border-radius: 32px;\n  padding: 32px; }\n\n.title {\n  font-family: Heroes Legend, \"Helvetica Neue\", sans-serif; }\n\n.subtitle {\n  font-family: Arial-Rounded;\n  font-size: 22px; }\n\n.font-size-extra-large {\n  font-size: 4em; }\n\n.mat-card-remove-box {\n  box-shadow: unset;\n  padding: unset; }\n\n.align-text-center {\n  text-align: center; }\n\n::ng-deep mat-dialog-content {\n  overflow: hidden !important; }\n\n.close-button {\n  padding: 0 12px;\n  transition: 300ms ease-in-out; }\n\n.close-button:hover {\n    background-color: #fff3; }\n\nh1 {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/nested/game-engine-visualiser/end-game-dialog/end-game-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/nested/game-engine-visualiser/end-game-dialog/end-game-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EndGameDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndGameDialogComponent", function() { return EndGameDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


class DialogData {
}
let EndGameDialogComponent = class EndGameDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
};
EndGameDialogComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-end-game-dialog',
        template: __webpack_require__(/*! ./end-game-dialog.component.html */ "./src/app/nested/game-engine-visualiser/end-game-dialog/end-game-dialog.component.html"),
        styles: [__webpack_require__(/*! ./end-game-dialog.component.scss */ "./src/app/nested/game-engine-visualiser/end-game-dialog/end-game-dialog.component.scss")],
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
], EndGameDialogComponent);



/***/ }),

/***/ "./src/app/nested/game-engine-visualiser/game-engine-visualiser.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/nested/game-engine-visualiser/game-engine-visualiser.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-main-container\">\n  <!--  <progressive-loader class=\"fixed\"-->\n  <!--                      [hasOverlay]=\"false\"-->\n  <!--                      [full]=\"'/assets/images/full/groups-background.png'\"-->\n  <!--                      [thumb]=\"'/assets/images/thumbs/groups-background.primitive.svg'\"></progressive-loader>-->\n  <div class=\"container\">\n\n    <div class=\"dashboard-container tutorial\">\n      <div class=\"explained\">\n        <div class=\"bi-container\">\n          <div class=\"orange-font flashing-tutorial\">Tutorial to Play Demo</div>\n          <div class=\"overlap-container upload-link\">\n            <input class=\"overlap\"\n                   #filesUpload\n                   hidden\n                   type=\"file\" webkitdirectory directory multiple\n                   (change)=\"handleFileInput($event.target.files)\">\n            <span class=\"overlap blue-font subtitle\"\n                  (click)=\"filesUpload.click()\"> or upload match-logs to replay</span>\n          </div>\n        </div>\n        <div class=\"orange-font tutorial-container\">\n          <div>You are commanding the worm marked with the green box</div>\n          <div class=\"small-icon selector-corners-real\"></div>\n        </div>\n        <div class=\"orange-font tutorial-container\">\n          <div>Click on these red squares to issue a command</div>\n          <div class=\"small-icon basic-commands\"></div>\n        </div>\n        <div class=\"orange-font tutorial-container\">\n          <div>Yellow dots are for advanced commands</div>\n          <div class=\"small-icon banana-command\"></div>\n        </div>\n        <div class=\"orange-font tutorial-container\">\n          <div>Blue boxes indicate ally worms</div>\n          <div class=\"small-icon self-commands\"></div>\n        </div>\n\n        <h1>Round {{dashboard?.currentRound}}</h1>\n      </div>\n\n    </div>\n\n    <div class=\"dashboard-container\">\n      <div *ngFor=\"let details of dashboard?.players\" class=\"dashboard-details\">\n        <div class=\"player\">Player {{details.playerId}}</div>\n        <div class=\"worms\">Worms</div>\n        <div class=\"worms-v orange-font\">{{details.livingWormsCount}}</div>\n        <div class=\"score\">Score</div>\n        <div class=\"score-v orange-font\">{{details.totalScore}}</div>\n        <div class=\"selects\">Selection Tokens</div>\n        <div class=\"selects-v orange-font\">{{details.wormSelectionTokens}}</div>\n        <div class=\"bananas\">Bananas</div>\n        <div class=\"bananas-v orange-font\">{{details.bananasCount}}</div>\n        <div class=\"snowballs\">Snowballs</div>\n        <div class=\"snowballs-v orange-font\">{{details.snowballsCount}}</div>\n        <div *ngIf=\"details.roundErrors.length\"\n             class=\"errors\">Errors\n        </div>\n        <div *ngIf=\"details.roundErrors.length\"\n             class=\"errors-v orange-font\">{{details.roundErrors.length ? details.roundErrors : ''}}</div>\n\n        <div class=\"portraits\">\n          <div class=\"portrait-detail\" *ngFor=\"let worm of details.worms\">\n            <img class=\"image\"\n                 [class.is-selected-worm]=\"worm == player1?.currentWorm\"\n                 [src]=\"'assets/visualizer-assets/worm' + details.playerId + worm.id+ '.png'\"/>\n            <div class=\"image frost-icon\"\n                 *ngIf=\"worm.roundsUntilUnfrozen > 0\"\n                 [style.font-size.px]=\"gameMap?.mapStyle.powerupSize\">❄\n            </div>\n            <div class=\"health\">Health</div>\n            <div class=\"health-v orange-font\">{{worm.health}}</div>\n            <div class=\"profession\">Type</div>\n            <div class=\"profession-v orange-font\">{{worm.profession}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"screen-container\">\n\n      <div class=\"overlap-container map-view\">\n\n        <ng-container *ngFor=\"let worm of worms\">\n          <div class=\"worm-icon-container overlap overlap-container\"\n               [style.height.px]=\"gameMap?.mapStyle.cellSize\"\n               [style.width.px]=\"gameMap?.mapStyle.cellSize\"\n               [style.z-index]=\"zIndexLevelsEnum.worm\"\n               [style.transform]=\"'translate('+worm.position.x+'00%, '+worm.position.y+'00%)'\">\n            <img class=\"worm-icon overlap\"\n                 [class.on-turn]=\"worm === player1.currentWorm\"\n                 [src]=\"'assets/visualizer-assets/worm' + worm.player.id + worm.id + '.png'\"/>\n            <div class=\"overlap frost-icon\"\n                 *ngIf=\"worm.roundsUntilUnfrozen > 0\"\n                 [style.font-size.px]=\"gameMap?.mapStyle.powerupSize\">❄\n            </div>\n            <ng-container *ngIf=\"worm === player1.currentWorm\">\n              <div class=\"overlap\" [style.z-index]=\"zIndexLevelsEnum.cornerSelector - 1\"\n                   class=\"selector-corners-shadow overlap\"></div>\n              <div class=\"overlap\" [style.z-index]=\"zIndexLevelsEnum.cornerSelector\"\n                   class=\"selector-corners-real overlap\"></div>\n            </ng-container>\n          </div>\n        </ng-container>\n\n        <ng-container *ngFor=\"let event of shootEvents\">\n          <div class=\"overlap disable-clicks\"\n               [style.height.px]=\"gameMap?.mapStyle.cellSize\"\n               [style.width.px]=\"gameMap?.mapStyle.cellSize\"\n               [style.z-index]=\"zIndexLevelsEnum.shootLaser\"\n               [ngStyle]=\"{'transform': 'translate('+event.positionCenter.x*100+'%,'+event.positionCenter.y*100+'%) ' +\n            'rotate('+ event.rotation +'deg)'}\">\n            <div class=\"laser\" [style.transform]=\"'scaleX('+ event.laserLength +')'\"></div>\n          </div>\n        </ng-container>\n\n        <ng-container *ngFor=\"let event of bananaEvents\">\n          <div class=\"overlap disable-clicks overlap-container\"\n               [style.height.px]=\"gameMap?.mapStyle.cellSize\"\n               [style.width.px]=\"gameMap?.mapStyle.cellSize\"\n               [style.z-index]=\"zIndexLevelsEnum.bananaThrow\"\n               [ngStyle]=\"{'transform': 'translate('+event.positionStart.x*100+'%,'+event.positionStart.y*100+'%)'}\">\n            <div class=\"remove-banana-animation overlap\">\n              <div class=\"banana\"\n                   [style.font-size.px]=\"gameMap?.mapStyle.powerupSize\"\n                   [ngStyle]=\"{'transform': event.timeout\n                                    ? 'translate('+(event.positionRelative.x)*100+'%,'\n                                                  +(event.positionRelative.y)*100+'%)'\n                                    : ''}\">\n                <div class=\"icon\">🍌</div>\n              </div>\n            </div>\n            <div class=\"explosion overlap explosion-see-through\"\n                 *ngIf=\"event.result !== 'DEEP_SPACE'\"\n                 [style.background-image]=\"'url(\\'assets/visualizer-assets/big-explosion.gif'+ '?a=' + event.randomUrl +'\\')'\"\n                 [ngStyle]=\"{'transform': 'translate('+(event.positionRelative.x)*100+'%,'\n                                                  +(event.positionRelative.y)*100+'%)'\n                                    + 'scale('+ gameMap?.mapStyle.bananaBombScale +')'}\">\n            </div>\n          </div>\n        </ng-container>\n\n        <ng-container *ngFor=\"let event of snowballEvents\">\n          <div class=\"overlap disable-clicks overlap-container\"\n               [style.height.px]=\"gameMap?.mapStyle.cellSize\"\n               [style.width.px]=\"gameMap?.mapStyle.cellSize\"\n               [style.z-index]=\"zIndexLevelsEnum.bananaThrow\"\n               [ngStyle]=\"{'transform': 'translate('+event.positionStart.x*100+'%,'+event.positionStart.y*100+'%)'}\">\n            <div class=\"remove-banana-animation overlap\">\n              <div class=\"snowball\"\n                   [style.font-size.px]=\"gameMap?.mapStyle.powerupSize\"\n                   [ngStyle]=\"{'transform': event.timeout\n                                    ? 'translate('+(event.positionRelative.x)*100+'%,'\n                                                  +(event.positionRelative.y)*100+'%)'\n                                    : ''}\">\n                <div class=\"icon\">❄</div>\n              </div>\n            </div>\n            <div class=\"explosion overlap explosion-see-through\"\n                 *ngIf=\"event.result !== 'DEEP_SPACE'\"\n                 [style.background-image]=\"'url(\\'assets/visualizer-assets/frost-explosion.gif'+ '?a=' + event.randomUrl +'\\')'\"\n                 [ngStyle]=\"{'transform': 'translate('+(event.positionRelative.x)*100+'%,'\n                                                  +(event.positionRelative.y)*100+'%)'\n                                    + 'scale('+ gameMap?.mapStyle.snowballScale +')'}\">\n            </div>\n          </div>\n        </ng-container>\n\n        <div class=\"map-container overlap\"\n             [style.grid-template-rows]=\"gameMap?.mapStyle.gridStyle\"\n             [style.grid-template-columns]=\"gameMap?.mapStyle.gridStyle\"\n             [class.disable-clicks]=\"isPaused\">\n\n          <ng-container *ngFor=\"let cell of flatCells\">\n\n            <div class=\"overlap-container\"\n                 [class.hover-action-clickable]=\"(cell.isAllyWormCell\n                        && cell.occupier !== player1.currentWorm\n                        && player1.wormSelectionTokens > 0)\n                    || (cell.isAllyWormCell && cell.occupier === player1.currentWorm)\n                    || cell.isInDigMoveRange\n                    || cell.isInBananaRange\n                    || cell.isInSnowballRange\">\n\n              <div *ngIf=\"(cell.isAllyWormCell\n                        && cell.occupier !== player1.currentWorm\n                        && player1.wormSelectionTokens > 0)\n                    || (cell.isAllyWormCell && cell.occupier === player1.currentWorm)\n                    || cell.isInDigMoveRange\n                    || cell.isInBananaRange\n                    || cell.isInSnowballRange\"\n                   class=\"square overlap\"\n                   [matMenuTriggerFor]=\"actionsMenu\"\n                   [style.z-index]=\"zIndexLevelsEnum.actionMenu\">\n                <mat-menu #actionsMenu=\"matMenu\">\n                  <button *ngIf=\"cell.isInDigMoveRange\n                                && (cell.type.name$ == 'AIR' || cell.type.name$ == 'LAVA')\n                                && !cell.occupier\"\n                          mat-menu-item\n                          title=\"Move here\"\n                          (click)=\"doPlayerAction(cell, actionsEnum.MOVE)\">\n                    <div class=\"action-icon\">🏃‍♀️</div>\n                  </button>\n\n                  <button *ngIf=\"cell.isInDigMoveRange && cell.type.name$ == 'DIRT'\"\n                          mat-menu-item\n                          title=\"Dig here\"\n                          (click)=\"doPlayerAction(cell, actionsEnum.DIG)\">\n                    <div class=\"action-icon\">⛏</div>\n                  </button>\n\n                  <button *ngIf=\"cell.isInDigMoveRange\"\n                          mat-menu-item\n                          title=\"Shoot in this direction\"\n                          (click)=\"doPlayerAction(cell, actionsEnum.SHOOT)\">\n                    <div class=\"action-icon\">🔫</div>\n                  </button>\n\n                  <button *ngIf=\"cell.isInBananaRange\"\n                          mat-menu-item\n                          title=\"Throw Banana Bomb here\"\n                          (click)=\"doPlayerAction(cell, actionsEnum.BANANA)\">\n                    <div class=\"action-icon\">💣</div>\n                  </button>\n\n                  <button *ngIf=\"cell.isInSnowballRange\"\n                          mat-menu-item\n                          title=\"Throw Snowball here\"\n                          (click)=\"doPlayerAction(cell, actionsEnum.SNOWBALL)\">\n                    <div class=\"action-icon\">❄</div>\n                  </button>\n\n                  <button *ngIf=\"cell.isAllyWormCell && cell.occupier === player1.currentWorm\"\n                          mat-menu-item\n                          title=\"Do nothing for this round\"\n                          (click)=\"doPlayerAction(cell, actionsEnum.NOTHING)\">\n                    <div class=\"action-icon\">🤷‍♀️</div>\n                  </button>\n\n                  <button *ngIf=\"cell.isAllyWormCell\n                          && cell.occupier !== player1.currentWorm\n                          && player1.wormSelectionTokens > 0\"\n                          mat-menu-item\n                          title=\"Select this worm\"\n                          (click)=\"doPlayerAction(cell, actionsEnum.SELECT)\">\n                    <div class=\"action-icon\">👈</div>\n                  </button>\n                </mat-menu>\n\n                <div *ngIf=\"cell.isAllyWormCell\n                        && cell.occupier !== player1.currentWorm\n                        && player1.wormSelectionTokens > 0;\n                      else cell.isInDigMoveRange ? basicIndicator\n                      : (cell.isInBananaRange || cell.isInSnowballRange) ? bananaIndicator : ''\"\n                     class=\"self-commands\"></div>\n                <ng-template #basicIndicator>\n                  <div class=\"basic-commands\"></div>\n                </ng-template>\n                <ng-template #bananaIndicator>\n                  <div class=\"banana-command\"></div>\n                </ng-template>\n              </div>\n\n              <div *ngIf=\"cell.powerup\"\n                   class=\"powerup overlap\"\n                   [style.z-index]=\"zIndexLevelsEnum.powerup\"\n                   [title]=\"'Health'\"\n                   [style.height.px]=\"gameMap?.mapStyle.powerupSize\"\n                   [style.font-size.px]=\"gameMap?.mapStyle.powerupSize\">\n                🍎\n              </div>\n\n              <div class=\"square texture overlap\"\n                   [ngClass]=\"['' + cell.type.name$ + cell.styleNumber, '' + cell.type + 1]\"\n                   [style.z-index]=\"zIndexLevelsEnum.texture\">\n              </div>\n            </div>\n\n          </ng-container>\n\n        </div>\n      </div>\n\n      <div *ngIf=\"allRounds\">\n        <div class=\"round-slider-container\">\n          <div>1</div>\n          <mat-slider class=\"slider\"\n                      #slider\n                      [value]=\"selectedRound\"\n                      [min]=\"1\"\n                      [max]=\"maxRoundNumber\"\n                      [step]=\"1\"\n                      (input)=\"selectedRound = $event.value; startPlayback();\">\n          </mat-slider>\n          <div>{{maxRoundNumber}}</div>\n        </div>\n        <div class=\"buttons-container\">\n          <button mat-button (click)=\"startPlayback()\">\n            <mat-icon>play_arrow</mat-icon>\n          </button>\n          <button mat-button (click)=\"replayPause$.next()\">\n            <mat-icon>pause</mat-icon>\n          </button>\n          <button mat-button (click)=\"reloadPage()\">\n            <mat-icon>close</mat-icon>\n            UNLOAD\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/nested/game-engine-visualiser/game-engine-visualiser.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/nested/game-engine-visualiser/game-engine-visualiser.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orange-font, .round-slider-container {\n  color: #f49100; }\n\n.blue-font, .dashboard-container .dashboard-details, .dashboard-container .explained {\n  color: #00b0f0; }\n\n._blue-panel, .dashboard-container {\n  background-color: rgba(0, 0, 0, 0.67);\n  border: #00b0f0 3px solid;\n  border-radius: 32px;\n  padding: 32px; }\n\n.title, .dashboard-container .dashboard-details .player, .dashboard-container .explained .flashing-tutorial {\n  font-family: Heroes Legend, \"Helvetica Neue\", sans-serif; }\n\n.subtitle, .dashboard-container .dashboard-details, .dashboard-container .explained, .round-slider-container {\n  font-family: Arial-Rounded;\n  font-size: 22px; }\n\n.demo-main-container .container {\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  display: -ms-grid;\n  display: grid;\n      -ms-grid-rows: -webkit-max-content;\n      -ms-grid-rows: max-content;\n      grid-template-rows: -webkit-max-content;\n      grid-template-rows: max-content;\n      -ms-grid-columns: auto 16px auto;\n      grid-template-columns: auto auto;\n      grid-template-areas: 'tutorial tutorial' '. .';\n  grid-gap: 16px; }\n\n.background {\n  z-index: -9;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: black; }\n\n.background div {\n    width: 100%;\n    height: 100%;\n    -webkit-filter: blur(6px) brightness(0.3);\n            filter: blur(6px) brightness(0.3);\n    background-size: cover;\n    background-repeat: no-repeat; }\n\n.screen-container {\n  padding: 16px;\n  overflow: hidden; }\n\n.dashboard-container.tutorial {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 3;\n  grid-area: tutorial; }\n\n.dashboard-container .dashboard-details {\n  padding: 8px 0;\n  display: -ms-grid;\n  display: grid;\n  grid-gap: 4px 8px;\n      -ms-grid-columns: -webkit-max-content 4px 8px 40px 4px 8px -webkit-max-content 4px 8px 60px;\n      -ms-grid-columns: max-content 4px 8px 40px 4px 8px max-content 4px 8px 60px;\n      grid-template-columns: -webkit-max-content 40px -webkit-max-content 60px;\n      grid-template-columns: max-content 40px max-content 60px;\n      -ms-grid-rows: -webkit-max-content 4px 8px -webkit-max-content 4px 8px -webkit-max-content 4px 8px -webkit-max-content;\n      -ms-grid-rows: max-content 4px 8px max-content 4px 8px max-content 4px 8px max-content;\n      grid-template-rows: repeat(4, -webkit-max-content);\n      grid-template-rows: repeat(4, max-content);\n      grid-template-areas: 'player    player    score     score-v    ' 'worms     worms-v   bananas   bananas-v  ' 'selects   selects-v snowballs snowballs-v' 'portraits portraits portraits portraits  ' 'errors    errors-v  errors-v  errors-v   '; }\n\n.dashboard-container .dashboard-details .player {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 3;\n    grid-area: player; }\n\n.dashboard-container .dashboard-details .portraits {\n    -ms-grid-row: 7;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 7;\n    grid-area: portraits; }\n\n.dashboard-container .dashboard-details .worms {\n    -ms-grid-row: 3;\n    -ms-grid-column: 1;\n    grid-area: worms; }\n\n.dashboard-container .dashboard-details .worms-v {\n    -ms-grid-row: 3;\n    -ms-grid-column: 3;\n    grid-area: worms-v; }\n\n.dashboard-container .dashboard-details .score {\n    -ms-grid-row: 1;\n    -ms-grid-column: 5;\n    grid-area: score; }\n\n.dashboard-container .dashboard-details .score-v {\n    -ms-grid-row: 1;\n    -ms-grid-column: 7;\n    grid-area: score-v; }\n\n.dashboard-container .dashboard-details .selects {\n    -ms-grid-row: 5;\n    -ms-grid-column: 1;\n    grid-area: selects; }\n\n.dashboard-container .dashboard-details .selects-v {\n    -ms-grid-row: 5;\n    -ms-grid-column: 3;\n    grid-area: selects-v; }\n\n.dashboard-container .dashboard-details .bananas {\n    -ms-grid-row: 3;\n    -ms-grid-column: 5;\n    grid-area: bananas; }\n\n.dashboard-container .dashboard-details .bananas-v {\n    -ms-grid-row: 3;\n    -ms-grid-column: 7;\n    grid-area: bananas-v; }\n\n.dashboard-container .dashboard-details .snowballs {\n    -ms-grid-row: 5;\n    -ms-grid-column: 5;\n    grid-area: snowballs; }\n\n.dashboard-container .dashboard-details .snowballs-v {\n    -ms-grid-row: 5;\n    -ms-grid-column: 7;\n    grid-area: snowballs-v; }\n\n.dashboard-container .dashboard-details .errors {\n    -ms-grid-row: 9;\n    -ms-grid-column: 1;\n    grid-area: errors; }\n\n.dashboard-container .dashboard-details .score, .dashboard-container .dashboard-details .score-v {\n    -ms-grid-row-align: end;\n        align-self: end; }\n\n.dashboard-container .dashboard-details .player {\n    font-size: 22px;\n    font-weight: bold; }\n\n.dashboard-container .dashboard-details .portraits {\n    display: -ms-grid;\n    display: grid;\n    grid-gap: 16px; }\n\n.dashboard-container .dashboard-details .portraits .portrait-detail {\n      width: 100%;\n      display: -ms-grid;\n      display: grid;\n          -ms-grid-columns: -webkit-max-content 4px -webkit-max-content 4px -webkit-max-content;\n          -ms-grid-columns: max-content 4px max-content 4px max-content;\n          grid-template-columns: -webkit-max-content -webkit-max-content -webkit-max-content;\n          grid-template-columns: max-content max-content max-content;\n          -ms-grid-rows: -webkit-max-content 4px auto;\n          -ms-grid-rows: max-content 4px auto;\n          grid-template-rows: -webkit-max-content auto;\n          grid-template-rows: max-content auto;\n      grid-gap: 4px;\n          grid-template-areas: 'image health     health-v' 'image profession profession-v'; }\n\n.dashboard-container .dashboard-details .portraits .portrait-detail .image {\n        -ms-grid-row: 1;\n        -ms-grid-row-span: 3;\n        -ms-grid-column: 1;\n        grid-area: image; }\n\n.dashboard-container .dashboard-details .portraits .portrait-detail .health {\n        -ms-grid-row: 1;\n        -ms-grid-column: 3;\n        grid-area: health; }\n\n.dashboard-container .dashboard-details .portraits .portrait-detail .health-v {\n        -ms-grid-row: 1;\n        -ms-grid-column: 5;\n        grid-area: health-v; }\n\n.dashboard-container .dashboard-details .portraits .portrait-detail .profession {\n        -ms-grid-row: 3;\n        -ms-grid-column: 3;\n        grid-area: profession; }\n\n.dashboard-container .dashboard-details .portraits .portrait-detail .profession-v {\n        -ms-grid-row: 3;\n        -ms-grid-column: 5;\n        grid-area: profession-v; }\n\n.dashboard-container .dashboard-details .portraits .portrait-detail .image {\n        height: 60px;\n        -ms-grid-row: 1;\n        -ms-grid-row-span: 3;\n        -ms-grid-column: 1;\n        grid-area: image;\n        -webkit-filter: drop-shadow(0 0 8px #fff7);\n                filter: drop-shadow(0 0 8px #fff7);\n        padding: 0 8px;\n        border-left: 6px solid transparent; }\n\n.dashboard-container .dashboard-details .portraits .portrait-detail .image.is-selected-worm {\n          border-left: 6px solid #47ff3fff; }\n\n.dashboard-container .dashboard-details .portraits .portrait-detail .frost-icon {\n        -webkit-transform: scale(2);\n                transform: scale(2);\n        place-self: unset; }\n\n.dashboard-container .explained h1 {\n  text-align: center; }\n\n.dashboard-container .explained .tutorial-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto 20px;\n      grid-template-columns: auto 20px;\n  align-items: center; }\n\n.dashboard-container .explained .tutorial-container .small-icon {\n    -webkit-animation: unset;\n            animation: unset;\n    position: unset;\n    height: 25px;\n    width: 25px;\n    margin: 5px 0; }\n\n.dashboard-container .explained .flashing-tutorial {\n  margin-top: 10px;\n  font-size: 22px;\n  -webkit-animation: opacity-0-to-1 1500ms alternate 8;\n          animation: opacity-0-to-1 1500ms alternate 8; }\n\n.disable-clicks {\n  pointer-events: none; }\n\n.map-container {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  background-color: #242424;\n  border-radius: 20%;\n  display: -ms-grid;\n  display: grid;\n  place-content: center; }\n\n.square {\n  height: 100%;\n  width: 100%;\n  display: -ms-grid;\n  display: grid;\n  place-content: center;\n  color: #F5F5F5;\n  position: relative; }\n\n._command-overlay, .self-commands, .basic-commands, .banana-command {\n  position: absolute;\n  width: 50%;\n  height: 50%;\n  place-self: center;\n  -webkit-animation: opacity-0-to-1 750ms forwards;\n          animation: opacity-0-to-1 750ms forwards; }\n\n.self-commands {\n  border: 5px solid;\n  border-image-slice: 1;\n  border-image-outset: 0;\n  border-image-source: radial-gradient(transparent 80%, #00b0f0 92%);\n  -webkit-filter: drop-shadow(0px 0px 6px blue);\n          filter: drop-shadow(0px 0px 6px blue);\n  width: 100%;\n  height: 100%; }\n\n.basic-commands {\n  background-color: #9007;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-filter: drop-shadow(0px 0px 6px red);\n          filter: drop-shadow(0px 0px 6px red);\n  border: 1px solid #0009; }\n\n.banana-command {\n  background-color: #ff05;\n  border-radius: 50%;\n  -webkit-filter: drop-shadow(0px 0px 6px yellow);\n          filter: drop-shadow(0px 0px 6px yellow);\n  border: 1px solid #0009; }\n\n.action-icon {\n  font-size: 40px;\n  height: 40px;\n  margin-top: -16px;\n  text-shadow: 0 0 16px white;\n  color: ghostwhite; }\n\n::ng-deep .mat-menu-panel {\n  background-color: rgba(0, 0, 0, 0.67);\n  border: #00b0f0 3px solid;\n  border-radius: 16px !important;\n  min-width: unset !important; }\n\n::ng-deep .mat-menu-panel button {\n    height: 60px;\n    transition: 300ms ease-in-out; }\n\n::ng-deep .mat-menu-panel button:hover {\n      background-color: rgba(244, 145, 0, 0.4) !important; }\n\n.overlap-container {\n  display: -ms-grid;\n  display: grid;\n      grid-template-areas: 'overlap'; }\n\n.overlap-container .overlap {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: overlap; }\n\n.hover-action-clickable {\n  cursor: pointer;\n  transition: -webkit-filter 300ms;\n  transition: filter 300ms;\n  transition: filter 300ms, -webkit-filter 300ms; }\n\n.hover-action-clickable:hover {\n    -webkit-filter: brightness(1.35);\n            filter: brightness(1.35); }\n\n.powerup {\n  pointer-events: none;\n  -ms-grid-column-align: center;\n      justify-self: center; }\n\n.on-turn {\n  -webkit-animation: animate-jump 2000ms infinite;\n          animation: animate-jump 2000ms infinite;\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms; }\n\n._selector-corners-default, .selector-corners-shadow, .selector-corners-real {\n  pointer-events: none;\n  place-self: center;\n  width: 100%;\n  height: 100%;\n  border: 5px solid;\n  border-image-slice: 1;\n  border-image-outset: 1;\n  border-image-source: radial-gradient(transparent 80%, #47ff3fff 92%);\n  -webkit-animation: corner-selector-scale 1700ms ease-in-out infinite alternate;\n          animation: corner-selector-scale 1700ms ease-in-out infinite alternate; }\n\n.selector-corners-shadow {\n  -webkit-filter: blur(6px);\n          filter: blur(6px); }\n\n.selector-corners-real {\n  -webkit-animation: corner-selector-scale 1700ms ease-in-out infinite alternate, opacity-0-to-1 1700ms cubic-bezier(0.16, 0.01, 0.22, 1.01) infinite alternate;\n          animation: corner-selector-scale 1700ms ease-in-out infinite alternate, opacity-0-to-1 1700ms cubic-bezier(0.16, 0.01, 0.22, 1.01) infinite alternate; }\n\n@-webkit-keyframes corner-selector-scale {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  to {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); } }\n\n@keyframes corner-selector-scale {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  to {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); } }\n\n@-webkit-keyframes opacity-0-to-1 {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes opacity-0-to-1 {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes rotate-0-to-360 {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(359.99deg);\n            transform: rotate(359.99deg); } }\n\n@keyframes rotate-0-to-360 {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(359.99deg);\n            transform: rotate(359.99deg); } }\n\n@-webkit-keyframes animate-jump {\n  0% {\n    -webkit-transform: translateY(0px) scale(1);\n            transform: translateY(0px) scale(1); }\n  7% {\n    -webkit-transform: translateY(-7px) scale(1.1);\n            transform: translateY(-7px) scale(1.1); }\n  14% {\n    -webkit-transform: translateY(0px) scale(1);\n            transform: translateY(0px) scale(1); } }\n\n@keyframes animate-jump {\n  0% {\n    -webkit-transform: translateY(0px) scale(1);\n            transform: translateY(0px) scale(1); }\n  7% {\n    -webkit-transform: translateY(-7px) scale(1.1);\n            transform: translateY(-7px) scale(1.1); }\n  14% {\n    -webkit-transform: translateY(0px) scale(1);\n            transform: translateY(0px) scale(1); } }\n\n.worm-icon-container {\n  pointer-events: none;\n  display: -ms-grid;\n  display: grid;\n  transition: -webkit-transform 500ms cubic-bezier(0.62, 0.85, 0.49, 0.24);\n  transition: transform 500ms cubic-bezier(0.62, 0.85, 0.49, 0.24);\n  transition: transform 500ms cubic-bezier(0.62, 0.85, 0.49, 0.24), -webkit-transform 500ms cubic-bezier(0.62, 0.85, 0.49, 0.24); }\n\n.worm-icon-container .worm-icon {\n    height: 90%;\n    place-self: center; }\n\n.frost-icon {\n  place-self: center;\n  -webkit-transform: scale(4);\n          transform: scale(4);\n  color: ghostwhite;\n  -webkit-animation: opacity-0-to-1 3000ms alternate infinite ease-in-out;\n          animation: opacity-0-to-1 3000ms alternate infinite ease-in-out; }\n\n.texture {\n  pointer-events: none;\n  border: 0.5px solid dimgray;\n  border-radius: 16%;\n  transition: background-image 1400ms cubic-bezier(0.42, 0, 1, 0.25); }\n\n.DEEP_SPACE, .DEEP_SPACE0, .DEEP_SPACE1, .DEEP_SPACE2, .DEEP_SPACE3 {\n  background-image: url(\"data:image/png;base64,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\");\n  background-size: cover;\n  background-color: #050405; }\n\n.DIRT, .DIRT0, .DIRT1, .DIRT2, .DIRT3 {\n  background-image: url(\"data:image/png;base64,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\");\n  background-size: cover;\n  background-color: #919191; }\n\n.AIR, .AIR0, .AIR1, .AIR2, .AIR3 {\n  background-image: url('texture_rock.png');\n  background-size: cover;\n  background-color: #2f2f2f; }\n\n.LAVA, .LAVA0, .LAVA1, .LAVA2, .LAVA3 {\n  background-image: url('texture_lava.png');\n  background-size: cover;\n  background-color: #2f2f2f; }\n\n.DEEP_SPACE0 {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg); }\n\n.DIRT0 {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg); }\n\n.AIR0 {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg); }\n\n.LAVA0 {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg); }\n\n.DEEP_SPACE1 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.DIRT1 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.AIR1 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.LAVA1 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.DEEP_SPACE2 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.DIRT2 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.AIR2 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.LAVA2 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.DEEP_SPACE3 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.DIRT3 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.AIR3 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.LAVA3 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.explosion {\n  pointer-events: none;\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  -webkit-animation: background-image-unset-to-empty both;\n          animation: background-image-unset-to-empty both;\n  -webkit-animation-delay: 750ms;\n          animation-delay: 750ms; }\n\n@-webkit-keyframes background-image-unset-to-empty {\n  from {\n    background-image: unset; }\n  to { } }\n\n@keyframes background-image-unset-to-empty {\n  from {\n    background-image: unset; }\n  to { } }\n\n.laser {\n  background: linear-gradient(transparent 40%, red, transparent 60%);\n  height: 100%;\n  -webkit-animation: opacity-0-to-1 300ms alternate 2 cubic-bezier(0, 1, 0.7, 1);\n          animation: opacity-0-to-1 300ms alternate 2 cubic-bezier(0, 1, 0.7, 1);\n  opacity: 0; }\n\n.banana {\n  height: 100%;\n  transition: -webkit-transform 750ms cubic-bezier(0, 0.25, 1, 0.75);\n  transition: transform 750ms cubic-bezier(0, 0.25, 1, 0.75);\n  transition: transform 750ms cubic-bezier(0, 0.25, 1, 0.75), -webkit-transform 750ms cubic-bezier(0, 0.25, 1, 0.75); }\n\n.banana .icon {\n    -webkit-animation: rotate-0-to-360 both infinite 500ms cubic-bezier(0.36, 0.12, 0.14, 0.78);\n            animation: rotate-0-to-360 both infinite 500ms cubic-bezier(0.36, 0.12, 0.14, 0.78); }\n\n.snowball {\n  height: 100%;\n  transition: -webkit-transform 750ms cubic-bezier(0, 0.25, 1, 0.75);\n  transition: transform 750ms cubic-bezier(0, 0.25, 1, 0.75);\n  transition: transform 750ms cubic-bezier(0, 0.25, 1, 0.75), -webkit-transform 750ms cubic-bezier(0, 0.25, 1, 0.75); }\n\n.snowball .icon {\n    -webkit-animation: rotate-0-to-360 both infinite 500ms cubic-bezier(0.36, 0.12, 0.14, 0.78);\n            animation: rotate-0-to-360 both infinite 500ms cubic-bezier(0.36, 0.12, 0.14, 0.78); }\n\n.remove-banana-animation {\n  animation: opacity-0-to-1 both reverse 200ms 750ms; }\n\n.challenge-logo {\n  grid-area: logo;\n  height: 200px;\n  margin: auto; }\n\n.map-view {\n  -ms-grid-column-align: right;\n      justify-self: right; }\n\n.upload-link {\n  place-self: center end;\n  transition: 300ms ease-in-out; }\n\n.upload-link:hover {\n    -webkit-filter: brightness(1.2) drop-shadow(0px 0px 6px skyblue);\n            filter: brightness(1.2) drop-shadow(0px 0px 6px skyblue);\n    cursor: pointer; }\n\n.bi-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr; }\n\n.explosion-see-through {\n  opacity: 0.75; }\n\n.round-slider-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: max-content auto max-content;\n      grid-template-columns: -webkit-max-content auto -webkit-max-content;\n      grid-template-columns: max-content auto max-content;\n  align-items: center;\n  grid-gap: 8px; }\n\n.buttons-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: max-content max-content auto;\n      grid-template-columns: -webkit-max-content -webkit-max-content auto;\n      grid-template-columns: max-content max-content auto; }\n\n.buttons-container :nth-child(3) {\n    -ms-grid-column-align: end;\n        justify-self: end; }\n"

/***/ }),

/***/ "./src/app/nested/game-engine-visualiser/game-engine-visualiser.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/nested/game-engine-visualiser/game-engine-visualiser.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GameEngineVisualiserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEngineVisualiserComponent", function() { return GameEngineVisualiserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _end_game_dialog_end_game_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./end-game-dialog/end-game-dialog.component */ "./src/app/nested/game-engine-visualiser/end-game-dialog/end-game-dialog.component.ts");
/* harmony import */ var _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-engine-visualiser.interface */ "./src/app/nested/game-engine-visualiser/game-engine-visualiser.interface.ts");
/* harmony import */ var ec_2019_game_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ec-2019-game-engine */ "./ec-2019-game-engine/ec-2019-game-engine.js");
/* harmony import */ var ec_2019_game_engine__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ec_2019_game_engine__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _command_pair__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./command-pair */ "./src/app/nested/game-engine-visualiser/command-pair.ts");
/* harmony import */ var _bot_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bot/index */ "./src/app/nested/game-engine-visualiser/bot/index.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











function getArrayRange(count = 1) {
    return Array.from({ length: count }, (v, k) => k + 1);
}
function getRandomInteger(max = 9) {
    return Math.round(Math.random() * max);
}
function flatMap(array) {
    return array.reduce((acc, x) => acc.concat(x), []);
}
let GameEngineVisualiserComponent = class GameEngineVisualiserComponent {
    constructor(dialog, http, ngZone) {
        this.dialog = dialog;
        this.http = http;
        this.ngZone = ngZone;
        this.actionsEnum = _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"];
        this.zIndexLevelsEnum = _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ZIndexLevelsEnum"];
        this.commandsCollector$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.replayPause$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.maxRoundNumber = 400;
        this.initializeNewGame();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.replayPause$.next();
    }
    initializeNewGame() {
        this.unsubscribe$.next();
        this.http.get('assets/visualizer-assets/config.json')
            .subscribe((config) => {
            this.gameRunner = new ec_2019_game_engine__WEBPACK_IMPORTED_MODULE_4___default.a.GameRunner(getRandomInteger(999), config, 2);
            this.gameMap = this.gameRunner.getGeneratedMap();
            this.gameMap = this.getMapStyle(this.gameMap, config);
            this.flatCells = this.gameMap.cells.toArray();
            this.flatCells.forEach(c => c.styleNumber = getRandomInteger(3));
            this.currentRoundTracker = 0;
            let playersList = this.gameMap.players.toArray();
            this.player1 = playersList[0];
            this.player2 = playersList[1];
            this.worms = this.getLivingWorms();
            this.nextRound();
        });
        let commandsBucket = [];
        this.commandsCollector$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
            .subscribe(command => {
            if (command.type === _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].SELECT) {
                commandsBucket = commandsBucket.filter(c => !(c.player === command.player && c.type === _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].SELECT));
            }
            commandsBucket.push(command);
            let commandsList = commandsBucket.map(cp => cp.toPair());
            if (commandsBucket.filter(c => !c.command.includes('select')).length === 2) {
                this.gameRunner.processRound(this.gameMap, commandsList);
                commandsBucket = [];
                setTimeout(_ => this.nextRound(), 0);
            }
        });
    }
    getLivingWorms() {
        return flatMap(this.gameMap.players.toArray().map(p => p.livingWorms.toArray())).filter(w => w.health > 0);
    }
    getDashBoard() {
        return {
            players: [this.player1, this.player2].map(p => ({
                playerId: p.id,
                health: p.health,
                livingWormsCount: p.livingWorms.toArray().length,
                totalScore: p.totalScore,
                wormSelectionTokens: p.wormSelectionTokens,
                bananasCount: p.livingWorms.toArray()
                    .map(w => w.bananaBombs ? w.bananaBombs.count : null)
                    .filter(count => count !== null)[0]
                    || 0,
                snowballsCount: p.livingWorms.toArray()
                    .map(w => w.snowballs ? w.snowballs.count : null)
                    .filter(count => count !== null)[0]
                    || 0,
                activeWormImage: `${p.id}${p.currentWorm.id}`,
                roundErrors: this.gameRunner.getErrorList(this.gameMap, p),
                worms: p.worms.toArray(),
            })),
            currentRound: this.gameMap.currentRound,
        };
    }
    getMapStyle(map, config) {
        let cellSize = config.websitePixelSize
            ? config.websitePixelSize / map.size
            : 600 / map.size;
        map.mapStyle = {
            gridStyle: getArrayRange(map.size).map(_ => `${cellSize}px`).join(' '),
            cellSize,
            powerupSize: cellSize * 0.7,
            bananaBombScale: config.agentWorms.bananas.damageRadius * 2 + 1,
            snowballScale: config.technologistWorms.snowballs.freezeRadius * 2 + 1,
        };
        return map;
    }
    doBotAction() {
        let stateJson = this.gameRunner.renderJson(this.gameMap, this.player2);
        let state = JSON.parse(stateJson);
        // JS engine doesn't render json state correctly
        state.map.forEach(x => {
            x.forEach(y => {
                y.type = y.type.name$;
                if (y.occupier) {
                    let playerIdPropertyName = Object.keys(y.occupier).find(key => key.includes('playerId'));
                    y.occupier.playerId = y.occupier[playerIdPropertyName];
                }
            });
        });
        let botCommand = _bot_index__WEBPACK_IMPORTED_MODULE_9__["executeRound"](state);
        if (botCommand.includes('select')) {
            let botCommands = botCommand.split(';');
            this.commandsCollector$.next(new _command_pair__WEBPACK_IMPORTED_MODULE_8__["CommandPair"](this.player2, botCommands[0], _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].MOVE));
            this.commandsCollector$.next(new _command_pair__WEBPACK_IMPORTED_MODULE_8__["CommandPair"](this.player2, botCommands[1], _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].MOVE));
        }
        else {
            this.commandsCollector$.next(new _command_pair__WEBPACK_IMPORTED_MODULE_8__["CommandPair"](this.player2, botCommand, _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].MOVE));
        }
    }
    nextRound() {
        if (this.gameRunner.isGameComplete(this.gameMap)) {
            this.showEndGameDialog();
        }
        this.currentRoundTracker++;
        this.gameRunner.setCurrentRound(this.gameMap, this.currentRoundTracker);
        this.doBotAction();
        let state = JSON.parse(this.gameRunner.renderJson(this.gameMap, null));
        this.refreshMap();
    }
    refreshMap() {
        this.dashboard = this.getDashBoard();
        let currentWorm = this.player1.currentWorm;
        let bananaRange = this.gameRunner.config.agentWorms.bananas.range;
        let snowballRange = this.gameRunner.config.technologistWorms.snowballs.range;
        let wormOnTurnCell = this.flatCells.find(c => this.isSamePosition(c, currentWorm.position));
        this.flatCells.forEach(c => c.isAllyWormCell
            = c.isInDigMoveRange
                = c.isInBananaRange
                    = c.isInSnowballRange
                        = false);
        this.flatCells
            .filter(c => this.player1.livingWorms.toArray().some(w => this.isSamePosition(c, w.position)))
            .forEach(c => c.isAllyWormCell = true);
        this.getNearCells(wormOnTurnCell)
            .filter(c => !this.isSamePosition(c, currentWorm.position))
            .forEach(c => c.isInDigMoveRange = true);
        if (currentWorm.bananaBombs && currentWorm.bananaBombs.count) {
            this.getNearCells(wormOnTurnCell, bananaRange)
                .filter(c => !this.isSamePosition(c, currentWorm.position))
                .forEach(c => c.isInBananaRange = true);
        }
        if (currentWorm.snowballs && currentWorm.snowballs.count) {
            this.getNearCells(wormOnTurnCell, snowballRange)
                .filter(c => !this.isSamePosition(c, currentWorm.position))
                .forEach(c => c.isInSnowballRange = true);
        }
        this.worms = this.getLivingWorms();
        let allFeedback = this.gameRunner.getAllFeedback(this.gameMap).toArray();
        let events = (allFeedback.length ? allFeedback[allFeedback.length - 1].toArray() : [])
            .map(e => this.getValueFromKey(e, 'visualizerEvent_'));
        // let state = JSON.parse(this.gameRunner.renderJson(this.gameMap, null));
        // let jsonEvents: VisualizerEvent[] = state.visualizerEvents;
        if (events.length > 0) {
            this.shootEvents = events.filter(e => e.type == _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["CommandStringsEnum"].SHOOT)
                .map(e => {
                let end = e.positionEnd;
                let start = e.positionStart;
                e.positionCenter = {
                    x: (end.x + start.x) / 2,
                    y: (end.y + start.y) / 2,
                };
                e.laserLength = this.euclideanDistance(end, start) - (e.result === 'HIT' ? 0 : 1);
                e.rotation = 360 * Math.atan2(start.y - end.y, start.x - end.x) / (Math.PI * 2);
                return e;
            });
            this.bananaEvents = events.filter(e => e.type == _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["CommandStringsEnum"].BANANA)
                .map(e => {
                let end = e.positionEnd;
                let start = e.positionStart;
                e.positionRelative = {
                    x: (end.x - start.x),
                    y: (end.y - start.y),
                };
                e.randomUrl = Math.random();
                setTimeout(() => e.timeout = true, 0);
                return e;
            });
            this.snowballEvents = events.filter(e => e.type == _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["CommandStringsEnum"].SNOWBALL)
                .map(e => {
                let end = e.positionEnd;
                let start = e.positionStart;
                e.positionRelative = {
                    x: (end.x - start.x),
                    y: (end.y - start.y),
                };
                e.randomUrl = Math.random();
                setTimeout(() => e.timeout = true, 0);
                return e;
            });
        }
    }
    getValueFromKey(element, property) {
        return element[Object.keys(element).find(key => key.includes(property))];
    }
    isSamePosition(a, b) {
        return a.x === b.x && a.y === b.y;
    }
    shootingDistance(a, b) {
        return Math.floor(this.euclideanDistance(b, a));
    }
    euclideanDistance(b, a) {
        return Math.hypot(b.x - a.x, b.y - a.y);
    }
    getNearCells(center, range = 1) {
        return this.flatCells.filter(c => this.shootingDistance(c, center) <= range);
    }
    doPlayerAction(cell, action) {
        switch (action) {
            case _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].NOTHING:
                this.commandsCollector$.next(new _command_pair__WEBPACK_IMPORTED_MODULE_8__["CommandPair"](this.player1, _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].NOTHING, _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].NOTHING));
                break;
            case _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].SELECT:
                this.commandsCollector$.next(new _command_pair__WEBPACK_IMPORTED_MODULE_8__["CommandPair"](this.player1, `${_game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].SELECT} ${cell.occupier.id}`, _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].SELECT));
                this.player1.currentWorm = cell.occupier;
                this.refreshMap();
                break;
            case _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].DIG:
                this.commandsCollector$.next(new _command_pair__WEBPACK_IMPORTED_MODULE_8__["CommandPair"](this.player1, `${_game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].DIG} ${cell.x} ${cell.y}`, _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].DIG));
                break;
            case _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].MOVE:
                this.commandsCollector$.next(new _command_pair__WEBPACK_IMPORTED_MODULE_8__["CommandPair"](this.player1, `${_game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].MOVE} ${cell.x} ${cell.y}`, _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].MOVE));
                break;
            case _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].SHOOT:
                let direction = this.getRelativeDirection(this.player1.currentWorm.position, cell);
                this.commandsCollector$.next(new _command_pair__WEBPACK_IMPORTED_MODULE_8__["CommandPair"](this.player1, `${_game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].SHOOT} ${direction}`, _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].SHOOT));
                break;
            case _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].BANANA:
                this.commandsCollector$.next(new _command_pair__WEBPACK_IMPORTED_MODULE_8__["CommandPair"](this.player1, `${_game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].BANANA} ${cell.x} ${cell.y}`, _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].BANANA));
                break;
            case _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].SNOWBALL:
                this.commandsCollector$.next(new _command_pair__WEBPACK_IMPORTED_MODULE_8__["CommandPair"](this.player1, `${_game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].SNOWBALL} ${cell.x} ${cell.y}`, _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["ActionsEnum"].SNOWBALL));
                break;
        }
    }
    showEndGameDialog() {
        this.isPaused = true;
        // https://github.com/angular/material2/issues/5268
        // TODO: work-around for expression change on dialog factory
        setTimeout(() => {
            this.dialog.open(_end_game_dialog_end_game_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EndGameDialogComponent"], {
                data: {
                    players: [],
                    message: this.gameMap.winningPlayer == this.player1
                        ? 'You won! 🏆'
                        : 'Game Over 🥺',
                    gameMap: this.gameMap,
                },
            })
                .afterClosed()
                .subscribe(() => {
                this.initializeNewGame();
                this.isPaused = false;
            });
        });
    }
    getRelativeDirection(center, cell) {
        let directions = {
            E: [1, 0],
            NE: [1, -1],
            N: [0, -1],
            NW: [-1, -1],
            W: [-1, 0],
            SW: [-1, 1],
            S: [0, 1],
            SE: [1, 1],
        };
        return Object.keys(directions)
            .find(key => directions[key][0] === cell.x - center.x
            && directions[key][1] === cell.y - center.y);
    }
    handleFileInput(files) {
        if (!Array.from(files).some(f => f.name === 'GlobalState.json')) {
            throw 'Could not find any GlobalState.json files. Try match-logs from a new starter-pack release 2019.3.1';
        }
        let stateFiles = Array.from(files).filter(f => f.name === 'GlobalState.json')
            .map(f => {
            let roundString = f.webkitRelativePath.split('/')[1];
            let extractedRound = roundString.match(/(\d+)/)[0];
            return {
                round: Number(extractedRound),
                stateFile: f,
            };
        })
            .sort((a, b) => a.round - b.round);
        this.allRounds = [];
        let fileReadPromises = stateFiles.map(f => f.stateFile.text().then(result => {
            let resultParsed = JSON.parse(result);
            resultParsed.flatMappedCells = flatMap(resultParsed.map);
            this.allRounds[resultParsed.currentRound] = resultParsed;
        }));
        Promise.all(fileReadPromises).then(() => this.startMatchLog());
    }
    startMatchLog() {
        this.selectedRound = 1;
        this.maxRoundNumber = Object.keys(this.allRounds).length;
        this.gameMap = this.getMapStyle({ size: this.allRounds[1].mapSize }, {
            websitePixelSize: 650,
            agentWorms: { bananas: { damageRadius: 5 } },
            technologistWorms: { snowballs: { freezeRadius: 5 } },
        });
        this.startPlayback();
    }
    startPlayback() {
        this.worms = flatMap(this.allRounds[this.selectedRound]
            .opponents.map(o => o.worms
            .map(w => {
            w.player = o;
            return w;
        })));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(1500)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.replayPause$))
            .subscribe(() => {
            let stateFile = this.allRounds[this.selectedRound++];
            if (stateFile) {
                this.ngZone.runOutsideAngular(() => {
                    this.updateToNextRound(stateFile);
                });
            }
            else {
                this.replayPause$.next();
            }
        });
    }
    updateToNextRound(currentState) {
        let stateWorms = flatMap(currentState.opponents.map(o => o.worms
            .map(w => {
            w.player = o;
            return w;
        })));
        this.worms.forEach(gw => {
            let matchingWorm = stateWorms.find(sw => sw.id === gw.id && sw.player.id === gw.player.id);
            gw.bananaBombs = matchingWorm.bananaBombs;
            gw.health = matchingWorm.health;
            gw.position = matchingWorm.position;
            gw.roundsUntilUnfrozen = matchingWorm.roundsUntilUnfrozen;
            gw.snowballs = matchingWorm.snowballs;
        });
        this.worms = this.worms.filter(w => w.health > 0);
        this.flatCells = currentState.flatMappedCells;
        let events = currentState.visualizerEvents;
        if (events.length > 0) {
            this.shootEvents = events.filter(e => e.type == _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["CommandStringsEnum"].SHOOT)
                .map(e => {
                let end = e.positionEnd;
                let start = e.positionStart;
                e.positionCenter = {
                    x: (end.x + start.x) / 2,
                    y: (end.y + start.y) / 2,
                };
                e.laserLength = this.euclideanDistance(end, start) - (e.result === 'HIT' ? 0 : 1);
                e.rotation = 360 * Math.atan2(start.y - end.y, start.x - end.x) / (Math.PI * 2);
                return e;
            });
            this.bananaEvents = events.filter(e => e.type == _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["CommandStringsEnum"].BANANA)
                .map(e => {
                let end = e.positionEnd;
                let start = e.positionStart;
                e.positionRelative = {
                    x: (end.x - start.x),
                    y: (end.y - start.y),
                };
                e.randomUrl = Math.random();
                setTimeout(() => e.timeout = true, 0);
                return e;
            });
            this.snowballEvents = events.filter(e => e.type == _game_engine_visualiser_interface__WEBPACK_IMPORTED_MODULE_3__["CommandStringsEnum"].SNOWBALL)
                .map(e => {
                let end = e.positionEnd;
                let start = e.positionStart;
                e.positionRelative = {
                    x: (end.x - start.x),
                    y: (end.y - start.y),
                };
                e.randomUrl = Math.random();
                setTimeout(() => e.timeout = true, 0);
                return e;
            });
        }
        this.dashboard = {
            players: [currentState.opponents[0], currentState.opponents[1]].map(p => {
                const livingWorms = p.worms.filter(w => w.health > 0);
                return {
                    playerId: p.id,
                    health: p.health,
                    livingWormsCount: livingWorms.length,
                    totalScore: p.score,
                    wormSelectionTokens: p.remainingWormSelections,
                    bananasCount: livingWorms
                        .map(w => w.bananaBombs ? w.bananaBombs.count : null)
                        .filter(count => count !== null)[0]
                        || 0,
                    snowballsCount: livingWorms
                        .map(w => w.snowballs ? w.snowballs.count : null)
                        .filter(count => count !== null)[0]
                        || 0,
                    activeWormImage: `${p.id}${p.currentWormId}`,
                    roundErrors: [],
                    worms: p.worms,
                };
            }),
            currentRound: this.selectedRound,
        };
    }
    reloadPage() {
        window.location.reload();
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slider'),
    __metadata("design:type", _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSlider"])
], GameEngineVisualiserComponent.prototype, "slider", void 0);
GameEngineVisualiserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-game-engine-visualiser',
        template: __webpack_require__(/*! ./game-engine-visualiser.component.html */ "./src/app/nested/game-engine-visualiser/game-engine-visualiser.component.html"),
        styles: [__webpack_require__(/*! ./game-engine-visualiser.component.scss */ "./src/app/nested/game-engine-visualiser/game-engine-visualiser.component.scss")],
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
], GameEngineVisualiserComponent);



/***/ }),

/***/ "./src/app/nested/game-engine-visualiser/game-engine-visualiser.interface.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/nested/game-engine-visualiser/game-engine-visualiser.interface.ts ***!
  \***********************************************************************************/
/*! exports provided: CommandStringsEnum, ZIndexLevelsEnum, SurfaceTypeEnum, ActionsEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandStringsEnum", function() { return CommandStringsEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZIndexLevelsEnum", function() { return ZIndexLevelsEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurfaceTypeEnum", function() { return SurfaceTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsEnum", function() { return ActionsEnum; });
var CommandStringsEnum;
(function (CommandStringsEnum) {
    CommandStringsEnum["MOVE"] = "move";
    CommandStringsEnum["DIG"] = "dig";
    CommandStringsEnum["SHOOT"] = "shoot";
    CommandStringsEnum["BANANA"] = "banana";
    CommandStringsEnum["SNOWBALL"] = "snowball";
    CommandStringsEnum["SELECT"] = "select";
    CommandStringsEnum["NOTHING"] = "nothing";
})(CommandStringsEnum || (CommandStringsEnum = {}));
var ZIndexLevelsEnum;
(function (ZIndexLevelsEnum) {
    ZIndexLevelsEnum[ZIndexLevelsEnum["texture"] = 0] = "texture";
    ZIndexLevelsEnum[ZIndexLevelsEnum["powerup"] = 1] = "powerup";
    ZIndexLevelsEnum[ZIndexLevelsEnum["explosion"] = 2] = "explosion";
    ZIndexLevelsEnum[ZIndexLevelsEnum["worm"] = 3] = "worm";
    ZIndexLevelsEnum[ZIndexLevelsEnum["cornerSelector"] = 4] = "cornerSelector";
    ZIndexLevelsEnum[ZIndexLevelsEnum["actionMenu"] = 5] = "actionMenu";
    ZIndexLevelsEnum[ZIndexLevelsEnum["bananaThrow"] = 6] = "bananaThrow";
    ZIndexLevelsEnum[ZIndexLevelsEnum["shootLaser"] = 7] = "shootLaser";
})(ZIndexLevelsEnum || (ZIndexLevelsEnum = {}));
var SurfaceTypeEnum;
(function (SurfaceTypeEnum) {
    SurfaceTypeEnum["DEEP_SPACE"] = "DEEP_SPACE";
    SurfaceTypeEnum["DIRT"] = "DIRT";
    SurfaceTypeEnum["AIR"] = "AIR";
})(SurfaceTypeEnum || (SurfaceTypeEnum = {}));
var ActionsEnum;
(function (ActionsEnum) {
    ActionsEnum["NOTHING"] = "nothing";
    ActionsEnum["SELECT"] = "select";
    ActionsEnum["MOVE"] = "move";
    ActionsEnum["DIG"] = "dig";
    ActionsEnum["SHOOT"] = "shoot";
    ActionsEnum["BANANA"] = "banana";
    ActionsEnum["SNOWBALL"] = "snowball";
})(ActionsEnum || (ActionsEnum = {}));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/ec-2019-protoype/ec-2019-protoype/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map