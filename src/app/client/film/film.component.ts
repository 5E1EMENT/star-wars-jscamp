import {animate, state, style, transition, trigger} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { CharacterDetails } from 'src/app/core/models/characterDetails';
import { DetailFilm } from 'src/app/core/models/detailFilm';
import { FilmsService } from 'src/app/core/services/films.service';
/**
 * FilmComponent - film component
 */
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  /**
   * Film details asnyc data
   */
  public filmDetails$: Observable<CharacterDetails[]>;
  /**
   * Film data
   */
  public film$: Observable<DetailFilm[]>;
  /**
   * Class detail film
   */
  public filmsDetail = new DetailFilm();
  /**
   * Film title
   */
  public filmTitle: string;
  private selectedId: number;
  constructor(
    private filmsService: FilmsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  /**
   * Columns whitch will be displayed in the film table
   */
  public displayedFilmColumns: string[] = [
    'episodeId',
    'releaseDate',
    'director',
    'producer',
    'openingCrawl',
  ];
  /**
   * Columns whitch will be displayed in the film details table
   */
  public displayedFilmDetailColumns: string[] = [
    'name',
    'birthYear',
    'gender',
    'eyeColor',
    'hairColor',
    'height',
    'mass',
    'skinColor',

  ];
  /**
   * After initialization film component
   * method pulls current film data
   * and setups film details class variables
   */
  public ngOnInit(): void {
    this.film$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('idfilm');
        return this.filmsService.getFilm(this.selectedId);
      }),
      tap(film => {
        this.filmTitle = film[0].title;
        this.filmsDetail.characters = film[0].characters;
        this.filmsDetail.planets = film[0].planets;
        this.filmsDetail.species = film[0].species;
        this.filmsDetail.starships = film[0].starships;
        this.filmsDetail.vehicles = film[0].vehicles;

      }),
    );

  }
  /**
   * Method allows to get Characters
   * details information and
   * stores it into a filmDetails$
   */
  public getFilmCharactersDetails(): void {
    this.filmDetails$ = this.filmsService.getFilmCharactersDetails(
      this.filmsDetail.characters);
  }

}
