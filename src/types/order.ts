import { Discount } from "@/types/discount";
import { Product } from "@/types/product";

export interface OrderItem {
  product: Product;
  productName: string;
  productSlug: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export type OrderStatus =
  | "processing"
  | "confirmed"
  | "shipping"
  | "completed"
  | "cancelled";

export type PaymentMethod = "cod" | "bank_transfer";
export type PaymentStatus = "unpaid" | "paid" | "refunded";

export interface Order {
  id: string;
  documentId: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  items: OrderItem[];
  total: number;
  subtotal: number;
  shippingFee: number;
  orderStatus: OrderStatus;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  discountAmount: number;
  discountCode: string;
  discount: Discount;
  note?: string;
  createdAt: string;
  publishedAt?: string;
  updatedAt: string;
}
