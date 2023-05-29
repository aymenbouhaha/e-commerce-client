import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ShopComponent} from "./shop.component";
import {ProductItemComponent} from "./product-item/product-item.component";

const routes: Routes=[
  {path : "", component: ShopComponent},
  {path : "product/:id", component: ProductItemComponent}
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
