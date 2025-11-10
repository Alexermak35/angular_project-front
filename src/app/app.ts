import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { AsyncPipe } from '@angular/common';
import { filter } from 'rxjs/operators';

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

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (!this.auth.hasValidSession()) {
          this.auth.logout();
          //this.router.navigate(['/login']);
        }
      });
  }

  onLogout() {
    this.auth.logout();
    alert('You have been logged out.');
    this.router.navigate(['/login']);
  }



}
