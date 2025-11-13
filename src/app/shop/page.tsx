import { getLastestProducts, getProducts } from "@/apis/product";
import { PaginationMeta, TypeSearchParams } from "@/types/api";
import { ChevronRight } from "lucide-react";
import { getCategories } from "@/apis/catgories";
import Link from "next/link";
import Shop from "@/components/shop/Shop";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<TypeSearchParams>;
}) => {
  // Chờ searchParams resolve 1 lần
  const params = await searchParams;

  // Chạy song song các request
  const [{ data: products, meta }, categories = [], lastestProducts = []] =
    await Promise.all([
      getProducts(params),
      // getCategories(),
      // getLastestProducts(),
    ]);

  const search = params.search;

  return (
    <div>
      <article className="h-[290px] px-7.5 py-22.5 bg-[url('https://cafengon.monamedia.net/wp-content/uploads/2023/04/bread-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-[1290px] mx-auto">
          <h2 className="text-6xl text-[#2b0200] mb-4 font-semibold">
            {search ? `Kết quả tìm kiếm: "${search}"` : "Sản phẩm"}
          </h2>
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              className="text-[#727272] hover:text-[#454545] transition-all uppercase text-sm"
              href="/"
            >
              Trang chủ
            </Link>
            <ChevronRight className="text-[#727272] stroke-1 text-[8px]" />
            <span className="font-bold text-[#454545] uppercase text-sm">
              Sản phẩm
            </span>

            {search && (
              <div className="flex items-center gap-3 flex-wrap">
                <ChevronRight className="text-[#727272] stroke-1 text-[8px]" />
                <span className="font-bold text-[#454545] uppercase text-sm">
                  Kết quả tìm kiếm: "{search}"
                </span>
              </div>
            )}
          </div>
        </div>
      </article>
      <Shop
        categories={categories}
        lastestProducts={lastestProducts}
        products={products}
        meta={meta as PaginationMeta}
      />
    </div>
  );
};

export default Page;
