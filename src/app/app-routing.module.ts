import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {FooterComponent} from "./shared/footer/footer.component";


const routes : Routes= [
  {path : "" ,         component : HomeComponent},
  {path : "not-found", component: NotFoundComponent},
  {path : "footer",    component: FooterComponent},
  {path : "shop", loadChildren: ()=> import("./shop/shop.module").then(m=>m.ShopModule)},
  {path : "basket", loadChildren : ()=> import ("./basket/basket.module").then(m=>m.BasketModule)},
  {path : "user", loadChildren : () => import("./user/user.module").then(m=>m.UserModule)},
  {path : "discount", loadChildren : ()=> import("./discount/discount.module").then(m=>m.DiscountModule)},
  {path : "order" , loadChildren : ()=>import("./order/order.module").then(m=>m.OrderModule)
  }

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
