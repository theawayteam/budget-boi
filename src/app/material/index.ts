import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatExpansionModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDividerModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatSelectModule,
  MatSidenavModule,
  MatProgressSpinnerModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDividerModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatSelectModule,
  MatSidenavModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class CustomMaterialModule { }