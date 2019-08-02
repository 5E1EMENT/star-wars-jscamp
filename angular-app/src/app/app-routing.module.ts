import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminFilmsPageComponent } from './admin/components/admin-films-page/admin-films-page.component';
import { AdminGuard } from './client/auth/guards/admin.guard';
import { AuthGuard } from './client/auth/guards/auth.guard';
import { FilmComponent } from './client/film/film.component';
import { HomeComponent } from './client/home/home.component';
import { PageNotFoundComponent } from './client/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'films', component: AdminFilmsPageComponent, canActivate: [AdminGuard], canLoad: [AdminGuard] },
  { path: 'film/:idfilm', component: FilmComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
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
