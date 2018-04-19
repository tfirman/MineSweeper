import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Square } from '../models/square.model';
import { Grid } from '../models/grid.model';

@Component({
  selector: 'app-make-grid',
  templateUrl: './make-grid.component.html',
  styleUrls: ['./make-grid.component.css']
})
export class MakeGridComponent {

  @Input() childGridList: Grid;
  @Output() clickSender = new EventEmitter();
  @Output() rClickSender = new EventEmitter();

  squareClicked(squareToEdit: number) {
    this.clickSender.emit(squareToEdit);
  }

  onRightClick(squareToFlag: number) {
    this.rClickSender.emit(squareToFlag);
    return false;
  }

  renderSquare(){
    let sqsz = 100/this.childGridList.width;
    let fontsz = sqsz*0.7;
    let myStyles = {
      'width': sqsz.toString()+'%',
      'padding-top': sqsz.toString()+'%',
      'border': '1px solid black',
      'text-align': 'center',
      'font-size': fontsz.toString()+'vmin',
      'position': 'relative'
    }
    return myStyles;
  }

}
