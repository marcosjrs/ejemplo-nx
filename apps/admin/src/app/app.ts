import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { ProductService } from '@org/data-access';
import { ProductsResponse } from '@org/types';

@Component({
  imports: [NxWelcome, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'admin';
  private readonly productService = inject(ProductService);
  ngOnInit(): void {
    this.productService.getProducts().subscribe((res: ProductsResponse) => {
      console.log(res.data);
    });
  }
}