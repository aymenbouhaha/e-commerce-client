import { Injectable } from '@angular/core';
import {map,  Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Basket, BasketInterface} from "../shared/models/basket/basket";
import {ShopBackEndService} from "../shop/shop-back-end.service";
import {BasketProduct} from "../shared/models/basket/basket-product";
import {Product} from "../shared/models/product/product";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket : Basket

  basketChanged = new Subject<Basket>()

  private baseUrl = "http://localhost:3000/basket";
  constructor(private http:HttpClient, private shopService : ShopBackEndService) {

  }


  getBasket(){
    return this.http.get<BasketInterface>(`${this.baseUrl}`)
      .pipe<Basket>(
        map(
          (basket)=>{
            console.log(basket)
            const basketInfos : BasketProduct[]=basket.basketProduct.map(
              (basketProductInterface)=>{
                const product = basketProductInterface.product
                const basketProduct : BasketProduct = new BasketProduct()
                basketProduct.product={
                  ...product,
                  images : product.images ? product.images.map((image)=> this.shopService.decodeImageUrl(image.type,image.data.data)) : []
                }
                basketProduct.itemsNumber=basketProductInterface.itemsNumber
                return basketProduct
              }
            )
            const newBasket = new Basket()
            newBasket.id =basket.id
            newBasket.basketProduct=basketInfos
            return newBasket
          }
        ),
      );
  }

  setBasket(basket : Basket){
    this.basket=basket
  }

  deleteFrom(productId){
    const productIndex=this.basket.basketProduct.findIndex(
      (basketProduct)=>{
        return basketProduct.product.id==productId
      }
    )
    this.basket.basketProduct.splice(productIndex,1)
    this.basketChanged.next(this.basket)
  }

  addToStatic(product,itemsNumber , id : number){
    this.basket.basketProduct.push({
      product : product,
      itemsNumber :itemsNumber,
      id : id
    })
  }


  removeItemFromBasket(productId: number) {
    return this.http.delete(this.baseUrl+"/delete/"+productId)
      .subscribe(
        ()=>{
          console.log("delete Success")
          this.deleteFrom(productId)
        },
        error => {}
      );
  }

  addToBasket(product: Product,itemsNumber :number){
    return this.http.post(this.baseUrl+"/add",{
        id : product.id,
        itemsNumber : itemsNumber
      } )
      .subscribe(
        (response)=>{
          const id = response["id"]
          console.log("success")
          this.addToStatic(product,itemsNumber,id)
        },
        error => console.log("Failed" , error)
      )
  }

}
