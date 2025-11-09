"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useCartStore } from "@/strore/cart-store";
import { calculateDiscountValue, cn, formatVND } from "@/lib/utils";
import { CheckoutFormType, checkoutSchema } from "@/schema/checkout.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useCheckoutStore } from "@/strore/checkout-store";
import { CircleAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import { CheckoutRequest } from "@/types/checkout";
import { useDiscountCode } from "@/strore/validate-discount-store";
import { useOrderStore } from "@/strore/order-store";
import { useAccountStore } from "@/strore/account-store";

const CheckoutForm = () => {
  const router = useRouter();
  const form = useForm<CheckoutFormType>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      email: "",
      note: "",
    },
  });

  const { cart, getTotalPrice, clearCart } = useCartStore();

  const { checkoutOrder, error, loading, order, success, clearCheckoutStore } =
    useCheckoutStore();

  const { account } = useAccountStore();

  const { discount } = useDiscountCode();
  const { listOrders } = useOrderStore();

  const discountAmount = calculateDiscountValue(discount, getTotalPrice());

  const [paymentMethod, setPaymentMethod] = useState<
    "code" | "bank_transfer" | string
  >("bank_transfer");

  const onSubmit = (data: CheckoutFormType) => {
    const newOrder: CheckoutRequest = {
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      phone: data.phone,
      email: data.email,
      note: data.note ?? "",
      discount: discount?.id,
      discountAmount,
      discountCode: discount?.code,
      paymentMethod: paymentMethod as "cod" | "bank_transfer",
      items: cart.map((item) => ({
        productId: item.documentId,
        quantity: item.quantity,
      })),
    };

    checkoutOrder(newOrder);
  };

  useEffect(() => {
    if (success && order) {
      router.push(`/xac-nhan-don-hang?orderId=${order.documentId}`);
      clearCart();
      listOrders(order);
      clearCheckoutStore();
    }
  }, [success, router, order, clearCart]);

  useEffect(() => {
    if (account) {
      form.reset(account);
    }
  }, [account]);

  return (
    <section>
      {error && (
        <div className="px-5">
          <div className="border border-[#d9d9d9] bg-[#f6f5f8] pr-15 pl-7.5 py-7.5 mb-7.5">
            <div className="flex items-center gap-[15px]">
              <CircleAlert className="text-[#6f4323]" />
              <div className="flex gap-1">
                <span className="text-[#515151] text-sm">
                  Đã có lỗi xảy ra:
                </span>
                <p className="text-[#6f4323] text-sm font-semibold hover:underline">
                  {error}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-12">
        {/* left section */}
        <div className="col-span-7 px-5">
          <h3 className="mb-5 text-[#0f0f0f] text-lg font-semibold capitalize">
            Thông tin thanh toán
          </h3>
          <Form {...form}>
            <form id="checkoutForm" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-[45px] mb-[25px]">
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2.5 text-[#333]">
                        Tên <span className="text-[#a00] font-bold">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="focus-visible:ring-0 shadow-none py-0! focus-visible:ring-offset-0 focus:outline-none h-14 px-5 border-[#d9d9d9] rounded-[5px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2.5 text-[#333]">
                        Họ <span className="text-[#a00] font-bold">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="focus-visible:ring-0 shadow-none py-0! focus-visible:ring-offset-0 focus:outline-none h-14 px-5 border-[#d9d9d9] rounded-[5px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-[25px]">
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2.5 text-[#333]">
                        Địa chỉ <span className="text-[#a00] font-bold">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Số nhà và tên đường,..."
                          {...field}
                          className="focus-visible:ring-0 shadow-none py-0! focus-visible:ring-offset-0 focus:outline-none h-14 px-5 border-[#d9d9d9] rounded-[5px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-[45px] mb-[25px]">
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2.5 text-[#333]">
                        Số điện thoại{" "}
                        <span className="text-[#a00] font-bold">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="focus-visible:ring-0 shadow-none py-0! focus-visible:ring-offset-0 focus:outline-none h-14 px-5 border-[#d9d9d9] rounded-[5px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={loading}
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2.5 text-[#333]">
                        Địa chỉ email{" "}
                        <span className="text-[#a00] font-bold">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          {...field}
                          className="focus-visible:ring-0 shadow-none py-0! focus-visible:ring-offset-0 focus:outline-none h-14 px-5 border-[#d9d9d9] rounded-[5px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <h3 className="mb-5 text-[#0f0f0f] text-lg font-semibold capitalize">
                  Thông tin bổ sung
                </h3>
                <div>
                  <FormField
                    disabled={loading}
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="mb-2.5 text-[#333]">
                          Ghi chú đơn hàng (tuỳ chọn)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Ghi chú về đơn đặt hàng của bạn, ví dụ: ghi chú đặc biệt để giao hàng."
                            className="pt-[15px] pb-2.5 px-5 focus-visible:ring-0 shadow-none focus-visible:ring-offset-0 focus:outline-none h-[150px] border-[#d9d9d9] rounded-[5px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </form>
          </Form>
        </div>
        {/* right section */}
        <div className="col-span-5 px-5">
          <h3 className="mb-5 text-[#0f0f0f] text-lg font-semibold capitalize">
            Đơn hàng của bạn
          </h3>
          <div>
            <div className="flex justify-between items-center pb-5 border-b border-[#e9e6ed]">
              <h4 className="font-semibold text-[#333]">Sản phẩm</h4>
              <h4 className="font-semibold text-[#333]">Tạm tính</h4>
            </div>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-[#e9e6ed] py-5"
              >
                <p className="text-sm text-[#333]">
                  {item.name} x {item.quantity}
                </p>
                <p className="text-[#333] text-sm font-semibold">
                  {formatVND(item.price * item.quantity)}
                </p>
              </div>
            ))}

            <div className="flex items-center justify-between py-5 border-b border-[#e9e6ed]">
              <p className="font-bold text-sm">Tạm tính</p>
              <p className="font-semibold text-[#6f4323]">
                {formatVND(getTotalPrice())}
              </p>
            </div>
            {discount && (
              <div className="flex items-center justify-between py-5 border-b border-[#e9e6ed]">
                <p className="font-bold text-sm">Giảm giá</p>
                <p className="font-semibold text-[#6f4323]">
                  -{formatVND(discountAmount)}
                </p>
              </div>
            )}
            <div className="mb-1.5 flex items-center justify-between py-5 border-b border-[#e9e6ed]">
              <p className="font-bold text-sm">Tổng</p>
              <p className="font-semibold text-[#6f4323]">
                {formatVND(
                  Math.max(getTotalPrice() - (discountAmount ?? 0), 0)
                )}
              </p>
            </div>
          </div>
          <div className="mt-[30px] border border-[#d9d9d9] rounded-[5px]">
            <RadioGroup
              disabled={loading}
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="p-[30px]"
            >
              {/* Chuyển khoản ngân hàng */}
              <div>
                <div className="flex items-center space-x-4">
                  <RadioGroupItem value="bank_transfer" id="bank_transfer" />
                  <Label
                    htmlFor="bank_transfer"
                    className="cursor-pointer text-[#333] font-normal"
                  >
                    Chuyển khoản ngân hàng
                  </Label>
                </div>

                <AnimatePresence mode="wait">
                  {paymentMethod === "bank_transfer" && (
                    <motion.div
                      key="bank_transfer"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={cn(
                        "relative rounded-[2px] bg-[#dcd7e3] p-4 my-4 text-sm text-[#515151]",
                        "before:content-[''] before:block before:absolute",
                        "before:border-[14.72px] before:border-[#dcd7e3]",
                        "before:border-r-transparent before:border-l-transparent before:border-t-transparent",
                        "before:top-[-11.04px] before:left-0 before:mt-[-14.72px] before:ml-[29.44px]"
                      )}
                    >
                      Thực hiện thanh toán vào ngay tài khoản ngân hàng của
                      chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần
                      Nội dung thanh toán. Đơn hàng sẽ được giao sau khi tiền đã
                      chuyển.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Trả tiền mặt khi nhận hàng */}
              <div>
                <div className="flex items-center space-x-4">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label
                    htmlFor="cod"
                    className="text-[#333] cursor-pointer font-normal"
                  >
                    Trả tiền mặt khi nhận hàng
                  </Label>
                </div>
                <AnimatePresence mode="wait">
                  {paymentMethod === "cod" && (
                    <motion.div
                      key="cod"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={cn(
                        "relative rounded-[2px] bg-[#dcd7e3] p-4 my-4 text-sm text-[#515151]",
                        "before:content-[''] before:block before:absolute",
                        "before:border-[14.72px] before:border-[#dcd7e3]",
                        "before:border-r-transparent before:border-l-transparent before:border-t-transparent",
                        "before:top-[-11.04px] before:left-0 before:mt-[-14.72px] before:ml-[29.44px]"
                      )}
                    >
                      Trả tiền mặt khi giao hàng.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RadioGroup>
            <div className="p-[30px] border-t text-[#333] text-sm">
              <p className="leading-6 mb-[25px]">
                Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng,
                hỗ trợ trải nghiệm của bạn trên trang web này và cho các mục
                đích khác được mô tả trong Chính sách bảo mật của chúng tôi.
              </p>
              <div className="flex justify-end">
                <button
                  disabled={loading}
                  type="submit"
                  form="checkoutForm"
                  onClick={() => form.handleSubmit(onSubmit)}
                  className="text-sm rounded-[5px] h-12 inline-block font-semibold border border-[#6f4323] bg-[#6f4323] px-[25px] py-[11px] capitalize text-white transition-all hover:bg-white hover:text-[#6f4323]"
                >
                  {loading ? "Đang thanh toán" : "Đặt hàng"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
