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
    this.currentGrid = newGrid;
  }
}
