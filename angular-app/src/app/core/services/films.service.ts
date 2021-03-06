import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig } from '../app.config';
import { CharacterDetails } from '../models/characterDetails';
import { DetailFilm } from '../models/detailFilm';
import { Film } from '../models/film';

import { CharacterRecordDto } from './dto/character-dto';
import { DatabaseRecord, FilmRecordDto } from './dto/film-dto';

/**
 * FilmsService executes all operations about films
 */
@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private filmsUrl = this.appConfig.FILMS_URL;
  private charactersUrl = this.appConfig.CHARACTERS_URL;
  /**
   * Film page status for home btn
   */
  public onFilm = false;
  /**
   * .ctor
   * @param http - http package
   */
  public constructor(private http: HttpClient, private appConfig: AppConfig,) {}
  /**
   * Method getFilms allows to get data about films
   */
  public getFilms(): Observable<Film[]> {
    return this.http.get<DatabaseRecord<FilmRecordDto>[]>(this.filmsUrl).pipe(
      map(filmsDto => {
        return filmsDto.map((dataDto, index) => {
          const filmDto = dataDto.fields;
          const databaseId: number = index;
          const title: string = filmDto.title;
          const episodeId: number = filmDto.episode_id;
          const releaseDate: Date = new Date(filmDto.release_date);
          const director: string = filmDto.director;
          const film: Film = {
            releaseDate,
            databaseId,
            title,
            episodeId,
            director,
          };
          return film;
        });
      }),
    );
  }
  private getCharacterDetails(): Observable<CharacterDetails[]> {
    return this.http.get<DatabaseRecord<CharacterRecordDto>[]>(this.charactersUrl).pipe(
      map(charactersDto => {
        return charactersDto.map( dataDto => {
          const characterDto = dataDto.fields;
          const birthYear: string = characterDto.birth_year;
          const eyeColor: string = characterDto.eye_color;
          const gender: string = characterDto.gender;
          const hairColor: string = characterDto.hair_color;
          const height: string = characterDto.height;
          const mass: string = characterDto.mass;
          const name: string = characterDto.name;
          const skinColor: string = characterDto.skin_color;
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
    return this.http.get<DatabaseRecord<FilmRecordDto>[]>(this.filmsUrl).pipe(
      map(filmsDto => {
        return filmsDto.map((filmDto, index) => {
          const film: DetailFilm = {
            databaseId: index,
            releaseDate: new Date(filmDto.fields.release_date),
            title: filmDto.fields.title,
            episodeId: filmDto.fields.episode_id,
            director: filmDto.fields.director,
            openingCrawl: filmDto.fields.opening_crawl,
            producer: filmDto.fields.producer,
            characters: filmDto.fields.characters,
            planets: filmDto.fields.planets,
            species: filmDto.fields.species,
            starships: filmDto.fields.starships,
            vehicles: filmDto.fields.vehicles,
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
  public getFilm(id: number): Observable<DetailFilm> {
    this.onFilm = true;
    return this.getDetailedFilm().pipe(
      map((films) => films.find(film => film.databaseId === +id)),
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
