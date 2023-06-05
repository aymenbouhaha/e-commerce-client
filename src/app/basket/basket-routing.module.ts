import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BasketComponent} from "./basket.component";
import {AuthGuard} from "../user/guard/auth.guard";
import {NotAdminGuard} from "../user/guard/not-admin.guard";
import {VerifiedGuard} from "../user/guard/verified.guard";


const routes : Routes=[
  {path : "", component: BasketComponent , canActivate: [AuthGuard, VerifiedGuard ,NotAdminGuard]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class BasketRoutingModule { }
