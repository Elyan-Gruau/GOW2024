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

    // DONT WORK,
    //TODO FIX IT
    public doesTextureExist(type : GOWMatieralTexture) : boolean{
        let path : string = "";
        switch (type){
            case GOWMatieralTexture.NORMAL : {
                path = this.normalPath;
                break;
            }
            case GOWMatieralTexture.DIFFUSE : {
                path = this.diffusePath;
                break;
            }
            case GOWMatieralTexture.AMBIANT : {
                path = this.ambiantPath;
                break;
            }
            default : {
                console.error("doesTextureExist : GOWMatieralTexture."+type+" not handled")
            }
        }

        let image = new Image();

        image.src = path;
        // console.log(image.src);

        if (!image.complete) {
            return false;
        }
        else if (image.height === 0) {
            return false;
        }

        return true;
    }

}

export enum GOWMatieralTexture{
    DIFFUSE = "diffuse",
    NORMAL = "normal",
    AMBIANT = "ambiant"
}