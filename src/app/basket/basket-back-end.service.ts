import { Injectable } from '@angular/core';
import {Basket, BasketInterface} from "../shared/models/basket/basket";
import {map, tap} from "rxjs/operators";
import {BasketProduct} from "../shared/models/basket/basket-product";
import {HttpClient} from "@angular/common/http";
import {Product} from "../shared/models/product/product";
import {BasketService} from "./basket.service";

@Injectable({
  providedIn: 'root'
})
export class BasketBackEndService {

  private baseUrl = "http://localhost:3000/basket";

  constructor(
    private http:HttpClient,
    private basketService : BasketService
  ) { }


  getBasket(){
    return this.http.get<BasketInterface>(`${this.baseUrl}`)
      .pipe(
        map(
          (basket)=>{
            const basketInfos : BasketProduct[]=basket.basketProduct.map<BasketProduct>(
              (basketProductInterface)=>{
                return {
                  ...basketProductInterface,
                  product : {
                    ...basketProductInterface.product,
                    images : basketProductInterface.product.images ?? []
                  }
                }
              }
            )
            return {
              ...basket,
              basketProduct : basketInfos
            }
          }
        ),
        tap((basket: Basket)=>{
          this.basketService.setBasket(basket)
        })
      )
  }


  addToBasket(product: Product,itemsNumber :number){
    return this.http.post(this.baseUrl+"/add",{
      id : product.id,
      itemsNumber : itemsNumber
    } ).pipe(
      tap(
        (respon)=>{
          const id = respon["id"]
          this.basketService.addToBasket(product,itemsNumber,id)
        }
      )
    )
  }


  removeItemFromBasket(productId: number) {
    return this.http.delete(this.baseUrl+"/delete/"+productId)
  }


}
