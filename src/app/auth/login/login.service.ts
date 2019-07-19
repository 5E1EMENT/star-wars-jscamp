import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * interface for Login Data
 */
export interface LoginData {
  /**
   * emal : email data from input
   */
  email: string;
  /**
   * password : password data from input
   */
  password: string;
}
/**
 * LoginService class for connecting firebase and login
 */
@Injectable({
  providedIn: 'root',
})

export class LoginService {
  private login_api_key = 'AIzaSyBggsqbMyphOxNDjpgko8FvQ6jabHr9Pm0';
  private login_api = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${this.login_api_key}`;
  constructor(private http: HttpClient) { }
  /**
   * Login method access to login in firebase
   * @param data data from form inputs: email and password
   */
  public login(data: LoginData): any {
    return this.http.post(this.login_api, {
      'email': data.email, // Data for successful auth :dan@mail.ru / test@mail.ru
      'password': data.password, // Data for successful auth: 123456
      'returnSecureToken': false,
    });
}
}
