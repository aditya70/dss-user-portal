import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './pages/user/user.component';
import { BooksComponent } from './pages/books/books.component';

const routes: Routes = [
  
  { path:  'login', component:  LoginComponent},
  { path : '', component: DashboardComponent, canActivate : [AuthGuard], children: [

      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'user', component: UserComponent },
      { path: 'book', component: BooksComponent }
  ]
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
