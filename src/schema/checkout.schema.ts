import z from "zod";

export const checkoutSchema = z.object({
  firstName: z.string().min(1, "Vui lòng nhập tên"),
  lastName: z.string().min(1, "Vui lòng nhập họ"),
  address: z.string().min(1, "Vui lòng nhập địa chỉ"),
  phone: z.string().min(9, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ"),
  note: z.string().optional(),
});

export type CheckoutFormType = z.infer<typeof checkoutSchema>;
