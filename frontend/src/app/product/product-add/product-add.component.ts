import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { product, productInfo } from '../product-interface';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './../product-edit/product-edit.component.html',
  styleUrls: ['./../product-edit/product-edit.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private location: Location
  ) { }

  productInfoForm: FormGroup;
  
  data: productInfo;
  renderTemplate: boolean;

  private pc_map: product;
  private categoryId: number;

  ngOnInit(): void {
    this.renderTemplate = true;
    this.route.params.subscribe(
      (params: Params) => {
        this.categoryId = params['category_id'];
      }
    )
    this.productInfoForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'img_src': new FormControl(null, [Validators.required]),
      'quantity': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required]),
      'calory': new FormControl(null, [Validators.required]),
      'benefits': new FormControl(null, Validators.required),
      'harm': new FormControl(null, Validators.required),
    })
  }
  
  onSubmit(){
    this.data = {...this.data,...this.productInfoForm.value}
    console.log(this.data)
    this.productService.createProduct(this.data, this.categoryId)
      .subscribe(() => this.goBack())

    // another request to map product to category
    // this.pc_map = {...{'category_id': this.categoryId}, ...this.data}
    // Take care in backend
    
  }

  goBack(): void {
    this.location.back();
  }
}
