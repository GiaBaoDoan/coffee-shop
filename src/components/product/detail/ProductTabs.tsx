import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/types/product";

const ProductTabs = ({ product }: { product: Product }) => {
  return (
    <Tabs defaultValue="desc">
      <TabsList className="mb-10 gap-10 bg-transparent">
        <TabsTrigger
          className="
          data-[state=active]:text-[#6f4323] 
          data-[state=active]:border-[#6f4323] 
          font-normal uppercase text-lg transition-all
          hover:border-[#6f4323] 
          hover:text-[#6f4323]"
          value="desc"
        >
          Mô tả
        </TabsTrigger>
        <TabsTrigger
          className="
          data-[state=active]:text-[#6f4323] 
          data-[state=active]:border-[#6f4323] 
          font-normal uppercase text-lg transition-all
          hover:border-[#6f4323] 
          hover:text-[#6f4323]"
          value="review"
        >
          Đánh giá (0)
        </TabsTrigger>
      </TabsList>
      <TabsContent value="desc" className="pr-15 text-[#333]">
        <div
          className="text-[#333] leading-relaxed prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: product.descriptionDetail }}
        />
      </TabsContent>
      <TabsContent value="review" className="pr-15 text-[#333]">
        Chưa có 1 đánh giá nào về sản phẩm
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
