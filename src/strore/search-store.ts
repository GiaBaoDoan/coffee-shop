import { buildProductImageUrl } from "@/apis/product";
import { BASE_URL } from "@/constants/api";
import { Product } from "@/types/product";
import { create } from "zustand";

interface SearchStore {
  query: string;
  results: Product[];
  loading: boolean;
  setQuery: (q: string) => void;
  fetchResults: (q: string) => Promise<void>;
}

export const useSearchStore = create<SearchStore>((set) => ({
  query: "",
  results: [],
  loading: false,
  setQuery: (q = "") => set({ query: q }),
  fetchResults: async (q) => {
    set({ loading: true });
    try {
      const res = await fetch(`${BASE_URL}/api/products?search=${q}`);

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();

      const products = data.data.map((item: Product) => ({
        ...item,
        images: item.images.map((img) => ({
          ...img,
          url: buildProductImageUrl(img.url),
        })),
      }));

      set({ results: products, loading: false });
    } catch (err) {
      console.error(err);
      set({ results: [], loading: false });
    }
  },
}));
