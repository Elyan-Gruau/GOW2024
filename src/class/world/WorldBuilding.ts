import {Mesh, Scene, Vector3} from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";
import {PavementMaterial} from "../../materials/PavementMaterial.ts";
import BuildingFrontMaterial from "../../materials/BuildingFrontMaterial.ts";
import {GrassMaterial} from "../../materials/GrassMaterial.ts";

export default class WorldBuilding{

    private frontPanel : Mesh;
    private ground : Mesh;
    private height : number;

    constructor(scene: Scene,position:Vector3,height:number = 0.5 ,buildingType:number=0,isFacingLeft:boolean = true) {
        this.height = height;


        this.frontPanel =  BABYLON.MeshBuilder.CreateGround('houseFrontPanel',{
            height : this.height,
            width : 1,
            subdivisions : 1
        });


        //Grass gound
        this.ground = BABYLON.MeshBuilder.CreateGround('buildingGround',{
            height : 1,
            width : 4,
            subdivisions : 1
        })
        this.ground.material = new GrassMaterial(scene,15);

        if(isFacingLeft){
            this.frontPanel.position  = new Vector3(position.x,position.y+(0.48* this.height),position.z);
            this.frontPanel.rotate(new Vector3(-1,0,0),Math.PI/2);
            this.ground.position = new Vector3(position.x-3.5,position.y,position.z);
        }else{
            this.frontPanel.position = new Vector3(position.x-2,position.y+(0.48* this.height),position.z);
            this.frontPanel.rotate(new Vector3(-1,0,0),Math.PI/2);
            this.ground.position = new Vector3(position.x+1.5,position.y,position.z);
        }


        let material = new BuildingFrontMaterial(scene,buildingType,-1);
        this.frontPanel.material = material;



    }

    dispose(){
        this.frontPanel.dispose();
        this.ground.dispose();
    }
}