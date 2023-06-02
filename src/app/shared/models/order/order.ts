import {User} from "../user";
import {OrderProduct} from "./order-product";

export class Order {
  id: number;

  status: string;

  date: Date;

  client?: User;

  orderProducts: OrderProduct[];
}
