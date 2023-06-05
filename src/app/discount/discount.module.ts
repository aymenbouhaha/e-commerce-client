import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountComponent } from './discount.component';
import {DiscountRoutingModule} from "./discount-routing.module";
import {ShopModule} from "../shop/shop.module";
import { DiscountDialogComponent } from './discount-dialog/discount-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
    declarations: [
        DiscountComponent,
        DiscountDialogComponent,
    ],
    exports: [
        DiscountComponent
    ],
  imports: [
    CommonModule, DiscountRoutingModule, MatFormFieldModule, MatDatepickerModule, ReactiveFormsModule, MatInputModule, SharedModule, MatButtonModule, ShopModule
  ]
})
export class DiscountModule { }
