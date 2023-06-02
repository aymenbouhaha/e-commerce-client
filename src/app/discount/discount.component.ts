import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/models/product";

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  products : Product[]
  loading : boolean
  product : Product =new Product("shampoing","shampoingmango",0)
  constructor() { }
  ngOnInit(): void {
  this.products.push(this.product) ;
  }


}
