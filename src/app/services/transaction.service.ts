import { Injectable } from '@angular/core';
import { Transaction, Account, Payee, Category } from '../model';
import { Observable, of } from 'rxjs';

@Injectable()
export class TransactionService {
  getTransactionsForAccount(account: Account): Observable<Transaction[]> {
    const transactions: Transaction[] = [];
    for(let i = 0; i < 300; i++) {
      transactions.push(new Transaction({
        id: '1',
        outflow: 200,
        inflow: 0,
        payee: new Payee({ name: 'Sunoco' }),
        category: new Category({ name: 'Fuel' }),
        date: '2/2/2019',
        reconciled: false,
        confirmed: true,
        memo: '',
        isTransfer: false
      }));
    }

    return of(transactions);
  }
}