import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userType = ["FLA","Call center","distributor","country head"];

  loginForm: any = FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'phone' : new FormControl('',[Validators.required]),
      'password' : new FormControl('',[Validators.required]),
      'userType': new FormControl('', [Validators.required])
    });
  }
  
  onSubmit(myForm : NgForm){
    console.log(myForm);
    console.log("submit function");
    // console.log(myForm.value.userType);
    // console.log(myForm.value.phone);
    // console.log(myForm.value.password);

  }
}
