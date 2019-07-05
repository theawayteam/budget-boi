import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'budgets',
    pathMatch: 'full'
  },
  {
    path: 'budgets',
    loadChildren: () => import('./budgets/index').then(mod => mod.BudgetsModule)
  },
  {
    path: 'accounts/:account_id',
    loadChildren: () => import('./account/index').then(mod => mod.AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
