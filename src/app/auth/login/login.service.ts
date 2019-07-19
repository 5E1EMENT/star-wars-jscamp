import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Interface for Login Data
 */
export interface LoginData {
  /**
   * Email : email data from input
   */
  email: string;
  /**
   * Password : password data from input
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
  private loginApiKey = 'AIzaSyBggsqbMyphOxNDjpgko8FvQ6jabHr9Pm0';
  private loginApi = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${this.loginApiKey}`;
  constructor(private http: HttpClient) { }
  /**
   * Login method access to login in firebase
   * @param data data from form inputs: email and password
   */
  public login(data: LoginData): any {
    return this.http.post(this.loginApi, {
      'email': data.email, // Data for successful auth :dan@mail.ru / test@mail.ru
      'password': data.password, // Data for successful auth: 123456
      'returnSecureToken': false,
    });
}
}
