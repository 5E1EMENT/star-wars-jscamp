import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppConfig } from '../core/app.config';
import { DetailFilm } from '../core/models/detailFilm';
import { FilmRecordDto } from '../core/services/dto/film-dto';

/**
 * Admin service
 */
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  /**
   *
   * @param http http module
   * @param config app config module
   */
  public constructor(private http: HttpClient, private config: AppConfig) { }

  /**
   * Method allow to get new data about film
   * and update data about film in db
   * @param dbId films place in database
   * @param filmData data with new updated film
   */
  public updateFilm(dbId: number, filmData: DetailFilm): Observable<DetailFilm> {
    console.log(filmData);
    return this.http.patch<DetailFilm>(
      `${this.config.API_DATABASE_URL}/films/${dbId}/fields.json`,
      this.mapFilmToFilmDto(filmData, dbId),
    ).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }
  private mapFilmToFilmDto(film: DetailFilm, index: number): FilmRecordDto {
    console.log(film);
    return {
      databaseId: index,
      title: film.title,
      characters: film.characters,
      planets: film.planets,
      species: film.species,
      starships: film.starships,
      vehicles: film.vehicles,
      episode_id: film.episodeId,
      release_date: film.releaseDate,
      director: film.director,
      opening_crawl: film.openingCrawl,
      producer: film.producer,
    };
  }
}
