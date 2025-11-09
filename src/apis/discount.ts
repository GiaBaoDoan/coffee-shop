import { BASE_URL } from "@/constants/api";

export const validateDiscountCode = async (code: string) => {
  try {
    const res = await fetch(`${BASE_URL}/api/discounts/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error?.message || "Mã giảm giá không hợp lệ");
    }

    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
