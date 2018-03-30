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
    new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),
    new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),
    new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),
    new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),
    new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),
    new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),
    new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),
    new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),
    new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0),new Square(0)
  ]

  editSquare(clickedSquare) {
    this.selectedSquare = clickedSquare;
  }
  finishedEditing() {
    this.selectedSquare = null;
  }

}
