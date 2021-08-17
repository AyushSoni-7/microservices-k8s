import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoriesData } from 'src/app/mock-data';
import { category } from '../category-interface';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  categoryForm: FormGroup;
  categoryData: category;
  private categoryId: number;
  renderTemplate: boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.categoryId = params['id'];
      }
    )
    this.getCategory(this.categoryId);
  }
  // getCategory()
  getCategory<category>(id: number){
    this.categoryService.getCategory(id).subscribe(
      data => {
        if(data){
          this.renderTemplate = true;
          this.categoryData = data;
          this.categoryForm = new FormGroup({
            'id': new FormControl(),
            'name': new FormControl(null, Validators.required),
            'description': new FormControl(null, Validators.required),
            'img_src': new FormControl(null, [Validators.required]),
          })
          this.categoryForm.patchValue({...this.categoryData});
        }
      }
    )
  }

  // Update Category
  onSubmit(){
    this.categoryData = {...this.categoryData,...this.categoryForm.value}
    console.log(this.categoryData)
    // Put request
    this.categoryService.updateCategory(this.categoryData)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
