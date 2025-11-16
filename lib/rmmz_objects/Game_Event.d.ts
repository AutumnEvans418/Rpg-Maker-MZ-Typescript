import { Game_Character } from "./Game_Character";
import { Game_Interpreter } from "./Game_Interpreter";
import { RPG } from '../RPG';

export declare class Game_Event extends Game_Character {
    constructor(mapId: number, eventId: number);

    // Initialization
    initialize(mapId: number, eventId: number): void;
    initMembers(): void;

    // Basic properties
    protected _mapId: number;
    protected _eventId: number;
    protected _moveType: number;
    protected _trigger: number | null;
    protected _starting: boolean;
    protected _erased: boolean;
    protected _pageIndex: number;
    protected _originalPattern: number;
    protected _originalDirection: number;
    protected _prelockDirection: number;
    protected _locked: boolean;
    protected _interpreter: Game_Interpreter | null;

    eventId(): number;
    event(): RPG.Event;
    page(): RPG.Page | undefined;
    list(): RPG.List[];

    // Collision
    isCollidedWithCharacters(x: number, y: number): boolean;
    isCollidedWithEvents(x: number, y: number): boolean;
    isCollidedWithPlayerCharacters(x: number, y: number): boolean;

    // Locking / unlocking
    lock(): void;
    unlock(): void;

    // Movement updates
    updateStop(): void;
    updateSelfMovement(): void;
    stopCountThreshold(): number;

    moveTypeRandom(): void;
    moveTypeTowardPlayer(): void;
    moveTypeCustom(): void;

    isNearThePlayer(): boolean;

    // Event triggering
    isStarting(): boolean;
    clearStartingFlag(): void;
    isTriggerIn(triggers: number[]): boolean;
    start(): void;

    // Erasing / refreshing
    erase(): void;
    refresh(): void;

    findProperPageIndex(): number;
    meetsConditions(page: RPG.Page): boolean;

    // Page setup
    setupPage(): void;
    clearPageSettings(): void;
    setupPageSettings(): void;

    // Pattern helpers
    isOriginalPattern(): boolean;
    resetPattern(): void;

    // Trigger checks
    checkEventTriggerTouch(x: number, y: number): boolean;
    checkEventTriggerAuto(): void;

    // Update loop
    update(): void;
    updateParallel(): void;

    // Positioning
    locate(x: number, y: number): void;

    // Movement route
    forceMoveRoute(moveRoute: RPG.MoveRoute): void;
}
