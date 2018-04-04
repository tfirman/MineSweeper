import { Square } from './square.model';

export class Grid {
  contents: Square[] = [];
  constructor(public height:number, public width:number, public bombs:number, public showFlag:boolean) {

    let area = height * width;
    let placedBombs = 0;
    let Grid: Square [] = [];
    if (area/2 < bombs){
      console.log ("too many bombs!");
      return;
    }

    while (Grid.length < area) {
      Grid.push (new Square (false, 0, false, false));
    }

    while (placedBombs < bombs) {
      let newBomb = Math.floor(Math.random() * Math.floor(area));
      if (!Grid[newBomb].mine) {
        Grid[newBomb].mine = true;
        placedBombs++;
      }
    }
    for (let i =0; i < area; i++) {
      let adjBombs = 0;
      let adjsqr = [];

      if (!(i%width)) {
        if (i<width) {
          adjsqr = [i+1,i+width,i+width+1];
        } else if (i+width >= area) {
          adjsqr = [i+1,i-width,i-width+1];
        } else {
          adjsqr = [i-width,i-width+1,i+1,i+width,i+width+1]
        }
      } else if (i%width == width-1) {
        if (i<width) {
          adjsqr = [i-1,i+width,i+width-1];
        } else if (i+width >= area) {
          adjsqr = [i-1,i-width,i-width-1];
        } else {
          adjsqr = [i-width,i-width-1,i-1,i+width,i+width-1]
        }
      } else {
        if (i<width) {
          adjsqr = [i+1,i-1,i+width,i+width+1,i+width-1];
        } else if (i+width >= area) {
          adjsqr = [i+1,i-1,i-width,i-width+1,i-width-1];
        } else {
          adjsqr = [i-width-1,i-width,i-width+1,i-1,i+1,i+width-1,i+width,i+width+1];
        }
      }

      for (let sqr of adjsqr) {
        if(Grid[sqr].mine == true) {
          adjBombs++;
        }
      }
      Grid[i].value = adjBombs;
    }
    this.contents = Grid;
  }
}
