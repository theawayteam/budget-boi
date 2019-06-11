import { Category } from './category';

export class Budget {
  id: string;
  month: string;
  budgeted: number;
  outflows: number;
  balance: number;
  category: Category;

  constructor(fields: Partial<Budget>) {
    Object.assign(this, fields);
  }
}