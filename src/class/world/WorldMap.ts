import WorldChunk from "./WorldChunk.ts";
import {Scene, Vector3} from "@babylonjs/core";
import {Player} from "../Player.ts";
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


    update(deltaTime : number){
        // console.log(deltaTime)
        this.chunks.forEach((chunk,index) =>{
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
        const newChunk = new WorldChunk(this.scene, new Vector3(0, 0, index), index);
        this.chunks.push(newChunk);
    }


}