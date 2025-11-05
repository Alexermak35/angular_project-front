import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  standalone: true
})
export class RegisterComponent {
  constructor(private router: Router) { }
  showPassword: boolean = false;
  formData = {
    name: '',
    surname: '',
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
}
