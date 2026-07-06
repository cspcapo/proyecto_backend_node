import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

const router = Router();

// Prefijo: /api/products
router.use(auth);
router.get("/", getAllProducts);
router.post("/", createProduct);
router.post("/create", createProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;