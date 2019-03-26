import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookData ;
  
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getAllBooks().subscribe( res => {
      console.log(res);
      this.bookData = res;
    });
    
  }

  deleteBook(id){
    console.log("delete book method called ");
    console.log("book data is :" + id);
    this.apiService.deleteBook(id)
      .subscribe( data => {
       console.log(data);
      })
  };

  bookDetails(id){
    console.log("delete book method called ");
    this.apiService.getBookDetails(id)
      .subscribe( data => {
       console.log(data);
      })
  };

}
