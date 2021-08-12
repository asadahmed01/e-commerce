import express from "express";
import {
  getProducts,
  getProductById,
  postProduct,
  updateProduct,
} from "../controllers/productController.js";
import { validateObjectId } from "../middleware/validateObjectId.js";
const router = express.Router();

//Home route, get all products
router.get("/", getProducts);
router.get("/:id", validateObjectId, getProductById);
router.post("/postproduct", postProduct);
router.put("/:id", updateProduct);
export default router;
