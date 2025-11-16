import { Game_Character } from "./Game_Character";

export declare class Game_Vehicle extends Game_Character {
    constructor(type: string);

    // Core
    initialize(type: string): void;
    initMembers(): void;

    // Type helpers
    _type: string;
    _mapId: number;
    _altitude: number;
    _driving: boolean;
    _bgm: any | null;

    isBoat(): boolean;
    isShip(): boolean;
    isAirship(): boolean;

    resetDirection(): void;
    initMoveSpeed(): void;

    // System data reference
    vehicle(): {
        bgm: any;
        characterName: string;
        characterIndex: number;
        startMapId: number;
        startX: number;
        startY: number;
    } | null;

    loadSystemSettings(): void;
    refresh(): void;

    setLocation(mapId: number, x: number, y: number): void;

    pos(x: number, y: number): boolean;
    isMapPassable(x: number, y: number, d: number): boolean;

    getOn(): void;
    getOff(): void;

    setBgm(bgm: any): void;
    playBgm(): void;

    syncWithPlayer(): void;

    // Screen & shadows
    screenY(): number;
    shadowX(): number;
    shadowY(): number;
    shadowOpacity(): number;

    // Movement
    canMove(): boolean;

    update(): void;
    updateAirship(): void;
    updateAirshipAltitude(): void;

    maxAltitude(): number;
    isLowest(): boolean;
    isHighest(): boolean;

    isTakeoffOk(): boolean;
    isLandOk(x: number, y: number, d: number): boolean;
}
