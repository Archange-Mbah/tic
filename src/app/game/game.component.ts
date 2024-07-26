import { Component ,OnInit } from '@angular/core';
import{TictacService} from '../services/Tictac.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  isGameOver:boolean=false;
  board!:number[][];
  winner!:number;

  constructor(private tictacService:TictacService,private router:Router) {
  }
  ngOnInit(){
    this.board=this.tictacService.getBoard();
  }
  onCellClick(row:number,col:number){
    console.log(row,col);
  }
  onReset(){
    this.tictacService.reset();
    this.board=this.tictacService.getBoard();
    this.isGameOver=false

  }
  onNewGame(){
    console.log("new game");
  }
  onExit(){
    console.log("exit");
  }

  play(cell:number){
    if(cell==0){
      return '';
    }
    else if(cell==1){
      return 'X';
    }
    else{
      return 'O';
    }
  }
  makeMove(row:number,col:number){
    this.tictacService.makeMove(row,col);
    this.board=this.tictacService.getBoard();
    if(this.tictacService.isGameOver()){
      this.winner=this.tictacService.getWinner();
      this.isGameOver=true;
    }
   
  }
  isDraw(){
    return this.tictacService.getDraw();
  }
  
  
}
