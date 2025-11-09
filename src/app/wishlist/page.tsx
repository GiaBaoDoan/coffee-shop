import ShareButtons from "@/components/wishlist/ShareButtons";
import Wishlist from "@/components/wishlist/Wishlist";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {/* tieu de trang lien he */}
      <article className="h-[290px] px-[30px] py-[90px] bg-[url('https://cafengon.monamedia.net/wp-content/uploads/2023/04/bread-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-[1290px] mx-auto">
          <h2 className="text-6xl text-[#2b0200] mb-4 font-semibold">
            Wishlist
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
              Wishlist
            </span>
          </div>
        </div>
      </article>
      <div className="mb-[30px]">
        <Wishlist />
      </div>
    </div>
  );
};

export default page;
