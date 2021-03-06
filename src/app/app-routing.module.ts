import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PlanetComponent } from './pages/planet/planet.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'planet', component: PlanetComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
