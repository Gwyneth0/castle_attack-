import { _decorator, AudioClip, AudioSource, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('audioManager')
export class audioManager extends Component {

    @property(AudioClip)
    private bgAudio: AudioClip = null;

    @property(AudioClip)
    private click: AudioClip = null;

    @property(AudioClip)
    private playerDie: AudioClip = null;

    private audioSource: AudioSource;

    protected start(): void {
        this.audioSource = this.getComponent(AudioSource);
    }

    public playSound(play = true){
        if(!play){
            this.audioSource.stop();
            return;
        }
        this.audioSource.clip = this.bgAudio;
        this.audioSource.play();
    }

    public soundClickBtn(){
        this.audioSource.playOneShot(this.click);
    }

    public soundPlayerDie(){
        this.audioSource.playOneShot(this.playerDie);
    }

    // public soundObstacles(){

    // }
}

