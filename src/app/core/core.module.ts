import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilmsService } from './services/films.service';

/**
 * Core module
 */
@NgModule({
  declarations: [],
  providers: [FilmsService],
  imports: [
    CommonModule,
  ],
})
export class CoreModule { }
