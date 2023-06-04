import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Category} from "../../shared/models/categroy";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

  constructor(private http :HttpClient , private router : Router ) { }
  categories : Category[] =[]

  addProductForm : FormGroup

  selectedFile : File[] = []

  errorMessage: string = null;

  isLoading : boolean = false

  onUpload(event){
    this.selectedFile=<File[]>event.target.files
  }

  ngOnInit(): void {
    this.addProductForm=new FormGroup(
      {
        name : new FormControl(null, [Validators.required]),
        price : new FormControl(null, [Validators.required]),
        itemsNumber : new FormControl(null,[Validators.min(1)]),
        categoryName : new FormControl(null,[Validators.required]),
        description : new FormControl(null,[Validators.required]),
        images : new FormControl(null),
      }
    )
  this.http.get<Category[]>('http://localhost:3000/category').subscribe(
    responseData =>{
      this.categories=responseData
      const categorieNames= this.categories.map(
        (category)=>{
          return category.name
        }
      )
    },
    error => {

    }
  )
  }

  OnSubmit() {
    if (this.addProductForm.valid){
      const formData = new FormData();
      for (const image of this.selectedFile){
        formData.append("images",image,image.name)
      }
      const {images , ...result}=this.addProductForm.value
      formData.append("name",this.addProductForm.get("name").value)
      formData.append("price",this.addProductForm.get("price").value)
      formData.append("itemsNumber",this.addProductForm.get("itemsNumber").value)
      formData.append("categoryName",this.addProductForm.get("categoryName").value)
      formData.append("description",this.addProductForm.get("description").value)
      this.http.post(
        "http://localhost:3000/product/add",
        formData
      ).subscribe(
        (res)=>{
          this.errorMessage=null
          this.router.navigate(["/shop"])
        },
        error => {
          this.isLoading=false
          this.errorMessage="An Error Occured When Adding The Product Retry"
        }
      )
    }
  }

 }
