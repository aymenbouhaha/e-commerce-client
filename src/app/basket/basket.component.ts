import { Component, OnInit } from '@angular/core';
import {BasketService} from "./basket.service";
import {Basket} from "../shared/models/basket";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket: Basket;
  constructor(private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.getBasket();
  }

  getBasket() {
    this.basketService.getBasket().subscribe(
      basket => {
        this.basket = basket;
      },
      error => {
        console.error('Failed to fetch basket:', error);
      }
    );
  }

  increaseQuantity(item: any) {
    this.basketService.increaseQuantity(item)
    this.updateBasket();
  }

  decreaseQuantity(item: any) {
    this.basketService.decreaseQuantity(item)
    this.updateBasket();
  }

  updateBasket() {
    this.basketService.updateBasket(this.basket).subscribe(
      basket => {
        console.log('Basket updated successfully');
      },
      error => {
        console.error('Failed to update basket:', error);
      }
    );
  }

  removeBasketItem(item: any) {
  this.basketService.removeItemFromBasket(item.id).subscribe(
    basket=> {
      console.log('item romved successfully');
    },
    error => {
      console.error('Failed to remove item from basket:', error);
    }
  );
  }

  getpricePerItem(item: any): number {
    return this.basketService.getPricePerItem(item,item.quantity);
  }


  total():number{
    let total=0;
    for (let item of this.basket.items) {
      total+=this.getpricePerItem(item);
    }
    return total;
  }
}

