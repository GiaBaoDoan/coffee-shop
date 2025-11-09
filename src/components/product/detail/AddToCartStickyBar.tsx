"use client";

import AddToCart from "@/components/product/detail/AddToCartButton";
import { formatVND } from "@/lib/utils";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  product: Product;
}

const AddToCartStickyBar = ({ product }: Props) => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const addEl = document.querySelector("#add-to-cart");
    const footerEl = document.querySelector("#site-footer");

    if (!addEl) return;

    const handleScroll = () => {
      const rect = addEl.getBoundingClientRect();
      const footerRect = footerEl?.getBoundingClientRect();

      const isAddAbove = rect.bottom < 0; // Đã cuộn qua
      const isAddBelow = rect.top > window.innerHeight; // Chưa tới
      const isFooterVisible = footerRect
        ? footerRect.top < window.innerHeight
        : false;

      setShowBar(isAddAbove && !isFooterVisible && !isAddBelow);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // chạy 1 lần đầu để sync trạng thái

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`fixed z-9999 bottom-0 left-0 right-0 bg-white border-t transition-transform duration-300 ${
          showBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-[1290px] mx-auto px-[30px] py-[5px] flex justify-between items-center">
          <div className="px-[15px] flex items-center gap-[15px]">
            <Image
              src={product.images[0].url}
              alt={product.images[0].alternativeText as string}
              className="object-cover w-20 h-20"
              width={60}
              height={60}
            />
            <div>
              <h3 className="text-[#0f0f0f] mb-[5px] font-medium">
                {product.name}
              </h3>
              <p className="text-[#a80909] font-bold">
                {formatVND(
                  product.onSale ? (product.salePrice as number) : product.price
                )}
              </p>
            </div>
          </div>
          <div>
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartStickyBar;
