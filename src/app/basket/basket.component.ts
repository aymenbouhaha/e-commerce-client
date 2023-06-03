import { Component, OnInit } from '@angular/core';
import {BasketService} from "./basket.service";
import {Basket} from "../shared/models/basket/basket";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private basketService: BasketService) {
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

  // removeBasketItem(item: any) {
  // this.basketService.removeItemFromBasket(item.id).subscribe(
  //   basket=> {
  //     console.log('item romved successfully');
  //   },
  //   error => {
  //     console.error('Failed to remove item from basket:', error);
  //   }
  // );
  // }



}

