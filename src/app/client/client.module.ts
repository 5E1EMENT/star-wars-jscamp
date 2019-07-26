import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilmComponent } from './film/film.component';
import { ErrorComponent } from './error/error.component';
/**
 * Client module
 */
@NgModule({
  declarations: [FilmComponent, ErrorComponent],
  imports: [
    CommonModule,
  ],
})
export class ClientModule { }
