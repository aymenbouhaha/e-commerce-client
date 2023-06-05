import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../shared/models/product/product";

import {ShopBackEndService} from "../shop/shop-back-end.service";
import {Discount, DiscountInterface} from "../shared/models/discount";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  discounts : Discount[]

  constructor(private http: HttpClient ) { }
  getProducts() {
    return this.http.get<DiscountInterface[]>('http://localhost:3000/discount')
      .pipe(
        map(
          (discount)=>{
            console.log(discount)
            const discounts = discount.map(
              (discount)=>{
                const discountProduct=discount.product
                const product : Product={
                  ...discountProduct,
                  discount : { id: discount.id , value : discount.value , startDate: discount.startDate , endDate: discount.endDate },
                  images :  discountProduct.images ?? []
                }
                const newDiscount : Discount = {
                  ...discount,
                  product : product
                }
                return newDiscount
              }
            )
            this.discounts=discounts
            return this.discounts
          }
        )
      )
  }

  makeDiscount(info:{startDate : string , endDate : string , value : number , productId : number }){
      return this.http.post(
        "http://localhost:3000/discount/add",
        info
      )
  }


}
