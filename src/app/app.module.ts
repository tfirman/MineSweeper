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

@NgModule({
  declarations: [
    AppComponent,
    MakeGridComponent,
    WelcomeComponent,
    PlayGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
