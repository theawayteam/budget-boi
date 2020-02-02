import { Component, OnInit } from '@angular/core';
import { BudgetInstance } from '../model';
import { BudgetService } from '../services';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  displayedColumns: string[] = ['Categories', 'Budgeted', 'Outflows', 'Balance'];
  dataSource: Observable<BudgetInstance[]>;

  constructor(
    private $budget: BudgetService
  ) {}

  ngOnInit() {
    this.dataSource = this.$budget.budgetsForMonth(323);
  }
}