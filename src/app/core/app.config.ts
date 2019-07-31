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
}
