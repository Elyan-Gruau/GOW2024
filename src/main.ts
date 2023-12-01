import * as BABYLON from '@babylonjs/core';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScne = function(){
    const scene = new BABYLON.Scene(engine);
    return scene;
}

const scene = createScne();

engine.runRenderLoop(function (){
    scene.render();
});