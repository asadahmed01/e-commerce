const Joi = require("joi");
const mongoose = require("mongoose");

const Product = mongoose.model(
  "Products",
  new mongoose.Schema({
    genre: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255,
    },

    numberInStock: {
      type: Number,
      required: true,
      min: 0,
      max: 255,
    },
    price: {
      type: Number,
      required: true,
    },
  })
);

function validateProduct(product) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    genre: Joi.string().required(),
    numberInStock: Joi.number().min(0).required(),
    price: Joi.number().min(0).required(),
  };

  return Joi.validate(product, schema);
}

exports.Product = Product;
exports.validate = validateProduct;
