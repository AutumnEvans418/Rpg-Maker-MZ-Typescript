import { Game_Follower } from "./Game_Vehicle";


declare class Game_Followers {
    constructor();

    // Properties
    _visible: boolean;
    _gathering: boolean;
    _data: Game_Follower[];

    // Initialization
    initialize(): void;
    setup(): void;

    // Visibility
    isVisible(): boolean;
    show(): void;
    hide(): void;

    // Data access
    data(): Game_Follower[];
    reverseData(): Game_Follower[];
    follower(index: number): Game_Follower;

    // Update
    refresh(): void;
    update(): void;
    updateMove(): void;
    jumpAll(): void;
    synchronize(x: number, y: number, d: number): void;

    // Gathering
    gather(): void;
    areGathering(): boolean;
    visibleFollowers(): Game_Follower[];
    areMoving(): boolean;
    areGathered(): boolean;

    // Collision
    isSomeoneCollided(x: number, y: number): boolean;
}
