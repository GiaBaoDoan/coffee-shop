export interface PaginationMeta {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface ResponseDataApi<T> {
  data: T;
  meta?: PaginationMeta;
}

export interface TypeSearchParams {
  categories?: string;
  search?: string;
  page?: number;
  sort?: string;
  priceMin?: string;
  priceMax?: string;
}
