import { Game_Actor } from "./Game_Actor";
import { Game_Character } from "./Game_Character";

declare class Game_Follower extends Game_Character {
    constructor(memberIndex: number);

    // Properties
    _memberIndex: number;

    // Initialization
    initialize(memberIndex: number): void;
    refresh(): void;

    // Actor
    actor(): Game_Actor;
    isVisible(): boolean;
    isGathered(): boolean;

    // Update
    update(): void;
    chaseCharacter(character: Game_Character): void;
}