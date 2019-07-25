import { Component, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

/**
 * LoginComponent class
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
    this.authorizationService.login(this.authForm.value).subscribe(
      data => {
        this.authorizationService.authUser(data);
        this.matDialogRef.close();
      },
      err => {
        this.error = err.error.error.message;
      },
    );
  }
}
