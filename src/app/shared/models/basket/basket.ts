import {BasketProduct} from "./basket-product";
import {ProductInterface} from "../interfaces/product.interface";

export class Basket {

  id: number;

  basketProduct: BasketProduct[];
}

export interface BasketProductInterface {

  id: number;

  product: ProductInterface;

  itemsNumber: number;

}

export class BasketInterface{

  id : number

  basketProduct : BasketProductInterface[]

}
