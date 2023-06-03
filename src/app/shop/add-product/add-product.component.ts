import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Category} from "../../shared/models/categroy";


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

  constructor(private http :HttpClient) { }
  categories : Category[] =[]

  ngOnInit(): void {
  this.http.get<Category[]>('http://localhost:3000/category').subscribe(
    responseData =>{
      this.categories=responseData
      console.log(this.categories)
    },
    error => console.log(error)
  )
  }

  OnSubmit(form : NgForm) {
    const tt={
      "name" : form.value.productname,
      "price" : form.value.price ,
      "itemsNumber" : form.value.itemsnumber ,
      "categoryName" : form.value.categoryname ,
      "description" : form.value.description
    }
    console.log(tt)
    this.http.post('http://localhost:3000/product/add',
      {
        "name" : form.value.productname,
        "price" : form.value.price ,
        "itemsNumber" : form.value.itemsnumber ,
        "categoryName" : form.value.categoryname ,
        "description" : form.value.description
      }
    ).subscribe
    (
      responseData => {console.log(responseData) ;  },error => console.log(error)
    ) ;

  }
 }
