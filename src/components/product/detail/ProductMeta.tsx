import { Product } from "@/types/product";

const ProductMeta = ({ product }: { product: Product }) => {
  return (
    <div className="mt-[30px] pt-[30px] border-t border-[#e5e5e5]">
      <div className="flex items-center">
        <p className="text-sm text-[#333] border-r border-[#727272] pr-5 mr-4">
          Đã bán:
          <span className="font-medium">{product.sold}</span>
        </p>
        <p className="text-sm text-[#333]">
          Còn hàng:
          <span className="font-medium">{product.stock}</span>
        </p>
      </div>

      <div className="grid grid-cols-4 gap-[30px] mt-[25px]">
        {/* SKU */}
        <div className="text-sm">
          <p className="text-[#333]">Sku:</p>
          <p className="mt-1 font-medium text-[#0f0f0f]">{product.sku}</p>
        </div>

        {/* Danh mục */}
        <div className="text-sm col-span-2">
          <p className="text-[#333]">Danh mục:</p>
          <p className="mt-1 text-[#0f0f0f] font-medium">
            {product.categories.map((cat) => cat.name).join(", ")}
          </p>
        </div>

        {/* Từ khóa */}
        <div className="text-sm">
          <p className="text-[#333]">Từ khóa:</p>
          <p className="mt-1 text-[#0f0f0f] font-medium">
            {product.tags.map((tag) => tag.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductMeta;
