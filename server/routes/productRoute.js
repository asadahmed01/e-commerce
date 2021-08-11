import express from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";
import { validateObjectId } from "../middleware/validateObjectId.js";
const router = express.Router();

//Home route, get all products
router.get("/", getProducts);
router.get("/:id", validateObjectId, getProductById);
export default router;
