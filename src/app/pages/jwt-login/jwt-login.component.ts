import { JwtService } from './../../jwt.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-jwt-login',
  templateUrl: './jwt-login.component.html',
  styleUrls: ['./jwt-login.component.css']
})
export class JwtLoginComponent implements OnInit {

  submitted = false;
  loginForm: any = FormGroup;

  constructor(private jwtService : JwtService , private router : Router) { }

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
   this.jwtService.login(myForm.value.phone,myForm.value.password).subscribe(
     res => {
       console.log(res);
    
      // localStorage.setItem('access_token', res.content.jwtToken);
     }
   )
   //this.router.navigate(['/dashboard']);
   
    }

    downloadFile(){
      let link = document.createElement("a");
      link.download = "download.jpg";
      //link.target = "_blank";
      link.href = "../../../assets/img/download.jpeg";
      link.click();
}

openFile(){
  let link = document.createElement("a");
  link.download = "download.jpg";
  link.target = "_blank";
  link.href = "../../../assets/img/download.jpeg";
  link.click();
}

f1() {
  window.open('../../../assets/img/download.jpeg', '_blank');
}

}

