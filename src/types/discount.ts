export interface Discount {
  id: number;
  documentId: string;
  code: string;
  description?: string;
  type: "fixed" | "percent"; // loại giảm giá
  value: number; // giá trị giảm (tiền hoặc %)
  startDate?: string; // ISO string
  endDate?: string; // ISO string
  isActive: boolean;
  usageLimit?: number; // giới hạn số lần sử dụng
  usedCount?: number; // số lần đã dùng
  createdAt: string;
  updatedAt: string;
  publishedAt?: string | null;
  locale?: string | null;
}
