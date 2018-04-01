import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Square } from '../models/square.model';

@Component({
  selector: 'app-make-grid',
  templateUrl: './make-grid.component.html',
  styleUrls: ['./make-grid.component.css']
})
export class MakeGridComponent {
  @Input() childGridList: Square[];
  @Input() childSelectedSquare: Square[];
  @Output() clickSender = new EventEmitter();

  squareClicked(squareToEdit: Square) {
    this.clickSender.emit(squareToEdit);
  }

onKeyDown(event){

}

}
