"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/strore/cart-store";
import { UseFilterStore } from "@/strore/filter-store";
import { cn, formatVND, getDiscountPercent } from "@/lib/utils";
import { CheckCircle2, ScanEye, ShoppingBasket, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import ProductQuickview from "@/components/product/detail/ProductQuickView";
import { useState } from "react";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCartStore();

  const { productView } = UseFilterStore();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative group flex flex-col items-center justify-center bg-white border border-[#D6D6D6] rounded-md p-5 cursor-pointer transition hover:border-[#6f4323] hover:shadow-lg">
      {/* Badge giảm giá */}
      {product.onSale && (
        <div className="absolute top-4 left-4 z-10 min-w-[50px] px-2 py-1 text-xs font-medium text-white bg-[#fe8b5f] rounded">
          -
          {getDiscountPercent({
            salePrice: product.salePrice,
            price: product.price,
          })}
          %
        </div>
      )}

      {/* Hình ảnh */}
      <div
        className={cn(
          "relative overflow-hidden group",
          productView === "grid-3" && "h-[290px] w-[290px]",
          productView === "grid-2" && "h-[464px] w-[464px]"
        )}
      >
        <Link href={`/product/${product.slug}`}>
          {/* Ảnh mặc định */}
          <Image
            src={product.images[0].url as string}
            alt={product.images[0].alternativeText as string}
            fill
            className={cn(
              "object-contain transition-opacity duration-300 group-hover:opacity-0"
            )}
          />

          {/* Ảnh khi hover */}
          <Image
            src={product.images[1].url as string}
            alt={product.images[1].alternativeText as string}
            fill
            className={cn(
              "object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            )}
          />
        </Link>

        <ProductQuickview setOpen={setOpen} open={open} product={product} />

        {/* Action buttons */}
        <div
          className="
          absolute bottom-2.5 left-0 w-full flex justify-center gap-3.5
          translate-y-[100px] opacity-0 transition-all duration-300
          group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className="
          w-9.5 h-9.5 rounded-full bg-[#F5F5F5] shadow-lg transition-all duration-500 
          hover:bg-[#6f4323] hover:border-[#6f4323] hover:text-white"
          >
            <ScanEye />
          </Button>

          <Button
            onClick={() => {
              addToCart(product, 1);
              toast.success("Đã thêm sản phẩm vào giỏ hàng!", {
                icon: <CheckCircle2 className="fill-[#34B233] text-white" />,
                description: `${product.name} x1`,
                duration: 2500,
              });
            }}
            variant="outline"
            className="
            w-9.5 h-9.5 rounded-full bg-[#F5F5F5] shadow-lg transition-all duration-500 
            hover:bg-[#6f4323] hover:border-[#6f4323] hover:text-white"
          >
            <ShoppingBasket />
          </Button>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mt-3.5 mb-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "size-3 fill-gray-300 stroke-gray-300",
              i < (product.rating ?? 0) && "fill-yellow-500 stroke-yellow-500"
            )}
          />
        ))}
      </div>

      {/* Title */}
      <p className="mb-1 text-center font-medium text-[#382212]">
        {product.name}
      </p>

      {/* Giá */}
      <div className="flex items-center gap-1.5">
        {product.onSale && (
          <p className="text-[#727272] line-through text-sm font-medium">
            {formatVND(product.price)}
          </p>
        )}
        <p className="text-[#a80909] font-bold">
          {product.onSale
            ? formatVND(product.salePrice as number)
            : formatVND(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
