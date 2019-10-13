import { Component, Inject } from '@angular/core';
import { Account, Category } from './model';
import { MatDialog } from '@angular/material';

import { AddAccountDialog } from './dialogs/add-account/add-account.component';
import { AddCategoryDialog } from './dialogs/add-category/add-category.component';
import {
  AccountService,
  BBCategoryService
} from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public dialog: MatDialog,
    public $account: AccountService,
    private $category: BBCategoryService
    ) {
      $account.init();
    }

  addAccount() {
    const dialogRef = this.dialog.open(AddAccountDialog, {
      data: new Account({
        id: '1',
        name: '',
        onBudget: true,
        balance: 0
      })
    });
  }

  addMasterCategory() {
    const dialogRef = this.dialog.open(AddCategoryDialog, {
      data: new Category({
        isMaster: true
      })
    });
  }

  addChildCategory() {
    //TODO
  }
}
