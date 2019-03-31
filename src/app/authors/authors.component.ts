import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authorData ;
  constructor(private apiService : ApiService) { }

  ngOnInit() {
   
    this.getAllAuthor();
  }

  getAllAuthor()
  {
    this.apiService.getAllAuthors().subscribe( res => {
    
     // console.log(res);
      this.authorData = res;
    }
    )
  }

}
