import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {ShopRoutingModule} from "./shop-routing.module";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {AddProductComponent} from "./add-product/add-product.component";



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    AddProductComponent
  ],
    imports: [
        CommonModule,
        ShopRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class ShopModule { }
