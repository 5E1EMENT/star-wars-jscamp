import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/admin/admin.service';
import { DetailFilm } from 'src/app/core/models/detailFilm';

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
  constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService,
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
  public edit(): void {
    this.adminService.updateFilm(this.filmId, this.filmEditGroup.value)
    .subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
