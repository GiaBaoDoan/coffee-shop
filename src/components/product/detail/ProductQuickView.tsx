"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ArrowRight } from "lucide-react";

import Link from "next/link";
import { Product } from "@/types/product";
import ProductGallery from "@/components/product/detail/ProductGallery";
import ProductTitle from "@/components/product/detail/ProductTitle";
import AddToCartButton from "@/components/product/detail/AddToCartButton";
import ProductPolicy from "@/components/product/detail/ProductPolicy";
import ProductMeta from "@/components/product/detail/ProductMeta";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  product: Product;
}

const ProductQuickview = ({ product, open, setOpen }: Props) => {
  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogContent
        onWheel={(e) => e.stopPropagation()}
        className="max-w-[1127px]! w-full z-99999 h-[557px] overflow-y-scroll rounded-none [&::-webkit-scrollbar]:hidden"
      >
        <AlertDialogHeader>
          <div className="grid grid-cols-2">
            <div className="px-[15px]">
              <ProductGallery typeGrid="list-3" product={product} />
            </div>
            <div className="px-[15px]">
              <AlertDialogTitle className="hidden"></AlertDialogTitle>
              <ProductTitle product={product} />
              <div className="mt-[30px]">
                <AddToCartButton product={product} />
              </div>
              <div className="mt-15">
                <ProductPolicy />
              </div>
              <div className="mt-[15px]">
                <ProductMeta product={product} />
              </div>
              <Link
                className="text-[#0f0f0f] flex items-center gap-1 text-sm uppercase underline mt-5 font-semibold hover:text-[#6f4323] transition-all"
                href={`/product/${product.slug}`}
              >
                Xem chi tiết <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProductQuickview;
