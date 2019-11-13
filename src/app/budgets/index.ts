import { NgModule } from '@angular/core';
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
    routing
  ],
  providers: [
    BudgetService
  ]
})
export class BudgetsModule {}