export class Category {
  id: string;
  name: string;
  isMaster: boolean;
  childrenCategories: Category[];
  masterCategory: Category;

  constructor(fields: Partial<Category>) {
    Object.assign(this, fields);
  }
}