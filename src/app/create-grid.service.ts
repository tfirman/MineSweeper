import { Injectable } from '@angular/core';
import { Square } from './models/square.model';
import { Grid } from './models/grid.model';

@Injectable()
export class CreateGridService {

  constructor() {}

  getGrid(){
    let currentGrid = new Grid (9,9,20);
    return currentGrid;
  }
}
