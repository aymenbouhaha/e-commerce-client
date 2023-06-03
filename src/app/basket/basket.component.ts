import { Component, OnInit } from '@angular/core';
import {BasketService} from "./basket.service";
import {Basket} from "../shared/models/basket/basket";
import {OrderService} from "../order/order.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(
    private basketService: BasketService,
    private orderService : OrderService
  ) {
  }


  imagePlaceHolder = "assets/images/first.png"

  basket : Basket

  basketLoading : boolean

  itemsCount = 0

  total : number


  ngOnInit(): void {
    this.basketLoading=true
    this.getBasket();
  }

  getBasket() {
    this.basketService.basketChanged.subscribe(
      (basket)=>{
        this.basket=basket
        console.log("hello from get basket success")
        this.itemsCount=this.basket.basketProduct.length
        this.getTotal()
        this.basketLoading=false
      },
      error =>  console.log("hello from get basket error")

    )
    this.basketService.getBasket().subscribe(
      (basket)=>{
        this.basket=basket
        this.itemsCount=this.basket.basketProduct.length
        this.basketService.setBasket(basket)
        this.getTotal()
        this.basketLoading=false
      }
    )
  }


  getTotal(){
    let total =0
    for (let item of this.basket.basketProduct) {
      if (item.product.discount) {
        total += (item.product.price) * (1 - item.product.discount.value / 10) * item.itemsNumber
      } else {
        total += (item.product.price) * item.itemsNumber
      }
    }
    this.total=total
  }

  removeFromBasket(productId : number){
    this.basketService.removeItemFromBasket(productId)
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

