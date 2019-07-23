import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegistrationComponent } from 'src/app/auth/registration/registration.component';

/**
 * Dialog service allows to open modals
 */
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  /**
   * .ctor
   * @param dialog uses material design dialog window
   */
  public constructor(private dialog: MatDialog) {}
  /**
   * OpenLoginDialog method allows to open Login modal window
   */
  public openLoginDialog(): void {
    this.dialog.open(LoginComponent, { data: { title: 'Login' } });
  }
  /**
   * OpenLoginDialog method allows to open Registration modal window
   */
  public openRegisterDialog(): void {
    this.dialog.open(RegistrationComponent, {
      data: { title: 'Registration' },
    });
  }
}
