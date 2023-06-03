import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order, OrderInterface} from "../shared/models/order/order";
import {map} from "rxjs";
import {Product} from "../shared/models/product/product";
import {ShopBackEndService} from "../shop/shop-back-end.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  private baseUrl = "http://localhost:3000/order"

  constructor(
    private http: HttpClient,
    private shopService : ShopBackEndService
  ) { }


  getOrders() {
    return this.http.get<OrderInterface[]>(this.baseUrl)
      .pipe(
        map(
          (orderInterface)=>{
            const orders=orderInterface.map(
              (orderInterface)=>{
                const orderProductsRelations=orderInterface.orderProducts.map(
                  (orderProductsRelation)=>{
                    const product=orderProductsRelation.product
                    const finalProduct : Product={
                      ...product,
                      images :product.images ? product.images.map(
                        (image)=> {
                          return this.shopService.decodeImageUrl(image.type,image.data.data)
                        }
                      ) : []
                    }
                    return {
                      ...orderProductsRelation,
                      product : finalProduct
                    }
                  }
                )
                const order = new Order()
                order.id=orderInterface.id
                order.date=orderInterface.date
                order.client=orderInterface.client ?? null
                order.status=orderInterface.status
                order.orderProducts=orderProductsRelations
                return Order
              }
            )
            return orders
          }
        )
      );
  }



  makeOrder(orderDto : {id: number , itemsNumber : number}[]){
    return this.http.post(
      this.baseUrl+"/make",
      {
        product : orderDto
      }
    ).subscribe(
      (success)=>{
        console.log(success)
      },
      error => console.log(error)
    )
  }

}
