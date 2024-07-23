import { Injectable } from "@angular/core";
import { Tictac } from "../game/model/Tictac";
@Injectable({
    providedIn: 'root'
})

export class TictacService{
    tictac=new Tictac();

    getBoard():Number[][]{
        return [...this.tictac.getBoard()];
    }
}