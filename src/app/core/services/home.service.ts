import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

/**
 * Servece data to interact with user data
 */

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  /**
   * User - user variable
   */
  public user: User;
  /**
   * User Email - userEmail
   */
  public userEmail: string;

  /**
   * Mehtod authorizes the user
   */
  public authUser(user: User): User {
    this.user = user;
    this.userEmail = user.email;
    return this.user;
  }
  /**
   * Method logout the user
   */
  public logout(): void {
    this.userEmail = '';
    this.user = null;
  }

}
