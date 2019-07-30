import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FilmComponent } from './film/film.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilmCharactersComponent } from './film/film-characters/film-characters.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

/**
 * Client module
 */
@NgModule({
  declarations: [FilmComponent,  PageNotFoundComponent, FilmCharactersComponent,HomeComponent,AuthComponent,RegistrationComponent,LoginComponent],
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
  exports:[HomeComponent,AuthComponent,RegistrationComponent,LoginComponent]
})
export class ClientModule { }
