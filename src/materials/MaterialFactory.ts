import * as BABYLON from "@babylonjs/core";
import {int, StandardMaterial} from "@babylonjs/core";


export class MaterialFactory {

    // @ts-ignores

    static getPavement(scene : scene): StandardMaterial{
        const material = new BABYLON.StandardMaterial("pavement_road", scene);
        const scale: int = 50;
        const groundPath : string = "public/asset/textures/pavement_road.png";
        const diffuseTexture =  new BABYLON.Texture(groundPath, scene,
            false,false, BABYLON.Texture.NEAREST_SAMPLINGMODE);
        material.diffuseTexture = diffuseTexture;

        material.diffuseTexture.uScale = scale;
        material.diffuseTexture.vScale = scale;
        material.specularTexture = diffuseTexture;
        material.specularTexture.uScale = scale;
        material.specularTexture.vScale = scale;
        material.emissiveTexture = diffuseTexture;
        material.emissiveTexture.uScale = scale;
        material.emissiveTexture.vScale = scale;
        material.ambientTexture = diffuseTexture;
        material.ambientTexture.uScale = scale;
        material.ambientTexture.vScale = scale;

        material.bumpTexture = new BABYLON.Texture("public/asset/textures/pavement_road_normal.png",
            scene,false,false,BABYLON.Texture.NEAREST_SAMPLINGMODE);
        material.bumpTexture.uScale = scale;
        material.bumpTexture.vScale = scale;

        return material;
    }
}