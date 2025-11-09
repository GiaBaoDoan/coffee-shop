import { BASE_URL } from "@/constants/api";
import { CheckoutRequest } from "@/types/checkout";
import { Order } from "@/types/order";
import { create } from "zustand";

interface CheckoutState {
  order: Order | null;
  loading: boolean;
  success: boolean;
  error: string | null;
  checkoutOrder: (chechout: CheckoutRequest) => Promise<void>;

  clearCheckoutStore: () => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  order: null,
  loading: false,
  success: false,
  error: null,

  clearCheckoutStore: () =>
    set({
      error: null,
      success: false,
      loading: false,
      order: null,
    }),

  checkoutOrder: async (data) => {
    set({ loading: true, error: null });

    try {
      const res = await fetch(`${BASE_URL}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      }); // gọi API Strapi

      if (!res.ok) {
        const errorJson = await res.json();
        throw new Error(errorJson.error?.message || "Đặt hàng thất bại");
      }

      const json = await res.json();

      set({
        order: json.data,
        loading: false,
        error: null,
        success: true,
      });
    } catch (err: any) {
      set({
        order: null,
        loading: false,
        error: err.message || "Đặt hàng thất bại",
        success: false,
      });
    }
  },
}));
