import { _decorator, AudioSource, Button, Collider2D, Component, Contact2DType, director, game, IPhysics2DContact, Node, TerrainInfo } from 'cc';
import { Player } from './Player';
import { Results } from './Results';
import { Constants } from '../data/Constants';
import { audioManager } from './audioManager';
const { ccclass, property } = _decorator;

@ccclass('gameController')
export class gameController extends Component {

    @property(Button)
    private btnHome: Button;

    @property(Player)
    private player: Player;

    @property({ type: Results })
    private Results: Results;

    @property(Button)
    private btnPause: Button;

    @property(Button)
    private btnResume: Button;

    @property(Button)
    private btnSoundOff: Button;

    @property(Button)
    private btnSoundOn: Button;

    @property(Button)
    private btnRestart: Button;

    @property(audioManager)
    audioManager: audioManager = null!;

    @property(Node)
    private obstacles: Node;

    private isOver: boolean;
    public get IsOver(): boolean {
        return this.isOver;
    }
    public set IsOver(value: boolean) {
        this.isOver = value;
    }

    private state = Constants.GAME_STATE.START;
    public get State() {
        return this.state;
    }
    public set State(value) {
        this.state = value;
    }

    protected onLoad(): void {
        director.resume();
        this.btnHome.node.on(Node.EventType.TOUCH_END, this.playGame);
        this.btnRestart.node.on(Node.EventType.TOUCH_END, this.restart);
    }

    protected start(): void {
        this.contactPlayer();
        director.resume();
    }

    protected update(): void {
        if (!this.isOver) {
            this.playerStruck();
        }
    }

    protected restart() {
        director.loadScene('game');
    }


    // load scene
    protected playGame(): void {
        director.loadScene('game');
    }
    //colider

    protected contactPlayer(): void {
        const collider = this.player.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    protected onBeginContact(_selfCollider: Collider2D, _otherCollider: Collider2D, _contact: IPhysics2DContact | null): void {
        this.player.HitSomeThing = true;
        this.isOver = false;
    }

    protected playerStruck(): void {
        if (this.player.HitSomeThing) {
            Constants.GAME_STATE.OVER, this.gameOver();
            director.pause();
        }
    }

    protected gameOver(): void {
        this.Results.showResult();
        this.audioManager.soundPlayerDie();
        this.audioManager.offAudio();
    }

    protected btnPauseGame(): void {
        director.pause();
        this.btnPause.node.active = false;
        this.btnResume.node.active = true;
        this.audioManager.soundClickBtn();
    }

    protected btnResumeGame(): void {
        director.resume();
        this.btnPause.node.active = true;
        this.btnResume.node.active = false;
        this.audioManager.soundClickBtn();
    }

    protected btnOnSound(): void {
        this.audioManager.onAudio();
        this.btnSoundOn.node.active = false;
        this.btnSoundOff.node.active = true;
        this.audioManager.soundClickBtn();
    }

    protected btnOffSound(): void {
        this.audioManager.offAudio();
        this.btnSoundOn.node.active = true;
        this.btnSoundOff.node.active = false;
        this.audioManager.soundClickBtn();
    }
}

