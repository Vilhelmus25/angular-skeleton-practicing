import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productsList$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.productsList$ = this.productService.getAll();
  }

  ngOnInit(): void {
  }

  removeProduct(product: Product): void {
    this.productService.remove(product).subscribe(() =>
      this.productService.getAll()
    );
    location.reload();
  }

}
