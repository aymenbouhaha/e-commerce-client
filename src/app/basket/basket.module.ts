import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import {BasketRoutingModule} from "./basket-routing.module";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    BasketComponent
  ],
    imports: [
        CommonModule,
        BasketRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class BasketModule { }
