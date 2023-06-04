import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import {OrderRoutingModule} from "./order-routing.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    SharedModule
  ]
})
export class OrderModule { }
