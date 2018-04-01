import { Component, Input } from '@angular/core';
import { Square } from './models/square.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedSquare = null;

  currentGridList: Square[] = [
    new Square(5, true),new Square(3, true),new Square(0,false),new Square(0,false),new Square(7, true),new Square(0,false),new Square(0,false),new Square(0,false),new Square(0,false),
    new Square(6, true),new Square(0,false),new Square(0,false),new Square(1, true),new Square(9, true),new Square(5, true),new Square(0,false),new Square(0,false),new Square(0,false),
    new Square(0,false),new Square(9, true),new Square(8, true),new Square(0,false),new Square(0,false),new Square(0,false),new Square(0,false),new Square(6, true),new Square(0,false),
    new Square(8, true),new Square(0,false),new Square(0,false),new Square(0,false),new Square(6, true),new Square(0,false),new Square(0,false),new Square(0,false),new Square(3, true),
    new Square(4, true),new Square(0,false),new Square(0,false),new Square(8, true),new Square(0,false),new Square(3, true),new Square(0,false),new Square(0,false),new Square(1, true),
    new Square(7, true),new Square(0,false),new Square(0,false),new Square(0,false),new Square(2, true),new Square(0,false),new Square(0,false),new Square(0,false),new Square(6, true),
    new Square(0,false),new Square(6, true),new Square(0,false),new Square(0,false),new Square(0,false),new Square(0,false),new Square(2, true),new Square(8, true),new Square(0,false),
    new Square(0,false),new Square(0,false),new Square(0,false),new Square(4, true),new Square(1, true),new Square(9, true),new Square(0,false),new Square(0,false),new Square(5, true),
    new Square(0,false),new Square(0,false),new Square(0,false),new Square(0,false),new Square(8, true),new Square(0,false),new Square(0,false),new Square(7, true),new Square(9, true)
  ]

  squareToEdit(clickedSquare) {
    this.selectedSquare = clickedSquare;
  }
  finishedEditing() {
    this.selectedSquare = null;
  }

}
