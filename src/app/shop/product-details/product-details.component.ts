import {AfterContentInit, AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../shared/models/product/product";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ShopService} from "../shop.service";
import {ShopBackEndService} from "../shop-back-end.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit  , OnDestroy{

  @ViewChild('f') itemsForm : NgForm
  @Input() product : Product

  productIsLoading : boolean

  relatedProductLoading : boolean

  products : Product[]

  productGetSub : Subscription
  relatedProductGetSub : Subscription



  constructor(
    private route : ActivatedRoute,
    private shopService : ShopService,
    private shopBackEndService : ShopBackEndService,
    private router : Router
  ) { }



  ngOnInit(): void {
    this.productIsLoading=true
    this.relatedProductLoading=true
    this.route.params.subscribe(
      async (params) => {
        this.product = this.shopService.getProductById(params.id)
        if (this.product) {
          this.products=this.shopService.getProductsByCategory(this.product.category.name)
          this.productIsLoading = false
          this.relatedProductLoading = false
        } else {
          this.productGetSub = await this.shopBackEndService.getProductById(params.id)
            .subscribe(
              (product) => {
                this.product = product
                this.productIsLoading = false
                this.relatedProductGetSub = this.shopBackEndService.getProducts(null, this.product.category.name).subscribe(
                  (products) => {
                    this.products = products
                    this.relatedProductLoading = false
                  },
                  error => {
                    this.relatedProductLoading = true
                  }
                )
              },
              error => {
                this.router.navigate([""])
                this.productIsLoading = false
              }
            )
        }
      }
    )
  }


  incrementItemsNumber(){
    let itemNumber=this.itemsForm.value.itemsNumber
    itemNumber++
    this.itemsForm.setValue(
      {
        itemsNumber : itemNumber
      }
    )
  }

  decrementItemsNumber(){
    let itemNumber=this.itemsForm.value.itemsNumber
    itemNumber--
    this.itemsForm.setValue(
      {
        itemsNumber : itemNumber
      }
    )
  }

  onSubmit(){
    const itemsNumber= this.itemsForm.value.itemsNumber
    if (itemsNumber<1){
        return ;
    }



  }

  ngOnDestroy(): void {
    if (this.productGetSub){
      this.productGetSub.unsubscribe()
    }
  }

}
