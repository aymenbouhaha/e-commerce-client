import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/models/product/product";
import {ShopService} from "./shop.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ShopBackEndService} from "./shop-back-end.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    private productService : ShopService,
    private productBackEndService : ShopBackEndService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
  ) { }

  products : Product[]
  loading : boolean

  ngOnInit(): void {
    this.loading=true
    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        this.productBackEndService.getProducts(params.page,params.category).subscribe(
          (products)=>{
            this.products=products
            this.productService.setProducts(products)
            this.loading=false
          },
          error => {
          }
        )

      }
    )
  }

  navigateToProductDetails(product: Product) {
      this.router.navigate(["product",product.id],{relativeTo : this.activatedRoute})
  }
}
