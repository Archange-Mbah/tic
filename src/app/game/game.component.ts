import { Component ,OnInit } from '@angular/core';
import{TictacService} from '../services/Tictac.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  board!:Number[][];

  constructor(private tictacService:TictacService){
  }
  ngOnInit(){
    this.board=this.tictacService.getBoard();
  }
  onCellClick(row:number,col:number){
    console.log(row,col);
  }
  onReset(){
    console.log("reset");
  }
  onNewGame(){
    console.log("new game");
  }
  onExit(){
    console.log("exit");
  }

  play(cell:Number){
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
}
