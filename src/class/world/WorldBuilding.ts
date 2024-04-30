import {Mesh, Scene, Vector3} from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";
import {PavementMaterial} from "../../materials/PavementMaterial.ts";
import BuildingFrontMaterial from "../../materials/BuildingFrontMaterial.ts";

export default class WorldBuilding{

    frontPanel : Mesh;
    topPanel : Mesh;
    height : number;

    constructor(scene: Scene,position:Vector3,height:number = 0.5 ,isFacingLeft:boolean = true) {
        this.height = height;

        this.frontPanel =  BABYLON.MeshBuilder.CreateGround('houseFrontPanel',{
            height : 1,
            width : this.height,
            subdivisions : 1
        });
        if(isFacingLeft){
            this.frontPanel.position  = new Vector3(position.x-0.5,position.y+(0.5* this.height),position.z);
            this.frontPanel.rotate(new Vector3(0,0,1),Math.PI/2);
        }else{
            this.frontPanel.position = new Vector3(position.x-1.5,position.y+(0.5* this.height),position.z);
            this.frontPanel.rotate(new Vector3(0,0,-1),Math.PI/2);
        }


        let frontMaterial : PavementMaterial =  new PavementMaterial(scene,1);
        this.frontPanel.material = frontMaterial;

        let material = new BuildingFrontMaterial(scene,1,1);
        this.frontPanel.material = material;

    }
}