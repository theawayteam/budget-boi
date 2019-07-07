import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction, Account } from '../model';
import { MatTableDataSource } from '@angular/material/table';
import { AccountService, TransactionService } from '../services';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  displayedColumns: string[] = ['day', 'payee', 'category', 'memo', 'outflow', 'inflow'];
  dataSource = new MatTableDataSource<Transaction>([]);
  private account: Account;

  constructor(
    private route: ActivatedRoute,
    private $account: AccountService,
    private $transaction: TransactionService
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => this.$account.getAccountById(params.get('account_id')))
    ).subscribe(account => {
      this.account = account;
      this.$transaction.getTransactionsForAccount(account).subscribe(transactions => {
        this.dataSource.connect().next(transactions);
      });
    });
  }
}