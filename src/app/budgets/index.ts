import { NgModule } from '@angular/core';
import { routing } from './budgets.routing';
import { BudgetsComponent } from './budgets.component';

@NgModule({
  declarations: [
    BudgetsComponent
  ],
  imports: [
    routing
  ]
})
export class BudgetsModule {}