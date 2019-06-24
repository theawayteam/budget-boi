import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './material'
import { AccountService } from './services';

// Dialogs
import { AddAccountDialog } from './dialogs/add-account/add-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAccountDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    AccountService
  ],
  entryComponents: [
    AddAccountDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
