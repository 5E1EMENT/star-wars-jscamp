import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DetailFilm } from '../models/detailFilm';

import { FilmsService } from './films.service';

/**
 * Admin fillm service
 */
@Injectable({
  providedIn: 'root',
})
export class AdminFilmService {
  /**
   * Film edit status page
   */
  public onFilm = false;
  constructor(private filmsService: FilmsService, ) { }
   /**
   * Method allows to get current clicked film by id from query parameters
   * @param id film id
   */
  public getFilm(id: number): Observable<DetailFilm> {
    this.onFilm = true;
    return this.filmsService.getDetailedFilm().pipe(
      map((films) => films.find(film => film.episodeId === +id)),
    );
  }
}
