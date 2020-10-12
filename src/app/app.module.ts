import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgPipesModule } from 'ngx-pipes';
import { CustomMaterialModule } from './material'
import {
  AccountService,
  BBCategoryService,
  TransactionService
} from './services';
import { NgxsModule } from '@ngxs/store';
import { CategoryState } from './state';

// Dialogs
import { AddAccountDialog } from './dialogs/add-account/add-account.component';
import { AddCategoryDialog } from './dialogs/add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAccountDialog,
    AddCategoryDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    NgPipesModule,
    NgxsModule.forRoot([CategoryState], {
      developmentMode: true
    })
  ],
  providers: [
    AccountService,
    BBCategoryService,
    TransactionService
  ],
  entryComponents: [
    AddAccountDialog,
    AddCategoryDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
