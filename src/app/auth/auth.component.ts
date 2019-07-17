import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
  constructor(private auth: AuthService,
              public dialog: MatDialog
              ) { }

  login() {
    this.auth.login().subscribe()
  }
  openLoginDialog() {
    this.dialog.open(LoginComponent, {width: '250px', data: {title: 'Войти'} }) 
  }
  openRegisterDialog() {
    this.dialog.open(RegistrationComponent, {width: '250px', data: {title: 'Регистрация'} }) 
  }
  ngOnInit() {

  }
}
