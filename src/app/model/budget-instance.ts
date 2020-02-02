import { Category } from '../model';

export class BudgetInstance {
  id: string;
  month: string;
  budgeted: number;
  outflows: number;
  balance: number;
  category: Category;
  isMaster: boolean;
  isCollapsed: boolean;

  constructor(fields: Partial<BudgetInstance>) {
    Object.assign(this, fields);
  }
}