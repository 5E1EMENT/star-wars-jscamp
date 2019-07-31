import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';

  import { environment } from '../../../environments/environment';
import { AppConfig } from '../app.config';
  import { AuthorizationService } from '../services/authorization.service';

  /**
   * Interceptor transforming http requests to simplify all other requests to the DB.
   */
  @Injectable({
    providedIn: 'root',
  })
  export class AuthInterceptor implements HttpInterceptor {
  /**
   *
   * @param auth Authorization Service
   * @param config Application config
   */
  public constructor(
    private auth: AuthorizationService,
    private config: AppConfig,
    ) { }

  /**
   * HttpInterceptor realization.
   * @param request - incoming request.
   * @param next - command to transit modified http request to the next interceptor.
   */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Works when accessing database, adds auth idToken to a query
    if (request.url.includes(this.config.API_URL)) {
      return next.handle(request.clone({params: request.params.set('key', this.config.API_KEY)}));
    }
    // Works when signing in, adds API Token (key) to a query
    if (request.url.includes(environment.firebase.databaseURL)) {
      return next.handle(request.clone({params: request.params.set('auth', this.auth.getToken())}));
    }

  }
  }
