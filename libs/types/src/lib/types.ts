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