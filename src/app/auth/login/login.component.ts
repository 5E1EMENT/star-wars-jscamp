import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { HomeService } from 'src/app/home/home.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public authForm: FormGroup
  public FormData: any
  public error: string

  @Output() SendData = new EventEmitter()
  constructor(public matDialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, 
              private LoginService: LoginService,
              private Home: HomeService) {
                
      this.authForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
      })

   }
    public login() {
      this.error = ''
      this.LoginService.login(this.authForm.value).subscribe(data => {
      this.Home.displayAuth(data)  

      }, err => {
        this.error = err.error.error.message
      })
      
    }
  ngOnInit() {
  }
  

}
