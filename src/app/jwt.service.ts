import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  baseUrl = 'http://219.91.243.80/ecataloguestaging/api/Account/token';

  constructor(private httpClient: HttpClient) { }

  login(email:string, password:string ) {
    var body = {userName : email , password : password , realm : "adminportal" , userType :5};
    return this.httpClient.post(this.baseUrl, body).pipe(tap(res => {
    localStorage.setItem('access_token', "123");
}))
}

register(email:string, password:string) {
  return this.httpClient.post<{access_token: string}>(this.baseUrl+'register', {email, password}).pipe(tap(res => {
//  this.login(email, password)
}))
}

logout() {
  localStorage.removeItem('access_token');
}

public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}

}
