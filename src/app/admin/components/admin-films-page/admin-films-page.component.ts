import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Film } from 'src/app/core/models/film';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { FilmsService } from 'src/app/core/services/films.service';

/**
 * Admin films page component
 */
@Component({
  selector: 'app-admin-films-page',
  templateUrl: './admin-films-page.component.html',
  styleUrls: ['./admin-films-page.component.scss'],
})
export class AdminFilmsPageComponent implements OnInit {
  /**
   *
   * @param filmsService films service
   * @param authorizationService auth service
   * @param router router module service
   */
  public constructor(private filmsService: FilmsService,
              public authorizationService: AuthorizationService,
              private router: Router) { }
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
   * Method alows to get more information
   * about current clicked film
   * @param episodeId episode id
   */
  public openFilm(episodeId: number): void  {
    this.router.navigate(['/films/', episodeId]);
  }
  /**
   * Initialize films data witch will be used to display to the user
   */
  public ngOnInit(): void {
    this.dataSource$ = this.filmsService.getFilms();
  }

}
