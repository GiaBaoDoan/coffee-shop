import { cn } from "@/lib/utils";
import { useWishlistStore } from "@/strore/wishList-store";
import { Product } from "@/types/product";
import { CheckCircle2, Heart, Share2 } from "lucide-react";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import ShareButtons from "@/components/wishlist/ShareButtons";

const ProductSoical = ({ product }: { product: Product }) => {
  const { addToWishlist, items } = useWishlistStore();

  const isInLoveList = items.find((i) => i.documentId === product.documentId);

  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    addToWishlist(product);
    if (!isInLoveList) {
      toast.success("Đã thêm vào Wish List", {
        description: `"${product.name}" đã được thêm vào danh sách yêu thích của bạn.`,
        icon: <CheckCircle2 className="fill-[#34b233] text-white" />,
        duration: 2500,
      });
    }
  };

  return (
    <div className="flex mt-[30px] items-center gap-[5px]">
      <button
        onClick={handleOnClick}
        className={cn(
          `hover:bg-[#6f4323] hover:text-white border transition-all border-[#D6D6D6] w-10 h-10 rounded-[5px] flex items-center justify-center`,
          isInLoveList ? "bg-[#6f4323] text-white" : ""
        )}
      >
        <Heart className="stroke-[1.2]" />
      </button>
      <button
        onClick={() => setOpen(true)}
        className="hover:bg-[#6f4323] transition-all hover:text-white border-[#D6D6D6] border w-10 h-10 rounded-[5px] flex items-center justify-center"
      >
        <Share2 className="stroke-[1.2]" />
      </button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="hidden"></AlertDialogTitle>
            <AlertDialogDescription asChild>
              <ShareButtons />
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProductSoical;
