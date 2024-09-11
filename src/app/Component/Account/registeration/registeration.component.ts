import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../Service/account.service';
import { IRegister } from '../../../Models/Account/iregister';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registeration',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
  user: IRegister = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
  };
  
  submitted = false;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }


  
  onSubmit() {
    this.submitted = true;

    if (!this.isValid()) {
      return;
    }

    this.accountService.registerUser(this.user).subscribe({
      next: data => { 
        this.router.navigateByUrl('/login');
      },
      error: error => {
        console.error('Registration failed:', error);
        this.router.navigate(['/login']);

      }
    });
  }
  

  isValid(): boolean {
    // Simple validation logic
    return this.user.firstName !== '' &&
           this.user.lastName !== '' &&
           this.user.userName !== '' &&
           this.user.email !== '' &&
           this.user.password !== '';
  }
}

