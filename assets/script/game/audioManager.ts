import { _decorator, AudioClip, AudioSource, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('audioManager')
export class audioManager extends Component {

    @property(AudioClip)
    private click: AudioClip = null;

    @property(AudioClip)
    private playerDie: AudioClip = null;

    // @property(AudioClip)
    // private soundObs: AudioClip = null;

    private audioSource: AudioSource;

    protected start(): void {
        this.audioSource = this.getComponent(AudioSource);
    }

    public soundClickBtn(){
        this.audioSource.playOneShot(this.click);
    }

    public soundPlayerDie(){
        this.audioSource.playOneShot(this.playerDie);
    }

    // public soundObstracles(){
    //     this.audioSource.playOneShot(this.soundObs);
    // }
    public offAudio(){
        this.audioSource.volume = 0;
    }

    public onAudio(){
        this.audioSource.volume = 1;
    }
}

