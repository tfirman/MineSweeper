import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl }   from '@angular/forms';
import { Router } from '@angular/router';
import { Square } from '../models/square.model';
import { Grid } from '../models/grid.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  form = new FormGroup({
    gridsize: new FormControl('small'),
  });

  constructor() { }

  ngOnInit() {
  }

  startGame(gridsize) {
    let a = gridsize;
    if (a.gridsize=="small"){
      let currentGrid = new Grid (9,9,10);
      this.router.navigate(['play-game', clickedAlbum.$key]);
    } else if (a.gridsize=="med"){
      let currentGrid = new Grid (16,16,40);
    } else if (a.gridsize=="large"){
      let currentGrid = new Grid (16,30,99);
    }
  };

}
