import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private login_api_key = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBggsqbMyphOxNDjpgko8FvQ6jabHr9Pm0'
  constructor(private http: HttpClient) { }
  login(data) {
    return this.http.post(this.login_api_key,{
      "email": data.email, //dan@mail.ru
      "password": data.password, //123456 Data for successful auth
      "returnSecureToken": false
    })
}
}

  

  