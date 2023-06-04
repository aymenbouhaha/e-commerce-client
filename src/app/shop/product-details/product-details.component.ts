import {AfterContentInit, AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../shared/models/product/product";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ShopService} from "../shop.service";
import {ShopBackEndService} from "../shop-back-end.service";
import {Subscription} from "rxjs";
import {BasketService} from "../../basket/basket.service";
import {BasketBackEndService} from "../../basket/basket-back-end.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit  , OnDestroy{


  @Input() product : Product

  productIsLoading : boolean

  relatedProductLoading : boolean

  products : Product[]

  productGetSub : Subscription

  relatedProductGetSub : Subscription

  addToBasketForm : FormGroup
  errorMessage: string = null;

  constructor(
    private route : ActivatedRoute,
    private shopService : ShopService,
    private shopBackEndService : ShopBackEndService,
    private basketService : BasketBackEndService,
    private router : Router
  ) { }



  ngOnInit(): void {
    this.addToBasketForm=new FormGroup(
      {
        itemsNumber :new FormControl(1,[Validators.required,Validators.min(1)])
      }
    )
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
    let itemNumber=this.addToBasketForm.get("itemsNumber").value
    itemNumber++
    this.addToBasketForm.patchValue(
      {
        itemsNumber : itemNumber
      }
    )
  }

  decrementItemsNumber(){
    let itemNumber=this.addToBasketForm.get("itemsNumber").value
    itemNumber--
    this.addToBasketForm.patchValue(
      {
        itemsNumber : itemNumber
      }
    )
  }

  onSubmit(){
    const itemsNumber=this.addToBasketForm.get("itemsNumber").value
    if (this.addToBasketForm.valid){
     this.basketService.addToBasket(this.product,itemsNumber)
       .subscribe(
         (resp)=>{
            this.router.navigate(["/basket"])
         },
         error => {
              this.errorMessage="An Error Has Occured When Trying To Add The Product To Your Basket"
         }
       )
    }
  }

  ngOnDestroy(): void {
    if (this.productGetSub){
      this.productGetSub.unsubscribe()
    }
    if (this.relatedProductGetSub){
      this.productGetSub.unsubscribe()
    }
  }

}
