// Player.ts
import * as BABYLON from '@babylonjs/core';
import {Vector3} from "@babylonjs/core";


export class Player {
    private mesh: BABYLON.Mesh;
    private effects: PlayerEffect;
    private waterLevel = 100; //MAX 100
    // private

    constructor(scene: BABYLON.Scene) {
        // this.mesh = BABYLON.MeshBuilder.CreateBox('playerBox', { size: 0.1}, scene);
        this.mesh = BABYLON.MeshBuilder.CreatePlane('playerBox',
            {
                size: 0.1,

            }, scene);
        const angle = Math.PI / 4; // Angle d'inclinaison en radians
        this.mesh.rotate(BABYLON.Axis.X, angle, BABYLON.Space.LOCAL);

        const positionGizmo = new BABYLON.PositionGizmo();
        positionGizmo.attachedMesh = this.mesh;

        // Ajoutez ici la logique pour positionner le joueur, ajouter des animations, etc.
    }

    public update(dt : number): void {
        // Ajoutez ici la logique de mise à jour du joueur à chaque frame
        const position : BABYLON.Vector3 = this.mesh.position;
        this.mesh.position = new Vector3(position.x , position.y,position.z+0.1*dt);
        // console.log(1/dt);

    }


}