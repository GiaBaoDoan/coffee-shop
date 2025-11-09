import NavMenuAccount from "@/components/account/NavMenuAccount";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <article className="h-[290px] px-7.5 py-22.5 bg-[url('https://cafengon.monamedia.net/wp-content/uploads/2023/04/bread-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-[1290px] mx-auto">
          <h2 className="text-6xl text-[#2b0200] mb-4 font-semibold">
            Sản phẩm
          </h2>
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              className="text-[#727272] hover:text-[#454545] transition-all uppercase text-sm"
              href="/"
            >
              Trang chủ
            </Link>
            <ChevronRight className="text-[#727272] stroke-1 text-[8px]" />
            <span className="text-[#727272] hover:text-[#454545] transition-all uppercase text-sm">
              Tài khoản
            </span>
            <ChevronRight className="text-[#727272] stroke-1 text-[8px]" />
            <span className="font-bold text-[#454545] uppercase text-sm">
              Tài khoản
            </span>
          </div>
        </div>
      </article>

      <div className="max-w-[1290px] mx-auto px-[30px] py-20 grid grid-cols-12 gap-[50px]">
        <div className="col-span-4">
          <NavMenuAccount />
        </div>
        <div className="col-span-8">{children}</div>
      </div>
    </main>
  );
};

export default layout;
