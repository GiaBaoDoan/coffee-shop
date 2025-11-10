"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactSchema } from "@/schema/contact.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      content: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactSchema) => {
    return data;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-3 gap-[30px] mb-[30px]">
          {/* full name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Họ tên*"
                    {...field}
                    className="focus-visible:ring-0 shadow-none focus-visible:ring-offset-0 focus:outline-none h-14 px-5 border-[#d9d9d9] rounded-[5px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* phone number */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Số điện thoại*"
                    {...field}
                    className="focus-visible:ring-0 shadow-none focus-visible:ring-offset-0 focus:outline-none h-14 px-5 border-[#d9d9d9] rounded-[5px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email*"
                    {...field}
                    className="focus-visible:ring-0 shadow-none focus-visible:ring-offset-0 focus:outline-none h-14 px-5 border-[#d9d9d9] rounded-[5px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    rows={10}
                    cols={40}
                    placeholder="Nội dung"
                    {...field}
                    className="focus-visible:ring-0 shadow-none focus-visible:ring-offset-0 focus:outline-none h-40 px-5 py-2.5 border-[#d9d9d9] rounded-[5px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button className="rounded-[5px] border border-[#6f4323] bg-[#6f4323] py-[25px] px-[11px] font-bold capitalize text-white transition-all hover:bg-white hover:text-[#6f4323] min-w-[300px]">
          GỬI LIÊN HỆ
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
