import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userType = ["FLA","Call center","distributor","country head"];
  submitted = false;
  loginForm: any = FormGroup;
  credentials = true;

  constructor(private formBuilder: FormBuilder,private router : Router , private loginService : LoginService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'phone' : new FormControl('',[Validators.required]),
      'password' : new FormControl('',[Validators.required]),
      'userType': new FormControl('', [Validators.required])
    });
  }
  
  onSubmit(myForm : NgForm){
    this.submitted = true;
     console.log(myForm);
    // console.log(myForm.value.userType);
    // console.log(myForm.value.phone);
    // console.log(myForm.value.password);
   //  console.log(this.loginForm.value);
    if (myForm.value.phone == 1 && myForm.value.password == 1)
    {
     console.log("successfully logged in");
     this.loginService.setToken("token112");
     this.router.navigate(['/dashboard']);
    }
    
    else{
      this.credentials = false;
     // alert("invalid phone or password");
    }

  }

  
}
