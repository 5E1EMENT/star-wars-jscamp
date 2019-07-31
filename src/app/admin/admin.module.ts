import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminEditFilmComponent } from './components/admin-edit-film/admin-edit-film.component';
import { AdminFilmsPageComponent } from './components/admin-films-page/admin-films-page.component';

/**
 * Admin module
 */
@NgModule({
  declarations: [AdminFilmsPageComponent, AdminEditFilmComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
  ],
})
export class AdminModule { }
