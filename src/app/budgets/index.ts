import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './budgets.routing';
import { BudgetsComponent } from './budgets.component';
import { CustomMaterialModule } from '../material';
import { BudgetService } from '../services';

@NgModule({
  declarations: [
    BudgetsComponent
  ],
  imports: [
    CustomMaterialModule,
    CommonModule,
    routing
  ],
  providers: [
    BudgetService
  ]
})
export class BudgetsModule {}