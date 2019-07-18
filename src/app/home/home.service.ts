import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  fetch_data = 'https://angular-film-app.firebaseio.com/swapi.json'
  public User: any
  constructor(private http: HttpClient) { }

  displayAuth(user) {
    return this.User = user
  }
  getData() {

    return this.http.get(this.fetch_data).pipe(map(res => {
      if(!res) {
        return []
      }
    return res
    }));
  }

}
