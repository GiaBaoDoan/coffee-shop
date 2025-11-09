import { Product } from "@/types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistState {
  items: Product[];
  addToWishlist: (item: Product) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addToWishlist: (product) => {
        const exists = get().items.some(
          (p) => p.documentId === product.documentId
        );
        if (!exists) {
          set({ items: [...get().items, product] });
        } else {
          set({
            items: get().items.filter(
              (i) => i.documentId !== product.documentId
            ),
          });
        }
      },
      removeFromWishlist: (id) =>
        set({ items: get().items.filter((p) => p.documentId !== id) }),
      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: "wishlist-storage", // tên key trong localStorage
    }
  )
);
