import { Component, OnInit } from '@angular/core';
import {BasketService} from "./basket.service";
import {Basket} from "../shared/models/basket/basket";
import {OrderService} from "../order/order.service";
import {BasketBackEndService} from "./basket-back-end.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(
    private basketService: BasketService,
    private basketBackEndService : BasketBackEndService,
    private orderService : OrderService ,
  ) {
  }

  basket : Basket

  itemsCount = 0

  total : number = 0


  ngOnInit(): void {
    this.basketService.basketChanged.subscribe(
      (basket)=>{
        this.basket=basket
        this.getTotal()
      }
    )
    this.basket=this.basketService.getBasket()
    this.getTotal()
  }


  getTotal(){
    let total =0
    for (let item of this.basket.basketProduct) {
      if (item.product.discount) {
        total += (item.product.price) * (1 - item.product.discount.value / 100) * item.itemsNumber
      } else {
        total += (item.product.price) * item.itemsNumber
      }
    }
    console.log(this.total)
    this.total=total
  }

  removeFromBasket(productId : number){
    this.basketBackEndService.removeItemFromBasket(productId)
      .subscribe(
      ()=>{
        this.basketService.removeFromBasket(productId)
      },
      error => {

      }
    )
  }

  makeOrder(){
    if (this.basket.basketProduct.length>0){
      const order: {id: number , itemsNumber : number}[]=[]
        for (let proudctToOrder of this.basket.basketProduct){
          order.push({
            id : proudctToOrder.product.id,
            itemsNumber : proudctToOrder.itemsNumber
          })
        }
        this.orderService.makeOrder(order)
    }else {
      console.log("haha")
    }
  }



}

