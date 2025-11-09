import { Product } from "@/types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem extends Product {
  quantity: number;
}

export interface CartStore {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (documentId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.documentId === product.documentId
          );

          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.documentId === product.documentId
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          } else {
            return {
              cart: [...state.cart, { ...product, quantity }],
            };
          }
        });
      },

      clearCart: () => {
        set({ cart: [] });
      },

      removeFromCart: (documentId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.documentId !== documentId),
        }));
      },

      updateQuantity: (productId, quantity) => {
        set((state) => {
          const updatedCart = state.cart.map((item) =>
            item.documentId === productId
              ? { ...item, quantity } // gán số lượng mới trực tiếp
              : item
          );

          return { cart: updatedCart };
        });
      },

      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
      version: 1,
    }
  )
);
