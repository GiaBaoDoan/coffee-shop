import { BASE_URL } from "@/constants/api";

import { Category } from "@/types/product";

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/categories`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await res.json();

    const categories: Category[] = json.data.map((item: Category) => ({
      id: item.id,
      documentId: item.documentId,
      name: item.name,
      slug: item.slug,
      products: item.products,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      publishedAt: item.publishedAt,
    }));

    return categories;
  } catch (err) {
    console.error("Fetch categories error:", err);
    return [];
  }
}
