import * as BABYLON from "@babylonjs/core";
import {PavementMaterial} from "../../materials/PavementMaterial.ts";
import {Mesh, Scene, Vector3} from "@babylonjs/core";
import WorldBuilding from "./WorldBuilding.ts";

export default class WorldChunk{
    private ground:Mesh;
    private buildings : WorldBuilding[];
    private index;
    constructor(scene : Scene, position:Vector3 = new Vector3(0,0,0),index:number) {
        this.index = index;
        this.buildings = [];
        this.ground =  BABYLON.MeshBuilder.CreateGround('ground',{
            height : 1,
            width : 1,
            subdivisions : 1
        });
        this.ground.position = position;

        let groundMaterial : PavementMaterial =  new PavementMaterial(scene,6);
        // console.log(groundMaterial.doesTextureExist(GOWMatieralTexture.DIFFUSE));
        // console.log(groundMaterial.doesTextureExist(GOWMatieralTexture.NORMAL));
        // groundMaterial.backFaceCulling = true;
        this.ground.material =groundMaterial;


        //TEST BUILDING
        const bLeft = new WorldBuilding(scene, new Vector3(position.x+1, position.y,position.z),WorldChunk.multiplyWithRandomFactor(0.4,0.25),true);
        const bRight = new WorldBuilding(scene, new Vector3(position.x+1, position.y,position.z),WorldChunk.multiplyWithRandomFactor(0.4,0.25),false);
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

    static multiplyWithRandomFactor(x:number, facteurMax:number) {
        // Générer un nombre aléatoire entre -facteurMax et facteurMax
        const randomFactor = (Math.random() * facteurMax);

        // Multiplier x par le facteur aléatoire et le retourner
        return x + randomFactor;
    }
}

