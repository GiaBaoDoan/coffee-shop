import z from "zod";

export const DiscountSchema = z.object({
  code: z
    .string()
    .min(3, "Mã giảm giá phải có ít nhất 3 ký tự")
    .max(20, "Mã giảm giá quá dài"),
});

export type DiscountFormValues = z.infer<typeof DiscountSchema>;
