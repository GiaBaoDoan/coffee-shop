import { Discount } from "@/types/discount";
import { OrderStatus } from "@/types/order";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatVND = (price: number) => {
  if (!price && price !== 0) return "";
  return price.toLocaleString("en-US") + "₫";
};

export const getDiscountPercent = ({
  price,
  salePrice,
}: {
  price: number;
  salePrice: number | null;
}) => {
  if (!salePrice || !price || salePrice >= price) return 0;
  return Math.round(((price - salePrice) / price) * 100);
};

export function toSlug(str: string): string {
  return str
    .normalize("NFD") // tách dấu
    .replace(/[\u0300-\u036f]/g, "") // xóa dấu
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-"); // thay khoảng trắng bằng -
}

/**
 * Tính giá trị được giảm từ mã giảm giá.
 * @param discount - Đối tượng discount (có type và value)
 * @param subtotal - Tổng tiền trước khi giảm
 * @returns Giá trị giảm (VD: 50000 hoặc 10% của subtotal)
 */
export function calculateDiscountValue(
  discount: Discount | null,
  subtotal: number
): number {
  if (!discount || subtotal <= 0) return 0;

  const { type, value } = discount;

  if (type === "percent") {
    const discountAmount = (subtotal * value) / 100;
    return Math.min(discountAmount, subtotal); // tránh giảm quá tổng
  }

  if (type === "fixed") {
    return Math.min(value, subtotal); // không cho âm tiền
  }

  return 0;
}

export function formatDate(dateString: string) {
  if (!dateString) return "";

  const date = new Date(dateString);

  return date.toLocaleString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  processing: "Đang xử lý",
  confirmed: "Đã xác nhận",
  shipping: "Đang giao",
  completed: "Hoàn thành",
  cancelled: "Đã hủy",
};

export function getOrderStatusLabel(status: OrderStatus): string {
  return ORDER_STATUS_LABELS[status] || "Không xác định";
}
