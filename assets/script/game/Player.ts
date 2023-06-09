import { _decorator, Component, EventKeyboard, EventMouse, input, Input, KeyCode, Vec3 } from 'cc';
import { Constants } from '../data/Constants';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    private hitSomeThing: boolean;
    public get HitSomeThing(): boolean {
        return this.hitSomeThing;
    }
    public set HitSomeThing(value: boolean) {
        this.hitSomeThing = value;
    }

    protected start(): void {
        input.on(Input.EventType.KEY_DOWN, this.gamePlay, this);
    }

    protected gamePlay(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                console.log(this.node.scale);
               this.node.scale = new Vec3(-1, 1, 0);
                this.leftStep(1);
                break;
            case KeyCode.KEY_D:
                console.log(this.node.scale);
               this.node.scale = new Vec3(1, 1, 0);
                this.rightStep(1);  
                break;
        }
    }

    protected rightStep(step: number): void {
        if (Constants.STARTMOVE) {
            return;
        }
        Constants.STARTMOVE = true;
        Constants.MOVESTEP = step;
        Constants.CURMOVETIME = 0;
        Constants.CURMOVESPEED = Constants.MOVESTEP * Constants.RIGHT_BLOCK_SIZE / Constants.MOVESTEP;
        this.node.getPosition(Constants.CURPOS);
        Vec3.add(Constants.TARGETPOS, Constants.CURPOS, new Vec3(Constants.MOVESTEP * Constants.RIGHT_BLOCK_SIZE, 0, 0));
    }

    protected leftStep(step: number): void {
        if (Constants.STARTMOVE) {
            return;
        }
        Constants.STARTMOVE = true;
        Constants.MOVESTEP = step;
        Constants.CURMOVETIME = 0;
        Constants.CURMOVESPEED = Constants.MOVESTEP * Constants.LEFT_BLOCK_SIZE / Constants.MOVESTEP;
        this.node.getPosition(Constants.CURPOS);
        Vec3.add(Constants.TARGETPOS, Constants.CURPOS, new Vec3(Constants.MOVESTEP * Constants.LEFT_BLOCK_SIZE, 0, 0));
    }

    protected update(deltaTime: number): void {
        if (Constants.STARTMOVE) {
            Constants.CURMOVETIME += deltaTime;
            if (Constants.CURMOVETIME > Constants.MOVETIME) {
                this.node.setPosition(Constants.TARGETPOS);
                Constants.STARTMOVE = false;
            } else {
                this.node.getPosition(Constants.CURPOS);
                Constants.DELTAPOS.x = Constants.CURMOVESPEED * deltaTime;
                Vec3.add(Constants.CURPOS, Constants.CURPOS, Constants.DELTAPOS);
                this.node.setPosition(Constants.CURPOS);
            }
        }
    }


}

