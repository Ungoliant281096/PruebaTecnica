import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Ingresa un correo valido",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe ser mayor de 8 caracteres",
  }),
});

export const registerSchema = z
  .object({
    username: z
      .string({
        required_error: "Nombre de usuario requerido",
      })
      .min(3, {
        message: "El nombre de usuario debe ser mayor a 3 caracteres",
      }),
    email: z.string().email({
      message: "Ingresa un correo valido",
    }),
    password: z.string().min(8, {
      message: "La contraseña debe ser mayor de 8 caracteres",
    }),
    confirmPassword: z.string().min(8, {
      message: "La contraseña debe ser mayor de 8 caracteres",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
