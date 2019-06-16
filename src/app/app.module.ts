import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './material'

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
    CustomMaterialModule
  ],
  providers: [],
  entryComponents: [
    AddAccountDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
