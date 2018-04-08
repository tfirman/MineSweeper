import { Component, Input, OnInit } from '@angular/core';
import { Square } from './models/square.model';
import { Grid } from './models/grid.model';
import { CreateGridService } from './create-grid.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CreateGridService]
})
export class AppComponent implements OnInit  {
  numExplored: number = 0;
  currentGrid: Grid;
  constructor(private createGrid: CreateGridService) {}

  ngOnInit(){
    this.currentGrid = this.createGrid.getGrid(9,9,10);
    console.log (this.currentGrid);
  }

  receiveGrid(newGrid){
    this.numExplored = 0;
    this.currentGrid = newGrid;
    console.log (this.currentGrid);
  }

  squareToEdit(index) {
  let clickedSquare = this.currentGrid.sq[index];
  if(clickedSquare.mine) {
    alert("BOOM!");
    this.currentGrid.done = true;
    for (let sqr of this.currentGrid.sq) {
      sqr.explored = true;
    }
  } else {
    if (!clickedSquare.explored) {
      clickedSquare.explored = true;
      this.numExplored ++;
      if (this.numExplored >= (this.currentGrid.height * this.currentGrid.height - this.currentGrid.bombs)) {
        alert("Congratuations, you win!");
        this.currentGrid.done = true;
      }
      if(clickedSquare.value == 0) {
        this.squareWasA0(index);
      }
    }
  }
}

squareWasA0 (i) {
    let adj = this.currentGrid.getAdjacent(i);
    for (let sqr of adj) {
      if(!this.currentGrid.sq[sqr].explored) {
        this.currentGrid.sq[sqr].explored = true;
        this.numExplored ++;
        if (this.numExplored >= (this.currentGrid.height * this.currentGrid.height - this.currentGrid.bombs)) {
          alert("Congratuations, you win!");
        }
        if (this.currentGrid.sq[sqr].value==0) {
          this.squareWasA0 (sqr);
        }
      }
    }
}

squareToFlag(index) {
  let rClickedSquare = this.currentGrid.sq[index];
    if(rClickedSquare.explored){
      let adj = this.currentGrid.getAdjacent(index);
      for (let sqr of adj) {
        if(!this.currentGrid.sq[sqr].showFlag) {
          this.squareToEdit(sqr);
        }
      }
    } else {
      rClickedSquare.showFlag = !rClickedSquare.showFlag;
    }
}
}
