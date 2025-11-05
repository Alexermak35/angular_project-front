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
    name: '',
    surname: '',
    email: '',
    password: ''
  };
  showPassword: boolean = false;
  submittedData: any = null;
  submitted = false;


  constructor(private auth: AuthService, private router: Router) { }
  onLogin() {
    this.auth.login(this.formData.email, this.formData.password).subscribe({
      next: (res) => console.log('✅ Login success:', res),
      error: (err) => console.error('❌ Login failed:', err)
    });
  }

  onSubmit() {
    this.submittedData = { ...this.formData }; // snapshot of form values
    this.submitted = true;
    console.log('Submitted Data:', this.submittedData);
  }

}
