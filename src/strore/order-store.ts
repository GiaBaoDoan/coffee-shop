// store/orderStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Order } from "@/types/order";

interface OrderState {
  orders: Order[];

  listOrders: (order: Order) => void;
  getOrderById: (orderId: string) => Order | undefined;
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: [],

      listOrders: (order) =>
        set((state) => ({
          orders: [...state.orders, order],
        })),
      getOrderById: (orderId) => get().orders.find((o) => o.id === orderId),
    }),
    {
      name: "orders", // localStorage key
    }
  )
);
