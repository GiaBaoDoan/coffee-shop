"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { UseFilterStore } from "@/strore/filter-store";

export function useSyncFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { categories, priceRange, sort, keyword } = UseFilterStore();

  // 🧠 1. Cập nhật URL khi bất kỳ filter nào đổi
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (categories.length > 0) {
      params.set("categories", categories.map((c) => c.slug).join(","));
    } else {
      params.delete("categories");
    }

    if (priceRange) {
      params.set("priceMin", priceRange[0].toString());
      params.set("priceMax", priceRange[1].toString());
    } else {
      params.delete("priceMin");
      params.delete("priceMax");
    }

    if (sort !== "default") {
      params.set("sort", sort);
    } else {
      params.delete("sort");
    }

    if (keyword) {
      params.set("search", keyword);
    } else {
      params.delete("search");
    }

    router.push(`shop?${params.toString()}`, { scroll: false });
  }, [categories, priceRange, sort, keyword]);
}
