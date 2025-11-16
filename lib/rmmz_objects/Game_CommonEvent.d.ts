import { Game_Interpreter } from "./Game_Interpreter";
import { RPG } from '../RPG';

// Game_CommonEvent.d.ts
export declare class Game_CommonEvent {
    constructor(commonEventId: number);

    // Core properties
    _commonEventId: number;
    _interpreter: Game_Interpreter | null;

    // Initialization
    initialize(commonEventId: number): void;

    // Access event data
    event(): RPG.DataCommonEvent;
    list(): RPG.DataCommonEvent[];

    // Control
    refresh(): void;
    isActive(): boolean;
    update(): void;
}
