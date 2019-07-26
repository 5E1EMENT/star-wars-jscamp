import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DetailFilm } from '../models/detailFilm';
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
   * Film page status
   */
  public onFilm = false;
  /**
   * .ctor
   * @param http - http package
   */
  public constructor(private http: HttpClient) {}
  /**
   * Method getFilms allows to get data about films
   */
  public getFilms(): Observable<Film[]> {
    return this.http.get<FilmDto[]>(this.filmsUrl).pipe(
      map(filmsDto => {
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
      }),
    );
  }
  /**
   * Method getDetailedFilm allows to get detailed data about films
   */
  public getDetailedFilm(): Observable<DetailFilm[]> {
    return this.http.get<FilmDto[]>(this.filmsUrl).pipe(
      map(filmsDto => {
        return filmsDto.map(filmDto => {
          const title: string = filmDto.fields.title;
          const episodeId: number = filmDto.fields.episode_id;
          const releaseDate: Date = new Date(filmDto.fields.release_date);
          const director: string = filmDto.fields.director;
          const openingCrawl: string = filmDto.fields.opening_crawl;
          const producer: string = filmDto.fields.producer;
          const characters: number[] = filmDto.fields.characters;
          const planets: number[] = filmDto.fields.planets;
          const species: number[] = filmDto.fields.species;
          const starships: number[] = filmDto.fields.starships;
          const vehicles: number[] = filmDto.fields.vehicles;
          const film: DetailFilm = {
            releaseDate: releaseDate,
            title: title,
            episodeId: episodeId,
            director: director,
            openingCrawl: openingCrawl,
            producer: producer,
            characters: characters,
            planets: planets,
            species: species,
            starships: starships,
            vehicles: vehicles,
          };
          return film;
        });
      }),
    );
  }
  /**
   * Method allows to get current clicked film by id from query parameters
   * @param id film id
   */
  public getFilm(id: number | string): Observable<DetailFilm[]> {
    this.onFilm = true;
    return this.getDetailedFilm().pipe(
      // (+) before `id` turns the string into a number
      map((films: DetailFilm[]) => films.filter(film => {console.log(film) ; return film.episodeId === +id; })),
    );
  }
}
