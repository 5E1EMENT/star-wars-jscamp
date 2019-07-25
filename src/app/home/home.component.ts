import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Film } from '../core/models/film';
import { AuthorizationService } from '../core/services/authorization.service';
import { FilmsService } from '../core/services/films.service';

/**
 * Home component for displaying film data when user will login
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   * .ctor
   * @param userService - user service
   * @param filmsService - films service
   */
  public constructor(
    private filmsService: FilmsService,
    private auhtorizationService: AuthorizationService,
  ) {}

  /**
   *  displayedColumns - mat-header-row uses this data
   */
  public displayedColumns: string[] = [
    'releaseDate',
    'title',
    'episodeId',
    'director',
  ];
  /**
   * Stream of films data data array connected to template
   */
  public dataSource$: Observable<Film[]>;

  /**
   * Initialize films data witch will be used to display to the user
   */
  public ngOnInit(): void {
    this.dataSource$ = this.filmsService.getFilms();
  }
}
