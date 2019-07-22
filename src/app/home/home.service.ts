import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../core/models/user';

/**
 * Servece data to interact with user data
 */

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  /**
   * user - user variable
   */
  public user: User;
  /**
   * userEmail - user email
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

}
