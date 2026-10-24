import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
// import { ProductService } from '@org/data-access';
// import { Product } from '@org/types';

@Component({
  imports: [NxWelcome, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'admin';
  // private readonly productService = inject(ProductService);
  // protected products = signal<Product[]>([]);
  // ngOnInit(): void {
  //   this.productService.getProducts().subscribe((res) => {
  //     this.products.set(res.data);
  //   });
  // }
}