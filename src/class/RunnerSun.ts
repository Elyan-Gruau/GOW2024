import {Color3, MeshBuilder, Scene, Vector3} from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";

export class RunnerSun {

    private directionalLight: BABYLON.Light;
    private ambiantLight: BABYLON.Light;


    private color: BABYLON.Color3;
    private intensity: number;
    private maxIntesity : number;
    private minIntensity : number;
    private scene : Scene;
    private sunSate:number;

    constructor(scene: Scene) {
        // Lamp
        const position: BABYLON.Vector3 = new BABYLON.Vector3(0, 1, 0);
        const direction : BABYLON.Vector3 = new BABYLON.Vector3(-10.2, -10, 10);


        //Ambiant light
        this.ambiantLight = new BABYLON.DirectionalLight("ambiantLightSun",new Vector3(0,-1,0),scene);
        this.ambiantLight.diffuse =new Color3(125,125,125);
        this.ambiantLight.intensity = 0.31;

        //Direcitonal light
        this.directionalLight = new BABYLON.DirectionalLight("directionalLight",direction, scene);
        this.color = new BABYLON.Color3(125, 125,125); // Couleur de départ (blanc)
        this.intensity = 1; // Intensité de départ
        this.maxIntesity = this.intensity;
        this.minIntensity = 0.0

        this.directionalLight.diffuse = this.color;
        this.directionalLight.intensity = this.intensity;


        //
        // const positionGizmo = new BABYLON.PositionGizmo();
        // positionGizmo.attachedMesh = this.directionalLight;



    }


    // Mettez à jour le cycle jour/nuit
    update(deltaTime: number) {
        // Exemple : Cycle jour/nuit toutes les 10 secondes
        const cycleDuration = 3; // en secondes
        // const cycleProgress = (Math.sin((deltaTime / cycleDuration) * Math.PI * 2) + 1) / 2;
        const cycleProgress = (Math.sin((deltaTime / cycleDuration) )*1000);


        //TODO trouver un moyen de faire varier l'intensité
        if (this.sunSate>=20){
            this.directionalLight.diffuse = this.color;
            this.directionalLight.intensity = this.intensity;
        }else{
            this.sunSate += deltaTime;
        }

        //
        // // Modifiez la couleur et l'intensité en fonction du cycle jour/nuit
        this.color = BABYLON.Color3.Lerp( this.color, new BABYLON.Color3(0, 0, 0), cycleProgress);
        this.intensity = BABYLON.Scalar.Lerp(this.maxIntesity, 0.01, cycleProgress);
        console.log(cycleProgress)
        //
        // // Appliquez les changements à la lumière
        this.directionalLight.diffuse = this.color;
        this.directionalLight.intensity = this.intensity;
    }
}
