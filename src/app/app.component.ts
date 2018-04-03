import { Component, Input } from '@angular/core';
import { Square } from './models/square.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentGridList: Square[] = [
    new Square(true, false),new Square(true, false),new Square(false,false),new Square(false,false),new Square(true, false),new Square(false,false),new Square(false,false),new Square(false,false),new Square(false,false),
    new Square(true, false),new Square(false,false),new Square(false,false),new Square(true, false),new Square(true, false),new Square(true, false),new Square(false,false),new Square(false,false),new Square(false,false),
    new Square(false,false),new Square(true, false),new Square(true, false),new Square(false,false),new Square(false,false),new Square(false,false),new Square(false,false),new Square(true, false),new Square(false,false),
    new Square(true, false),new Square(false,false),new Square(false,false),new Square(false,false),new Square(true, false),new Square(false,false),new Square(false,false),new Square(false,false),new Square(true, false),
    new Square(true, false),new Square(false,false),new Square(false,false),new Square(true, false),new Square(false,false),new Square(true, false),new Square(false,false),new Square(false,false),new Square(true, false),
    new Square(true, false),new Square(false,false),new Square(false,false),new Square(false,false),new Square(true, false),new Square(false,false),new Square(false,false),new Square(false,false),new Square(true, false),
    new Square(false,false),new Square(true, false),new Square(false,false),new Square(false,false),new Square(false,false),new Square(false,false),new Square(true, false),new Square(true, false),new Square(false,false),
    new Square(false,false),new Square(false,false),new Square(false,false),new Square(true, false),new Square(true, false),new Square(true, false),new Square(false,false),new Square(false,false),new Square(true, false),
    new Square(false,false),new Square(false,false),new Square(false,false),new Square(false,false),new Square(true, false),new Square(false,false),new Square(false,false),new Square(true, false),new Square(true, false)
  ]

  squareToEdit(clickedSquare) {
    if(clickedSquare.mine) {
      console.log("BOOM!");
    } else {
      clickedSquare.explored = true;
    }
  }

}
