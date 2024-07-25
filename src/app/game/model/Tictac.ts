export class Tictac{
    private board:number[][];
    private turn:number=1;
    constructor(){
        this.board = [[0,0,0],[0,0,0],[0,0,0]];
    }

    getBoard(){
        return this.board;
    }

    makeMove(row:number, col:number){
        if(this.board[row][col] == 0 && !this.isGameOver() && !this.draw())  {
            this.board[row][col] = this.turn;
            this.turn = this.turn == 1 ? 2 : 1;
        }
        if(!this.isGameOver() && this.turn == 2){
            this.randomMove();
        }
    }

    isGameOver(){
        return this.checkRows() || this.checkCols() || this.checkDiagonals();
    }
    checkRows(){
        for(let i=0; i<3; i++){
            if(this.board[i][0] != 0 && this.board[i][0] == this.board[i][1] && this.board[i][1] == this.board[i][2]){
                return true;
            }
        }
        return false;
    }
    checkCols(){    
        for(let i=0; i<3; i++){
            if(this.board[0][i] != 0 && this.board[0][i] == this.board[1][i] && this.board[1][i] == this.board[2][i]){
                return true;
            }
        }
        return false;
    }
    checkDiagonals(){
        return this.board[0][0] != 0 && this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2] || this.board[0][2] != 0 && this.board[0][2] == this.board[1][1] && this.board[1][1] == this.board[2][0];
    }

    getWinner(){
        return this.turn == 1 ? 2 : 1;
}

 private randomMove(){
        let row:number = Math.floor(Math.random() * 3);
        let col:number = Math.floor(Math.random() * 3);
        if(this.board[row][col] == 0){
            this.makeMove(row, col);
        }else{
            this.randomMove();
        }
 }
 draw(){
    if(this.isboardFull() && !this.isGameOver()){
        return true;
    }
    return false;
    
}
isboardFull(){
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(this.board[i][j] == 0){
                return false;
            }
        }
    }
    return true;        
}
}