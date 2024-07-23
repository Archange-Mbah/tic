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
        if(this.board[row][col] == 0){
            this.board[row][col] = this.turn;
            this.turn = this.turn == 1 ? 2 : 1;
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
}