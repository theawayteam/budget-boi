import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Category } from '../../model';
import { FormGroup, FormControl } from '@angular/forms';
import { BBCategoryService } from '../../services';

@Component({
  selector: 'add-category-dialog',
  templateUrl: 'add-category.html'
})
export class AddCategoryDialog implements OnInit {
  categoryForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(
    private $category: BBCategoryService,
    public dialogRef: MatDialogRef<AddCategoryDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Category) {}
  
  ngOnInit() {
    this.categoryForm.controls.name.setValue(this.data.name);
    this.categoryForm.controls.name.valueChanges.subscribe(val => this.data.name = val);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cancel() { this.dialogRef.close(); }

  addCategory(category: Category) {
    this.$category.addCategory(category);
    this.dialogRef.close();
  }
}