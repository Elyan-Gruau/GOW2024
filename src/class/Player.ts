// Player.ts
import * as BABYLON from '@babylonjs/core';
import {Camera, Nullable, Vector3} from "@babylonjs/core";
import {InputController} from "./InputController.ts";
import PlayerEffect from "./PlayerEffect.ts";


export class Player {
    mesh: BABYLON.Mesh;
    private effects: PlayerEffect;
    private waterLevel = 100; //MAX 100
    private inputController: InputController;
    private baseVelocity : number;
    private baseDodgeVelocity : number;
    private camera: Camera;
    // private

    constructor(scene: BABYLON.Scene,camera: BABYLON.Camera) {
        // this.mesh = BABYLON.MeshBuilder.CreateBox('playerBox', { size: 0.1}, scene);
        this.mesh = BABYLON.MeshBuilder.CreatePlane('playerBox',
            {
                size: 0.1,


            }, scene);
        this.camera = camera;
        this.camera.parent = this.mesh;
        this.camera.maxZ = 50;
        this.camera.minZ = 0;
        // this.mesh.renderingGroupId = 2;
        this.mesh.position = new Vector3(0,0.04,0) // Y hauteur
        const angle = Math.PI / 11; // Angle d'inclinaison en radians
        this.inputController = new InputController(scene);
        this.baseVelocity = 0.5;
        this.baseDodgeVelocity = 0.5;
        this.mesh.rotate(BABYLON.Axis.X, angle, BABYLON.Space.LOCAL);


        // const positionGizmo = new BABYLON.PositionGizmo();
        // positionGizmo.attachedMesh = this.mesh;

        // Ajoutez ici la logique pour positionner le joueur, ajouter des animations, etc.
    }

    public update(dt : number): void {
        // Ajoutez ici la logique de mise à jour du joueur à chaque frame
        const position : BABYLON.Vector3 = this.mesh.position;

        let positionZ = position.z+this.baseVelocity*dt;
        let positionX = position.x;

        if (this.inputController.isKeyDown(" ")){
            console.log("jump")
        }
        if (this.inputController.isKeyDown("q")){
            positionX -= this.baseDodgeVelocity * dt;
        }
        if (this.inputController.isKeyDown("d")){
            positionX +=  this.baseDodgeVelocity * dt;
        }


        this.mesh.position = new Vector3(positionX, position.y,positionZ);
        // console.log(1/dt);

    }

    public setParent(parent:Node){
        // @ts-ignore
        this.mesh.parent = parent;
    }

    getZ() {
        return this.mesh.position.z;
    }
}