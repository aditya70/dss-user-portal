import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {


  bookForm: FormGroup;
  submitted: boolean = false;


  constructor(private formBuilder: FormBuilder,
    private router : Router) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      Title: ['', Validators.required],
      Description: ['', Validators.required],
      PageCount: ['', Validators.required] ,
      Excerpt: ['', Validators.required],
      PublishDate: ['', Validators.required]
    });
  }


  onSubmit() {
    this.submitted = true;
    console.log(this.bookForm.value);
    if (this.bookForm.invalid) {
      return;
    }
   else{
     this.bookForm.value;
     console.log("form submitted");
     alert("form submitted succesfully");
     this.router.navigate(['/book']);
   }
  }

}
