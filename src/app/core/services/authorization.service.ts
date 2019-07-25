import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
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
  private loginApi = `${this.appConfig.API_URL}/verifyPassword?key=${
    this.loginApiKey
  }`;
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
   */
  constructor(private http: HttpClient, private appConfig: AppConfig) {}
  /**
   * Mehtod authorizes the user
   */
  public authUser(user: User): User {
    this.user = user;
    this.lastUserEmail = user.email;
    return this.user;
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
        localStorage.setItem(userModel.email, userModel.idToken);
      }),
    );
  }
  /**
   * Method logout the user
   */
  public logout(): void {
    localStorage.setItem(this.lastUserEmail, null);
    this.lastUserEmail = '';
  }
  /**
   * Checks if the specified user is logged in.
   * @param email - user email.
   * @returns if the local storage has token by email - true,/false
   */
  public isLoggedIn(): boolean {
    return this.getToken(this.lastUserEmail) !== null;
  }
  /**
   * Returns token by user email if he was(for now 'was', but later it will be 'is') logged in.
   * @param email - user email.
   * @returns user token.
   */
  public getToken(email: string = this.lastUserEmail): string {
    return localStorage.getItem(email);
  }
}
