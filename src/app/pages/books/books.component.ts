import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

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


}
