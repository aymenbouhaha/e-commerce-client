import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {GetProductInterface, ProductInterface} from "../shared/models/interfaces/product.interface";
import {map} from "rxjs";
import {Product} from "../shared/models/product/product";
import {ShopService} from "./shop.service";

@Injectable({
  providedIn: 'root'
})
export class ShopBackEndService {

  constructor(
    private http: HttpClient,
    private shopService : ShopService
  ) { }


  getProducts(page? : number,category? : string){
    let params =new HttpParams()
    if (page){
      params=params.append("page",page)
    }
    if (category){
      params =params.append("category",category)
    }
    return this.http.get<GetProductInterface>("http://localhost:3000/product",
      {
        params : params
      },
    )
      .pipe<Product[]>(
        map(
          productInterface=>{
            const products=productInterface.products
            const length=productInterface.length
            this.shopService.setLength(length)
            return  products.map(
              (product)=>{
                return {
                  ...product,
                  images : product.images ?? [],
                  discount : product.discount ?? null
                }
              }
            )
          }
        )
      )
  }


  getProductById(id : number){
    return this.http.get<ProductInterface>(
      `http://localhost:3000/product/${id}`
    ).pipe<Product>(
      map(
        product=>{
          console.log(product)
          return {
            ...product,
            images : product.images?? [],
            discount : product.discount ?? null
          }
        }
      )
    )
  }


}
