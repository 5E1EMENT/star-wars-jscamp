import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthorizationService } from '../../../core/services/authorization.service';

/**
 * Guard for admin auth
 */
@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthorizationService,
    private router: Router,
  ) {}
  /**
   * Method check's user log in status
   * if it's false - block route, else
   * enters user to the account
   */
  public canActivate(): boolean {
    if (!this.authService.isAdmin) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
