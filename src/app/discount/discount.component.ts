import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/models/product/product";

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  products : Product[]
  loading : boolean
  constructor() { }
  ngOnInit(): void {

  }


}
