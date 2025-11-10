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
import { accountSchema, AccountSchemaType } from "@/schema/account.schema";
import { useAccountStore } from "@/strore/account-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2Icon } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const EditAccountForm = () => {
  const form = useForm<AccountSchemaType>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      address: "",
      phone: "",
      email: "",
    },
  });

  const { account, updateAccount } = useAccountStore();

  const onSubmit = (values: AccountSchemaType) => {
    updateAccount(values);
    toast.success("Đã cập nhật lại thông tin cho bạn!", {
      icon: <CheckCircle2Icon className="fill-[#34B233] text-white" />,
      duration: 2500,
    });
  };

  useEffect(() => {
    if (account) form.reset(account);
  }, [account, form]);

  return (
    <div>
      <Form {...form}>
        <form id="checkoutForm" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-[45px] mb-[25px]">
            <FormField
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
                      className="focus-visible:ring-0 shadow-none py-0! focus-visible:ring-offset-0 focus:outline-none h-12 px-5 border-[#d9d9d9] rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
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
                      className="focus-visible:ring-0 shadow-none py-0! focus-visible:ring-offset-0 focus:outline-none h-12 px-5 border-[#d9d9d9] rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-[25px]">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2.5 text-[#333]">
                    Tên hiển thị
                    <span className="text-[#a00] font-bold">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="focus-visible:ring-0 shadow-none py-0! focus-visible:ring-offset-0 focus:outline-none h-12 px-5 border-[#d9d9d9] rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-[25px]">
            <FormField
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
                      className="focus-visible:ring-0 shadow-none py-0! focus-visible:ring-offset-0 focus:outline-none h-12 px-5 border-[#d9d9d9] rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-[45px] mb-[25px]">
            <FormField
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
                      className="focus-visible:ring-0 shadow-none py-0! focus-visible:ring-offset-0 focus:outline-none h-12 px-5 border-[#d9d9d9] rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
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
                      className="focus-visible:ring-0 shadow-none py-0! focus-visible:ring-offset-0 focus:outline-none h-12 px-5 border-[#d9d9d9] rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <button className="text-sm mt-5 h-12 inline-block font-semibold border border-[#6f4323] bg-[#6f4323] px-[25px] py-[11px] capitalize text-white transition-all hover:bg-white hover:text-[#6f4323]">
            Lưu thay đổi
          </button>
        </form>
      </Form>
    </div>
  );
};

export default EditAccountForm;
