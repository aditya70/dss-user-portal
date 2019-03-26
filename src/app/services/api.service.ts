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

  apiUrl = 'http://fakerestapi.azurewebsites.net/api/Books/';

  constructor(private http: HttpClient) { }

  getAllBooks()
{
  return this.http.get(this.apiUrl);
}

updateBook(book) {
  return this.http.put(this.apiUrl, book);
}

deleteBook(id: number){
  console.log("delete book service called  " +this.apiUrl + id);
  return this.http.delete(this.apiUrl + id);
}

getBookDetails(id : number){
  console.log("get book details service called " +this.apiUrl + id);
  return this.http.get(this.apiUrl + id);
}

createBook(book)
{
  return this.http.post(this.apiUrl, book);
}



}
