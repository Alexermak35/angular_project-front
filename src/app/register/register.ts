import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  standalone: true
})
export class RegisterComponent {

  showPassword: boolean = false;
  formData = {
    username: '',
    email: '',
    password: ''
  }
  submittedData: any = null;
  submitted = false;
  onSubmit() {
    this.submittedData = { ...this.formData };
    this.submitted = true;
    console.log('Submitted Data:', this.submittedData);
  }



  constructor(private auth: AuthService, private router: Router) { }

  onSignup() {
    this.auth.signup(this.formData.username, this.formData.email, this.formData.password).subscribe({
      next: (res) => {
        console.log('✅ Signup success:', res);
        alert('Account created successfully!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('❌ Signup failed:', err);

        // Handle known backend errors
        if (err.status === 400 && err.error?.message) {
          alert(err.error.message);
        } else if (err.status === 0) {
          alert('Server unavailable — please check Flask is running.');
        } else {
          alert('Something went wrong. Please try again.');
        }
      }
    });
  }


}
