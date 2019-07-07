import { Component, OnInit } from '@angular/core';
import { Transaction, Account, Payee, Category } from '../model';
import {MatTableDataSource} from '@angular/material/table';
import { AccountService, TransactionService } from '../services';

const TRANSACTIONS: Transaction[] = [
  
]

@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  displayedColumns: string[] = ['day', 'payee', 'category', 'memo', 'outflow', 'inflow'];
  dataSource = new MatTableDataSource<Transaction>([]);

  constructor(
    private $account: AccountService,
    private $transaction: TransactionService
  ) {}

  ngOnInit() {
    this.$transaction.getTransactionsForAccount(new Account({id: '1'})).subscribe(transactions => {
      this.dataSource.connect().next(transactions);
    });
  }
}