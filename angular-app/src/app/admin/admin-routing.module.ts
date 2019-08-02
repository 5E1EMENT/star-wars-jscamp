import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from '../client/auth/guards/admin.guard';

import { AdminEditFilmComponent } from './components/admin-edit-film/admin-edit-film.component';
import { AdminFilmsPageComponent } from './components/admin-films-page/admin-films-page.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/films' },
  { path: 'films', component: AdminFilmsPageComponent, canActivate: [AdminGuard], canLoad: [AdminGuard] },
  { path: 'films/:idfilm', component: AdminEditFilmComponent, canActivate: [AdminGuard], canLoad: [AdminGuard] },

];

/**
 * Admin routing module
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
})
export class AdminRoutingModule { }
