import { Component } from '@angular/core';
import { Account } from './model';
import { MatDialog } from '@angular/material/dialog';

import { AddAccountDialog } from './dialogs/add-account/add-account.component';
import {
  AccountService
} from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public dialog: MatDialog,
    public $account: AccountService,
    ) {
      $account.init();
    }

  addAccount() {
    const dialogRef = this.dialog.open(AddAccountDialog, {
      data: new Account({
        id: '1',
        name: '',
        onBudget: true,
        balance: 0
      })
    });
  }
}
