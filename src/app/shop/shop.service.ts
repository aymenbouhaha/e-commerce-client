import { Injectable } from '@angular/core';
import {Product} from "../shared/models/product/product";
import {BasketService} from "../basket/basket.service";


@Injectable({
  providedIn: 'root'
})
export class ShopService {


  products : Product[] =[]

  length : number

  constructor(
    private basketService : BasketService
  ) { }


  setProducts(product : Product []){
    this.products=product
  }

  setLength(length: number){
    this.length=length
  }

  getLength(){
    return this.length
  }


  getProductById(id : number){
    return this.products.find(
      (product)=>{
        return product.id==id
    })
  }

  getProductsByCategory(categoryName : string){
    return this.products.filter(
      (product)=> product.category.name === categoryName
    )
  }





}
