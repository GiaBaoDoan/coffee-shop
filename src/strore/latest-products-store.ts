import { BASE_URL } from "@/constants/api";
import { Product } from "@/types/product";
import { create } from "zustand";

interface LatestProductState {
  latestProducts: Product[];
  loading: boolean;
  error: string | null;

  fetchLatestProducts: () => Promise<void>;
}

export const useLatestProductsStore = create<LatestProductState>((set) => ({
  latestProducts: [],
  loading: false,
  error: null,

  fetchLatestProducts: async () => {
    try {
      set({ loading: true, error: null });

      const res = await fetch(`${BASE_URL}/api/products?sort=createdAt:desc`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await res.json();

      set({
        latestProducts: json.data,
        loading: false,
      });
    } catch (error: any) {
      set({
        error: error.message || "Error fetching latest products",
        loading: false,
      });
    }
  },
}));
