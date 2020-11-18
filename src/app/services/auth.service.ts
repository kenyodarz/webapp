import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private data: any[];

  constructor(private http: HttpClient) {}

  getData() {
    return new Promise((resolve, reject) => {
      this.http.get('../../assets/data/credentials.json').subscribe(
        (data: any) => {
          this.data = data;
          resolve(true);
        },
        (error: string) => {
          console.error(`Error al cargar la data: ${error}`);
          reject(true);
        }
      );
    });
  }

  loginUser(credential: any) {
    new Promise((accept, reject) => {
      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index];
        if (
          element.email === credential.email &&
          element.password === credential.password
        ) {
          return accept('Login Correcto');
        }
      }
      return reject('Login Incorrecto');
    });
  }

  registerUser(userData: any) {
    window.sessionStorage.setItem('user', userData);
  }
}
