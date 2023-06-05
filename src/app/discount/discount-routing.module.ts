import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DiscountComponent} from "./discount.component";
import {DiscountDialogComponent} from "./discount-dialog/discount-dialog.component";
import {AuthGuard} from "../user/guard/auth.guard";
import {AdminGuard} from "../user/guard/admin.guard";
import {VerifiedGuard} from "../user/guard/verified.guard";

const routes: Routes=[
  {path : "", component : DiscountComponent},
  {path : "make", component : DiscountDialogComponent ,canActivate: [AuthGuard, AdminGuard, VerifiedGuard]}
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
