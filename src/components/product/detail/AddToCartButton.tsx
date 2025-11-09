"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/strore/cart-store";
import { Product } from "@/types/product";
import { CheckCircle2, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const AddToCartButton = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();

  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center justify-between border rounded-[5px] border-[#d9d9d9] px-3">
        <button
          onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
          className="text-[#454545] text-lg font-medium "
        >
          <Minus className="size-4" />
        </button>
        <div className="text-[#181C25] font-medium text-center leading-12 h-12 min-w-15">
          {quantity}
        </div>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="text-[#454545] text-lg font-medium "
        >
          <Plus className="size-4" />
        </button>
      </div>
      <Button
        onClick={() => {
          addToCart(product, quantity);
          toast.success("Đã thêm sản phẩm vào giỏ hàng!", {
            icon: <CheckCircle2 className="fill-[#34B233] text-white" />,
            description: `${product.name} x${quantity}`,
            duration: 2500,
          });
          setQuantity(1);
        }}
        className="rounded-[5px] px-[25px] py-[11px] leading-12 h-12 font-bold border border-[#6f4323] bg-[#6f4323] capitalize text-white transition-all hover:bg-white hover:text-[#6f4323]"
      >
        Thêm vào giỏ hàng
      </Button>
    </div>
  );
};

export default AddToCartButton;
