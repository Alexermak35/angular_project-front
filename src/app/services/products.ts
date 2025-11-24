import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private baseUrl = 'http://127.0.0.1:5000/api/products';

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

}
