import express from "express";
import {
  getProducts,
  getProductById,
  postProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { auth } from "../middleware/auth.js";
import { validateObjectId } from "../middleware/validateObjectId.js";
const router = express.Router();

//Home route, get all products
router.get("/", getProducts);
router.get("/:id", validateObjectId, getProductById);
router.post("/postproduct", postProduct);
router.put("/:id", updateProduct);
router.delete("/:id", validateObjectId, deleteProduct);
export default router;
