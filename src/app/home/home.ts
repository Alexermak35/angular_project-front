import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  products: Product[] = [];

}
