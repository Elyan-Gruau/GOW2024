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
    private sunSate : number;
    private ascending : boolean;

    constructor(scene: Scene) {
        this.sunSate = 10;
        this.ascending = false;

        // Lamp
        const position: BABYLON.Vector3 = new BABYLON.Vector3(0, 1, 0);
        const direction : BABYLON.Vector3 = new BABYLON.Vector3(-10.2, -10, 10);


        //Ambiant light
        this.ambiantLight = new BABYLON.DirectionalLight("ambiantLightSun",new Vector3(0.1,-1,0.1),scene);
        this.ambiantLight.diffuse =new Color3(125,125,125);
        this.ambiantLight.intensity = 0.31;

        //Direcitonal light
        this.directionalLight = new BABYLON.DirectionalLight("directionalLight",direction, scene);
        this.color = new BABYLON.Color3(125, 125,125); // Couleur de départ (blanc)
        this.intensity = 0; // Intensité de départ
        this.maxIntesity = this.intensity;
        this.minIntensity = -0.1

        this.directionalLight.diffuse = this.color;
        this.directionalLight.intensity = this.intensity;
        this.directionalLight.shadowEnabled = true;


        //
        // const positionGizmo = new BABYLON.PositionGizmo();
        // positionGizmo.attachedMesh = this.directionalLight;



    }


    // Mettez à jour le cycle jour/nuit
    update(deltaTime: number) {
        // Exemple : Cycle jour/nuit toutes les 10 secondes
        const cycleDuration = 10; // en secondes
        // const cycleProgress = (Math.sin((deltaTime / cycleDuration) * Math.PI * 2) + 1) / 2;
        const cycleProgress = (Math.sin((deltaTime / cycleDuration) )*1000);


        //TODO trouver un moyen de faire varier l'intensité
        if(this.ascending){
            this.sunSate += deltaTime * cycleDuration;
            if (this.sunSate>=100){
                this.ascending = false;
            }
        } else{
            this.sunSate -= deltaTime * cycleDuration;
            if (this.sunSate<=0){
                this.ascending = true;
            }
        }

        this.directionalLight.intensity =  this.sunSate/1000 < 0 ? this.minIntensity : this.sunSate ;



        //
        // // Modifiez la couleur et l'intensité en fonction du cycle jour/nuit
        this.color = BABYLON.Color3.Lerp( new Color3(200,200,255), new BABYLON.Color3(255, 220, 200), this.sunSate/100);
        this.intensity = BABYLON.Scalar.Lerp(this.maxIntesity, 0.01, this.sunSate/100);
        console.log( this.sunSate)
        //
        // // Appliquez les changements à la lumière
        this.directionalLight.direction = BABYLON.Vector3.Lerp(new Vector3(-1,-1,1),new Vector3(1,-1,0),this.sunSate/100);
        this.directionalLight.diffuse = this.color;
        this.directionalLight.intensity = this.intensity;
    }
}
