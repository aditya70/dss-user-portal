import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  { path:  'login',pathMatch: 'full', component:  LoginComponent},
  { path:  'home', component:  HomeComponent},
  { path:  'side', component:  SideMenuComponent},
  { path:  'dashboard', component:  DashboardComponent},
  { path: 'dashboard', component: DashboardComponent, children: [

    { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
  ]
  },
  
  { path:  '#', component:  HomeComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
