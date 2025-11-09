import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  "DANH MỤC": [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Sản phẩm", href: "/san-pham" },
    { label: "Tin tức", href: "/tin-tuc" },
    { label: "Liên hệ", href: "/lien-he" },
  ],
  "HỖ TRỢ": [
    { label: "Câu hỏi thường gặp", href: "/faq" },
    { label: "Dịch vụ khách hàng", href: "/dich-vu" },
    { label: "Vị trí cửa hàng", href: "/cua-hang" },
    { label: "Sản phẩm bán chạy", href: "/ban-chay" },
    { label: "Manufactures", href: "/manufactures" },
  ],
  "CHÍNH SÁCH": [
    { label: "Chính sách bảo mật", href: "/chinh-sach/bao-mat" },
    { label: "Chính sách giao nhận", href: "/chinh-sach/giao-nhan" },
    { label: "Chính sách đổi trả", href: "/chinh-sach/doi-tra" },
    { label: "Chính sách bảo hành", href: "/chinh-sach/bao-hanh" },
    { label: "Điều khoản & điều kiện", href: "/chinh-sach/dieu-khoan" },
  ],
};

const Footer = () => {
  return (
    <footer
      id="site-footer"
      className="relative bg-[url('https://cafengon.monamedia.net/wp-content/uploads/2024/12/h29-bg-footer2.jpg')] bg-center bg-cover bg-no-repeat py-12.5 "
    >
      <div className="inset-0 absolute bg-black/60 z-0"></div>
      <div className="max-w-[1260px] px-11 mx-auto relative z-1">
        <div className="grid grid-cols-12 items-start">
          {/* Logo + mô tả */}
          <div className="col-span-3">
            <Image
              src="https://cafengon.monamedia.net/wp-content/uploads/2025/01/The-mona-logo-e1736923312403.png"
              alt="Logo Mona Coffee"
              width={228}
              height={180}
              className="filter brightness-0 invert mb-4"
            />
            <p className="text-white text-sm leading-relaxed">
              Cà phê nguyên chất được chế biến 100% nguyên chất, không pha trộn
              với bất kỳ loại hạt cà phê nào khác.
            </p>
          </div>

          {/* Các cột link */}
          <div className="grid grid-cols-3 col-span-5 gap-3 px-3.75">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-bold mb-4 text-white">{title}</h3>
                <ul className="space-y-2 text-white text-sm">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* form submit */}
          <div className="text-white col-span-4 pl-10">
            <h2 className="uppercase mb-2.5 font-semibold">
              Đăng ký nhận tin tức
            </h2>
            <p className="text-sm mb-5">
              Đăng ký ngay để nhận ngay các tin tức khuyến mãi mới nhất của
              chúng tôi
            </p>
            <form action="" className="flex">
              <Input
                className="h-12 text-white rounded border rounded-e-none not-visited:border-white placeholder:text-white py-0 px-[15px]"
                placeholder="Nhập email..."
              />
              <Button className="font-bold uppercase rounded hover:bg-white text-black rounded-s-none bg-white px-5 h-12">
                Đăng ký
              </Button>
            </form>
            <div>
              <div className="flex items-center gap-7.5 mt-5">
                <h4 className="uppercase font-semibold">Theo dõi</h4>
                <div className="flex gap-4.5">
                  <Link href={"/"}>
                    <Facebook className="text-white fill-white" />
                  </Link>
                  <Link href="/">
                    <Instagram className="text-white" />
                  </Link>
                  <Link href="/">
                    <Youtube className="text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
