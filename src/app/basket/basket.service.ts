import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Basket} from "../shared/models/basket";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private baseUrl = environment.apiUrl + 'basket';
  basket: Observable<Basket>;
  constructor(private http:HttpClient) { }
  getBasket(): Observable<Basket> {
    return this.http.get<Basket>(`${this.baseUrl}`);
  }
  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  updateBasket(basket: Basket): Observable<Basket> {
    return this.http.put<Basket>(`${this.baseUrl}`, basket);
  }
  removeItemFromBasket(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  getPricePerItem(item: any,occurrence:number): number {
    return item.price*occurrence;
  }
}
