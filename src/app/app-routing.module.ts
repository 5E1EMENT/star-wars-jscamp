import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { FilmComponent } from './client/film/film.component';
import { ErrorComponent } from './client/error/error.component';

const appRoutes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/home' },
  { path: "home", component: HomeComponent },
  { path: "film/:filmid", component: FilmComponent },
  { path: '**', component: ErrorComponent }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
