import { z } from "zod";

export const createCardSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(10, {
      message: "Name can be at most 10 characters",
    }),
  description: z
    .string()
    .trim()
    .min(5, {
      message: "Description must be at least 5 characters.",
    })
    .max(50, {
      message: "Description can be at most 50 characters",
    }),
});
