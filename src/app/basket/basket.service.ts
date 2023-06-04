import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Basket} from "../shared/models/basket/basket";


@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basket : Basket

  basketChanged = new Subject<Basket>()


  constructor() {
  }

  getBasket(){
    return this.basket
  }

  setBasket(basket : Basket){
    this.basket=basket
    this.basketChanged.next(this.basket)
  }

  removeFromBasket(productId){
    const productIndex=this.basket.basketProduct.findIndex(
      (basketProduct)=>{
        return basketProduct.product.id==productId
      }
    )
    this.basket.basketProduct.splice(productIndex,1)
    this.basketChanged.next(this.basket)
  }

  addToBasket(product,itemsNumber , id : number){
    console.log(this.basket)
    this.basket.basketProduct.push({
      product : product,
      itemsNumber :itemsNumber,
      id : id
    })
  }




}
