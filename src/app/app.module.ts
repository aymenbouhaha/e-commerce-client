import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {BasketModule} from "./basket/basket.module";
import {OrderModule} from "./order/order.module";
import {DiscountModule} from "./discount/discount.module";
import {UserModule} from "./user/user.module";
import {SharedModule} from "./shared/shared.module";
import {HomeModule} from "./home/home.module";
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,

    BasketModule,

    OrderModule,

    DiscountModule,

    HomeModule,

    UserModule,

    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
