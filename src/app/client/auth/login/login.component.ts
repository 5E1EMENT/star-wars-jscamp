import { Component, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../../core/services/authorization.service';

/**
 * Login component
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private authForm: FormGroup;
  private error: string;
  /**
   * .ctor
   * @param matDialogRef Is a material modal component.
   * @param data Is a data whitch we are sending from auth component from openLoginDialog method
   * @param loginService Is a login service
   * @param homeService Is a home service
   */
  public constructor(
    private matDialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA)
    private data: string,
    private authorizationService: AuthorizationService,
    private router: Router,
  ) {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  /**
   * login method allows to login exists user
   */
  public login(): void {
    this.error = '';
    if (this.authForm.status === 'VALID') {
      this.authorizationService.login(this.authForm.value).subscribe(
        data => {
          this.matDialogRef.close();
        },
        err => {
          this.error = err.error.error.message;
        },
      );
    }

  }
}
