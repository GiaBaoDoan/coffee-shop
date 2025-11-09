"use client";

import { useCartStore } from "@/strore/cart-store";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleAlert, Minus, Plus, Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatVND } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const page = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } =
    useCartStore();

  if (!cart.length) {
    return (
      <div className="max-w-[1290px] mx-auto px-[30px] py-20">
        <div className="px-5">
          <div className="border border-[#d9d9d9] bg-[#f6f5f8] pr-15 pl-7.5 py-7.5 mb-7.5">
            <div className="flex items-center gap-[15px]">
              <CircleAlert className="text-[#6f4323]" />
              <p className="text-[#515151] text-sm">
                Chưa có sản phẩm nào trong giỏ hàng.
              </p>
            </div>
          </div>
          <Link
            className="text-sm inline-block font-semibold border border-[#6f4323] bg-[#6f4323] px-[25px] py-[11px] capitalize text-white transition-all hover:bg-white hover:text-[#6f4323]"
            href="/shop"
          >
            Quay trở lại cửa hàng
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1290px] mx-auto px-[30px] py-20">
      <div className="grid grid-cols-12">
        {/* table card */}
        <div className="col-span-9 px-5">
          <Table className="w-full table-fixed">
            <TableHeader>
              <TableRow className="hover:bg-transparent!">
                <TableHead className="text-left w-15">
                  <Trash2 className="w-3 h-3" />
                </TableHead>
                <TableHead className="text-[#0f0f0f] font-semibold w-25">
                  Hình ảnh
                </TableHead>
                <TableHead className="text-[#0f0f0f] font-semibold">
                  Sản phẩm
                </TableHead>
                <TableHead className="text-[#0f0f0f] font-semibold">
                  Giá
                </TableHead>
                <TableHead className="text-[#0f0f0f] font-semibold">
                  Số lượng
                </TableHead>
                <TableHead className="text-[#0f0f0f] font-semibold text-right">
                  Tổng
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="hover:bg-transparent!">
              {cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-left">
                    <button onClick={() => removeFromCart(item.documentId)}>
                      <X className="text-[#6f4323] w-4 h-4" />
                    </button>
                  </TableCell>

                  <TableCell>
                    <Image
                      src={item.images[0].url as string}
                      alt={item.images[0].alternativeText as string}
                      width={100}
                      height={100}
                      className="object-contain w-20 h-20"
                    />
                  </TableCell>

                  {/* Tên sản phẩm */}
                  <TableCell>
                    <p className="font-semibold truncate">{item.name}</p>
                  </TableCell>

                  {/* Giá đơn */}
                  <TableCell>
                    <p className="font-bold">{formatVND(item.price)}</p>
                  </TableCell>

                  {/* Số lượng */}
                  <TableCell>
                    <div className="flex items-center justify-between border rounded-[5px] border-[#d9d9d9] px-3">
                      <button
                        onClick={() =>
                          item.quantity > 1 &&
                          updateQuantity(item.documentId, item.quantity - 1)
                        }
                        className="text-[#454545] text-lg font-medium "
                      >
                        <Minus className="size-4" />
                      </button>
                      <div className="text-[#181C25] leading-12 h-12 text-center font-medium">
                        {item.quantity}
                      </div>
                      <button
                        onClick={() =>
                          updateQuantity(item.documentId, item.quantity + 1)
                        }
                        className="text-[#454545]  text-lg font-medium "
                      >
                        <Plus className="size-4" />
                      </button>
                    </div>
                  </TableCell>

                  {/* Tổng giá */}
                  <TableCell className="text-right font-medium text-[#6f4323]">
                    {formatVND(item.price * item.quantity)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="py-5 flex items-center gap-2.5 border-[#d9d9d9] border-t">
            <Input
              placeholder="Mã giảm giá"
              className="focus-visible:ring-0 max-w-[200px] shadow-none focus-visible:ring-offset-0 focus:outline-none h-12 px-5 border-[#d9d9d9] rounded-[5px]"
            />
            <button className="text-sm rounded-[5px] h-12 inline-block font-semibold border border-[#6f4323] bg-[#6f4323] px-[25px] py-[11px] capitalize text-white transition-all hover:bg-white hover:text-[#6f4323]">
              Áp dụng
            </button>
          </div>
        </div>
        {/* checkout */}
        <div className="col-span-3 px-5">
          <h2 className="text-lg text-[#0f0f0f] font-semibold border-b border-[#d9d9d9] pb-[25px] capitalize">
            Cộng giỏ hàng
          </h2>
          <div className="flex items-center justify-between py-5">
            <p className="font-semibold">Tạm tính</p>
            <p className="font-bold text-[#6f4323]">
              {formatVND(getTotalPrice())}
            </p>
          </div>
          <div className="mb-1.5 flex items-center justify-between py-5 border-t border-[#e9e6ed]">
            <p className="font-semibold">Tổng</p>
            <p className="font-bold text-[#6f4323]">
              {formatVND(getTotalPrice())}
            </p>
          </div>
          <div className="py-4">
            <Link
              className="rounded-[5px] inline-block font-semibold border border-[#6f4323] bg-[#6f4323] px-[25px] py-[11px] capitalize text-white transition-all hover:bg-white hover:text-[#6f4323]"
              href="/checkout"
            >
              Tiến hành thanh toán
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
