import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/models/product/product";
import {ShopService} from "./shop.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    private productService : ShopService,
    private activatedRoute : ActivatedRoute
  ) { }

  products : Product[]
  loading : boolean

  ngOnInit(): void {
    this.loading=true
    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        console.log(params)
        this.productService.getProducts(params.page,params.category).subscribe(
          (products)=>{
            this.products=products
            this.loading=false
          },
          error => {
          }
        )

      }
    )
  }

}
