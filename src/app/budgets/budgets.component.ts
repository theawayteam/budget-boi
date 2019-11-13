import { Component, OnInit } from '@angular/core';
import { Budget, Category } from '../model';
import { BudgetService } from '../services';
import { Observable } from 'rxjs';

const BUDGETS: Budget[] = [

];

@Component({
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  displayedColumns: string[] = ['Categories', 'Budgeted', 'Outflows', 'Balance'];
  dataSource: Observable<Budget[]>;

  constructor(
    private $budget: BudgetService
  ) {}

  ngOnInit() {
    this.dataSource = this.$budget.masterBudgets();
  }
}