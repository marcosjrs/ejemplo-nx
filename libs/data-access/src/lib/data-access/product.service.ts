import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductsResponse, ProductQueryParams } from '@org/types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://fakeapi.net/products';

  /**
   * Obtiene la lista paginada de productos desde la API.
   * @param params Parámetros opcionales (page, limit)
   */
  getProducts(params?: ProductQueryParams): Observable<ProductsResponse> {
    let httpParams = new HttpParams();
    if (params?.page != null) {
      httpParams = httpParams.set('page', params.page.toString());
    }
    if (params?.limit != null) {
      httpParams = httpParams.set('limit', params.limit.toString());
    }

    return this.http.get<ProductsResponse>(this.apiUrl, { params: httpParams });
  }

  /**
   * Obtiene un producto por su ID.
   * @param id Identificador numérico o texto del producto
   */
  getProductById(id: number | string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
