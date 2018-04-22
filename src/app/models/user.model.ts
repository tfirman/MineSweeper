export class User {
  public started: number[] = [0,0,0];
  public won: number[] = [0,0,0];
  public bestTime: number[] = [999,999,999];
  constructor(public name: string) { }
}
