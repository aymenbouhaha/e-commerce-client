import { Component, OnInit } from '@angular/core';
import {OrderService} from "./order.service";
import {Order} from "../shared/models/order/order";
import {Product} from "../shared/models/product/product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  admin = true;



  constructor(private orderService: OrderService, private router:Router,    private activatedRoute : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getOrders();

  }
  getOrders() {
     this.orderService.getOrders().subscribe(
       (orders)=>{
         console.log(orders)
       }
     )
   }

   totalCost(order: Order) {
    return this.orderService.totalOrderPrice(order.orderProducts);
   }
  navigateToProductDetails(product: Product) {
    this.router.navigate(["product",product.id],{relativeTo : this.activatedRoute})
  }

}
