import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl }   from '@angular/forms';

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
    console.log (a);
    if (a.gridsize=="small"){
      console.log("s");
    } else if (a.gridsize=="med"){
      console.log("m");
    } else if (a.gridsize=="large"){
      console.log("l");
    }
  };

}
