import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountComponent } from './discount.component';
import {DiscountRoutingModule} from "./discount-routing.module";
import {ShopModule} from "../shop/shop.module";



@NgModule({
    declarations: [
        DiscountComponent,
    ],
    exports: [
        DiscountComponent
    ],
    imports: [
        CommonModule, DiscountRoutingModule , ShopModule
    ]
})
export class DiscountModule { }
