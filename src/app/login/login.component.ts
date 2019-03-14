import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';


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

  constructor(private formBuilder: FormBuilder,private router : Router) { }

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
    if (myForm.value.phone == 12345 && myForm.value.password == 12345)
    {
     console.log("successfully logged in");
     this.router.navigate(['/home']);
    }
    
    else{
      this.credentials = false;
     // alert("invalid phone or password");
    }

  }
}
