import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { TokenStorageService } from "src/app/services/token-storage.service";

@Injectable({
  providedIn: 'root',
})
export class LoginAdminGuard implements CanActivate {
  constructor(private token: TokenStorageService, private router: Router) {}
  canActivate() {
    const token = this.token.getToken();
    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
