
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './Service/account.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private accountService: AccountService, private router: Router) { }

  canActivate(): boolean {
    if (!this.accountService.isLoggedIn) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
  getToken(): string | null {
    return localStorage.getItem('authToken'); 
  }
}
