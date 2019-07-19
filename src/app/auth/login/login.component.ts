import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
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
   * @param matDialogRef Is a material modal component.
   * @param data Is a data whitch we are sending from auth component from openLoginDialog method
   * @param loginService Is a login service
   * @param Home Is a home service
   */
  constructor(private matDialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              public loginService: LoginService,
              public homeService: HomeService) {

      this.authForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      });

   }

   private login(): any {
      this.error = '';
      this.loginService.login(this.authForm.value).subscribe(data => {
      this.homeService.authUser(data);
      this.homeService.displayAuth(data);
      this.matDialogRef.close();
      }, err => {
        this.matDialogRef.close();
        this.error = err.error.error.message;
      });

    }

}
