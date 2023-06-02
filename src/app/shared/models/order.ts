import {User} from "./user";

export class Order{
  basketId: string;
  id: number;
  state: string;
  date:Date;
  userId: User;
  orderItems: OrderItem[];
  total: number;

}


export interface OrderItem {
  productId: number;
  productName: string;
  pictureUrl: string;
  price: number;
  quantity: number;
}
