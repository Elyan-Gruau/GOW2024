import * as BABYLON from "@babylonjs/core";
import {int} from "@babylonjs/core";
import {PavementMaterial} from "./PavementMaterial.ts";


export class MaterialFactory {
    static getPavement(scene : BABYLON.Scene, scale : int): BABYLON.StandardMaterial{
        return new PavementMaterial(scene, scale);
    }
}
