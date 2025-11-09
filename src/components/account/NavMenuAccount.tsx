import Link from "next/link";

const NavMenuAccount = () => {
  return (
    <div>
      <div className="border p-[30px]">
        <div className="py-[15px] border-b border-b-[#d4cbcb] text-sm hover:text-[#6f4323] text-[#454545] font-medium">
          <Link href="/tai-khoan">Tài khoản</Link>
        </div>
        <div className="py-[15px] border-b border-b-[#e8e8e8] text-sm hover:text-[#6f4323] text-[#454545] font-medium">
          <Link href="/tai-khoan/orders">Đơn hàng</Link>
        </div>
        <div className="py-[15px] text-sm hover:text-[#6f4323] text-[#454545] font-medium">
          <Link href="/tai-khoan/edit-account">Thông tin</Link>
        </div>
      </div>
    </div>
  );
};

export default NavMenuAccount;
