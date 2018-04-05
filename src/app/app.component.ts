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

  currentGrid: Square[];
  constructor(private createGrid: CreateGridService) {}

  ngOnInit(){
    this.currentGrid = this.createGrid.getGrid().contents;
    console.log (this.currentGrid);
  }

  squareToEdit(clickedSquare) {
    if(clickedSquare.mine) {
      console.log("BOOM!");
    } else {
      clickedSquare.explored = true;
    }
  }

  squareToFlag(rClickedSquare) {
    rClickedSquare.showFlag = true;
    console.log("right clicked!")
  }
}
