import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order, OrderInterface} from "../shared/models/order/order";
import {map} from "rxjs";
import {Product} from "../shared/models/product/product";
import {ShopBackEndService} from "../shop/shop-back-end.service";
import {OrderProduct} from "../shared/models/order/order-product";

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  private baseUrl = "http://localhost:3000/order"

  constructor(
    private http: HttpClient,
  ) { }


  getOrders() {
    return this.http.get<OrderInterface[]>(this.baseUrl)
      .pipe(
        map(
          (orderInterface)=>{
            const orders=orderInterface.map<Order>(
              (orderInterface)=>{
                const orderProductsRelations=orderInterface.orderProducts.map<OrderProduct>(
                  (orderProductsRelation)=>{
                    return {
                      ...orderProductsRelation,
                      product : {
                        ...orderProductsRelation.product,
                        images :orderProductsRelation.product.images ?? []
                      }
                    }
                  }
                )
                return {
                  ...orderInterface,
                  client : orderInterface.client ?? null,
                  orderProducts : orderProductsRelations
                }
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

      },
      error => console.log(error)
    )
  }

}
