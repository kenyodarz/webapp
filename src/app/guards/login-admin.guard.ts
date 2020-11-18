import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { TokenStorageService } from "src/app/services/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LoginAdminGuard implements CanActivate {
  constructor(private token: TokenStorageService){}
  canActivate(
    ) {
      const token = this.token.getToken();
      if (token) {
        return true;
      } else {
        return false
      }
  }
}
