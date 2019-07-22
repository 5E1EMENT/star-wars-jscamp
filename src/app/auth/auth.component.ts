import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';

import { HomeService } from '../home/home.service';

import { AuthService } from './auth.service';
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

  private logout(): any {
    this.home.authUser('');
    this.home.displayAuth('');
  }
  private openLoginDialog(): any {
    this.dialog.open(LoginComponent, { data: {title: 'Войти'} });
  }
  private openRegisterDialog(): any {
    this.dialog.open(RegistrationComponent, {data: {title: 'Регистрация'} });
  }

}
