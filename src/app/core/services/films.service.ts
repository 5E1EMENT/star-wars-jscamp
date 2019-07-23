import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Film } from '../models/film';
import { FilmDto } from './dto/film-dto';

/**
 * FilmsService executes all operations about films
 */
@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private filmsUrl = 'https://angular-film-app.firebaseio.com/swapi/films.json';
  /**
   * .ctor
   * @param http - http package
   */
  public constructor(private http: HttpClient) {

  }
  /**
   * FilmsService allows to get data about films
   */
  public getFilms(): Observable<Film[]> {
    return this.http.get<FilmDto[]>(this.filmsUrl).pipe(map(filmsDto => {
      return filmsDto.map(filmDto => {
        const title: string = filmDto.fields.title;
        const episodeId: number = filmDto.fields.episode_id;
        const releaseDate: Date = new Date(filmDto.fields.release_date);
        const director: string = filmDto.fields.director;
        const film: Film = {
          releaseDate: releaseDate,
          title: title,
          episodeId: episodeId,
          director: director,
        };
        return film;
      });
    }));
  }
}
