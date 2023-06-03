import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ShopComponent} from "./shop.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {AddProductComponent} from "./add-product/add-product.component";

const routes: Routes=[
  {path : "", component: ShopComponent},
  {path : "product/:id", component: ProductDetailsComponent} ,
  {path : "product/add", component: AddProductComponent}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class ShopRoutingModule { }
