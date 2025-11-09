import z from "zod";

export const accountSchema = z.object({
  firstName: z.string().min(1, "Vui lòng nhập tên"),
  lastName: z.string().min(1, "Vui lòng nhập họ"),
  userName: z.string().min(1, "Vui lòng nhập tên"),
  address: z.string().min(1, "Vui lòng nhập địa chỉ"),
  phone: z.string().min(9, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ"),
});

export type AccountSchemaType = z.infer<typeof accountSchema>;
