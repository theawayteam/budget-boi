export class Account {
  id: string;
  name: string;
  onBudget: boolean;
  balance: number;

  constructor(fields: Partial<Account>) {
    Object.assign(this, fields);
  }
}