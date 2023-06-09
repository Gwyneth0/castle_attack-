import { _decorator, Button, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Results')
export class Results extends Component {

    // @property(Label)
    // private lbBestScore: Label;

    @property(Label)
    private bestScore: Label;

    @property(Label)
    private score: Label;

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

    @property(Node)
    private nodeShowResult: Node;

    private maxScore: number = 0;
    private currentScore: number = 0;

    protected start(): void {

    }

    protected onLoad(): void {
        const storedMaxScore = localStorage.getItem('maxScore');
        if (storedMaxScore) {
            this.maxScore = parseInt(storedMaxScore);
        }
        this.bestScore.string = String(this.maxScore);

        this.nodeShowResult.active = false;
    }

    public showResult() {
        //console.log(this.maxScore)
        this.maxScore = Math.max(this.maxScore, this.currentScore);
        this.bestScore.string = this.maxScore.toString();
        this.nodeShowResult.active = true;
        //  this.lbBestScore.node.active = true;
        // this.bestScore.node.active = true;
        // this.lbGameOver.active = true;
        // this.btnRestartNode.active = true;
    }

    public hideResult(): void {
        this.bestScore.node.active = false;
        this.lbGameOver.active = false;
        this.btnRestartNode.active = false;
    }

    protected updateScore(num: number): void {
        this.currentScore = num;
        this.score.string = this.currentScore.toString();
        if (this.currentScore > this.maxScore) {
            this.maxScore = this.currentScore;
            localStorage.setItem('maxScore', String(this.maxScore));
            this.bestScore.string = String(this.maxScore);
        }
    }

    public addScore() {
        this.updateScore(this.currentScore + 1);
    }

    protected resetScore() {
        this.updateScore(0);
        this.hideResult();
        this.score.string = this.currentScore.toString();
    }
}

