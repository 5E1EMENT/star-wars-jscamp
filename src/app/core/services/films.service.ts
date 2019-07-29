import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CharacterDetails } from '../models/characterDetails';
import { DetailFilm } from '../models/detailFilm';
import { Film } from '../models/film';

import { CharacterDto } from './dto/character-dto';
import { FilmDto } from './dto/film-dto';

/**
 * FilmsService executes all operations about films
 */
@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private filmsUrl = 'https://angular-film-app.firebaseio.com/swapi/films.json';
  private charactersUrl = 'https://angular-film-app.firebaseio.com/swapi/people.json';
  /**
   * Film page status for home btn
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
  private getCharacterDetails(): Observable<CharacterDetails[]> {
    return this.http.get<CharacterDto[]>(this.charactersUrl).pipe(
      map(charactersDto => {
        return charactersDto.map( characterDto => {
          const birthYear: string = characterDto.fields.birth_year;
          const eyeColor: string = characterDto.fields.eye_color;
          const gender: string = characterDto.fields.gender;
          const hairColor: string = characterDto.fields.hair_color;
          const height: string = characterDto.fields.height;
          const mass: string = characterDto.fields.mass;
          const name: string = characterDto.fields.name;
          const skinColor: string = characterDto.fields.skin_color;
          const character: CharacterDetails = {
            birthYear,
            eyeColor,
            gender,
            hairColor,
            height,
            mass,
            name,
            skinColor,
          };
          return character;
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
            releaseDate,
            title,
            episodeId,
            director,
            openingCrawl,
            producer,
            characters,
            planets,
            species,
            starships,
            vehicles,
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
      map((films: DetailFilm[]) => films.filter(film => film.episodeId === +id)),
    );
  }
  /**
   * Method gets all films
   * characters info and returns
   * character information about
   * current film
   * @param characters  characters from current film
   */
  public getFilmCharactersDetails(characters: number[]): Observable<CharacterDetails[]> {

    return this.getCharacterDetails().pipe(
      map((charactersData) => charactersData.filter((character, i) => i in characters),
    ));
  }
}
