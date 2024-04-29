import * as BABYLON from "@babylonjs/core";
import {PavementMaterial} from "../../materials/PavementMaterial.ts";
import {Mesh, Scene, Vector3} from "@babylonjs/core";

export default class WorldChunk{
    private ground:Mesh;
    private index;
    constructor(scene : Scene, position:Vector3 = new Vector3(0,0,0),index:number) {
        this.index = index;
        this.ground =  BABYLON.MeshBuilder.CreateGround('ground',{
            height : 1,
            width : 1,
            subdivisions : 1
        });
        this.ground.position = position;

        let groundMaterial : PavementMaterial =  new PavementMaterial(scene,12);
        // console.log(groundMaterial.doesTextureExist(GOWMatieralTexture.DIFFUSE));
        // console.log(groundMaterial.doesTextureExist(GOWMatieralTexture.NORMAL));
        // groundMaterial.backFaceCulling = true;
        this.ground.material =groundMaterial;
    }

    getZ() {
        return this.ground.position.z;
    }

    remove() {
        console.log("remove");
        this.ground.dispose();
    }


     getIndex() {
        return this.index;
    }
}