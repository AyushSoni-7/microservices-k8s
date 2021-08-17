import { Component, OnInit } from '@angular/core';
import { category } from './category-interface';
import { CategoriesData } from './../mock-data' ;
import { CategoryService } from './category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: category[];
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // get catergories
    this.getCategory();
  }
  
  getCategory(){
    this.categoryService.getCategories()
      .subscribe(data => this.categories = data['categories'])
  }

  deleteCategory(category_id: number): any{
    this.categoryService.deleteCategory(category_id).subscribe();
    this.getCategory() 
  }

}
