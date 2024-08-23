import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getProduct,
  updateProduct,
} from "../controllers/products.controllers.js";
import { auth , isAdmin} from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createProductSchema } from "../schemas/product.schema.js";

const router = Router();

router.get("/products", auth, getProducts);
router.get("/products/:id", auth, getProduct);

router.post("/products", auth, validateSchema(createProductSchema),isAdmin, createProduct);
router.put("/products/:id", auth, validateSchema(createProductSchema), isAdmin,updateProduct);
router.delete("/products/:id", auth, isAdmin, deleteProduct);

export default router;
