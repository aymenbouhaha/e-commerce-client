import { Component, OnInit } from '@angular/core';
import {DiscountService} from "./discount.service";
import {Discount} from "../shared/models/discount";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  discounts : Discount[]
  loading : boolean

  items : number
  constructor(
    private discountService : DiscountService,
    private actievatedRoute :ActivatedRoute,
    private router : Router

  ) { }


  ngOnInit(): void {
    this.loading=true
    this.actievatedRoute.queryParams.subscribe(
      (params)=>{
        // this.discountService.getproducts(params.page?? 1)
        //   .subscribe(
        //     (discounts)=>{
        //       this.discounts=discounts
        //       if (discounts.length){
        //         this.items=Math.ceil((discounts.length))
        //       }else {
        //         this.items=1
        //       }
        //       this.loading=false
        //     }
        //   )
      }
    )
  }

  range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, index) => index + start);
  }

  navigateByPage(page : number){
    this.actievatedRoute.queryParams.subscribe(
      (params)=>{
        this.router.navigate(["/discount"],{
          queryParams : {page : page}
        })
      }
    )
  }


}
