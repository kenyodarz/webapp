import { Injectable } from '@angular/core';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  saveToken() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, 'Login Correctamente');
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
}
