import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilmComponent } from './film/film.component';
/**
 * Client module
 */
@NgModule({
  declarations: [FilmComponent],
  imports: [
    CommonModule,
  ],
})
export class ClientModule { }
