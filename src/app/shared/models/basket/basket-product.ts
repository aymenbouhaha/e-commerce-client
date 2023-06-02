import {Basket} from "./basket";
import {Product} from "../product/product";


export class BasketProduct {
  id: number;

  productBasket: Basket;

  product: Product;

  itemsNumber: number;
}
