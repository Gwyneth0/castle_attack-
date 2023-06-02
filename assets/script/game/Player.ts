import { _decorator, Component, EventMouse, input, Input, Node, Root, v2, Vec3 } from 'cc';
import { Constants } from '../data/Constants';
const { ccclass, property } = _decorator;
export const BLOCK_SIZE = 40;

@ccclass('Player')
export class Player extends Component {

    protected start(): void {
        input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
    }

    protected onMouseUp(event: EventMouse): void {
        if (event.getButton() === 0) {
            this.moveStep(1);
        } else if (event.getButton() === 2) {
            this.moveStep(2);
        }
    }

    protected moveStep(step: number): void {
        if (Constants.STARTMOVE) {
            return;
        }
        Constants.STARTMOVE = true;
        Constants.MOVESTEP = step;
        Constants.CURMOVETIME = 0;
        Constants.CURMOVESPEED = Constants.MOVESTEP * BLOCK_SIZE / Constants.MOVESTEP;
        this.node.getPosition(Constants.CURPOS);
        Vec3.add(Constants.TARGETPOS, Constants.CURPOS, new Vec3(Constants.MOVESTEP * BLOCK_SIZE, 0, 0));
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

