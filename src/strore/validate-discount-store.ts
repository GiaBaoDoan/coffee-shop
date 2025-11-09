import { validateDiscountCode } from "@/apis/discount";
import { BASE_URL } from "@/constants/api";
import { Discount } from "@/types/discount";
import { create } from "zustand";

type DiscountState = {
  discount: Discount | null;
  loading: boolean;
  error: string | null;
  success: boolean;
  validateDiscountCode: (code: string) => Promise<void>;
};

export const useDiscountCode = create<DiscountState>((set) => ({
  discount: null,
  loading: false,
  success: false,
  error: null,
  validateDiscountCode: async (code) => {
    try {
      set({ loading: true, error: null });
      const res = await fetch(`${BASE_URL}/api/discounts/validate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error?.message || "Mã giảm giá không hợp lệ");
      }

      set({
        discount: data.data,
        loading: false,
        error: null,
        success: true,
      });
    } catch (error: any) {
      set({
        discount: null,
        loading: false,
        error: error?.message || "Đã có lỗi xảy ra",
        success: false,
      });
    }
  },
}));
