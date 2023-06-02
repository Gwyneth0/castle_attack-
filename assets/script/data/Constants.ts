import { _decorator, Component, Enum, Node } from 'cc';
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
    MOVELEFT = 1 ,
    MOVERIGHT =2 
}
