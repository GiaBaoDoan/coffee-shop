import { getOrderDetail } from "@/apis/order";
import { formatVND } from "@/lib/utils";
import { Mail, PenOff, Phone, TriangleAlert } from "lucide-react";
import Link from "next/link";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string }>;
}) => {
  const data = await searchParams;
  const orderDetail = await getOrderDetail(data.orderId as string);

  // Nếu không có orderId => redirect về giỏ hàng
  if (!orderDetail) {
    return (
      <div className="max-w-[1290px] mx-auto px-[30px] py-20">
        <div className="px-5">
          <div className="border border-[#d9d9d9] bg-[#f6f5f8] pr-15 pl-7.5 py-7.5 mb-7.5">
            <div className="flex items-center gap-[15px]">
              <TriangleAlert className="text-[#6f4323]" />
              <div className="text-[#515151] text-sm flex items-center gap-1">
                <p>Rất tiếc, không tồn tại đơn thanh toán nào</p>
                <Link
                  className="text-[#0f0f0f] hover:text-[#6f4323] hover:underline"
                  href={"/shop"}
                >
                  Quay trở lại cửa hàng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 max-w-[1224px] px-[30px] mx-auto">
      <div className="text-[#ffad9b] text-2xl leading-8 mb-[25px]">
        Cảm ơn bạn. Đơn hàng của bạn đã được nhận.
      </div>
      <div className="flex items-center mb-[50px]">
        <div className="mr-7 pr-7 border-r border-[#cfc8d8] border-dashed uppercase text-sm">
          <div className="text-[#333]">Mã đơn hàng:</div>
          <div className="text-[#0f0f0f] font-bold mt-2">{orderDetail.id}</div>
        </div>
        <div className="mr-7 pr-7 border-r border-[#cfc8d8] border-dashed uppercase text-sm">
          <div className="text-[#333]">Ngày:</div>
          <div className="text-[#0f0f0f] font-bold mt-2">
            {new Date(orderDetail.createdAt).toLocaleDateString("vi-VN")}
          </div>
        </div>
        <div className="mr-7 pr-7 border-r border-[#cfc8d8] border-dashed uppercase text-sm">
          <div className="text-[#333]">Tổng cộng:</div>
          <div className="text-[#0f0f0f] font-bold mt-2">
            {formatVND(orderDetail.total)}
          </div>
        </div>
        <div className="mr-7 pr-7 border-[#cfc8d8] border-dashed uppercase text-sm">
          <div className="text-[#333]">Phương thức thanh toán:</div>
          <div className="text-[#0f0f0f] font-bold mt-2">
            {orderDetail.paymentMethod === "bank_transfer"
              ? "Chuyển khoản ngân hàng"
              : "Trả tiền mặt khi nhận hàng"}
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="font-medium my-5 text-[#0f0f0f] text-3xl">
          Thông tin chuyển khoản ngân hàng
        </h2>
        <h3 className="my-5 font-bold text-[#0f0f0f] text-2xl">
          Nguyễn Văn Long (Demo):
        </h3>
        <div className="flex items-center mb-[50px]">
          <div className="mr-7 pr-7 border-r border-[#cfc8d8] border-dashed uppercase text-sm">
            <div className="text-[#333]">Ngân hàng:</div>
            <div className="text-[#0f0f0f] font-bold mt-2">ACB</div>
          </div>
          <div className="mr-7 pr-7 uppercase text-sm">
            <div className="text-[#333]">Số tài khoản:</div>
            <div className="text-[#0f0f0f] font-bold mt-2">12345789</div>
          </div>
        </div>
        <h2 className="text-[#0f0f0f] mb-5 font-bold text-xl">
          Chi tiết đơn hàng
        </h2>
        <div className="pb-5 border-b border-[#e9e6ed]">
          <div className="grid grid-cols-2">
            <h4 className="font-bold text-sm text-[#333]">Sản phẩm</h4>
            <h4 className="font-bold text-sm text-[#333]">Tổng</h4>
          </div>
        </div>
        {orderDetail.items.map((item, index) => (
          <div key={index} className="border-b border-[#e9e6ed] py-5">
            <div className="grid grid-cols-2">
              <p className="text-sm text-[#333]">
                {item.productName} x {item.quantity}
              </p>
              <p className="text-[#333] text-sm font-bold">
                {formatVND(item.totalPrice)}
              </p>
            </div>
          </div>
        ))}

        <div className="border-b border-[#e9e6ed] py-5">
          <div className="grid grid-cols-2">
            <p className="font-bold text-sm text-[#333]">Tổng số phụ:</p>
            <div className="font-bold text-sm text-[#333]">
              {formatVND(orderDetail.subtotal)}
            </div>
          </div>
        </div>
        <div className="border-b border-[#e9e6ed] py-5">
          <div className="grid grid-cols-2">
            <p className="font-bold text-sm text-[#333]">Tiền ship</p>
            <div className="font-bold text-sm text-[#333]">
              {formatVND(orderDetail.shippingFee)}
            </div>
          </div>
        </div>
        {orderDetail.discountAmount && (
          <div className="border-b border-[#e9e6ed] py-5">
            <div className="grid grid-cols-2">
              <p className="font-bold text-sm text-[#333]">Giảm trừ</p>
              <div className="font-bold text-sm text-[#333]">
                -{formatVND(orderDetail.discountAmount)}
              </div>
            </div>
          </div>
        )}

        <div className="border-b border-[#e9e6ed] py-5">
          <div className="grid grid-cols-2 items-center">
            <p className="font-bold text-sm text-[#333]">Tổng cộng:</p>
            <div className="text-[#333] font-bold text-sm mt-2">
              {formatVND(orderDetail.total)}
            </div>
          </div>
        </div>
        <div className="border-b border-[#e9e6ed] py-5">
          <div className="grid grid-cols-2 items-center">
            <p className="font-bold text-sm text-[#333]">
              Phương thức thanh toán:
            </p>
            <div className="text-[#333] font-bold text-sm mt-2">
              {orderDetail.paymentMethod === "bank_transfer"
                ? "Chuyển khoản ngân hàng"
                : "Trả tiền mặt khi nhận hàng"}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-xl capitalize mb-5 text-[#0f0f0f]">
          Địa chỉ thanh toán
        </h2>
        <div className="p-5 border border-[#d9d9d9] leading-[30px] text-sm">
          <address>
            <span>Họ Tên: </span>
            {orderDetail.firstName + " " + orderDetail.lastName}
            <br />
            <span>Địa chỉ: </span>
            {orderDetail.address}
            <br />
            <div className="flex items-center gap-1.5">
              <Phone className="stroke-1 size-4" />
              {orderDetail.phone}
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="stroke-1 size-4" />
              {orderDetail.email}
            </div>
            {orderDetail.note && (
              <div className="flex items-center gap-1.5">
                <PenOff className="stroke-1 size-4" />
                {orderDetail.note}
              </div>
            )}
          </address>
        </div>
      </div>
    </section>
  );
};

export default Page;
