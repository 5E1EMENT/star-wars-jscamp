import { Component, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../../core/services/authorization.service';

/**
 * Register component
 */
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  private authForm: FormGroup;
  private error: string;
  /**
   * .ctor
   * @param matDialogRef Is a material modal component.
   * @param data Is a data whitch we are sending from auth component from openLoginDialog method
   * @param homeService Is a home service
   */
  public constructor(
    private matDialogRef: MatDialogRef<RegistrationComponent>,
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
   * Registration method allows to register new user
   */
  public registration(): void {
    if (this.authForm.status === 'VALID') {
      this.authorizationService.register(this.authForm.value).subscribe(
        data => {
          this.matDialogRef.close();
        }
      );
    }

  }
}
