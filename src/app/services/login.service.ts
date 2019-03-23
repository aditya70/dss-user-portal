import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private router : Router) { }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN)
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem(TOKEN);
    this.router.navigate(["login"]);
  }


  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}
