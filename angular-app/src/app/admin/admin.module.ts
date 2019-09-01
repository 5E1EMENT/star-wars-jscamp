import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminEditFilmComponent } from './components/admin-edit-film/admin-edit-film.component';
import { AdminFilmEditorComponent } from './components/admin-edit-film/admin-film-editor/admin-film-editor.component';
import { AdminFilmsPageComponent } from './components/admin-films-page/admin-films-page.component';

/**
 * Admin module
 */
@NgModule({
  declarations: [AdminFilmsPageComponent, AdminEditFilmComponent, AdminFilmEditorComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule { }
