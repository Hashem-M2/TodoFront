import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AccountService } from '../../../Service/account.service';
import { ILogin } from '../../../Models/Account/ilogin';
import { ActivatedRoute, Router, RouterConfigOptions, RouterLink, RouterLinkActive, RouterLinkWithHref, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private accountauth: AccountService,private router :Router ) { }

  loginObj: ILogin = {
    email: '',
    password: '',
  };

  onLogin() {
    this.accountauth.login(this.loginObj).subscribe(
      () => {
        this.router.navigateByUrl("/app-get-todo-live")
        alert('Login Success');
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }

}
