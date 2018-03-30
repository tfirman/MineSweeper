import { Component } from '@angular/core';
import { Square } from './models/square.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentGridList: Square[] = [];
  for (var i = 0; i < 81; i++) {
    currentGridList.push(Square[0]);
  }
}
