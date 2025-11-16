// Game_Actors.d.ts

import { Game_Actor } from "./Game_Actor";

export declare class Game_Actors {
    constructor();

    // Properties
    _data: (Game_Actor | null)[];

    // Initialization
    initialize(): void;

    // Methods
    actor(actorId: number): Game_Actor | null;
}
