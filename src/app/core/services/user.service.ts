import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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
  constructor() { }
  
}
