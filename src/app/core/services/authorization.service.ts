import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppConfig } from '../app.config';
import { LoginData } from '../models/login';
import { User } from '../models/user';
/**
 * AuthorizationService - service for user Authorization
 */
@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private loginApiKey = 'AIzaSyBggsqbMyphOxNDjpgko8FvQ6jabHr9Pm0';
  private loginApi = `${this.appConfig.API_URL}/verifyPassword?key=${this.loginApiKey}`;

  /**
   * User - user variable
   */
  public user: User;
  /**
   * Email from last authorized user.
   */
  public lastUserEmail = '';
  /**
   * .ctor
   * @param http - http package module
   * @param appConfig - application config file with API URL, API KEY, TOKEN_KEY, EMAIL_KEY data
   */
  constructor(private http: HttpClient, private appConfig: AppConfig, private router: Router) {
    this.lastUserEmail = localStorage.getItem(this.appConfig.EMAIL_KEY);
  }

  /**
   * Login method access to login in firebase
   * @param data data from form inputs: email and password
   */
  public login(data: LoginData): Observable<User> {
    const body = {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    };
    return this.http.post<User>(this.loginApi, body).pipe(
      map(response => new User(response)),
      tap((userModel: User) => {
        localStorage.setItem(this.appConfig.TOKEN_KEY, userModel.idToken);
        localStorage.setItem(this.appConfig.EMAIL_KEY, userModel.email);
        this.lastUserEmail = userModel.email;
      }),
    );
  }
  /**
   * Method logout the user
   */
  public logout(): void {
    localStorage.removeItem(this.appConfig.TOKEN_KEY);
    localStorage.removeItem(this.appConfig.EMAIL_KEY);
    this.lastUserEmail = '';
    this.router.navigate(['']);
  }
  /**
   * Checks user login status
   * @returns if the local storage has token by email - true/false
   */
  public isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
  /**
   * Returns token by user email if he was(for now 'was', but later it will be 'is') logged in.
   * @returns user token.
   */
  public getToken(): string {
    return localStorage.getItem(this.appConfig.TOKEN_KEY);
  }
}
