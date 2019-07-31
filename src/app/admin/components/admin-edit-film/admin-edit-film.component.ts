import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { CharacterDetails } from 'src/app/core/models/characterDetails';
import { DetailFilm } from 'src/app/core/models/detailFilm';
import { FilmsService } from 'src/app/core/services/films.service';

/**
 * Admin edit film component
 */
@Component({
  selector: 'app-admin-edit-film',
  templateUrl: './admin-edit-film.component.html',
  styleUrls: ['./admin-edit-film.component.scss'],
})
export class AdminEditFilmComponent implements OnInit {
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
  private selectedId: number;
  public constructor(
    private filmsService: FilmsService,
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
    this.filmTableDataSource$ = this.film$.pipe(map(film => [film]));
    this.filmCharacters$ = this.film$.pipe(
      switchMap(film =>
        this.filmsService.getFilmCharactersDetails(film.characters),
      ),
    );
  }
}
