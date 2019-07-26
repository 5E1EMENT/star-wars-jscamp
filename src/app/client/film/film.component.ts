import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
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
   * Detailed Films async data - film$
   */
  public film$: Observable<DetailFilm[]>;
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
   * Columns whitch will be displayed in the film table component
   */
  public displayedColumns: string[] = [
    'episodeId',
    'releaseDate',
    'director',
    'producer',
    'openingCrawl',

  ];
  /**
   * After initialization film component
   * method pulls current film data
   */
  public ngOnInit(): void {
    this.film$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('idfilm');
        return this.filmsService.getFilm(this.selectedId);
      }),
      tap(film => this.filmTitle = film[0].title),
    );

  }
}
