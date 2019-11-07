import { NgModule } from '@angular/core';
import { routing } from './budgets.routing';
import { BudgetsComponent } from './budgets.component';
import { CustomMaterialModule } from '../material';

@NgModule({
  declarations: [
    BudgetsComponent
  ],
  imports: [
    CustomMaterialModule,
    routing
  ]
})
export class BudgetsModule {}