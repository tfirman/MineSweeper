import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl }   from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  form = new FormGroup({
    grid: new FormControl('small'),
  });

  constructor() { }

  ngOnInit() {
  }

}
