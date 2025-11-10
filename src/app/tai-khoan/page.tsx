"use client";

import { useAccountStore } from "@/strore/account-store";

const AccountPage = () => {
  const { account } = useAccountStore();
  return (
    <section>
      <div className="text-[#333]">
        <p>
          Xin chào <strong>{account ? account?.userName : "Bạn"}</strong>! Nếu
          đây không phải tài khoản của bạn, hãy thoát ra và đăng nhập bằng tài
          khoản đúng để đảm bảo an toàn.
        </p>
        <br />
        Từ trang quản lý tài khoản, bạn có thể dễ dàng theo dõi các đơn hàng
        mới, quản lý địa chỉ giao hàng và phương thức thanh toán, cũng như cập
        nhật thông tin cá nhân và mật khẩu của mình. Mọi thao tác đều được thiết
        kế để bạn quản lý tài khoản một cách thuận tiện và an toàn.
      </div>
    </section>
  );
};

export default AccountPage;
