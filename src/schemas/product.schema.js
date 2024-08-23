import { z } from "zod";

export const createProductSchema = z.object({
  title: z.string({
    required_error: "El titulo es obligatorio",
  }),
  description: z.string().optional(),
  date: z.string().datetime().optional(),
  quantity: z.number().int().positive().optional(), 
});


