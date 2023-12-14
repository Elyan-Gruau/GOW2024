import * as BABYLON from "@babylonjs/core";
import {int} from "@babylonjs/core";


export class MaterialFactory {
    static pavementMaterial : BABYLON.StandardMaterial;
    static getPavement(scene : BABYLON.Scene): BABYLON.StandardMaterial{
        if (!this.pavementMaterial){
            const material = new BABYLON.StandardMaterial("pavement_road", scene);
            const scale: int = 10;
            const groundPath : string = "public/asset/textures/pavement_road.png";
            const diffuseTexture =  new BABYLON.Texture(groundPath, scene,
                false,false, BABYLON.Texture.NEAREST_SAMPLINGMODE);
            material.diffuseTexture = diffuseTexture;
            // @ts-ignore
            material.diffuseTexture.uScale = scale;
            // @ts-ignore
            material.diffuseTexture.vScale = scale;

            material.specularTexture = new BABYLON.Texture("public/asset/textures/pavement_road_ambiant.png",
                scene,false,false,BABYLON.Texture.NEAREST_SAMPLINGMODE);
            // @ts-ignore
            material.specularTexture.uScale = scale;
            // @ts-ignore
            material.specularTexture.vScale = scale;

            // material.emissiveTexture = diffuseTexture;
            // material.emissiveTexture.uScale = scale;
            // material.emissiveTexture.vScale = scale;

            material.ambientTexture = new BABYLON.Texture("public/asset/textures/pavement_road_ambiant.png", scene,
                false,false, BABYLON.Texture.NEAREST_SAMPLINGMODE);
            // @ts-ignore
            material.ambientTexture.uScale = scale;
            // @ts-ignore
            material.ambientTexture.vScale = scale;

            material.bumpTexture = new BABYLON.Texture("public/asset/textures/pavement_road_normal.png",
                scene,false,false,BABYLON.Texture.NEAREST_SAMPLINGMODE);
            // @ts-ignore
            material.bumpTexture.uScale = scale;
            // @ts-ignore
            material.bumpTexture.vScale = scale;
            material.useParallax = true;
            material.useParallaxOcclusion = true;
            material.parallaxScaleBias = 0.02;
            material.specularPower = 100.0;
            material.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);
            this.pavementMaterial = material;
        }
        return this.pavementMaterial;
    }
}
