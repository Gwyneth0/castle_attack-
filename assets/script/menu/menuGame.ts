import { _decorator, Button, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('menugame')
export class menugame extends Component {

    @property(Button)
    private btnPlay: Button;

    protected onLoad(): void {
        this.btnPlay.node.on(Node.EventType.TOUCH_END, this.playGame);
    }

    protected playGame(): void {
        director.loadScene('game');
    }

}

