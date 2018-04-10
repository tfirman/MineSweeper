import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormGroup, FormControl }   from '@angular/forms';
import { AppComponent } from './app.component';
import { MakeGridComponent } from './make-grid/make-grid.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { PlayGameComponent } from './play-game/play-game.component';
import { NowPlayingPipe } from './nowplaying.pipe';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ListUsersComponent } from './list-users/list-users.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MakeGridComponent,
    WelcomeComponent,
    PlayGameComponent,
    NowPlayingPipe,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
