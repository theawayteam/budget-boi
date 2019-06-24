import { Injectable } from '@angular/core';
import { Account } from '../model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AccountService {
  private account$ = new BehaviorSubject<Account[]>([]);
  public budgetAccounts: Account[] = [];
  public offBudgetAccounts: Account[] = [];

  init() {
    this.account$.subscribe(accounts => {
      this.budgetAccounts = accounts.filter(a => a.onBudget);
      this.offBudgetAccounts = accounts.filter(a => !a.onBudget);
    });
  }

  addAccount(account: Account) {
    this.account$.next(this.account$.value.concat(account));
  }
}