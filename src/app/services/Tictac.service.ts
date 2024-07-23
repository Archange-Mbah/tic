import { Injectable } from "@angular/core";
import { Tictac } from "../game/model/Tictac";
@Injectable({
    providedIn: 'root'
})

export class TictacService{
    tictac=new Tictac();

    getBoard():number[][]{
        return [...this.tictac.getBoard()];
    }

    makeMove(row:number, col:number){
        this.tictac.makeMove(row,col);
    }
    isGameOver(){
        return this.tictac.isGameOver();
    }
    getWinner(){
        return this.tictac.getWinner();
    }
}