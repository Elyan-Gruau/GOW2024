import {GOWMaterial} from "./GOWMaterial.ts";
import * as BABYLON from "@babylonjs/core";
export class PavementMaterial extends GOWMaterial{

    constructor(scene :BABYLON.Scene, scale : number ){
        super(scene,"pavement", scale, scale);

        const diffuse: BABYLON.Texture    =  new BABYLON.Texture(this.diffusePath, scene,
            false,false, BABYLON.Texture.NEAREST_SAMPLINGMODE);
        this.diffuseTexture =  diffuse;
        // @ts-ignore
        this.diffuseTexture.uScale = scale;
        // @ts-ignore
        this.diffuseTexture.vScale = scale;

        this.specularTexture = new BABYLON.Texture(this.ambiantPath,
            scene,false,false,BABYLON.Texture.NEAREST_SAMPLINGMODE);
        // @ts-ignore
        this.specularTexture.uScale = scale;
        // @ts-ignore
        this.specularTexture.vScale = scale;

        // material.emissiveTexture = diffuseTexture;
        // material.emissiveTexture.uScale = scale;
        // material.emissiveTexture.vScale = scale;

        this.ambientTexture = new BABYLON.Texture(this.ambiantPath, scene,
            false,false, BABYLON.Texture.NEAREST_SAMPLINGMODE);
        // @ts-ignore
        this.ambientTexture.uScale = scale;
        // @ts-ignore
        this.ambientTexture.vScale = scale;

        this.bumpTexture = new BABYLON.Texture(this.normalPath,
            scene,false,false,BABYLON.Texture.NEAREST_SAMPLINGMODE);
        // @ts-ignore
        this.bumpTexture.uScale = scale;
        // @ts-ignore
        this.bumpTexture.vScale = scale;
        this.useParallax = true;
        this.useParallaxOcclusion = true;
        this.parallaxScaleBias = 0.02;
        this.specularPower = 100.0;
        this.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    }
}