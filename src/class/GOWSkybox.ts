import {Scene} from "@babylonjs/core";
import * as BABYLON from '@babylonjs/core';
import {PathHelper} from "../helper/PathHelper.ts";

export class GOWSkybox{

    constructor(scene: Scene) {

        const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 100.0 }, scene);
        const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.disableLighting = true;
        skybox.material = skyboxMaterial;

        skybox.infiniteDistance = true;
        skyboxMaterial.disableLighting = true;

        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(PathHelper.texturePath+"/skybox/skybox", scene);
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skybox.renderingGroupId = 0;
    }
}