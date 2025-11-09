// contact.schema.ts
import { z } from "zod";

/**
 * Regex cho số điện thoại VN:
 * - Hỗ trợ: 0xxxxxxxxx (10 chữ số) hoặc 01x... (older) hoặc +84xxxxxxxxx
 * - Áp dụng phổ thông cho các đầu số di động hiện nay: 3,5,7,8,9
 */
const vnPhoneRegex = /^(?:\+84|0)(3|5|7|8|9)\d{8}$/;

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Họ tên phải có ít nhất 2 ký tự.")
    .max(100, "Họ tên không quá 100 ký tự."),

  email: z
    .string()
    .trim()
    .email("Email không hợp lệ.")
    .max(254, "Email quá dài."),

  phone: z
    .string()
    .transform((s) => s.replace(/\s+/g, "")) // loại bỏ khoảng trắng
    .refine((s) => vnPhoneRegex.test(s), {
      message:
        "Số điện thoại không hợp lệ (ví dụ: 0912345678 hoặc +84912345678).",
    }),

  message: z
    .string()
    .trim()
    .min(10, "Nội dung tối thiểu 10 ký tự.")
    .max(2000, "Nội dung quá dài (tối đa 2000 ký tự)."),
  content: z
    .string()
    .trim()
    .min(10, "Nội dung tối thiểu 10 ký tự.")
    .max(2000, "Nội dung quá dài (tối đa 2000 ký tự)."),
});

export type ContactSchema = z.infer<typeof contactSchema>;
