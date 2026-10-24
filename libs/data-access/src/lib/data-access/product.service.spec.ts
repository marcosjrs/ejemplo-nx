import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { ProductService, ProductsResponse, Product } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch products', () => {
    const mockResponse: ProductsResponse = {
      data: [
        {
          id: 1,
          title: 'Smartphone X',
          price: 799.99,
          description: 'Latest smartphone',
          category: 'electronics',
          brand: 'TechCo',
          stock: 50,
          image: 'https://fakeapi.net/images/smartphone.jpg',
        },
      ],
      pagination: { page: 1, limit: 10, total: 1 },
    };

    service.getProducts().subscribe((res) => {
      expect(res).toEqual(mockResponse);
      expect(res.data.length).toBe(1);
    });

    const req = httpMock.expectOne('https://fakeapi.net/products');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch a single product by id', () => {
    const mockProduct: Product = {
      id: 1,
      title: 'Smartphone X',
      price: 799.99,
      description: 'Latest smartphone',
      category: 'electronics',
      brand: 'TechCo',
      stock: 50,
      image: 'https://fakeapi.net/images/smartphone.jpg',
    };

    service.getProductById(1).subscribe((product) => {
      expect(product).toEqual(mockProduct);
    });

    const req = httpMock.expectOne('https://fakeapi.net/products/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockProduct);
  });
});
