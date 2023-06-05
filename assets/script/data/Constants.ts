import { _decorator, Vec3 } from 'cc';
import { Player } from '../game/Player';
const { ccclass, property } = _decorator;

enum GAME_EVENT {
    RESTART = 'restart',
    ADDSCORE = 'addscore',
    DYING = 'dying'
}

enum GAME_STATE {
    START = 1,
    PLAYING = 2,
    PAUSE = 3,
    OVER = 4
}

enum MOVE_STATE {
    MOVE_LEFT = 1,
    MOVE_RIGHT = 2
}

export class Constants {
    static Player: Player;
    static MAX_SCORE = 0;
    static PLAYER_MOVE_LEFT = 20;
    static PLAYER_MOVE_RIGHT = 20;
    static ROCKET_DOWN = 0;
    static ARROW_DOWN = 0;
    static LIGHT_DOWN = 0;

    static GAME_STATE = GAME_STATE;
    static GAME_EVENT = GAME_EVENT;
    static MOVE_STATE = MOVE_STATE;

    //playermove
    static STARTMOVE: boolean = false;
    static MOVESTEP: number = 0;
    static CURMOVETIME: number = 0;
    static MOVETIME: number = 0.3;
    static CURMOVESPEED: number = 0;
    static CURPOS: Vec3 = new Vec3();
    static DELTAPOS: Vec3 = new Vec3(0, 0, 0);
    static TARGETPOS: Vec3 = new Vec3();
    static RIGHT_BLOCK_SIZE = 80;
    static LEFT_BLOCK_SIZE = -80;
}
