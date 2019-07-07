import { Injectable } from '@angular/core';
import { Account } from '../model';
import { BehaviorSubject, Observable } from 'rxjs';
import { find, map } from 'rxjs/operators';

@Injectable()
export class AccountService {
  private account$ = new BehaviorSubject<Account[]>([]);
  public budgetAccounts: Account[] = [];
  public offBudgetAccounts: Account[] = [];
  public totalBalance = 0;

  init() {
    this.account$.subscribe(accounts => {
      this.budgetAccounts = accounts.filter(a => a.onBudget);
      this.offBudgetAccounts = accounts.filter(a => !a.onBudget);
      this.totalBalance = accounts.reduce((prev, account: Account) => {
        return prev + account.balance;
      }, 0);
    });
    this.addAccount(new Account({
      id: '1',
      name: 'Checking',
      balance: 12000,
      onBudget: true
    }));
  }

  addAccount(account: Account) {
    this.account$.next(this.account$.value.concat(account));
  }

  getAccountById(id: string): Observable<Account> {
    return this.account$.pipe(
      map((accounts, index) => accounts[index]),
      find(account => account.id === id)
    );
  }
}