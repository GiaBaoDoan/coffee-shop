"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useCartStore } from "@/strore/cart-store";
import { formatVND } from "@/lib/utils";
import { ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MiniCart = () => {
  const { cart, getTotalItems, removeFromCart, getTotalPrice } = useCartStore();
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <Link href="/cart" className="relative">
        <HoverCardTrigger asChild>
          <div>
            <ShoppingCart className="stroke-[1.2]" />
            <div className="absolute -right-2 -top-1.5 bg-[#FF5C00] rounded-full w-4 h-4 flex justify-center items-center">
              <span className="text-[10px] text-white">
                {cart.length ? getTotalItems() : 0}
              </span>
            </div>
          </div>
        </HoverCardTrigger>
      </Link>

      <HoverCardContent className="p-5 w-[400px] right-0 absolute rounded-[5px] shadow-lg">
        {!cart.length ? (
          <div className="text-sm text-[#333]">
            Không có sản phẩm trong giỏ hàng.
          </div>
        ) : (
          <>
            <div>
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#d9d9d9]"
                >
                  <div className="flex items-center gap-[15px]">
                    <div className="basis-[20%] border border-[#d9d9d9] flex justify-center">
                      <Image
                        src={item.images[0].url}
                        alt="ảnh"
                        width={66}
                        className="w-25 h-15 object-cover"
                        height={66}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-[#0f0f0f]">
                        {item.name}
                      </h3>
                      <div className="text-[#6f4323] text-sm font-medium mt-1">
                        <span>{item.quantity} x </span>
                        <span>{formatVND(item.price)}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.documentId)}
                    className="text-[#333]"
                  >
                    <Trash2 className="stroke-1 size-4" />
                  </button>
                </div>
              ))}
            </div>
            <div>
              <div className="flex justify-between pt-2.5">
                <span className="font-semibold">Tổng</span>
                <span className="font-semibold text-[#6f4323]">
                  {formatVND(getTotalPrice())}
                </span>
              </div>
              <div className="flex items-center justify-between gap-7.5 mt-2.5 text-sm">
                <Link
                  className="rounded-[5px] inline-block font-semibold border border-[#6f4323] bg-[#6f4323] px-[25px] py-[11px] capitalize text-white transition-all hover:bg-white hover:text-[#6f4323]"
                  href="/cart"
                >
                  Xem giỏ hàng
                </Link>
                <Link
                  className="rounded-[5px] inline-block font-semibold border border-[#6f4323] bg-[#6f4323] px-[25px] py-[11px] capitalize text-white transition-all hover:bg-white hover:text-[#6f4323]"
                  href="/checkout"
                >
                  Thanh toán
                </Link>
              </div>
            </div>
          </>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};

export default MiniCart;
