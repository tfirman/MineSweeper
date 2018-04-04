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
  constructor(private createGrid: CreateGridService) {}

  ngOnInit(){
    var currentGrid = this.createGrid.getGrid();
    console.log (currentGrid);
  }

  squareToEdit(clickedSquare) {
    if(clickedSquare.mine) {
      console.log("BOOM!");
    } else {
      clickedSquare.value = 1;
    }
  }

}
