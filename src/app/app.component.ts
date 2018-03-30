import { Component } from '@angular/core';
import { Square } from './models/square.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentGridList: Square[] = [
    new Square(0),
    new Square(1),
    new Square(9)
  ];
}
