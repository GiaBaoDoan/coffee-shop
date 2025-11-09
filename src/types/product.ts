export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  thumbnail?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  products: Product[];
}

export interface Tag {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface ImageRes {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    [key: string]: ImageFormat | undefined;
  };
  url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface Product {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  price: number;
  salePrice: number | null;
  descriptionShort: string;
  descriptionDetail: string;
  rating: number;
  stock: number;
  sold: number;
  isActive: boolean;
  onSale: boolean;
  sku: string;
  categories: Category[];
  tags: Tag[];
  images: ImageRes[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}
