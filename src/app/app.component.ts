import { Component, Input, OnInit } from '@angular/core';
import { Square } from './models/square.model';
import { Grid } from './models/grid.model';
import { User } from './models/user.model';
import { CreateGridService } from './create-grid.service'
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UserService } from './user.service'

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CreateGridService, UserService]
})
export class AppComponent implements OnInit  {
  gameOverScreen: boolean = false;
  numExplored: number = 0;
  currentGrid: Grid;
  currentUser: User;
  haveAUser: boolean = false;
  timeElapsed: number = 0;
  timeFunction: Object;
  totalFlags: number = 0;

constructor(private createGrid: CreateGridService, private userService: UserService) {}

  ngOnInit(){
    this.currentGrid = this.createGrid.getGrid(9,9,10,0);
    this.currentGrid.playing = false;
  }

  receiveGrid(newGrid){
    this.numExplored = 0;
    this.totalFlags = 0;
    this.currentUser.started[this.currentGrid.type]++;
    this.userService.updateUser(this.currentUser);
    this.currentGrid = newGrid;
    this.timeElapsed = 0;
    let foo = setInterval(() => {
      if (!this.gameOverScreen) {
        this.timeElapsed++
      } else {
        clearInterval (foo);
      }
    }, 1000);
  }

  startNewGame(){
    this.currentUser.started[this.currentGrid.type]++;
    this.userService.updateUser(this.currentUser);
    this.currentGrid.playing = false;
    this.gameOverScreen = false;
  }

  chooseUser(clickedUser: User){
    this.haveAUser = true;
    this.currentUser = clickedUser;
  }

  logOut(){
    this.haveAUser = false;
  }

  squareToEdit(index) {
    if (!this.gameOverScreen) {
      let clickedSquare = this.currentGrid.sq[index];
      if(clickedSquare.mine) {
        for (let sqr of this.currentGrid.sq) {
          sqr.explored = true;
        }
        alert("BOOM!");
        this.gameOverScreen = true;

      } else {
        if (!clickedSquare.explored) {
          clickedSquare.explored = true;
          this.numExplored ++;
          if (this.numExplored >= (this.currentGrid.height * this.currentGrid.width - this.currentGrid.bombs)) {
            alert("Congratuations, you win!");
            this.currentUser.won[this.currentGrid.type]++;
            this.userService.updateUser(this.currentUser);
            this.gameOverScreen = true;
          }
          if(clickedSquare.value == 0) {
            this.squareWasA0(index);
          }
        }
      }
    }
  }

squareWasA0 (i) {
  let adj = this.currentGrid.getAdjacent(i);
  for (let sqr of adj) {
    if(!this.currentGrid.sq[sqr].explored) {
      this.currentGrid.sq[sqr].explored = true;
      this.numExplored ++;
      if (this.numExplored >= (this.currentGrid.height * this.currentGrid.height - this.currentGrid.bombs)) {
        alert("Congratuations, you win!");
        this.gameOverScreen = true;
      }
      if (this.currentGrid.sq[sqr].value==0) {
        this.squareWasA0 (sqr);
      }
    }
  }
}

squareToFlag(index) {
  let rClickedSquare = this.currentGrid.sq[index];
    if(rClickedSquare.explored){
      let adj = this.currentGrid.getAdjacent(index);
      for (let sqr of adj) {
        if(!this.currentGrid.sq[sqr].showFlag) {
          this.squareToEdit(sqr);
        }
      }
    } else {
      this.totalFlags++;
      if(rClickedSquare.showFlag) {
        this.totalFlags -= 2;
      }
      rClickedSquare.showFlag = !rClickedSquare.showFlag;
    }
}
}
