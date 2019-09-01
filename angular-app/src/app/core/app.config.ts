import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

/**
 * Application configurations.
 */
@Injectable({
  providedIn: 'root',
})
export class AppConfig {

  /**
   * API URL.
   */
  public API_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=';
  /**
   * API Register URL
   */
  public API_REGISTER = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
  /**
   * Web-API key from Firebase
   */
  public API_KEY = environment.firebase.apiKey;
  /**
   * TOKEN_KEY - is a key for token
   */
  public TOKEN_KEY = 'token';
  /**
   * TOKEN_KEY - is a key for email
   */
  public EMAIL_KEY = 'email';
  /**
   * Database url
   */
  public API_DATABASE_URL = 'https://angular-app-1f1de.firebaseio.com/swapi';
  /**
   * FILMS_URL - url with films data
   */
  public FILMS_URL = `${this.API_DATABASE_URL}/films.json`; 
  /**
   * CHARACTERS_URL - url with characters data
   */
  public CHARACTERS_URL = `${this.API_DATABASE_URL}/people.json`;
  /**
   * User email: dan@mail.ru / test@mail.ru
   * Password: 123456
   */
  /**
   * Admin email: admin@gmail.ru
   * password: mainadmin
   */
}
