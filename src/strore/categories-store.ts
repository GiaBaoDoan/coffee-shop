import { BASE_URL } from "@/constants/api";
import { getErrorMessage } from "@/lib/utils";
import { Category } from "@/types/product";
import { create } from "zustand";

interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;

  fetchCategories: () => Promise<void>;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  loading: false,
  error: null,

  fetchCategories: async () => {
    try {
      set({ loading: true, error: null });

      const res = await fetch(`${BASE_URL}/api/categories`, {
        next: { revalidate: 60 },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await res.json();

      set({
        categories: json.data,
        loading: false,
      });
    } catch (error) {
      set({
        error: getErrorMessage(error),
        loading: false,
      });
    }
  },
}));
