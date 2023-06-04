import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/models/product/product";
import {ShopService} from "./shop.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ShopBackEndService} from "./shop-back-end.service";
import {HttpClient} from "@angular/common/http";
import {Category} from "../shared/models/categroy";
import {PageEvent} from "@angular/material/paginator";

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
    private http : HttpClient
  ) { }

  products : Product[]
  loading : boolean
  pagesNumber: number

  categories : Category[]=[]


  navigateByPage(event : PageEvent){
    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        this.router.navigate(["/shop"],{relativeTo : this.activatedRoute , queryParams : {
            ...params,
            page : event.pageIndex+1
          }})
      }
    )
  }

  navigateByCategory(categroy: string){
    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        this.router.navigate(["/shop"],{relativeTo : this.activatedRoute , queryParams : {
            ...params,
            category : categroy
          }})
      }
    )
  }

  getCategories(){
    this.http.get<Category[]>("http://localhost:3000/category")
      .subscribe(
        (categories)=>{
          this.categories=categories
        }
      )
  }


  range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, index) => index + start);
  }

  ngOnInit(): void {
    this.loading=true
    this.getCategories()
    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        this.productBackEndService.getProducts(params.page,params.category).subscribe(
          (products)=>{
            this.products=products
            this.productService.setProducts(products)
            if (!this.pagesNumber){
              this.pagesNumber=this.productService.getLength()
            }
            this.loading=false
          },
          error => {
            console.log(error)
          }
        )

      }
    )
  }

}
