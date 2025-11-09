"use client";

import CheckoutForm from "@/components/checkout/CheckoutForm";
import DiscountCodeForm from "@/components/checkout/DiscountForm";
import { useCartStore } from "@/strore/cart-store";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";

const CheckoutPage = () => {
  const { cart } = useCartStore();

  if (!cart.length) {
    return (
      <div className="max-w-[1290px] mx-auto px-[30px] py-20">
        <div className="px-5">
          <div className="border border-[#d9d9d9] bg-[#f6f5f8] pr-15 pl-7.5 py-7.5 mb-7.5">
            <div className="flex items-center gap-[15px]">
              <TriangleAlert className="text-[#6f4323]" />
              <div className="text-[#515151] text-sm flex items-center gap-1">
                <p>Rất tiếc, phiên truy cập của bạn đã hết hạn</p>
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
    <div className="max-w-[1290px] mx-auto px-[30px] py-20">
      <DiscountCodeForm />
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;
