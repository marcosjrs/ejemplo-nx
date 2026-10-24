import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
// import { ProductService, Product } from '@org/data-access';

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