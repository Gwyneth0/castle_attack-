import { _decorator, Button, Collider2D, Component, Contact2DType, director, game, IPhysics2DContact, Node, TerrainInfo } from 'cc';
import { Player } from './Player';
import { Results } from './Results';
import { Constants } from '../data/Constants';
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
    protected btnSoundOff: Button;

    @property(Button)
    protected btnSoundOn: Button;

    hitsomething: boolean;
    isOver: boolean;

    state = Constants.GAME_STATE.START;

    protected onLoad(): void {
        //  this.isOver = true;
        this.btnHome.node.on(Node.EventType.TOUCH_END, this.playGame);
    }

    protected start(): void {
        this.contactPlayer();
        //  this.node.on(Constants.GAME_EVENT.RESTART,this.gameStart,this);

    }

    // protected onDestroy(){
    //     this.node.off(Constants.GAME_EVENT.RESTART, this.gameStart,this);
    // }

    // protected gameStart(): void{
    //     this.state = Constants.GAME_STATE.PLAYING;
    //     this.isOver = false;
    //     this.Results.node.score = 0;
    // }

    protected update(): void {
        if (!this.isOver) {
            this.playerStruck();
        }
    }

    // load scene
    protected playGame(): void {
        director.loadScene('menu');
    }
    //colider

    protected contactPlayer(): void {
        const collider = this.player.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    protected onBeginContact(_selfCollider: Collider2D, _otherCollider: Collider2D, _contact: IPhysics2DContact | null): void {
        this.player.hitSomeThing = true;
        this.isOver = false;
        // console.log(this.player.hitSomeThing);
    }

    protected playerStruck(): void {
        if (this.player.hitSomeThing) {
            this.gameOver();
            director.pause();
        }
    }

    protected gameOver(): void {
        this.Results.showResult();
    }

    protected btnPauseGame(): void {
        director.pause();
        this.btnPause.node.active = false;
        this.btnResume.node.active = true;
    }

    protected btnResumeGame(): void {
        director.resume();
        this.btnPause.node.active = true;
        this.btnResume.node.active = false;
    }


    // protected btnOnSound(): void{
    //     director.resume();
    //     this.btnSoundOn.node.active = true;
    //     this.btnSoundOff.node.active = false;
    // }

    // protected btnOffSound(): void{
    //     director.pause();
    //     this.btnSoundOff.node.active = true;
    //     this.btnSoundOn.node.active = false;
    // }
}

