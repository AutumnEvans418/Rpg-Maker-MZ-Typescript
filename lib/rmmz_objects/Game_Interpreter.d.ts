import { Game_Actor } from "./Game_Actor";
import { Game_Battler } from "./Game_Battler";
import { Game_Enemy } from "./Game_Enemy";

declare class Game_Interpreter {
    constructor(depth?: number);

    _depth: number;
    _mapId: number;
    _eventId: number;
    _list: any[] | null;
    _index: number;
    _waitCount: number;
    _waitMode: string;
    _comments: string | string[];
    _characterId: number;
    _childInterpreter: Game_Interpreter | null;
    _branch: { [indent: number]: any };
    _indent: number;
    _frameCount: number;
    _freezeChecker: number;

    initialize(depth?: number): void;
    checkOverflow(): void;
    clear(): void;

    setup(list: any[], eventId?: number): void;
    loadImages(): void;

    eventId(): number;
    isOnCurrentMap(): boolean;

    setupReservedCommonEvent(): boolean;
    isRunning(): boolean;
    update(): void;

    updateChild(): boolean;
    updateWait(): boolean;

    updateWaitCount(): boolean;
    updateWaitMode(): boolean;

    setWaitMode(mode: string): void;
    wait(duration: number): void;

    fadeSpeed(): number;
    executeCommand(): boolean;

    checkFreeze(): boolean;
    terminate(): void;

    skipBranch(): void;

    currentCommand(): any | undefined;
    nextEventCode(): number;

    iterateActorId(param: number, callback: (actor: Game_Actor) => void): void;
    iterateActorEx(p1: number, p2: number, callback: (actor: Game_Actor) => void): void;

    iterateActorIndex(param: number, callback: (actor: Game_Actor) => void): void;
    iterateEnemyIndex(param: number, callback: (enemy: Game_Enemy) => void): void;

    iterateBattler(
        p1: number,
        p2: number,
        callback: (battler: Game_Battler) => void
    ): void;

    character(param: number): any | null;

    operateValue(
        operation: number,
        operandType: number,
        operand: number
    ): number;

    changeHp(target: Game_Battler, value: number, allowDeath: boolean): void;

    /** Show Text */
    command101(params: any[]): boolean;

    /** Show Choices */
    command102(params: any[]): boolean;
    setupChoices(params: any[]): void;

    /** When Choice */
    command402(params: any[]): boolean;

    /** Choice Cancel */
    command403(): boolean;

    /** Input Number */
    command103(params: any[]): boolean;
    setupNumInput(params: any[]): void;

    /** Select Item */
    command104(params: any[]): boolean;
    setupItemChoice(params: any[]): void;

    /** Show Scrolling Text */
    command105(params: any[]): boolean;

    /** Comment */
    command108(params: any[]): boolean;

    /** Skip */
    command109(): boolean;

    /** Conditional Branch */
    command111(params: any[]): boolean;

    /** Else */
    command411(): boolean;

    /** Loop */
    command112(): boolean;

    /** Repeat Above */
    command413(): boolean;

    /** Break Loop */
    command113(): boolean;

    /** Exit Event Processing */
    command115(): boolean;

    /** Common Event */
    command117(params: any[]): boolean;
    setupChild(list: any[], eventId: number): void;

    /** Label */
    command118(): boolean;

    /** Jump to Label */
    command119(params: any[]): boolean;
    jumpTo(index: number): void;

    /** Control Switches */
    command121(params: any[]): boolean;

    /** Control Variables */
    command122(params: any[]): boolean;
    gameDataOperand(
        type: number,
        param1: number,
        param2: number
    ): number;

    operateVariable(
        variableId: number,
        operationType: number,
        value: any
    ): void;
}
