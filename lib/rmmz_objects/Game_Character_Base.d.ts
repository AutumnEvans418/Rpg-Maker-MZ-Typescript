export declare class Game_CharacterBase {
    constructor();

    initialize(...args: any[]): void;
    initMembers(): void;

    // Core position fields
    protected _x: number;
    protected _y: number;
    protected _realX: number;
    protected _realY: number;

    // Movement + animation fields
    protected _moveSpeed: number;
    protected _moveFrequency: number;
    protected _opacity: number;
    protected _blendMode: number;
    protected _direction: number;
    protected _pattern: number;
    protected _priorityType: number;
    protected _tileId: number;
    protected _characterName: string;
    protected _characterIndex: number;
    protected _isObjectCharacter: boolean;
    protected _walkAnime: boolean;
    protected _stepAnime: boolean;
    protected _directionFix: boolean;
    protected _through: boolean;
    protected _transparent: boolean;
    protected _bushDepth: number;

    protected _animationId: number;
    protected _balloonId: number;
    protected _animationPlaying: boolean;
    protected _balloonPlaying: boolean;

    protected _animationCount: number;
    protected _stopCount: number;
    protected _jumpCount: number;
    protected _jumpPeak: number;
    protected _movementSuccess: boolean;

    // position getters
    readonly x: number;
    readonly y: number;

    // Position helpers
    pos(x: number, y: number): boolean;
    posNt(x: number, y: number): boolean;

    moveSpeed(): number;
    setMoveSpeed(speed: number): void;

    moveFrequency(): number;
    setMoveFrequency(freq: number): void;

    opacity(): number;
    setOpacity(value: number): void;

    blendMode(): number;
    setBlendMode(mode: number): void;

    isNormalPriority(): boolean;
    setPriorityType(type: number): void;

    isMoving(): boolean;
    isJumping(): boolean;
    jumpHeight(): number;

    isStopping(): boolean;
    checkStop(threshold: number): boolean;
    resetStopCount(): void;

    realMoveSpeed(): number;
    distancePerFrame(): number;

    isDashing(): boolean;
    isDebugThrough(): boolean;

    straighten(): void;

    reverseDir(dir: number): number;
    canPass(x: number, y: number, d: number): boolean;
    canPassDiagonally(x: number, y: number, horz: number, vert: number): boolean;
    isMapPassable(x: number, y: number, d: number): boolean;

    isCollidedWithCharacters(x: number, y: number): boolean;
    isCollidedWithEvents(x: number, y: number): boolean;
    isCollidedWithVehicles(x: number, y: number): boolean;

    setPosition(x: number, y: number): void;
    copyPosition(character: Game_CharacterBase): void;
    locate(x: number, y: number): void;

    direction(): number;
    setDirection(d: number): void;

    isTile(): boolean;
    isObjectCharacter(): boolean;
    shiftY(): number;

    scrolledX(): number;
    scrolledY(): number;

    screenX(): number;
    screenY(): number;
    screenZ(): number;

    isNearTheScreen(): boolean;

    update(): void;
    updateStop(): void;
    updateJump(): void;
    updateMove(): void;
    updateAnimation(): void;

    animationWait(): number;
    updateAnimationCount(): void;
    updatePattern(): void;

    maxPattern(): number;
    pattern(): number;
    setPattern(pattern: number): void;

    isOriginalPattern(): boolean;
    resetPattern(): void;

    refreshBushDepth(): void;

    isOnLadder(): boolean;
    isOnBush(): boolean;

    terrainTag(): number;
    regionId(): number;

    increaseSteps(): void;

    tileId(): number;
    characterName(): string;
    characterIndex(): number;

    setImage(characterName: string, characterIndex: number): void;
    setTileImage(tileId: number): void;

    checkEventTriggerTouchFront(d: number): void;
    checkEventTriggerTouch(x: number, y: number): boolean;

    isMovementSucceeded(): boolean;
    setMovementSuccess(success: boolean): void;

    moveStraight(dir: number): void;
    moveDiagonally(horz: number, vert: number): void;

    jump(xPlus: number, yPlus: number): void;

    hasWalkAnime(): boolean;
    setWalkAnime(v: boolean): void;

    hasStepAnime(): boolean;
    setStepAnime(v: boolean): void;

    isDirectionFixed(): boolean;
    setDirectionFix(v: boolean): void;

    isThrough(): boolean;
    setThrough(v: boolean): void;

    isTransparent(): boolean;
    setTransparent(v: boolean): void;

    bushDepth(): number;

    startAnimation(): void;
    startBalloon(): void;

    isAnimationPlaying(): boolean;
    isBalloonPlaying(): boolean;

    endAnimation(): void;
    endBalloon(): void;
}
