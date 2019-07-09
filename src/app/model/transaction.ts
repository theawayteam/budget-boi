import { Account, Payee, Category } from './';

export class Transaction {
  id: string;
  account: Account;
  outflow: number;
  inflow: number;
  payee: Payee;
  category: Category;
  date: string;
  reconciled: boolean;
  confirmed: boolean;
  memo: string;
  isTransfer: boolean;

  constructor(fields: Partial<Transaction>) {
    Object.assign(this, fields);
  }
}