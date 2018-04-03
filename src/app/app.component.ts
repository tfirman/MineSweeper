import { Component, Input } from '@angular/core';
import { Square } from './models/square.model';
import { CreateGridService } from './create-grid.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CreateGridService]
})
export class AppComponent {

  constructor(private createGrid: CreateGridService) {}

  squareToEdit(clickedSquare) {
    if(clickedSquare.mine) {
      console.log("BOOM!");
    } else {
      clickedSquare.value = 1;
    }
  }

}
