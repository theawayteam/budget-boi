import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetsComponent } from './budgets.component';

const routes: Routes = [
  { path: '', component: BudgetsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);