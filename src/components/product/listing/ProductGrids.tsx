"use client";
import ProductListItem from "@/components/product/listing/ProductListItem";
import ProductCard from "@/components/product/ProductCard";
import { UseFilterStore } from "@/strore/filter-store";
import { Product } from "@/types/product";

export default function ProductsGrid({ products }: { products: Product[] }) {
  const { productView } = UseFilterStore();

  if (productView === "list") {
    return (
      <div className="flex flex-col gap-6">
        {products.map((product, index) => (
          <ProductListItem product={product} key={index} />
        ))}
      </div>
    );
  }

  // Grid layout
  const gridCols =
    productView === "grid-2"
      ? "grid-cols-2"
      : productView === "grid-3"
      ? "grid-cols-3"
      : "grid-cols-1";

  return (
    <div className={`grid ${gridCols} gap-6`}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
