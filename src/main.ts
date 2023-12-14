import * as BABYLON from '@babylonjs/core';
import { GroundMesh} from "./class/classes.ts";
// import {MaterialFactory} from "./materials/MaterialFactory.ts";
import {PavementMaterial} from "./materials/PavementMaterial.ts";



const canvas = document.getElementById('renderCanvas');

// @ts-ignore
const engine = new BABYLON.Engine(canvas);


const createScene = function(){
    const scene = new BABYLON.Scene(engine);
    scene.createDefaultCameraOrLight(true, false,true);
    //const box = new BABYLON.MeshBuilder.CreateBox();

    const ground : GroundMesh =  BABYLON.MeshBuilder.CreateGround('ground',{
       height : 1,
       width : 1,
       subdivisions : 1
    });
    ground.material = new PavementMaterial(scene,10);
    //MaterialFactory.getPavement(scene);


    //Lamp
    const lampLight = new BABYLON.SpotLight("lampLight", BABYLON.Vector3.Zero(), new BABYLON.Vector3(5, 5, 5), 0.8 * Math.PI, 0.7, scene);
    lampLight.diffuse = BABYLON.Color3.White();
    lampLight.intensity = 80;
    // lampLight.parent = scene.getMeshByName("bulb")

    // ground.material.wireframe = true;

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