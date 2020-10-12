import { Component, OnInit } from '@angular/core';
import { BudgetInstance, Category } from '../model';
import { BudgetService } from '../services';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryDialog } from '../dialogs/add-category/add-category.component';


@Component({
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  displayedColumns: string[] = ['Categories', 'Budgeted', 'Outflows', 'Balance'];
  dataSource: Observable<BudgetInstance[]>;

  constructor(
    private $budget: BudgetService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dataSource = this.$budget.budgetsForMonth(323);
  }

  addMasterCategory() {
    const dialogRef = this.dialog.open(AddCategoryDialog, {
      data: new Category({
        isMaster: true
      })
    });
  }

  addChildCategory(masterCategory: Category) {
    const dialogRef = this.dialog.open(AddCategoryDialog, {
      data: new Category({
        isMaster: false,
        masterCategoryId: masterCategory.id
      })
    });
  }
}