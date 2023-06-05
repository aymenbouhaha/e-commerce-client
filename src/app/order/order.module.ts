import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import {OrderRoutingModule} from "./order-routing.module";
import {SharedModule} from "../shared/shared.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    OrderComponent
  ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        SharedModule,
        MatExpansionModule,
        MatListModule
    ]
})
export class OrderModule { }
