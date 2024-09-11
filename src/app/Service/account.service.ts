import { Injectable } from '@angular/core';
import { IRegister } from '../Models/Account/iregister';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ILogin } from '../Models/Account/ilogin';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements IRegister {

  private readonly Url = 'http://localhost:5030/api/Account/register';
  constructor(private http: HttpClient) { }
  firstName: string = "";
  lastName: string = "";
  userName: string = "";
  email: string = "";
  password: string = "";

  registerUser(user: IRegister): Observable<any> {
  
    return this.http.post(this.Url, user);
  }
 

  private readonly loginUrl = 'http://localhost:5030/api/Account/login';

 login(loginData: ILogin): Observable<{ token: string }> {
  return this.http.post<{ token: string }>(this.loginUrl, loginData).pipe(
    tap(response => {
      if (!response.token) {
        throw new Error('Authentication failed: token not found');
      }
      localStorage.setItem('stringToken', response.token); // Store the token
    })
  );
}

isLoggedIn(): boolean {
  return !!localStorage.getItem('stringToken'); // Check if token exists
}
}