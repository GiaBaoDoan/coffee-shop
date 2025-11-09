import { Discount } from "@/types/discount";
import { PaymentMethod } from "@/types/order";

export interface CheckoutItem {
  productId: string;
  quantity: number;
}

export interface CheckoutRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  items: CheckoutItem[];
  paymentMethod: PaymentMethod;
  discountCode?: string;
  discount?: number;
  discountAmount?: number;
  note: string;
}
