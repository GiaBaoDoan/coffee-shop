// src/services/orderService.ts
import { BASE_URL } from "@/constants/api";
import { Order, OrderItem } from "@/types/order";

export const getOrderDetail = async (
  orderId: string
): Promise<Order | null> => {
  try {
    const res = await fetch(`${BASE_URL}/api/orders/${orderId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await res.json();

    const order = json.data;

    return {
      id: order.id,
      documentId: order.documentId,
      firstName: order.firstName,
      lastName: order.lastName,
      address: order.address,
      phone: order.phone,
      email: order.email,
      items: order.items.map((item: OrderItem) => ({
        product: item.product,
        productName: item.productName,
        productSlug: item.productSlug,
        quantity: item.quantity,
        totalPrice: item.totalPrice,
        unitPrice: item.unitPrice,
      })),
      total: order.total,
      subtotal: order.subtotal,
      shippingFee: order.shippingFee,
      orderStatus: order.orderStatus,
      paymentMethod: order.paymentMethod,
      paymentStatus: order.paymentStatus,
      discountAmount: order.discountAmount,
      discount: order.discount,
      discountCode: order.discountCode,
      note: order.note,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      publishedAt: order.publishedAt,
    };
  } catch (error) {
    console.error("Error fetching order detail", error);
    return null;
  }
};
