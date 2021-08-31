import express from "express";
const router = express.Router();
import {
  chargePayment,
  getPublishablekey,
} from "../controllers/userController.js";
router.get("/config", getPublishablekey);
router.post("/create-payment-intent", chargePayment);
export default router;
