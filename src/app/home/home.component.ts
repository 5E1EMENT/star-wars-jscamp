import { Component, OnInit } from '@angular/core';

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
    public auhtorizationService: AuthorizationService,
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
   * dataSource - films data arr connected to template
   */
  public dataSource = [];

  /**
   * Initialize films data witch will be used to display to the user
   */
  public ngOnInit(): void {
    this.filmsService.getFilms().subscribe(films => {
      this.dataSource = films;
    });
  }
}
