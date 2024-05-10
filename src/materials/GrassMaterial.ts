import {GOWMaterial, GOWMaterialPath} from "./GOWMaterial.ts";
import * as BABYLON from "@babylonjs/core";

export class GrassMaterial extends GOWMaterial{

    constructor(scene :BABYLON.Scene, scale : number ){
        super(scene,GOWMaterialPath.GLOBAL,"grass", scale, scale,"/grass");

        const samplingMode : number = BABYLON.Texture.CUBIC_MODE;
        const specularPower : number = 1000;
        const parallaxScaleBias : number = 0.15;
        const useParallax = true;
        const useParallaxOcclusion = true;

        console.log(this.diffusePath)
        const diffuse: BABYLON.Texture    =  new BABYLON.Texture(this.diffusePath, scene,
            false,false,samplingMode );
        this.diffuseTexture =  diffuse;
        // @ts-ignore
        this.diffuseTexture.uScale = scale;
        // @ts-ignore
        this.diffuseTexture.vScale = scale;

        this.specularTexture = new BABYLON.Texture(this.ambiantPath,
            scene,false,false,samplingMode);
        // @ts-ignore
        this.specularTexture.uScale = scale;
        // @ts-ignore
        this.specularTexture.vScale = scale;

        this.emissiveTexture = this.diffuseTexture;
        // @ts-ignore
        this.emissiveTexture.uScale = scale;
        // @ts-ignore
        this.emissiveTexture.vScale = scale;

        // AMBIANT TEXTURE --------
        // this.ambientTexture = new BABYLON.Texture(this.ambiantPath, scene,
        //     false,false, samplingMode);
        // // @ts-ignore
        // this.ambientTexture.uScale = scale;
        // // @ts-ignore
        // this.ambientTexture.vScale = scale;


        // BUMP TEXTURE ----------
        this.bumpTexture = new BABYLON.Texture(this.normalPath,
            scene,false,false,samplingMode);
        // @ts-ignore
        this.bumpTexture.uScale = scale;
        // @ts-ignore
        this.bumpTexture.vScale = scale;
        this.useParallax = useParallax;
        this.useParallaxOcclusion = useParallaxOcclusion;
        this.parallaxScaleBias =parallaxScaleBias;
        this.specularPower = specularPower;
        this.specularColor = new BABYLON.Color3(0, 0, 0);

        // this.diffuseTexture.uOffset = 5; // Ajustez la valeur pour la rotation sur l'axe U
        // this.diffuseTexture.vOffset = 5; // Ajustez la valeur pour la rotation sur l'axe V
        // this.diffuseTexture.

    }
}