import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "El usuario es requerido",
  }),
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email({
      message: "El Email no es valido",
    }),
  password: z
    .string({
      required_error: "Se requiere una contrase;a",
    })
    .min(6, {
      message: "La contrase;a debe ser de al menos 6 caracteres",
    }),
  rol: z.string({
      required_error: "El rol es requerido",
    }),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
