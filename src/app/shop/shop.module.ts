import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {ShopRoutingModule} from "./shop-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {SharedModule} from "../shared/shared.module";
import {DiscountModule} from "../discount/discount.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatPaginatorModule} from "@angular/material/paginator";
import {AddProductComponent} from "./add-product/add-product.component";
import { AddToBasketPopUpComponent } from './add-to-basket-pop-up/add-to-basket-pop-up.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    AddProductComponent,
    AddToBasketPopUpComponent
  ],
  exports : [
    ProductItemComponent
  ],
    imports: [
        CommonModule,
        ShopRoutingModule,
        SharedModule,
      MatFormFieldModule,
      MatInputModule,  MatButtonModule,
      DiscountModule,
      MatDialogModule,
      MatPaginatorModule,
      ReactiveFormsModule
    ]
})
export class ShopModule { }
