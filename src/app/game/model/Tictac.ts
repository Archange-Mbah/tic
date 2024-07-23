export class Tictac{
    private board:Number[][];
    private turn:Number=1;
    constructor(){
        this.board = [[0,0,0],[0,0,0],[0,0,0]];
    }

    getBoard(){
        return this.board;
    }
}