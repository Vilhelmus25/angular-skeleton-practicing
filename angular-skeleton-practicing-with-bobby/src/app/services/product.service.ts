import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
  remove(product: Product): Observable<Object> {
    return this.http.delete(`${this.url}/${product.id}`);
  }
}
