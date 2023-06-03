import { Injectable } from '@angular/core';
import {Product} from "../shared/models/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  products: Product[]
  constructor(private http: HttpClient) { }
  getproducts() {
    this.http.get('http://localhost:3000/discount') ;
  }


}
