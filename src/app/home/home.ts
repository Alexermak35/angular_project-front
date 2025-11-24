import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../models/product';
import { Products } from '../services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private productsService: Products) { }

  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts(): void {
    this.productsService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        console.log('Products loaded:', this.products);
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }

}
