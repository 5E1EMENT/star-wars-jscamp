import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  fetch_data = 'https://angular-film-app.firebaseio.com/swapi.json'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.fetch_data).pipe(map(res => {
      console.log("response", res)
    return res
    }));
  }

}
