import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product} from "../shared/models/product/product";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(page? : number,category? : string){
    let params =new HttpParams()
    if (page){
      params=params.append("page",page)

    }
    if (category){
      params =params.append("category",category)
    }
    console.log(params)
    return this.http.get<Product[]>("http://localhost:3000/product",
      {
        params : params
      },
    )
      .pipe(
        map(
          products=>{
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


}
