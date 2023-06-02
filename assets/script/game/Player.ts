import { _decorator, Component, Node, v2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property(Number)
    private Speed: Number = 0;

    protected moveLeft(): void {

    }

    protected moveRight(): void {
        
    }



}

