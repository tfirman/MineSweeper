import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Square } from '../models/square.model';
import { Grid } from '../models/grid.model';

@Component({
  selector: 'app-make-grid',
  templateUrl: './make-grid.component.html',
  styleUrls: ['./make-grid.component.css']
})
export class MakeGridComponent {
  @Input() childGridList: Square[];
  @Output() clickSender = new EventEmitter();
  @Output() rClickSender = new EventEmitter();

  squareClicked(squareToEdit: Square) {
    this.clickSender.emit(squareToEdit);
  }

  onRightClick(squareToFlag: Square) {
    this.rClickSender.emit(squareToFlag);
  }

}
