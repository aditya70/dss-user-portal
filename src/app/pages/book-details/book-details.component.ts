import { ApiService } from './../../services/api.service';
import { TransfereService } from './../../services/transfere.service';
import { Component, OnInit  } from '@angular/core';
import {Location} from '@angular/common';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  private data ;
  constructor(private location : Location , private TransfereService : TransfereService , 
    private route: ActivatedRoute,
    private apiService : ApiService
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    //console.log(id);
    this.bookDetails(id);
  }

  back()
  {
   this.location.back();
  }

  bookDetails(id){
    this.apiService.getBookDetails(id)
      .subscribe( data => {
       // console.log(data);
        this.data = data;
       })

  };
}
