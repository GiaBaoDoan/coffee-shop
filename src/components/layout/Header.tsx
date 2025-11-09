"use client";

import { cn } from "@/lib/utils";
import { Heart, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useScrollInfo } from "@/hook/use-scroll-dicrection";
import Link from "next/link";
import Image from "next/image";
import MiniCart from "@/components/cart/MiniCart";
import SearchInput from "@/components/layout/SearchInput";

const Header = () => {
  const { scrollDirection, isScrolled } = useScrollInfo(200);
  const pathname = usePathname();

  const isTransform = pathname === "/" && !isScrolled;

  return (
    <header
      className={cn(
        "left-0 right-0 z-50 transition-all duration-300 top-0",
        pathname === "/" ? "fixed" : "sticky",
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0",
        isTransform ? "bg-transparent text-white" : "bg-white shadow text-black"
      )}
    >
      <div className="max-w-[1290px] mx-auto px-11.25 relative z-10">
        <div className="flex items-center justify-between py-4">
          {/* NAV LINKS */}
          <nav>
            <ul className={cn("flex items-center gap-7.5")}>
              {[
                { href: "/gioi-thieu", label: "giới thiệu" },
                { href: "/shop", label: "sản phẩm" },
                { href: "/tin-tuc", label: "tin tức" },
                { href: "/lien-he", label: "liên hệ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    className={cn(
                      "uppercase font-medium text-sm hover:text-[#6f4323] transition-all"
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* LOGO */}
          <Link href="/">
            <Image
              src="https://cafengon.monamedia.net/wp-content/uploads/2025/01/The-mona-logo-e1736923312403.png"
              alt="Logo Mona Coffee"
              width={135}
              height={48}
              className={cn(
                "transition-all",
                isTransform ? "filter brightness-0 invert" : ""
              )}
            />
          </Link>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-[30px]">
            <SearchInput isTransform={!isTransform} />
            <div className={cn("flex gap-4")}>
              <Link href="/wishlist">
                <Heart className="stroke-[1.2]" />
              </Link>
              <Link href="/tai-khoan">
                <User className="stroke-[1.2]" />
              </Link>
              <MiniCart />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
