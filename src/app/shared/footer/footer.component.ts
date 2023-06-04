import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email]),
      message : new FormControl(null, [Validators.required]),
    });
  }

  OnSubmit() {
    if (this.contactForm.valid){
      const formData = new FormData();
      formData.append("email",this.contactForm.get("email").value)
      formData.append("message",this.contactForm.get("message").value)
      console.log(formData);
      this.http.post(
        "http://localhost:3000/contact",
        formData
      ).subscribe(
        (res)=>{
          console.log(res)
        },
        error => {
          console.log(error)
        }
      )
    }
  }
}
