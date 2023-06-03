import { Injectable } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ProductInterface} from "../shared/models/interfaces/product.interface";
import {map} from "rxjs";
import {environment} from "../../environments/environment";
import {Product} from "../shared/models/product/product";

@Injectable({
  providedIn: 'root'
})
export class ShopBackEndService {

  constructor(
    private sanitizer:DomSanitizer,
    private http: HttpClient,
  ) { }


  sanitize( url:string ) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
  }


  decodeImageUrl(type: string,buffer : any){
    return this.sanitize('data:'+type+';base64, '+this._arrayBufferToBase64(buffer))
  }

  getProducts(page? : number,category? : string){
    let params =new HttpParams()
    if (page){
      params=params.append("page",page)
    }
    if (category){
      params =params.append("category",category)
    }
    return this.http.get<ProductInterface[]>("http://localhost:3000/product",
      {
        params : params
      },
    )
      .pipe<Product[]>(
        map(
          products=>{
            return  products.map(
              (product)=>{
                return {
                  ...product,
                  images : product.images?
                    product.images.map(
                      (image)=>{
                        return this.sanitize('data:'+image.type+';base64, '+this._arrayBufferToBase64(image.data.data))
                      }
                    )
                    : [],
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
            images : product.images?
              product.images.map(
                (image)=>{
                  return this.sanitize('data:'+image.type+';base64, '+this._arrayBufferToBase64(image.data.data))
                }
              )
              : [],
            discount : product.discount ?? null
          }
        }
      )
    )
  }




}
