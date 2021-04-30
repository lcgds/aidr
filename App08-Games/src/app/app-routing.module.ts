import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './views/game/game.component';

const routes: Routes = [
  {path: 'game', component: GameComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'game', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
