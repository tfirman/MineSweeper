import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayGameComponent } from './play-game/play-game.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
  path: 'play',
    component: PlayGameComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
