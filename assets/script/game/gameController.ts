import { _decorator, Button, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('gameController')
export class gameController extends Component {

    @property(Button)
    private btnHome: Button;

    protected onLoad(): void {
        this.btnHome.node.on(Node.EventType.TOUCH_END, this.playGame);
    }
    // load scene
    protected playGame(): void {
        director.loadScene('menu');
    }
}

