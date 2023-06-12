import { _decorator, Button, Component, director, Node } from 'cc';
import { audioManager } from '../game/audioManager';
const { ccclass, property } = _decorator;

@ccclass('menugame')
export class menugame extends Component {

    @property(Button)
    private btnPlay: Button;

    @property(audioManager)
    private audioManager: audioManager;

    @property(Button)
    private btnSoundOn: Button;

    @property(Button)
    private btnSoundOff: Button;

    protected onLoad(): void {
        this.btnPlay.node.on(Node.EventType.TOUCH_END, this.playGame);
    }

    protected playGame(): void {
        director.loadScene('game');
    }

    protected btnOnSound(): void {
      //  this.audioManager.onAudio();
        this.btnSoundOn.node.active = false;
        this.btnSoundOff.node.active = true;
     //   this.audioManager.soundClickBtn();
    }

    protected btnOffSound(): void {
   //     this.audioManager.offAudio();
        this.btnSoundOn.node.active = true;
        this.btnSoundOff.node.active = false;
      //  this.audioManager.soundClickBtn();
    }

}

