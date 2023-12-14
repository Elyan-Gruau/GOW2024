import * as BABYLON from '@babylonjs/core';
import {BoxMesh, GroundMesh} from "./class/classes.ts";



const canvas = document.getElementById('renderCanvas');

// @ts-ignore
const engine = new BABYLON.Engine(canvas);


const createScene = function(){
    const scene = new BABYLON.Scene(engine);
    scene.createDefaultCameraOrLight(true, false,true);

    const ground : GroundMesh =  BABYLON.MeshBuilder.CreateGround('',{
       height : 10,
       width : 10,
       subdivisions : 50
    }, scene);

    ground.material = new BABYLON.StandardMaterial('', scene);
    ground.material.wireframe = true;

    const box : BoxMesh = BABYLON.MeshBuilder.CreateBox('', {
        size : 0.3,
        faceColors : [
            new BABYLON.Color4(1, 0, 0, 1),
            new BABYLON.Color4(1, 1, 0, 1),
            new BABYLON.Color4(0, 0, 1, 1),
            new BABYLON.Color4(1, 0, 1, 1)
        ]
    }, scene);

/*
    scene.registerBeforeRender(function() {
        box.rotation.x += 0.1;
        box.rotation.y += 0.05;
        box.rotation.z += 0.025;

        box.translate(new BABYLON.Vector3(1, 0, 0), 0.1);
        //box.position.x += 1 % 10;
    });
*/
    return scene;
}

const scene = createScene();

engine.runRenderLoop(function (){
    scene.render();
});

window.addEventListener('resize', function(){
   engine.resize() ;
});