import { TransfereService } from './services/transfere.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  HttpClientModule} from '@angular/common/http';
import { Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register/register.component';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './pages/user/user.component';
import { UserService } from './services/user.service';
import { BooksComponent } from './pages/books/books.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { EditBookDetailsComponent } from './pages/edit-book-details/edit-book-details.component';
import { CreateBookComponent } from './pages/create-book/create-book.component';
import { AuthorsComponent } from './authors/authors.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SelectService } from './services/select.service';
import { CountryComponent } from './pages/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SideMenuComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    RegisterComponent,
    UserComponent,
    BooksComponent,
    BookDetailsComponent,
    EditBookDetailsComponent,
    CreateBookComponent,
    AuthorsComponent,
    PaginationComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
  //  Ng4LoadingSpinnerModule.forRoot(),
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [LoginService ,AuthGuard,UserService,TransfereService,SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
