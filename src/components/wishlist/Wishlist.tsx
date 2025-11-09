"use client";

import { Button } from "@/components/ui/button";
import ShareButtons from "@/components/wishlist/ShareButtons";
import { formatVND } from "@/lib/utils";
import { useCartStore } from "@/strore/cart-store";
import { useWishlistStore } from "@/strore/wishList-store";
import { X } from "lucide-react";
import Image from "next/image";

export default function Wishlist() {
  const { items, removeFromWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  return (
    <div className="w-full overflow-x-auto max-w-[1290px] mx-auto px-[30px] my-20">
      <table className="w-full border-collapse text-sm mb-[30px]">
        <thead>
          <tr className="bg-[#f4f4f4] text-center">
            <th className="border px-3 py-[9px] font-semibold w-1/24"></th>
            <th className="border px-3 py-[9px] font-semibold w-1/12"></th>
            <th className="border px-3 py-[9px] font-semibold w-1/4">
              Tên sản phẩm
            </th>
            <th className="border px-3 py-[9px] font-semibold w-1/6">
              Đơn giá
            </th>
            <th className="border px-3 py-[9px] font-semibold w-1/6">
              Tình trạng sản phẩm
            </th>
            <th className="border px-3 py-[9px] font-semibold w-1/2"></th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="text-center border px-4 py-6 text-[#454545]"
              >
                Không có sản phẩm nào được thêm vào danh sách yêu thích
              </td>
            </tr>
          ) : (
            items.map((product) => (
              <tr key={product.id} className="text-center">
                <td className="border px-3 py-2">
                  <button
                    onClick={() => removeFromWishlist(product.documentId)}
                  >
                    <X className="text-[#6f4323] size-4" />
                  </button>
                </td>
                <td className="border px-3 py-2">
                  <Image
                    src={product.images[0].url}
                    width={150}
                    height={150}
                    className="object-contain"
                    alt={product.images[0].alternativeText as string}
                  />
                </td>
                <td className="border px-4 py-2 text-[#0f0f0f] font-bold">
                  {product.name}
                </td>
                <td className="border px-4 py-2 font-bold text-[#a80909]">
                  {formatVND(
                    product.onSale
                      ? (product.salePrice as number)
                      : product.price
                  )}
                </td>
                <td className="border px-4 py-2 font-medium">
                  {product.isActive && product.stock > 0 ? (
                    <span className="text-[#297e29]">Còn hàng</span>
                  ) : (
                    <span className="text-red-700">Hết hàng</span>
                  )}
                </td>
                <td className="px-4 py-2 border">
                  <Button
                    onClick={() => addToCart(product, 1)}
                    className="rounded-none px-[25px] py-2.5 leading-12 h-12 font-bold border border-[#6f4323] bg-[#6f4323] capitalize text-white transition-all hover:bg-white hover:text-[#6f4323]"
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {items.length > 0 && (
        <div className="mt-2.5">
          <ShareButtons />
        </div>
      )}
    </div>
  );
}
