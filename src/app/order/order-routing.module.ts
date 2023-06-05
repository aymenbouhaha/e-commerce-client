import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {OrderComponent} from "./order.component";
import {VerifiedGuard} from "../user/guard/verified.guard";
import {AuthGuard} from "../user/guard/auth.guard";

const routes: Routes=[
  {path : "", component: OrderComponent ,canActivate: [ AuthGuard, VerifiedGuard]}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
