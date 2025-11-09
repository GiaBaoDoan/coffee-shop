import { Category } from "@/types/product";
import { create } from "zustand";

export type SortOption =
  | "default"
  | "popularity"
  | "rating"
  | "date"
  | "price"
  | "price_desc";

type ProductView = "list" | "grid-2" | "grid-3";

interface FilterStore {
  categories: Category[];
  sort: SortOption;
  keyword: string;
  productView: ProductView;
  priceRange: number[] | null;
  showFilterBar: boolean;

  // actions
  setProductCat: (cats: Category[]) => void;
  triggerFilterBar: () => void;
  setKeyword: (keyword: string) => void;
  setProductView: (view: ProductView) => void;
  toggleCategory: (cat: Category) => void;
  setSortBy: (sort: SortOption) => void;
  setPriceRange: (range: number[] | null) => void;
  resetFilter: () => void;
}

export const UseFilterStore = create<FilterStore>((set, get) => ({
  categories: [],
  setProductCat: (categories) => set({ categories }),
  sort: "default",
  priceRange: null,
  keyword: "",
  showFilterBar: true,
  productView: "grid-3",

  setKeyword: (keyword) => set({ keyword }),

  triggerFilterBar: () => {
    set((state) => {
      return { showFilterBar: !state.showFilterBar };
    });
  },
  setProductView: (view) => set({ productView: view }),

  toggleCategory: (cat) =>
    set((state) => {
      const exists = state.categories.some((c) => c.slug === cat.slug);
      const newCategories = exists
        ? state.categories.filter((c) => c.slug !== cat.slug)
        : [...state.categories, cat];
      return { categories: newCategories };
    }),

  setSortBy: (sort) => {
    set({ sort });
  },

  setPriceRange: (priceRange) => {
    set({ priceRange });
  },

  resetFilter: () => {
    set({
      categories: [],
      sort: "default",
      priceRange: null,
      keyword: "",
    });
  },
}));
