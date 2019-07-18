import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  login_api_key = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBggsqbMyphOxNDjpgko8FvQ6jabHr9Pm0'
  constructor(private http: HttpClient ) { }

  login() {
    return this.http.post(this.login_api_key,{
      "email": "dan@mail.ru",
      "password": "123456",
      "returnSecureToken": false
    })
  }
}
