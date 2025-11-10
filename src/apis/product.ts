import { BASE_URL } from "@/constants/api";
import { Product } from "@/types/product";
import { ResponseDataApi, TypeSearchParams } from "@/types/api";

function buildProductImageUrl(url: string) {
  if (!url.startsWith("http")) {
    return `${BASE_URL}${url}`;
  }
  return url;
}

function mapProduct(item: Product): Product {
  return {
    ...item,
    images:
      item.images?.map((img) => ({
        ...img,
        url: buildProductImageUrl(img.url),
      })) || [],
  };
}

export async function getProducts(
  searchParams: TypeSearchParams
): Promise<ResponseDataApi<Product[]>> {
  const {
    page = 1,
    search = "",
    sort = "",
    categories = "",
    priceMin,
    priceMax,
  } = searchParams;

  const params = new URLSearchParams();

  switch (sort) {
    case "default":
      params.append("sort", "createdAt:asc");
      break;
    case "popularity":
      params.append("sort", "sold:desc");
      break;
    case "rating":
      params.append("sort", "rating:desc");
      break;
    case "date":
      params.append("sort", "createdAt:desc");
      break;
    case "price":
      params.append("sort", "price:asc");
      break;
    case "price_desc":
      params.append("sort", "price:desc");
      break;
  }

  if (search.trim()) params.append("search", search.trim().toLowerCase());
  if (categories) params.append("categories", categories);
  if (priceMin) params.append("priceMin", String(priceMin));
  if (priceMax) params.append("priceMax", String(priceMax));
  if (page) params.append("page", String(page));

  try {
    const res = await fetch(`${BASE_URL}/api/products?${params.toString()}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await res.json();

    return {
      data: json.data.map(mapProduct),
      meta: json.meta,
    };
  } catch {
    return { data: [], meta: {} };
  }
}

// 🆕 Lấy sản phẩm mới nhất
export async function getLastestProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/products?sort=createdAt:desc`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await res.json();

    return json.data.map(mapProduct);
  } catch {
    return [];
  }
}

// 🔎 Lấy chi tiết sản phẩm theo slug
export async function getProductDetail(slug: string): Promise<Product | null> {
  try {
    const res = await fetch(`${BASE_URL}/api/products/${slug}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await res.json();
    return mapProduct(json.data);
  } catch {
    return null;
  }
}
