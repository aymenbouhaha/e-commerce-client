import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../shared/models/product/product";

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  products: Product[]
  constructor(private http: HttpClient) { }
  getproducts() {
    this.http.get('http://localhost:3000/discount')
      .subscribe(
        ()
      )
  }


}
