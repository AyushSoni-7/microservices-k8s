import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductInfoData } from 'src/app/mock-data';
import { productInfo } from '../product-interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  // @Input() product_info: productInfo;

  constructor(
    private productService: ProductService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  productInfoForm: FormGroup;
  
  data: productInfo;
  private productID: number;
  renderTemplate: boolean;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.productID = params['id'];
      }
    )
    this.getProductInfo(this.productID);
  }

  // getProduct()
  getProductInfo<productInfo>(productID: number){
      this.productService.getProduct(productID).subscribe(
        data => {
          this.data = data;
          if(this.data){
            this.renderTemplate = true;
            this.productInfoForm = new FormGroup({
              'id': new FormControl(),
              'name': new FormControl(null, Validators.required),
              'description': new FormControl(null, Validators.required),
              'img_src': new FormControl(null, [Validators.required]),
              'quantity': new FormControl(null, [Validators.required]),
              'price': new FormControl(null, [Validators.required]),
              'calory': new FormControl(null, [Validators.required]),
              'benefits': new FormControl(null, Validators.required),
              'harm': new FormControl(null, Validators.required),
            })
            this.productInfoForm.patchValue(this.data);
          }
        }
      )
    }

  onSubmit(){
    this.data = {...this.data,...this.productInfoForm.value}
    this.productService.updateProduct(this.data)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
