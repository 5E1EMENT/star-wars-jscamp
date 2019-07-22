import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';

import { HomeService } from '../home/home.service';

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

  constructor(private dialog: MatDialog,
              private home: HomeService,
              ) { }

  /**
   * logout method allows to logout current user
   */

  public logout(): void {
    this.home.authUser(null);
  }

  /**
   * openLoginDialog method allows to open Login modal window
   */

  public openLoginDialog(): void {
    this.dialog.open(LoginComponent, { data: {title: 'Login'} });
  }

  /**
   * openLoginDialog method allows to open Registration modal window
   */

  public openRegisterDialog(): void {
    this.dialog.open(RegistrationComponent, {data: {title: 'Registration'} });
  }

}
