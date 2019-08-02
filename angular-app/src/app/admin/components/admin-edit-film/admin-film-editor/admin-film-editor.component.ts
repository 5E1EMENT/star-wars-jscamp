import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailFilm } from 'src/app/core/models/detailFilm';
import { AdminFilmService } from 'src/app/core/services/admin-film.service';
import { AdminService } from 'src/app/core/services/admin.service';

/**
 * Component allows to edit current film data
 */
@Component({
  selector: 'app-admin-film-editor',
  templateUrl: './admin-film-editor.component.html',
  styleUrls: ['./admin-film-editor.component.scss'],
})
export class AdminFilmEditorComponent {
  /**
   * Property whitch we get from film component filmCharacters$ variable
   */
  @Input() public filmData$: Observable<DetailFilm>;
  private filmId: number;
  private filmEditGroup: FormGroup;
  public constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService,
    public adminFilmService: AdminFilmService,
    private router: Router,
  ) {
    this.filmId = +this.activatedRoute.snapshot.paramMap.get('idfilm');
    this.filmEditGroup = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      episodeId: new FormControl(null, [Validators.required]),
      releaseDate: new FormControl(null, [Validators.required]),
      director: new FormControl(null, [Validators.required]),
      producer: new FormControl(null, [Validators.required]),
      openingCrawl: new FormControl(null, [Validators.required]),
    });
  }
  /**
   * Film edit function
   */
  public filmEdit(): void {
    if (this.filmEditGroup.status === 'VALID') {
      this.adminService.updateFilm(this.filmId, this.filmEditGroup.value)
      .subscribe(() => {
        console.log(this.filmEditGroup);
        this.adminFilmService.onFilm = false;
        this.router.navigate(['']);
      });
    }

  }
}
