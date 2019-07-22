import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Servece data to interact with user data
 */

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private fetchData = 'https://angular-film-app.firebaseio.com/swapi.json';
  private User: Object;
  private userEmail: string;
  constructor(private http: HttpClient) { }

  /**
   * Mehtod authorizes the user
   */
  public authUser(user: string): any {
    this.User = user;
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
  public getData(): Observable<any> {

    return this.http.get(this.fetchData).pipe(tap(res => {
      if (!res) {
        return [];
      }
    return res;
    }));
  }

}
