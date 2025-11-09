import AddToCart from "@/components/product/detail/AddToCartButton";
import ProductQuickview from "@/components/product/detail/ProductQuickView";
import { cn, formatVND } from "@/lib/utils";
import { Product } from "@/types/product";
import { Heart, Share2, Star, View } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductListItem = ({ product }: { product: Product }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center border-b border-gray-200 py-6 group">
      <div className="relative w-[380px] h-[380px]">
        <Image
          src={product.images[0].url}
          alt={product.images[0].alternativeText as string}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-medium mb-4 hover:text-[#6f4323] transition-all">
              {product.name}
            </h3>
          </Link>
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "size-3 fill-gray-300 stroke-gray-300",
                  i < (product.rating ?? 0) &&
                    "fill-yellow-500 stroke-yellow-500"
                )}
              />
            ))}
          </div>
          <div className="flex items-center justify-start gap-[15px] mb-4">
            {product.onSale && (
              <p className="text-[#727272] line-through text-sm font-medium">
                {formatVND(product.price)}
              </p>
            )}
            <p className="text-[#a80909] text-xl font-bold">
              {product.onSale
                ? formatVND(product.salePrice as number)
                : formatVND(product.price)}
            </p>
          </div>
          <p className="text-[#444] text-sm line-clamp-3 mb-4">
            {product.descriptionShort}
          </p>
        </div>
        <div className="flex gap-2.5 mb-6">
          <button className="hover:bg-[#6f4323] hover:text-white transition-all border border-[#D6D6D6] p-3 gap-[5px] rounded-[5px] flex items-center justify-center text-sm">
            <Heart className="stroke-[1.2] w-4 h-4" />
            <span>Yêu thích</span>
          </button>

          <button className="hover:bg-[#6f4323] hover:text-white transition-all text-[#0f0f0f] border-[#D6D6D6] border p-3 gap-[5px] rounded-[5px] flex items-center justify-center text-sm">
            <Share2 className="stroke-[1.2] w-4 h-4" />
            <span>Chia sẻ</span>
          </button>
          <button
            onClick={() => setOpen(true)}
            className="hover:bg-[#6f4323] hover:text-white transition-all text-[#0f0f0f] border-[#D6D6D6] border p-3 gap-[5px] rounded-[5px] flex items-center justify-center text-sm"
          >
            <View className="stroke-[1.2] w-4 h-4" />
            <span>Xem nhanh</span>
          </button>
        </div>

        <ProductQuickview open={open} setOpen={setOpen} product={product} />

        <div className="flex items-center">
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
