export class Category {
  id: string;
  name: string;
  isMaster: boolean;

  constructory(fields: Partial<Category>) {
    Object.assign(this, fields);
  }
}