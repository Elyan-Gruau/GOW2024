import * as BABYLON from '@babylonjs/core';
import {GroundMesh} from "./class/classes.ts";
// import {MaterialFactory} from "./materials/MaterialFactory.ts";
import {PavementMaterial} from "./materials/PavementMaterial.ts";
import {GOWMatieralTexture} from "./materials/GOWMaterial.ts";


const canvas = document.getElementById('renderCanvas');

// @ts-ignore
const engine = new BABYLON.Engine(canvas);


const createScene = function(){
    const scene = new BABYLON.Scene(engine);
    scene.createDefaultCameraOrLight(true, false,true);

    const ground : GroundMesh =  BABYLON.MeshBuilder.CreateGround('ground',{
        height : 10,
        width : 10,
        subdivisions : 1
    });
    let groundMaterial : PavementMaterial =  new PavementMaterial(scene,10);
    // console.log(groundMaterial.doesTextureExist(GOWMatieralTexture.DIFFUSE));
    // console.log(groundMaterial.doesTextureExist(GOWMatieralTexture.NORMAL));

    ground.material =groundMaterial;
    //MaterialFactory.getPavement(scene);

    ground.material = MaterialFactory.getPavement(scene);

    const box : BoxMesh = BABYLON.MeshBuilder.CreateBox('', {
        size : 0.1,
        faceColors : [
            new BABYLON.Color4(1, 0, 0, 1),
            new BABYLON.Color4(1, 1, 0, 1),
            new BABYLON.Color4(0, 0, 1, 1),
            new BABYLON.Color4(1, 0, 1, 1)
        ]
    }, scene);



    // const box : BoxMesh = BABYLON.MeshBuilder.CreateBox("myBox", {
    //     size : 0.1
    // }, scene);
    // box.material = MaterialFactory.getPavement(scene);

    //Skybox
    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:150}, scene);
    const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

    // BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "valleyvillage.glb").then(() => {
    //     scene.getMeshByName("ground").material.maxSimultaneousLights = 5;
    // });

    scene.registerBeforeRender(function() {

    });
    return scene;
}

const scene = createScene();

engine.runRenderLoop(function (){
    scene.render();
});

window.addEventListener('resize', function(){
   engine.resize() ;
});