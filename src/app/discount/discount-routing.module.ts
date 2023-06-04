import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DiscountComponent} from "./discount.component";
import {DiscountDialogComponent} from "./discount-dialog/discount-dialog.component";

const routes: Routes=[
  {path : "", component : DiscountComponent},
  {path : "make", component : DiscountDialogComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class DiscountRoutingModule { }
