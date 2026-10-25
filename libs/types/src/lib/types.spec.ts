import { Product } from './types';

describe('types', () => {
  it('should create product object matching Product interface', () => {
    const product: Product = {
      id: 1,
      title: 'Sample Product',
      price: 99.99,
      description: 'A test product',
      category: 'electronics',
      brand: 'TestBrand',
      stock: 10,
      image: 'https://example.com/item.png',
    };

    expect(product.id).toBe(1);
    expect(product.title).toBe('Sample Product');
  });
});
