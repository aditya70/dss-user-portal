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

  loginForm: any = FormGroup;

  constructor(private formBuilder: FormBuilder,private router : Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'phone' : new FormControl('',[Validators.required]),
      'password' : new FormControl('',[Validators.required]),
      'userType': new FormControl('', [Validators.required])
    });
  }
  
  onSubmit(myForm : NgForm){
    console.log(myForm);
    console.log(myForm.value.userType);
    console.log(myForm.value.phone);
    console.log(myForm.value.password);
    if (myForm.value.phone === 12345 && myForm.value.password === 12345)
    {
     console.log("successfully logged");
     this.router.navigate(['/home']);
    }

  }
}
