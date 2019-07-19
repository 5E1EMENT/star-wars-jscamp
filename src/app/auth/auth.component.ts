import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import {MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeService } from '../home/home.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
  constructor(private auth: AuthService,
              public dialog: MatDialog,
              public home: HomeService
              ) { }

  loginData(data) {
    console.log(data)
  }            

  logout() {
    this.home.authUser('')
    this.home.displayAuth('')
  }
  openLoginDialog() {
    this.dialog.open(LoginComponent, { data: {title: 'Войти'} }) 
  }
  openRegisterDialog() {
    this.dialog.open(RegistrationComponent, {data: {title: 'Регистрация'} }) 
  }
  ngOnInit() {

  }
}
