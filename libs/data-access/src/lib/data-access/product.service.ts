import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductSpecs {
  color?: string;
  weight?: string;
  storage?: string;
  material?: string;
  size?: string;
  battery?: string;
  waterproof?: boolean;
  screen?: string;
  ram?: string;
  power?: string;
  capacity?: string;
  thickness?: string;
  maxWeight?: string;
  compartments?: number;
  [key: string]: unknown;
}

export interface ProductRating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  stock: number;
  image: string;
  specs?: ProductSpecs;
  rating?: ProductRating;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
}

export interface ProductsResponse {
  data: Product[];
  pagination: Pagination;
}

export interface ProductQueryParams {
  page?: number;
  limit?: number;
}

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
