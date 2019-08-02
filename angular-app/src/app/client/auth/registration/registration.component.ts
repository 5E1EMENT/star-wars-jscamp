import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

/**
 * Class for registration functional
 */
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  /**
   * .ctor
   * @param matDialogRef is a material modal component.
   * @param data is a data whitch we can send to html
   */
  public constructor(
    private matDialogRef: MatDialogRef<RegistrationComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: string,
  ) {}
}
