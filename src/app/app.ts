import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterModule, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  isLoggedIn$;
  constructor(private auth: AuthService, private router: Router) {
    this.isLoggedIn$ = this.auth.isLoggedIn$;
  }



}
