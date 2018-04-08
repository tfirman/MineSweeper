import { Component, Input, OnInit } from '@angular/core';
import { Square } from '../models/square.model';
import { Grid } from '../models/grid.model';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css'],
})
export class PlayGameComponent {
  @Input() currentGrid: Grid;
  numExplored: number = 0;
  constructor(private Grid: Grid) {}

}
