import { Component, OnInit } from '@angular/core';

import { FilmsService } from '../core/services/films.service';

import { HomeService } from './home.service';

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
   * @param homeService - home page service
   * @param filmsService - films service
   */
  constructor(public homeService: HomeService,
              private filmsService: FilmsService) { }

  /**
   *  displayedColumns - mat-header-row uses this data
   */
  public displayedColumns: string[] = ['releaseDate', 'title', 'episodeId', 'director'];
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
