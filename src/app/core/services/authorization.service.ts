import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  private loginApi = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${
    this.loginApiKey
  }`;
  /**
   * User - user variable
   */
  public user: User;
  /**
   * User Email - userEmail
   */
  public userEmail: string;
  /**
   * .ctor
   * @param http - http package module
   */
  constructor(private http: HttpClient) {}
  /**
   * Mehtod authorizes the user
   */
  public authUser(user: User): User {
    this.user = user;
    this.userEmail = user.email;
    return this.user;
  }
  /**
   * Login method access to login in firebase
   * @param data data from form inputs: email and password
   */
  public login(data: LoginData): any {
    return this.http.post<void>(this.loginApi, {
      email: data.email, // Data for successful auth :dan@mail.ru / test@mail.ru
      password: data.password, // Data for successful auth: 123456
      returnSecureToken: false,
    });
  }
  /**
   * Method logout the user
   */
  public logout(): void {
    this.userEmail = '';
    this.user = null;
  }
}
