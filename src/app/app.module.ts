import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {BasketModule} from "./basket/basket.module";
import {OrderModule} from "./order/order.module";
import {DiscountModule} from "./discount/discount.module";
import {UserModule} from "./user/user.module";
import {SharedModule} from "./shared/shared.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptorInterceptor} from "./shared/interceptors/auth-interceptor.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasketModule,
    OrderModule,
    DiscountModule,
    UserModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
