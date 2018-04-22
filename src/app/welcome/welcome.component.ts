import { Component, OnInit, Output, Input, EventEmitter, Injectable } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl }   from '@angular/forms';
import { Router } from '@angular/router';
import { Square } from '../models/square.model';
import { Grid } from '../models/grid.model';
import { User } from '../models/user.model';
import { CreateGridService } from '../create-grid.service'
import { UserService } from '../user.service'
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [CreateGridService, UserService]
})
export class WelcomeComponent {
  @Input() childUser: User;
  @Output() emitGrid = new EventEmitter();
  form = new FormGroup({
    gridsize: new FormControl('small'),
  });
  users: FirebaseListObservable<any[]>;
  currentGrid: Grid;
  constructor(private createGrid: CreateGridService, private userService: UserService) { }


  startGame(gridsize) {
    let a = gridsize;
    if (a.gridsize=="small"){
      let currentGrid = this.createGrid.getGrid(9,9,10,0)
      this.emitGrid.emit(currentGrid);
    } else if (a.gridsize=="med"){
      let currentGrid = this.createGrid.getGrid(16,16,40,1);
      this.emitGrid.emit(currentGrid);
    } else if (a.gridsize=="large"){
      let currentGrid = this.createGrid.getGrid(16,30,99,2);
      this.emitGrid.emit(currentGrid);
    }
  };

}
