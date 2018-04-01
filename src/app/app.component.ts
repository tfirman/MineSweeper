import { Component } from '@angular/core';
import { Square } from './models/square.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedSquare = null;

  currentGridList: Square[] = [
    new Square(5),new Square(3),new Square(0),new Square(0),new Square(7),new Square(0),new Square(0),new Square(0),new Square(0),
    new Square(6),new Square(0),new Square(0),new Square(1),new Square(9),new Square(5),new Square(0),new Square(0),new Square(0),
    new Square(0),new Square(9),new Square(8),new Square(0),new Square(0),new Square(0),new Square(0),new Square(6),new Square(0),
    new Square(8),new Square(0),new Square(0),new Square(0),new Square(6),new Square(0),new Square(0),new Square(0),new Square(3),
    new Square(4),new Square(0),new Square(0),new Square(8),new Square(0),new Square(3),new Square(0),new Square(0),new Square(1),
    new Square(7),new Square(0),new Square(0),new Square(0),new Square(2),new Square(0),new Square(0),new Square(0),new Square(6),
    new Square(0),new Square(6),new Square(0),new Square(0),new Square(0),new Square(0),new Square(2),new Square(8),new Square(0),
    new Square(0),new Square(0),new Square(0),new Square(4),new Square(1),new Square(9),new Square(0),new Square(0),new Square(5),
    new Square(0),new Square(0),new Square(0),new Square(0),new Square(8),new Square(0),new Square(0),new Square(7),new Square(9)
  ]

  editSquare(clickedSquare) {
    this.selectedSquare = clickedSquare;
  }
  finishedEditing() {
    this.selectedSquare = null;
  }

}
