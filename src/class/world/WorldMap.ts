/* tslint:disable:no-unused-variable */
import WorldChunk from "./WorldChunk.ts";
import {Scene, Vector3} from "@babylonjs/core";
import RunnerEngine from "../../engine/RunnerEngine.ts";

export default class WorldMap{
    private chunks : WorldChunk[];
    private scene : Scene;
    private lastChunkIndex:number = 0
    private static HIDDING_OFFSET = 1.25;
    constructor(scene : Scene,displayedChunks : number = 3){
        this.scene = scene;
        this.chunks = [];
        for(let i = 0 ; i<displayedChunks ; i++){
            this.createChunk(i)
            this.lastChunkIndex=i;
        }
    }


    update(deltaTime : number ){
        // console.log(deltaTime)
        this.chunks.forEach((chunk) =>{
            // console.log(RunnerEngine.getPlayer(0).getZ())
            if (chunk.getZ()+WorldMap.HIDDING_OFFSET<RunnerEngine.getPlayer(0).getZ()){
                //remove passed chunk
                this.removeChunk(chunk);
                //create new chunk
                this.lastChunkIndex++;
                this.createChunk(this.lastChunkIndex);

            }
        })
    }

    removeChunk(chunk: WorldChunk){
        const index = this.chunks.indexOf(chunk);
        if (index !== -1) {
            this.chunks.splice(index, 1);
            chunk.remove();
        }
    }

    createChunk(index: number) {
        const rType = this.randomIntFromInterval(1,9) ;
        const lType =this.randomIntFromInterval(1,9) ;
        const newChunk = new WorldChunk(this.scene, new Vector3(0, 0, index), index,lType,rType);
        this.chunks.push(newChunk);
    }


     randomIntFromInterval(min:number, max:number) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}