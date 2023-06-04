import {Category} from "../categroy";
import {Discount} from "../discount";
import {Image} from "./image";

export class Product {

  id : number
  name : string
  price : number
  itemsNumber : number
  description : string
  category : Category
  images : Image[]
  discount : Discount
}
