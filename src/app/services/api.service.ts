import { Injectable } from '@angular/core';
import {Observable ,throwError ,of} from 'rxjs';
import {catchError,tap, map} from 'rxjs/operators';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://fakerestapi.azurewebsites.net/api/Books';

  constructor(private http: HttpClient) { }

  getAllBooks()
{
  return this.http.get(this.apiUrl);
}
}
