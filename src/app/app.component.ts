import { Component } from '@angular/core';
import { Account } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  budgetAccounts: Account[] = [];
  offBudgetAccounts: Account[] = [];

  addAccount() {
    this.budgetAccounts.push(new Account({
      id: '1',
      name: 'Checking Account',
      onBudget: true,
      balance: 36087.78
    }));
  }
}
