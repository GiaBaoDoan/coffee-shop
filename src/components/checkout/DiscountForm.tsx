"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formatVND } from "@/lib/utils";
import { DiscountFormValues, DiscountSchema } from "@/schema/discount.schema";
import { useDiscountCode } from "@/strore/validate-discount-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const DiscountCodeForm = () => {
  const [showCode, setShowCode] = useState(false);

  const form = useForm<DiscountFormValues>({
    resolver: zodResolver(DiscountSchema),
    defaultValues: { code: "" },
  });

  const { discount, error, loading, success, validateDiscountCode } =
    useDiscountCode();

  const onSubmit = async (values: DiscountFormValues) => {
    await validateDiscountCode(values.code);
  };

  // ⚡ Khi có lỗi => set vào form
  useEffect(() => {
    if (error) {
      form.setError("code", { type: "server", message: error });
    }
  }, [error]);

  // ⚡ Khi có lỗi validate của form => cũng tắt success
  useEffect(() => {
    const hasError = !!form.formState.errors.code;
    if (hasError) {
      useDiscountCode.setState({ success: false });
    }
  }, [form.formState.errors.code, form]);

  return (
    <div className="px-5">
      <div className="rounded-[5px] border border-[#d9d9d9] bg-[#f6f5f8] pr-15 pl-7.5 py-7.5 mb-7.5">
        <div className="flex items-center gap-[15px]">
          <CircleAlert className="text-[#6f4323]" />
          <div>
            <span className="text-[#515151] text-sm">Bạn có mã ưu đãi? </span>
            <button
              onClick={() => setShowCode(!showCode)}
              type="button"
              className="text-[#0f0f0f] text-sm cursor-pointer hover:underline hover:text-[#6f4323] transition-all"
            >
              Ấn vào đây để nhập mã
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden my-8 transition-all duration-500 ease-in-out ${
          showCode ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="rounded-[5px] border border-[#d9d9d9] p-[30px] overflow-hidden">
              <h3 className="mb-[15px] leading-6 text-[#333] text-sm">
                Nếu bạn có mã giảm giá, vui lòng điền vào phía bên dưới.
              </h3>

              <FormField
                disabled={loading}
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-5">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Mã giảm giá"
                          className="focus-visible:ring-0 w-1/4 inline-block shadow-none focus-visible:ring-offset-0 focus:outline-none h-12 leading-12 px-5 border-[#d9d9d9] rounded-[5px]"
                        />
                      </FormControl>
                      <button
                        disabled={loading}
                        type="submit"
                        className="rounded-[5px] text-sm leading-6 inline-block font-semibold border border-[#6f4323] bg-[#6f4323] px-[25px] py-[11px] capitalize text-white transition-all hover:bg-white hover:text-[#6f4323]"
                      >
                        {loading ? "Đang kiểm tra..." : "Áp dụng"}
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* ✅ Chỉ hiển thị khi success và không có lỗi */}
              {success && discount && (
                <div className="mt-2 flex flex-wrap items-center gap-1 text-[#198754] text-sm">
                  <p className="font-medium flex items-center gap-1">
                    Mã <span className="font-semibold">"{discount.code}"</span>{" "}
                    hợp lệ!
                  </p>
                  <p className="flex gap-1 items-center">
                    Giảm
                    <span className="font-semibold">
                      {discount.type === "percent"
                        ? `${discount.value}%`
                        : `${formatVND(discount.value)}`}
                    </span>
                    cho đơn hàng của bạn.
                  </p>
                </div>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default DiscountCodeForm;
