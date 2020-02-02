export class Budget {
  id: string;
  month: string;
  budgeted: number;
  outflows: number;
  balance: number;
  categoryId: string;

  constructor(fields: Partial<Budget>) {
    Object.assign(this, fields);
  }
}