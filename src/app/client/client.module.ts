import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilmComponent } from './film/film.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
/**
 * Client module
 */
@NgModule({
  declarations: [FilmComponent,  PageNotFoundComponent],
  imports: [
    CommonModule,
  ],
})
export class ClientModule { }
