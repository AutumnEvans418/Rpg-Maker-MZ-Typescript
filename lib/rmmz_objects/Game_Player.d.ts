import { Game_Character } from "./Game_Character";
import { Game_Vehicle } from "./Game_Vehicle";
import { Game_Followers } from "./Game_Followers";

export declare class Game_Player extends Game_Character {
    constructor();

    // Properties
    _vehicleType: string;
    _vehicleGettingOn: boolean;
    _vehicleGettingOff: boolean;
    _dashing: boolean;
    _needsMapReload: boolean;
    _transferring: boolean;
    _newMapId: number;
    _newX: number;
    _newY: number;
    _newDirection: number;
    _fadeType: number;
    _followers: Game_Followers;
    _encounterCount: number;

    // Initialization
    initialize(): void;
    initMembers(): void;
    clearTransferInfo(): void;
    followers(): Game_Followers;
    refresh(): void;
    reserveTransfer(mapId: number, x: number, y: number, d: number, fadeType: number): void;
    setupForNewGame(): void;
    requestMapReload(): void;

    // Transfer
    isTransferring(): boolean;
    newMapId(): number;
    fadeType(): number;
    performTransfer(): void;

    // Vehicle
    vehicle(): Game_Vehicle | null;
    isInBoat(): boolean;
    isInShip(): boolean;
    isInAirship(): boolean;
    isInVehicle(): boolean;
    getOnOffVehicle(): boolean;
    getOnVehicle(): boolean;
    getOffVehicle(): boolean;
    updateVehicle(): void;
    updateVehicleGetOn(): void;
    updateVehicleGetOff(): void;
    forceMoveForward(): void;

    // Movement
    moveByInput(): void;
    canMove(): boolean;
    getInputDirection(): number;
    executeMove(direction: number): void;
    moveStraight(d: number): void;
    moveDiagonally(horz: number, vert: number): void;
    jump(xPlus: number, yPlus: number): void;
    increaseSteps(): void;

    // Scrolling
    centerX(): number;
    centerY(): number;
    center(x: number, y: number): void;
    locate(x: number, y: number): void;
    updateScroll(lastScrolledX: number, lastScrolledY: number): void;

    // Encounter
    makeEncounterCount(): void;
    makeEncounterTroopId(): number;
    meetsEncounterConditions(encounter: any): boolean;
    executeEncounter(): boolean;
    updateEncounterCount(): void;
    canEncounter(): boolean;
    encounterProgressValue(): number;

    // Input / Action triggers
    triggerAction(): boolean;
    triggerButtonAction(): boolean;
    triggerTouchAction(): boolean;
    triggerTouchActionD1(x1: number, y1: number): boolean;
    triggerTouchActionD2(x2: number, y2: number): boolean;
    triggerTouchActionD3(x2: number, y2: number): boolean;

    // Events
    checkEventTriggerHere(triggers: number[]): void;
    checkEventTriggerThere(triggers: number[]): void;
    checkEventTriggerTouch(x: number, y: number): boolean;
    canStartLocalEvents(): boolean;

    // Other
    isDashButtonPressed(): boolean;
    update(): void;
    updateDashing(): void;
    updateNonmoving(wasMoving: boolean, sceneActive: boolean): void;
    isOnDamageFloor(): boolean;

    // Followers
    showFollowers(): void;
    hideFollowers(): void;
    gatherFollowers(): void;
    areFollowersGathering(): boolean;
    areFollowersGathered(): boolean;
}
