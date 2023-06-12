import { _decorator, AudioSource, Button, Component, director, Node } from 'cc';
import { audioManager } from '../game/audioManager';
const { ccclass, property } = _decorator;

@ccclass('menugame')
export class menugame extends Component {

  @property(Button)
  private btnPlay: Button;

  private audioSource: AudioSource;

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
    this.audioSource.volume = 1;
    this.btnSoundOn.node.active = false;
    this.btnSoundOff.node.active = true;
  }

  protected btnOffSound(): void {
    this.audioSource.volume = 0; 
    this.btnSoundOn.node.active = true;
    this.btnSoundOff.node.active = false;
  }

}

