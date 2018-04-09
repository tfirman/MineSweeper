import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl }   from '@angular/forms';
import { Router } from '@angular/router';
import { Square } from '../models/square.model';
import { Grid } from '../models/grid.model';
import { User } from '../models/user.model';
import { CreateGridService } from '../create-grid.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [CreateGridService]
})
export class WelcomeComponent {
  @Output() emitGrid = new EventEmitter();
  form = new FormGroup({
    gridsize: new FormControl('small'),
  });
  users: User[] = [
    new User("Guest")
  ]
  currentGrid: Grid = new Grid (9,9,10,1,"Guest");
  constructor(private createGrid: CreateGridService) { }

  startGame(gridsize) {
    let a = gridsize;
    if (a.gridsize=="small"){
      let currentGrid = this.createGrid.getGrid(9,9,10,1,"Guest")
      this.emitGrid.emit(currentGrid);
    } else if (a.gridsize=="med"){
      let currentGrid = this.createGrid.getGrid(16,16,40,2,"Guest");
      this.emitGrid.emit(currentGrid);
    } else if (a.gridsize=="large"){
      let currentGrid = this.createGrid.getGrid(16,30,99,3,"Guest");
      this.emitGrid.emit(currentGrid);
    }
  };

}
