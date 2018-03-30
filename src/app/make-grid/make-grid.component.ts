import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Square } from '../models/square.model';

@Component({
  selector: 'app-make-grid',
  templateUrl: './make-grid.component.html',
  styleUrls: ['./make-grid.component.css']
})
export class MakeGrid {

  constructor() {
    currentGridList: Square[] = [];
    for (var i = 0; i < 81; i++) {
      currentGridList.push(Square(0));
    }
  }

}
