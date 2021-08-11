const express = require("express");
const router = express.Router();
const { getProducts } = require("../controllers/productController");
//Home route, get all products

router.get("/", getProducts);

module.exports = router;
