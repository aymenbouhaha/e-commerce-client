import { Component, OnInit } from '@angular/core';
import {DiscountService} from "./discount.service";
import {Discount} from "../shared/models/discount";

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  discounts : Discount[]
  loading : boolean

  errorMessage : string = null

  items : number
  constructor(
    private discountService : DiscountService,

  ) { }


  ngOnInit(): void {
    this.loading=true
    this.discountService.getProducts()
      .subscribe(
        (discounts)=>{
          console.log(discounts)
          this.discounts=discounts
          this.loading=false
        },
        error =>{
          this.errorMessage="An Error Has Occured Please Refresh The Page To Get Our Disounts"
        }
      )
  }

  navigateByCategory(){

  }



}
