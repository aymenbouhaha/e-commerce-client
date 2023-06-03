import { Injectable } from '@angular/core';
import {Order} from "../shared/models/order";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {




  private baseUrl = "http://localhost:3000/order"

  constructor(private http: HttpClient) { }




  getOrdersForUser() {
    return this.http.get<Order[]>(this.baseUrl + 'orders');
  }
  getOrderDetailed(id: number) {
    return this.http.get<Order>(this.baseUrl + 'orders/' + id);
  }





}
