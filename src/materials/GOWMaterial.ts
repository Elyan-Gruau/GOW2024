import {StandardMaterial} from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";
import {PathHelper} from "../helper/PathHelper.ts";
export class GOWMaterial extends StandardMaterial{
    scaleX : number;
    scaleY : number;
    textureName : string;

    mainPath : string;
    diffusePath : string;
    normalPath : string;
    ambiantPath : string;

    constructor(scene : BABYLON.Scene,textureName : string, scaleX : number, scaleY : number) {
        super(textureName,scene);
        this.scaleX = scaleX;
        this.scaleY = scaleY
        this.textureName = textureName;

        this.mainPath = PathHelper.texturePath +"/"+textureName+"/";
        this.diffusePath = this.mainPath+textureName+"_diffuse.png";
        this.normalPath =  this.mainPath+textureName+"_normal.png";
        this.ambiantPath =  this.mainPath+textureName+"_ambiant.png";


    }

}