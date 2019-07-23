import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';

import { User } from '../core/models/user';
import { DialogService } from '../core/services/dialog.service';
import { HomeService } from '../core/services/home.service';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

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
  public constructor(private home: HomeService,
              private dialogWindow: DialogService) { }

  /**
   * Logout method allows to logout current user
   */

  public logout(): void {
    this.home.logout();
  }
  /**
   * Login - Inherit
   */
  public login(): void {
    this.dialogWindow.openLoginDialog();
  }
  /**
   * Registration - Inherit
   */
  public registration(): void {
    this.dialogWindow.openRegisterDialog();
  }

}
