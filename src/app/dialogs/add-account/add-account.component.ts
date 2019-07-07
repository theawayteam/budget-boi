import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Account } from '../../model';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountService } from '../../services';

@Component({
  selector: 'add-account-dialog',
  templateUrl: 'add-account.html'
})
export class AddAccountDialog implements OnInit {
  accountForm = new FormGroup({
    name: new FormControl(''),
    balance: new FormControl(''),
    onBudget: new FormControl('')
  });

  constructor(
    private $account: AccountService,
    public dialogRef: MatDialogRef<AddAccountDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Account) {}
  
  ngOnInit() {
    this.accountForm.controls.name.setValue(this.data.name);
    this.accountForm.controls.balance.setValue(this.data.balance);
    this.accountForm.controls.onBudget.setValue(this.data.onBudget);

    this.accountForm.controls.name.valueChanges.subscribe(val => this.data.name = val);
    this.accountForm.controls.balance.valueChanges.subscribe(val => this.data.balance = val);
    this.accountForm.controls.onBudget.valueChanges.subscribe(val => this.data.onBudget = val);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cancel() { this.dialogRef.close(); }

  addAccount(account: Account) {
    this.$account.addAccount(account);
    this.dialogRef.close();
  }
}