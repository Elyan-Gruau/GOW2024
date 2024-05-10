import * as BABYLON from "@babylonjs/core";
import {PavementMaterial} from "../../materials/PavementMaterial.ts";
import {Mesh, Scene, Vector3} from "@babylonjs/core";
import WorldBuilding from "./WorldBuilding.ts";

export default class WorldChunk{
    private ground:Mesh;
    private buildings : WorldBuilding[];
    private index;
    constructor(scene : Scene, position:Vector3 = new Vector3(0,0,0),index:number,leftBuildType:number=1,rightBuildType:number=1) {
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


        // BUILDINGS
        this.buildings.push(new WorldBuilding(
            scene,
            new Vector3(position.x+1, position.y,position.z),
            WorldChunk.multiplyWithRandomFactor(1,0.25),
            leftBuildType,
            true));
        this.buildings.push(  new WorldBuilding(
            scene,
            new Vector3(position.x+1, position.y,position.z),
            WorldChunk.multiplyWithRandomFactor(1,0.25),
            rightBuildType,
            false));

        // @ts-ignore
    }

    getZ() {
        return this.ground.position.z;
    }

    remove() {
        // console.log("remove");
        this.ground.dispose();
        for(let i = 0 ; i < this.buildings.length ; i++) {
            this.buildings[i].dispose();
        }

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

