import {Category} from "../categroy";
import {Discount} from "../discount";
import {SafeUrl} from "@angular/platform-browser";

export class Product {

  id : number
  name : string
  price : number
  itemsNumber : number
  description : string
  category : Category
  images : SafeUrl[]
  discount : Discount
}
