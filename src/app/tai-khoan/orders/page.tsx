"use client";

import { formatDate, formatVND, getOrderStatusLabel } from "@/lib/utils";
import { useOrderStore } from "@/strore/order-store";
import Link from "next/link";

const Page = () => {
  const { orders } = useOrderStore();

  if (!orders.length) {
    return <p>Bạn chưa có đơn hàng nào.</p>;
  }

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="text-sm">
            <th className="text-left pb-5 text-[#454545] font-semibold">
              Đơn hàng
            </th>
            <th className="text-left pb-5 text-[#454545] font-semibold">
              Ngày
            </th>
            <th className="text-left pb-5 text-[#454545] font-semibold">
              Trạng thái
            </th>
            <th className="text-left pb-5 text-[#454545] font-semibold">
              Tổng
            </th>
            <th className="text-left pb-5 text-[#454545] font-semibold">
              Thao tác
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t text-[#333]">
              <td className="text-left py-5 font-semibold text-[#0f0f0f]">
                #{order.id}
              </td>
              <td className="text-left py-5">{formatDate(order.createdAt)}</td>
              <td className="text-left py-5">
                <span className={`px-2 py-1 rounded-full`}>
                  {getOrderStatusLabel(order.orderStatus)}
                </span>
              </td>
              <td className="text-left py-3">{formatVND(order.total)}</td>
              <td className="text-left py-3 space-x-2">
                <Link
                  href={`/tai-khoan/view-order/${order.documentId}`}
                  className="text-sm leading-6 inline-block font-semibold border border-[#6f4323] bg-[#6f4323] px-[25px] py-[11px] capitalize text-white transition-all hover:bg-white hover:text-[#6f4323]"
                >
                  Xem
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
