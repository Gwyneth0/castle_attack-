import { _decorator, Button, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Results')
export class Results extends Component {
    @property(Node)
    public bestScore: Node;

    @property(Node)
    public score: Node;

    @property(Button)
    public btnRestart: Button;

    @property(Node)
    public lbGameOver: Node;

    @property(Button)
    public btnPause: Button;

    @property(Button)
    public btnPlay: Button;

    @property(Button)
    public btnOffSound: Button;

    @property(Button)
    public btnOnSound: Button;

    public showResult() {
        this.bestScore.active = true;
        this.lbGameOver.active = true;
        this.btnRestart.node.active = true;
    }

    public hideResult(): void {
        this.bestScore.active = false;
        this.btnRestart.node.active = false;
        this.lbGameOver.active = false;
    }

}

