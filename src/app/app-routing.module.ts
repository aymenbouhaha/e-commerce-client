import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {AppComponent} from "./app.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {UserInfoComponent} from "./user/user-info/user-info.component";
import {DiscountComponent} from "./discount/discount.component";
import {OrderComponent} from "./order/order.component";
import {AddProductComponent} from "./shop/add-product/add-product.component";

const routes : Routes= [
  {path : "" ,         component : HomeComponent},
  {path : "not-found", component: NotFoundComponent},
  {path : "footer",    component: FooterComponent},
  {path : "userInfo",    component: UserInfoComponent},
  {path : "order",    component: OrderComponent},
  {path : "add-product",    component: AddProductComponent},


  {path : "shop", loadChildren: ()=> import("./shop/shop.module").then(m=>m.ShopModule)},
  {path : "basket", loadChildren : ()=> import ("./basket/basket.module").then(m=>m.BasketModule)},
  {path : "user", loadChildren : () => import("./user/user.module").then(m=>m.UserModule)},
  {path : "discount", loadChildren : ()=> import("./discount/discount.module").then(m=>m.DiscountModule)},
  {path : "order" , loadChildren : ()=>import("./order/order.module")}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
