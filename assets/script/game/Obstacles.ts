import { _decorator, Camera, Collider2D, Component, find, instantiate, Prefab, Rect, Size, v3, Vec2, Vec3, view, Node } from 'cc';
import { Constants } from '../data/Constants';
import { gameController } from './gameController';
import { Results } from './Results';
const { ccclass, property } = _decorator;


@ccclass('Obstacles')
export class Obstacles extends Component {

    @property({ type: Prefab })
    private Arrow: Prefab = null;

    @property({ type: Prefab })
    private Light: Prefab = null;

    @property({ type: Prefab })
    private Rocket: Prefab = null;

    @property({ type: Node })
    private nodePool: Node;

    @property(Results)
    private results: Results;

    protected update(): void {
        this.createObstacles();
    }

    protected createObstacles(): void {
        this.scheduleOnce(this.spawnObstacles, 0.5);    
    }

    private spawnObstacles(): void {
        this.spawnArrow();
        this.spawnLight();
        this.spawnRocket();
        const randomTime: number = Math.random() * (1 - 1) + 1;
        this.scheduleOnce(this.spawnObstacles, randomTime);
        // if(this.createObstacles == (-640)){ 
        //     this.destroy();
        // }
    }

    private spawnArrow(): void {
        const arrow = instantiate(this.Arrow);
        arrow.parent = this.nodePool;
        arrow.active = true;
        const randomPosition = this.randomScreen();
        arrow.setPosition(randomPosition);
        arrow.getComponent(Collider2D).apply();
        //addscore
        this.results.addScore();
    }

    private spawnLight(): void {
        const light = instantiate(this.Light);
        light.parent = this.nodePool;
        light.active = true;
        const randomPosition = this.randomScreen();
        light.setPosition(randomPosition);
        light.getComponent(Collider2D).apply();
        //addscore
        this.results.addScore();
    }

    private spawnRocket(): void {
        const rocket = instantiate(this.Rocket);
        rocket.parent = this.nodePool;
        rocket.active = true;
        const randomPosition = this.randomScreen();
        rocket.setPosition(randomPosition);
        rocket.getComponent(Collider2D).apply();
        //addscore
        this.results.addScore();
    }

    private randomScreen(): Vec3 {
        const visibleSize: Size = view.getVisibleSize();
        const origin: Vec2 = view.getVisibleOrigin();

        const minX: number = origin.x + visibleSize.width;
        const maxX: number = origin.x + visibleSize.width;
        const minY: number = origin.y;
        const maxY: number = origin.y + visibleSize.height;

        const randomX: number = Math.random() * (maxX + minX) - minX;
        const randomY: number = Math.random() * (maxY + minY) - minY;
        return v3(randomX, randomY);
    }
}

