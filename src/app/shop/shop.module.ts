import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {ShopRoutingModule} from "./shop-routing.module";
import {FormsModule} from "@angular/forms";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductDetailsComponent,
  ],
  exports : [
    ProductItemComponent
  ],
    imports: [
        CommonModule,
        ShopRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class ShopModule { }
