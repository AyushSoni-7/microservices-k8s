import { Component, OnInit } from '@angular/core';
import { product } from '../product/product-interface';
import { ProductData } from './../mock-data';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsServicce } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  categoryId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prductsService: ProductsServicce
  ) { }
  products: product[];
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.categoryId = params['id'];
      }
    )
    // this.products = ProductData.filter(data => data.category_id == this.categoryId);
    this.getAllProducts(this.categoryId);
  }

  getAllProducts(id: number){
    this.prductsService.getProducts(id).subscribe(
      data => this.products = data['products']
    )
  }
  
}
