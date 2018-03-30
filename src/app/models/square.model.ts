export class Square {
  public done: boolean = false;
  constructor(public value: number) { }
}

export function EmptyGrid {
  emptyGrid = [];
  for (i=0;i<81;i++) {
    emptyGrid.push(new Square(0));
  }

}
