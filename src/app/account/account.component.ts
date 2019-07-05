import { Component, OnInit } from '@angular/core';
import { Transaction, Account, Payee, Category } from '../model';
import {MatTableDataSource} from '@angular/material/table';

const TRANSACTIONS: Transaction[] = [
  new Transaction({
    id: '1',
    outflow: 200,
    inflow: 0,
    payee: new Payee({ name: 'Sunoco' }),
    category: new Category({ name: 'Fuel' }),
    day: '2/2/2019',
    reconciled: false,
    confirmed: true,
    memo: '',
    isTransfer: false
  })
]

@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  displayedColumns: string[] = ['day', 'payee', 'category', 'memo', 'outflow', 'inflow'];
  dataSource = new MatTableDataSource<Transaction>(TRANSACTIONS);

  ngOnInit() {

  }
}