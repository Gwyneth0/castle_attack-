import { _decorator, Component, Enum, Node } from 'cc';
import { Player } from '../game/Player';
const { ccclass, property } = _decorator;

enum gameEvent{
    RESTART = 'restart',
    ADDSCORE = 'addscore',
    DYING = 'dying'
}

enum gameState {
    READY  = 1 , 
    PLAYING = 2 ,
    PAUSE = 3 ,
    OVER = 4 
}

enum moveState {
    MOVE_LEFT = 1 ,
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
}
