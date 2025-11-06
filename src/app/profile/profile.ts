import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  imports: [RouterModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor(private auth: AuthService, private router: Router) { }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
