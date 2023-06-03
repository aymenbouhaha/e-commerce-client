import {User} from "../user";
import {BasketProduct} from "./basket-product";

export class Basket {

  id: number;

  user: User;

  basketProduct: BasketProduct[];
}
