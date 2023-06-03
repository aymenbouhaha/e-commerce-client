import {Order} from "./order";
import {Product} from "../product/product";

export class OrderProduct {
  id: number;

  order: Order;

  product: Product;

  itemsNumber: number;
}
