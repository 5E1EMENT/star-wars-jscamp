import { Component, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeService } from 'src/app/home/home.service';

import { LoginService } from './login.service';

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
  public constructor(private matDialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) private data: string,
              public loginService: LoginService,
              public homeService: HomeService) {

      this.authForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      });

    }
   /**
    * login method allows to login exists user
    */

   public login(): void {
      this.error = '';
      this.loginService.login(this.authForm.value).subscribe(data => {
      this.homeService.authUser(data);
      this.matDialogRef.close();
      }, err => {
        this.matDialogRef.close();
        this.error = err.error.error.message;
      });

    }

}
