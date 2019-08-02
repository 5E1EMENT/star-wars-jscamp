import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { FilmCharactersComponent } from './film/film-characters/film-characters.component';
import { FilmComponent } from './film/film.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/**
 * Client module
 */
@NgModule({
  declarations: [
    FilmComponent,
    PageNotFoundComponent,
    FilmCharactersComponent,
    HomeComponent,
    AuthComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
  ],
  entryComponents: [LoginComponent, RegistrationComponent],
  exports: [HomeComponent, AuthComponent, RegistrationComponent, LoginComponent],
})
export class ClientModule {}
