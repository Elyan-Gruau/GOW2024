import * as BABYLON from "@babylonjs/core";
import {int} from "@babylonjs/core";
import {PavementMaterial} from "./PavementMaterial.ts";


export class MaterialFactory {

    // @ts-ignores

    static getPavement(scene : scene): StandardMaterial{
        const material = new BABYLON.StandardMaterial("pavement_road", scene);
        const scale: int = 100;
        const groundPath : string = "public/asset/textures/pavement_road.png";
        const diffuseTexture =  new BABYLON.Texture(groundPath, scene,
            false,false, BABYLON.Texture.NEAREST_SAMPLINGMODE);
        material.diffuseTexture = diffuseTexture;
        material.diffuseTexture.uScale = scale;
        material.diffuseTexture.vScale = scale;

        material.specularTexture = new BABYLON.Texture("public/asset/textures/pavement_road_ambiant.png",
            scene,false,false,BABYLON.Texture.NEAREST_SAMPLINGMODE);
        material.specularTexture.uScale = scale;
        material.specularTexture.vScale = scale;

        // material.emissiveTexture = diffuseTexture;
        // material.emissiveTexture.uScale = scale;
        // material.emissiveTexture.vScale = scale;

        material.ambientTexture = new BABYLON.Texture("public/asset/textures/pavement_road_ambiant.png", scene,
            false,false, BABYLON.Texture.NEAREST_SAMPLINGMODE);
        material.ambientTexture.uScale = scale;
        material.ambientTexture.vScale = scale;

        material.bumpTexture = new BABYLON.Texture("public/asset/textures/pavement_road_normal.png",
            scene,false,false,BABYLON.Texture.NEAREST_SAMPLINGMODE);
        material.bumpTexture.uScale = scale;
        material.bumpTexture.vScale = scale;
        material.useParallax = true;
        material.useParallaxOcclusion = true;
        material.parallaxScaleBias = 0.05;
        material.specularPower = 1000.0;
        material.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);

        return material;
    }
}
