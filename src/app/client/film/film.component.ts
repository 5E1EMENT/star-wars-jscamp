import {animate, state, style, transition, trigger} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap, map } from 'rxjs/operators';

import { CharacterDetails } from '../../core/models/characterDetails';
import { DetailFilm } from '../../core/models/detailFilm';
import { FilmsService } from '../../core/services/films.service';
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
   * Material table datasource provides
   * only array to handle
   */
  public filmTableDataSource$: Observable<DetailFilm[]>;
  /**
   * Film characters array
   */
  public filmCharacters$: Observable<CharacterDetails[]>;
  /**:
   * Film data
   */
  public film$: Observable<DetailFilm>;
  /**
   * Film title
   */
  public filmTitle$: Observable<string>;
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
    );
    this.filmTableDataSource$ = this.film$.pipe(
      map(film => [film]),
    );
    this.filmCharacters$ = this.film$.pipe(
      switchMap(film => this.filmsService.getFilmCharactersDetails(film.characters)),
    );
    this.filmTitle$ = this.film$.pipe(
      map(film => film.title),
    );
  }
}
