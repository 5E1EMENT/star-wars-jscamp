import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

/**
 * Class for registration functional
 */
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<RegistrationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
 /**
  * Init method
  */
  public ngOnInit(): any {
  }
}
