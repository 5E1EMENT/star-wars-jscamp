import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmComponent } from './client/film/film.component';
import { HomeComponent } from './client/home/home.component';
import { PageNotFoundComponent } from './client/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'film/:idfilm', component: FilmComponent },
  { path: '**', component: PageNotFoundComponent },
];
/**
 * Modulet allows to manage app routes
 */
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
