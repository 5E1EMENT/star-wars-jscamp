import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthorizationService } from "../../../core/services/authorization.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) {}

  canActivate() {
    if (!this.authService.isLoggedIn()) {
      const currentUrl = this.router.url;
      this.router.navigate([currentUrl]);
    }
    return this.authService.isLoggedIn();
  }
}
