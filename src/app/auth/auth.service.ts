import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Class AuthService
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient ) { }

}
