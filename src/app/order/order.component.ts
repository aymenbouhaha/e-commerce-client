import { Component, OnInit } from '@angular/core';
import {OrderService} from "./order.service";
import {Order} from "../shared/models/order/order";
import {Product} from "../shared/models/product/product";
import {Router} from "@angular/router";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];

  admin : boolean

  constructor(private orderService: OrderService ,private router:Router, private userService : UserService) { }

  isLoading : boolean = false

  ngOnInit(): void {
    this.isLoading=true
    this.userService.user.subscribe(
      (user)=>{
        if (user){
          if (user.role=="admin"){
            this.admin=true
          }
        }
      }
    )
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(
      (orders)=>{
        this.orders=orders
        this.isLoading=false
      },

    )
  }

  totalCost(order: Order) {
    return this.orderService.totalOrderPrice(order.orderProducts);
  }
  navigateToProductDetails(product: Product) {
    this.router.navigate(["/shop/product",product.id])
  }

}
