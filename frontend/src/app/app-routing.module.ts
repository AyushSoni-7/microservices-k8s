import {ProductsComponent} from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';


const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent},
  { path: 'category/add', component: CategoryAddComponent},
  { path: 'category/:id/edit', component: CategoryEditComponent},
  { path: 'products/:id', component: ProductsComponent},
  { path: 'product/:id', component: ProductComponent},
  { path: 'product/:id/edit', component: ProductEditComponent},
  { path: 'products/:category_id/add', component: ProductAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
