import {Player} from "../class/player/Player.ts";
import {Scene} from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";

export default class RunnerEngine {
    private static players : Player[] = [];

    static init(scene: Scene,playerQTY:number = 2){
        for (let i = 0; i < playerQTY; i++){
            const camera = new BABYLON.UniversalCamera("playerCamera_"+i, new BABYLON.Vector3(0, 0.20, -1), scene);
            scene.addCamera(camera);
            RunnerEngine.players.push(new Player(scene,camera))
        }
    }


    static getPlayers(): Player[] {
        return RunnerEngine.players;
    }

    static getPlayer(index: number): Player {
        return RunnerEngine.players[index];
    }

    static updatePlayers(dt:number){
        RunnerEngine.players.forEach((player) => {
            player.update(dt);
        })
    }
}