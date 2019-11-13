import { Injectable } from '@angular/core';
import { Budget, Category } from '../model';
import { of, Observable } from 'rxjs';
import { filter, flatMap, zip } from 'rxjs/operators';

@Injectable()
export class BudgetService {
  // private budget$ = new BehaviorSubject<Budget[]>([]);
  
  init() {
    // this.loadBudgets();
  }

  masterBudgets(): Observable<Budget[]> {
    return this.getBudgets()
      .pipe(
        flatMap(budgets => budgets),
        filter(budget => budget.category.isMaster),
        zip()
      );
  }

  /**
   * Retrieve the budgets from the data store
   */
  getBudgets(): Observable<Budget[]> {
    return of([
      new Budget({
        category: new Category({
          isMaster: true,
          name: 'House',
          id: 'house-master',
          childrenCategories: [
            'house-child-mortgage',
            'house-child-needs',
            'house-child-6-month',
            'house-child-emergency',
            'house-child-hoa',
            'house-child-services'
          ]
        }),
        budgeted: 4000,
        outflows: 3000,
        balance: 1000
      }),
      new Budget({
        category: new Category({
          id: 'house-child-mortgage',
          name: 'Mortgage',
          masterCategory: 'house-master'
        }),
        budgeted: 3298,
        outflows: 3298,
        balance: 0
      }),
      new Budget({
        category: new Category({
          id: 'house-child-needs',
          masterCategory: 'house-mortgage',
          name: 'Needs'
        }),
        budgeted: 200,
        outflows: 92.61,
        balance: 1659.46
      }),
      new Budget({
        category: new Category({
          id: 'house-child-6-month',
          masterCategory: 'house-master',
          name: '6 month payments'
        }),
        budgeted: null,
        outflows: null,
        balance: 19788
      }),
      new Budget({
        category: new Category({
          id: 'house-child-emergency',
          masterCategory: 'house-master',
          name: 'Emergency Fund'
        }),
        budgeted: null,
        outflows: null,
        balance: 15000
      }),
      new Budget({
        category: new Category({
          id: 'house-child-services',
          masterCategory: 'house-master',
          name: 'Services'
        }),
        budgeted: null,
        outflows: null,
        balance: 0
      }),
      new Budget({
        category: new Category({
          id: 'house-child-hoa',
          masterCategory: 'house-master',
          name: 'HOA'
        }),
        budgeted: 35.28,
        outflows: null,
        balance: 141.12
      })
    ]);
  }
}