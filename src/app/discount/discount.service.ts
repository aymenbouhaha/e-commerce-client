import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../shared/models/product/product";
import {Discount, DiscountInterface} from "../shared/models/discount";
import {map} from "rxjs";
import {ShopBackEndService} from "../shop/shop-back-end.service";

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  products: Product[]
  constructor(private http: HttpClient , private shopService : ShopBackEndService) { }
  // getproducts(page : number) {
  //   return this.http.get<DiscountInterface[]>('http://localhost:3000/discount',
  //     {
  //       params : {
  //         page : page
  //       }
  //     })
  //     .pipe(
  //       map(
  //         (discount)=>{
  //           return discount.map(
  //             (discount)=>{
  //               const discountProduct=discount.product
  //               const product : Product={
  //                 ...discountProduct,
  //                 discount : { id: discount.id , value : discount.value , startDate: discount.startDate , endDate: discount.endDate },
  //                 images : discountProduct.images ? discountProduct.images.map((image)=> this.shopService.decodeImageUrl(image.type,image.data.data)) : []
  //               }
  //               const newDiscount : Discount = {
  //                 ...discount,
  //                 product : product
  //               }
  //               return newDiscount
  //             }
  //           )
  //         }
  //       )
  //     )
  // }

  makeDiscount(info:{startDate : string , endDate : string , value : number , productId : number }){
      return this.http.post(
        "http://localhost:3000/discount/add",
        info
      )
  }


}
