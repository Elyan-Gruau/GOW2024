import * as BABYLON from '@babylonjs/core';
import {GroundMesh} from "./class/classes.ts";
// import {MaterialFactory} from "./materials/MaterialFactory.ts";
import {PavementMaterial} from "./materials/PavementMaterial.ts";
import {Vector3} from "@babylonjs/core";
import {Player} from "./class/Player.ts";
import {GOWSkybox} from "./class/GOWSkybox.ts";
import {Sun} from "./class/Sun.ts";
// import {GOWMatieralTexture} from "./materials/GOWMaterial.ts";


const canvas = document.getElementById('renderCanvas');

// @ts-ignore
const engine = new BABYLON.Engine(canvas);
let ground: GroundMesh;


const createScene = function(){
    const scene = new BABYLON.Scene(engine);
    scene.createDefaultCameraOrLight(true, false,true);
    //const box = new BABYLON.MeshBuilder.CreateBox();

     ground =  BABYLON.MeshBuilder.CreateGround('ground',{
       height : 1,
       width : 1,
       subdivisions : 1
    });
    let groundMaterial : PavementMaterial =  new PavementMaterial(scene,10);
    // console.log(groundMaterial.doesTextureExist(GOWMatieralTexture.DIFFUSE));
    // console.log(groundMaterial.doesTextureExist(GOWMatieralTexture.NORMAL));

    ground.material =groundMaterial;
    //MaterialFactory.getPavement(scene);

    const player :Player = new Player(scene);

    const sun :Sun = new Sun(scene);


    //Skybox
    // const skybox : GOWSkybox = new GOWSkybox(scene);


    // BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "valleyvillage.glb").then(() => {
    //     scene.getMeshByName("ground").material.maxSimultaneousLights = 5;
    // });

    let lastTime = performance.now(); // ou Date.now();

    scene.registerBeforeRender(function() {
        const currentTime = performance.now(); // ou Date.now();
        const deltaTime = (currentTime - lastTime) / 1000; // Convertir en secondes

        // Mettez à jour le joueur avec le delta time
        player.update(deltaTime);

        // Mettez à jour le soleil avec le delta time
        sun.update(deltaTime);

        lastTime = currentTime;
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