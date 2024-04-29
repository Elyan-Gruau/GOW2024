import {MeshBuilder, Scene} from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";

export class RunnerSun {

    private lampLight: BABYLON.Light;
    private sunBall ;
    private color: BABYLON.Color3;
    private intensity: number;
    private maxIntesity : number;
    private scene : Scene;

    constructor(scene: Scene) {
        // Lamp
        const position: BABYLON.Vector3 = new BABYLON.Vector3(0, 1, 0);
        const direction : BABYLON.Vector3 = new BABYLON.Vector3(-10.2, -10, 10);

        this.sunBall = MeshBuilder.CreateSphere('sun', {
            diameter: 0.1,
          }, scene);
        this.sunBall.position = position;

        this.lampLight = new BABYLON.DirectionalLight("lampLight",direction, scene);
        this.color = new BABYLON.Color3(255, 255,250); // Couleur de départ (blanc)
        this.intensity = 0.1; // Intensité de départ
        this.maxIntesity = this.intensity;

        this.lampLight.diffuse = this.color;
        this.lampLight.intensity = this.intensity;

        const positionGizmo = new BABYLON.PositionGizmo();
        positionGizmo.attachedMesh = this.lampLight;



    }


    // Mettez à jour le cycle jour/nuit
    update(deltaTime: number) {
        // Exemple : Cycle jour/nuit toutes les 10 secondes
        const cycleDuration = 10; // en secondes
        const cycleProgress = (Math.sin((deltaTime / cycleDuration) * Math.PI * 2) + 1) / 2;
        //
        // // Modifiez la couleur et l'intensité en fonction du cycle jour/nuit
        this.color = BABYLON.Color3.Lerp( this.color, new BABYLON.Color3(0.0, 0.2, 0.2), cycleProgress);
        this.intensity = BABYLON.Scalar.Lerp(this.maxIntesity, 0.5, cycleProgress);
        //
        // // Appliquez les changements à la lumière
        this.lampLight.diffuse = this.color;
        this.lampLight.intensity = this.intensity;
    }
}
