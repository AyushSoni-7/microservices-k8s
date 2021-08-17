import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { category } from '../category-interface';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './../category-edit/category-edit.component.html',
  styleUrls: ['./../category-edit/category-edit.component.css']
})
export class CategoryAddComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private location: Location
  ) { }

  categoryForm: FormGroup;

  renderTemplate: boolean = false;
  
  categoryData: category;

  ngOnInit(): void {
    this.renderTemplate = true;
    this.categoryForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'img_src': new FormControl(null, [Validators.required]),
    })
  }
  
  onSubmit(){
    this.categoryData = {...this.categoryData, ...this.categoryForm.value}

    // post request
    this.categoryService.createCategory(this.categoryData)
      .subscribe(() => this.goBack())
  }

  goBack(): void {
    this.location.back();
  }

}
