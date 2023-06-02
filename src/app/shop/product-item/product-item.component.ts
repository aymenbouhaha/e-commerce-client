import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product";
import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product/product";
import {ActivatedRoute, Router} from "@angular/router";
import {BasketService} from "../../basket/basket.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product : Product


  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private basketService : BasketService
  ) { }

  ngOnInit(): void {
  }

  navigateToProductDetails(product: Product) {
    this.router.navigate(["product",product.id],{relativeTo : this.activatedRoute})
  }

  addToBasket(){
    this.basketService.addToBasket(this.product,1)
  }

}
