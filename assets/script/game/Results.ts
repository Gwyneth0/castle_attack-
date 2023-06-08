import { _decorator, Button, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Results')
export class Results extends Component {
    @property(Node)
    private bestScore: Node;
    public get BestScore(): Node {
        return this.bestScore;
    }
    public set BestScore(value: Node) {
        this.bestScore = value;
    }

    @property(Node)
    private score: Node;
    public get Score(): Node {
        return this.score;
    }
    public set Score(value: Node) {
        this.score = value;
    }

    @property(Node)
    private btnRestartNode: Node;
    public get BtnRestartNode(): Node {
        return this.btnRestartNode;
    }
    public set BtnRestartNode(value: Node) {
        this.btnRestartNode = value;
    }

    @property(Button)
    private btnRestart: Button;
    public get BtnRestart(): Button {
        return this.btnRestart;
    }
    public set BtnRestart(value: Button) {
        this.btnRestart = value;
    }

    @property(Node)
    private lbGameOver: Node;
    public get LbGameOver(): Node {
        return this.lbGameOver;
    }
    public set LbGameOver(value: Node) {
        this.lbGameOver = value;
    }

    @property(Button)
    private btnPause: Button;
    public get BtnPause(): Button {
        return this.btnPause;
    }
    public set BtnPause(value: Button) {
        this.btnPause = value;
    }

    @property(Button)
    private btnPlay: Button;
    public get BtnPlay(): Button {
        return this.btnPlay;
    }
    public set BtnPlay(value: Button) {
        this.btnPlay = value;
    }

    @property(Button)
    private btnOffSound: Button;
    public get BtnOffSound(): Button {
        return this.btnOffSound;
    }
    public set BtnOffSound(value: Button) {
        this.btnOffSound = value;
    }

    @property(Button)
    public btnOnSound: Button;

    public showResult() {
        this.bestScore.active = true;
        this.lbGameOver.active = true;
        this.btnRestartNode.active = true;
    }

    public hideResult(): void {
        this.bestScore.active = false;
        this.lbGameOver.active = false;
        this.btnRestartNode.active = false;
    }
    
    protected Restart(){
        this.btnRestart
    }
}

