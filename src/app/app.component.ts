import { Component, Inject } from '@angular/core';
import { Account } from './model';
import { MatDialog } from '@angular/material';

import { AddAccountDialog } from './dialogs/add-account/add-account.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }

  budgetAccounts: Account[] = [];
  offBudgetAccounts: Account[] = [];

  addAccount() {
    const dialogRef = this.dialog.open(AddAccountDialog, {
      data: new Account({
        id: '1',
        name: 'Checking',
        onBudget: true,
        balance: 3899.99
      })
    });

    dialogRef.afterClosed().subscribe((account: Account) => {
      this.budgetAccounts.push(account);
    });
  }
}
