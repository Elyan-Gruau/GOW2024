import * as BABYLON from '@babylonjs/core';
import {RunnerSun} from "./class/RunnerSun.ts";
import RunnerEngine from "./engine/RunnerEngine.ts";
import WorldMap from "./class/world/WorldMap.ts";
import {GOWSkybox} from "./class/GOWSkybox.ts";
import {PavementMaterial} from "./materials/PavementMaterial.ts";
// import {GOWMatieralTexture} from "./materials/GOWMaterial.ts";


const canvas = document.getElementById('renderCanvas');

// @ts-ignore
const engine = new BABYLON.Engine(canvas);



const createScene = function(){
    const scene = new BABYLON.Scene(engine);
    scene.fogStart = 0.1;
    scene.fogDensity = 100;
    scene.fogEnd = 100;
    scene.fogEnabled = true;
    // scene.createDefaultCameraOrLight(true, false,true);

    RunnerEngine.init(scene,1);
    const worldMap : WorldMap = new WorldMap(scene,20);



    // const sphere = BABYLON.MeshBuilder.CreateSphere("sphereTest",
    //     {diameter:1},scene);
    // sphere.material = new PavementMaterial(scene,10);


    //MaterialFactory.getPavement(scene);

    // const player :Player = new Player(scene,camera);

    //Creation of the sun
     const sun : RunnerSun = new RunnerSun(scene);

    //Skybox
    new GOWSkybox(scene);

    // const chunk = new WorldChunk(scene);
    // const c = new WorldChunk(scene,new Vector3(0,0,1));





    // BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "valleyvillage.glb").then(() => {
    //     scene.getMeshByName("ground").material.maxSimultaneousLights = 5;
    // });

    let lastTime = performance.now(); // ou Date.now();

    scene.registerBeforeRender(function() {
        const currentTime = performance.now(); // ou Date.now();
        const deltaTime = (currentTime - lastTime) / 1000; // Convertir en secondes

        // Mettez à jour le joueur avec le delta time
        // player.update(deltaTime);
        RunnerEngine.updatePlayers(deltaTime);
        worldMap.update(deltaTime);


        // sun.update(deltaTime);

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