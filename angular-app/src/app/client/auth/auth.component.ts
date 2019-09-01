import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminFilmService } from 'src/app/core/services/admin-film.service';
import { environment } from 'src/environments/environment';

import { User } from '../../core/models/user';
import { AuthorizationService } from '../../core/services/authorization.service';
import { DialogService } from '../../core/services/dialog.service';
import { FilmsService } from '../../core/services/films.service';
/**
 * Class AuthComponent for authentication
 */
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  /**
   * User data
   */
  public user: User;
  /**
   * .ctor
   * @param home service for home component
   * @param dialogWindow service for modal windows
   */
  public constructor(
    private authorizationService: AuthorizationService,
    private dialogService: DialogService,
    private filmsService: FilmsService,
    private router: Router,
    private adminFilmService: AdminFilmService,
    private FilmsService: FilmsService,
  ) {}

  /**
   * Logout method allows to logout current user
   */

  public logout(): void {
    this.authorizationService.logout();
    this.filmsService.onFilm = false
    this.adminFilmService.onFilm = false
  }
  /**
   * Login - Inherit
   */
  public login(): void {
    this.dialogService.openLoginDialog();
  }
  /**
   * Registration - Inherit
   */
  public registration(): void {
    this.dialogService.openRegisterDialog();
  }
  /**
   * Method allows to get back to the home page
   */
  public redirectHome(): void {
    if (this.authorizationService.isAdmin) {
      this.router.navigate(['films']);
      this.adminFilmService.onFilm = false;
    } else {
      this.router.navigate(['home']);
      this.filmsService.onFilm = false;
    }

  }
}
