"use client";

import { Product } from "@/types/product";
import ProductPolicy from "@/components/product/detail/ProductPolicy";
import AddToCart from "@/components/product/detail/AddToCartButton";
import ProductTitle from "@/components/product/detail/ProductTitle";
import ProductMeta from "@/components/product/detail/ProductMeta";
import AddToCartStickyBar from "@/components/product/detail/AddToCartStickyBar";
import ProductGallery from "@/components/product/detail/ProductGallery";
import ProductRelatest from "@/components/product/detail/RelatedProducts";
import ProductSoical from "@/components/product/detail/ProductSoical";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/strore/cart-store";
import ProductTabs from "@/components/product/detail/ProductTabs";

function decodeHtml(str: string) {
  return str.replace(/\\u003C/g, "<").replace(/\\u003E/g, ">");
}

const ProductDetails = ({ product }: { product: Product }) => {
  const { cart } = useCartStore();

  const itemInCart = cart.find((i) => i.documentId === product.documentId);
  return (
    <div>
      <div className="px-[15px]">
        {itemInCart && (
          <div className="border border-[#d9d9d9] bg-[#f6f5f8] pr-7.5 pl-7.5 py-7.5 mb-7.5">
            <div className="flex items-center gap-[15px] justify-between">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="text-[#6f4323] size-5" />
                <div className="text-[#515151] flex items-center gap-1">
                  {itemInCart.quantity > 1 ? (
                    <p>{itemInCart.quantity} x</p>
                  ) : (
                    ""
                  )}
                  <p>“{itemInCart?.name}” đã được thêm vào giỏ hàng.</p>
                </div>
              </div>
              <Link
                className="text-[#6f4323] transition-all font-semibold hover:underline"
                href={"/cart"}
              >
                Xem giỏ hàng
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2">
        <div className="px-[15px]">
          <ProductGallery zommImage={true} product={product} />
        </div>
        <div className="px-[15px]">
          <div>
            <ProductTitle product={product} />
            <ProductSoical product={product} />
            <div id="add-to-cart" className="mt-[30px]">
              <AddToCart product={product} />
            </div>
            <AddToCartStickyBar product={product} />
            <div className="mt-15">
              <ProductPolicy />
            </div>
            <ProductMeta product={product} />
          </div>
        </div>
      </div>
      <div className="px-[15px] mt-15">
        <ProductTabs product={product} />
      </div>
      <div className="px-[15px]">
        <ProductRelatest />
      </div>
    </div>
  );
};

export default ProductDetails;
