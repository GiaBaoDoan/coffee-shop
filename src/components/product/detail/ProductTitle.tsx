import { formatVND } from "@/lib/utils";
import { Product } from "@/types/product";

const ProductTitle = ({ product }: { product: Product }) => {
  return (
    <div>
      <h2 className="text-[#2b2a00] text-[26px] font-bold">{product.name}</h2>
      <div className="mt-[17px]">
        <p className="text-[#444]">{product.descriptionShort}</p>
        <div className="flex items-center justify-start gap-[15px] mt-4 pb-[30px] border-b border-[#d9d9d9]">
          {product.onSale && (
            <p className="text-[#727272] line-through font-medium">
              {formatVND(product.price)}
            </p>
          )}
          <p className="text-[#a80909] text-xl font-bold">
            {product.onSale
              ? formatVND(product.salePrice as number)
              : formatVND(product.price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductTitle;
