import { NgModule } from '@angular/core';
import { routing } from './account.routing';
import { AccountComponent } from './account.component';
import { CustomMaterialModule } from '../material';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CustomMaterialModule,
    routing
  ]
})
export class AccountModule {}