import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';

const routes: Routes = [
  {path : '', component : LoginComponent},
  { path:  'login',pathMatch: 'full', component:  LoginComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
