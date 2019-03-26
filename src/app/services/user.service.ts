import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {Observable ,throwError ,of} from 'rxjs';
import {catchError,tap, map} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

getAllUsers()
{
  return this.http.get(this.apiUrl);
}

}
