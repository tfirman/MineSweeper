import {Pipe, PipeTransform} from '@angular/core';
import { Square } from './models/square.model';
import { Grid } from './models/grid.model';

@Pipe({
  name: "nowplaying",
  pure: false
})


export class NowPlayingPipe implements PipeTransform {
  transform(input: Grid){
    return input.playing;
  }
}
