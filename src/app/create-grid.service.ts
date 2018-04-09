import { Injectable } from '@angular/core';
import { Square } from './models/square.model';
import { Grid } from './models/grid.model';

@Injectable()
export class CreateGridService {
  height: number;
  weight: number;
  bombs: number;
  constructor() {}

  getGrid(height, weight, bombs, type, player){
    let currentGrid = new Grid (height, weight, bombs, type, player);
    return currentGrid;
  }
}
