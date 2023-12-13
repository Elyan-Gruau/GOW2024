import * as BABYLON from '@babylonjs/core';
import {BoxMesh, GroundMesh} from "./class/classes.ts";



const canvas = document.getElementById('renderCanvas');

// @ts-ignore
const engine = new BABYLON.Engine(canvas);


const createScene = function(){
    const scene = new BABYLON.Scene(engine);
    scene.createDefaultCameraOrLight(true, false,true);
    //const box = new BABYLON.MeshBuilder.CreateBox();

    const ground : GroundMesh =  BABYLON.MeshBuilder.CreateGround('ground',{
       height : 10,
       width : 10,
       subdivisions : 30
    });

    ground.material = new BABYLON.StandardMaterial();
    ground.material.wireframe = true;

    const box : BoxMesh = BABYLON.MeshBuilder.CreateBox("myBox", {
        size : 0.1
    }, scene);
    return scene;
}

const scene = createScene();

engine.runRenderLoop(function (){
    scene.render();
});

window.addEventListener('resize', function(){
   engine.resize() ;
});