import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})
export class LoginComponent {
  formData = {
    username: '',
    email: '',
    password: ''
  };
  showPassword: boolean = false;
  submittedData: any = null;
  submitted = false;


  constructor(private auth: AuthService, private router: Router) { }
  onLogin() {
    this.auth.login(this.formData.username, this.formData.password).subscribe({
      next: (res) => {
        console.log('✅ Login success:', res);
        this.auth.setLoggedIn(true, res);
        alert(`Welcome, ${res.username}!`);
        this.auth.setLoggedIn(true);
        this.router.navigate(['/home']); // or wherever you want
      },
      error: (err) => {
        console.error('❌ Login failed:', err);
        if (err.status === 400 && err.error?.message) {
          alert(err.error.message);
        }
        else if (err.status === 401) {
          alert('Invalid username or password');
        } else {
          alert('Server error. Please try again.');
        }
      }
    });
  }

  onSubmit() {
    this.submittedData = { ...this.formData }; // snapshot of form values
    this.submitted = true;
    console.log('Submitted Data:', this.submittedData);
  }

}
