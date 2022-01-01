import express from "express";
const router = express.Router();
import {
  chargePayment,
  getPastOrders,
  getPublishablekey,
  register,
  signin,
} from "../controllers/userController.js";
import { validateUser } from "../models/userModel.js";
router.get("/config", getPublishablekey);
router.get("/pastorders/:id", getPastOrders);
router.post("/create-payment-intent", chargePayment);
router.post("/register", register);
router.post("/login", signin);

export default router;
