import { Injectable } from '@angular/core';
import { Budget, Category, BudgetInstance } from '../model';
import { of, Observable, forkJoin } from 'rxjs';
import { filter, flatMap, zip, map } from 'rxjs/operators';

@Injectable()
export class BudgetService {  
  init() {
  }

  budgetsForMonth(month: number): Observable<BudgetInstance[]> {
    return forkJoin(
      this.getCategeories(),
      this.getBudgets()
    ).pipe(
      map(([categories, budgets]) => {
        return budgets.map(budget => {
          const category = categories.find(category => category.id === budget.categoryId);
          return new BudgetInstance({
            id: budget.id,
            month: budget.month,
            budgeted: budget.budgeted,
            outflows: budget.outflows,
            balance: budget.balance,
            category,
            isMaster: category.isMaster,
            isCollapsed: false
          });
        });
      })
    )
  }

  getCategeories(): Observable<Category[]> {
    return of([
      new Category({
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
      new Category({
        id: 'house-child-mortgage',
        name: 'Mortgage',
        masterCategory: 'house-master'
      }),
      new Category({
        id: 'house-child-needs',
        masterCategory: 'house-mortgage',
        name: 'Needs'
      }),
      new Category({
        id: 'house-child-6-month',
        masterCategory: 'house-master',
        name: '6 month payments'
      }),
      new Category({
        id: 'house-child-emergency',
        masterCategory: 'house-master',
        name: 'Emergency Fund'
      }),
      new Category({
        id: 'house-child-services',
        masterCategory: 'house-master',
        name: 'Services'
      }),
      new Category({
        id: 'house-child-hoa',
        masterCategory: 'house-master',
        name: 'HOA'
      }),
    ]);
  }

  /**
   * Retrieve the budgets from the data store
   */
  getBudgets(): Observable<Budget[]> {
    return of([
      new Budget({
        categoryId: 'house-master',
        budgeted: 4000,
        outflows: 3000,
        balance: 1000
      }),
      new Budget({
        categoryId: 'house-child-mortgage',
        budgeted: 3298,
        outflows: 3298,
        balance: 0
      }),
      new Budget({
        categoryId: 'house-child-needs',
        budgeted: 200,
        outflows: 92.61,
        balance: 1659.46
      }),
      new Budget({
        categoryId: 'house-child-6-month',
        budgeted: null,
        outflows: null,
        balance: 19788
      }),
      new Budget({
        categoryId: 'house-child-emergency',
        budgeted: null,
        outflows: null,
        balance: 15000
      }),
      new Budget({
        categoryId: 'house-child-services',
        budgeted: null,
        outflows: null,
        balance: 0
      }),
      new Budget({
        categoryId: 'house-child-hoa',
        budgeted: 35.28,
        outflows: null,
        balance: 141.12
      })
    ]);
  }
}