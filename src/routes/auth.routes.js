import { Router } from "express";
import {
  login,
  logout,
  register,
  verifyToken,
} from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register); // Registro de usuarios
router.post("/login", validateSchema(loginSchema), login); // Inicio de sesión
router.get("/verify", verifyToken); // Verificación del token
router.post("/logout", verifyToken, logout); // Cierre de sesión

export default router;
