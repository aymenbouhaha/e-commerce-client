import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {ShopRoutingModule} from "./shop-routing.module";
import { AddProductComponent } from './add-product/add-product.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    AddProductComponent
  ],
    imports: [
        CommonModule,
        ShopRoutingModule,
        FormsModule
    ]
})
export class ShopModule { }
