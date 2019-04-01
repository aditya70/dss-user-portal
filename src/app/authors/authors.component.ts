import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
//import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  config: any; 
  collection = [];
  authorData ;
  //constructor(private apiService : ApiService, private spinnerService: Ng4LoadingSpinnerService,private spinner: NgxSpinnerService) { }

  constructor(private apiService : ApiService,private spinner: NgxSpinnerService,private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.config = {
      currentPage: 1,
      itemsPerPage: 6
};
    this.spinner.show();
   // this.spinnerService.show();
    this.getAllAuthor();
    
    this.route.queryParamMap
           
            .subscribe(page => this.config.currentPage = page);
  }

  getAllAuthor()
  {
   // this.spinnerService.show();
    this.apiService.getAllAuthors().subscribe( res => {
    
     // console.log(res);
      this.authorData = res;
     // this.spinnerService.hide();
     this.spinner.hide();
    }
    )

  
  }

  pageChange(newPage: number) {
    this.router.navigate([''], { queryParams: { page: newPage } });
  }

}
