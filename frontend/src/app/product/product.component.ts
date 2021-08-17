import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { product, productInfo } from './product-interface';
import { ProductInfoData } from '../mock-data';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: productInfo;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private location: Location
  ) { }
  productId: number;
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.productId = params['id'];
      }
    )
    this.getProduct(this.productId);
  }

  getProduct(productId: number){
    this.productService.getProduct(productId)
      .subscribe(data => this.product = data)
  }


  deleteProduct(productId: number){
    this.productService.deleteProduct(productId).subscribe();
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
