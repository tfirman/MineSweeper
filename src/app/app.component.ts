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

  currentGrid: Grid;
  constructor(private createGrid: CreateGridService) {}

  ngOnInit(){
    this.currentGrid = this.createGrid.getGrid();
    console.log (this.currentGrid);
  }

  squareToEdit(index) {
    let clickedSquare = this.currentGrid.sq[index];
    if(clickedSquare.mine) {
      alert("BOOM!");
      for (let sqr of this.currentGrid.sq) {
        sqr.explored = true;
      }
    } else {
      clickedSquare.explored = true;
      if(clickedSquare.value == 0) {
        this.squareWasA0(index);
      }
    }
  }

  squareWasA0 (i) {
      let adj = this.currentGrid.getAdjacent(i);
      for (let sqr of adj) {
        if((this.currentGrid.sq[sqr].value==0) && (!this.currentGrid.sq[sqr].explored)) {
          this.currentGrid.sq[sqr].explored = true;
          this.squareWasA0 (sqr);
        } else {
          this.currentGrid.sq[sqr].explored = true;
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
