import { Component } from '@angular/core';

import { User } from '../core/models/user';
import { AuthorizationService } from '../core/services/authorization.service';
import { DialogService } from '../core/services/dialog.service';

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
  ) {}

  /**
   * Logout method allows to logout current user
   */

  public logout(): void {
    this.authorizationService.logout();
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
}
