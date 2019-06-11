export class Payee {
  id: string;
  name: string;

  constructor(fields: Partial<Payee>) {
    Object.assign(this, fields);
  }
}