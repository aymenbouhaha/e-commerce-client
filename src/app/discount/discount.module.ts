import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountComponent } from './discount.component';
import {DiscountRoutingModule} from "./discount-routing.module";



@NgModule({
  declarations: [
    DiscountComponent
  ],
  imports: [
    CommonModule,DiscountRoutingModule
  ]
})
export class DiscountModule { }
