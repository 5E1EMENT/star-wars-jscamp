import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Servece data to interact with user data
 */

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private fetch_data = 'https://angular-film-app.firebaseio.com/swapi.json';
  private User: any;
  private userEmail: string;
  constructor(private http: HttpClient) { }

  /**
   * Mehtod authorizes the user
   */
  public authUser(user: string): any {
    this.User = user;
    console.log(this.User.email);
    return this.User;
  }
  /**
   * Mehtod displays who is authorized now
   */
  public displayAuth(user: any): any {
    this.userEmail = user.email;
  }
  /**
   * Mehtod allows to get response film data
   */
  public getData(): any {

    return this.http.get(this.fetch_data).pipe(map(res => {
      if (!res) {
        return [];
      }
    return res;
    }));
  }

}
