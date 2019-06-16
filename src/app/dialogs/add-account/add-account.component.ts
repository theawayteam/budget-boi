import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Account } from '../../model';

@Component({
  selector: 'add-account-dialog',
  templateUrl: 'add-account.html'
})
export class AddAccountDialog {
  constructor(
    public dialogRef: MatDialogRef<AddAccountDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Account) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  cancel() { this.dialogRef.close(); }
}