export class Category {
  id: string;
  name: string;
  isMaster: boolean;
  childrenCategories: string[];
  masterCategoryId: string;

  constructor(fields: Partial<Category>) {
    Object.assign(this, fields);
  }
}