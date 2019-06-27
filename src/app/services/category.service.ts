import { Injectable } from '@angular/core';
import { Category } from '../model';

@Injectable()
export class BBCategoryService {
  public categories: Category[] = [];

  addCategory(category: Category) {
    this.categories.push(category);
  }
}