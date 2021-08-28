import Joi from "joi";
import mongoose from "mongoose";

export const Product = mongoose.model(
  "Products",
  new mongoose.Schema({
    category: {
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

    url: { type: String, required: true },
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
    description: {
      type: String,
      required: true,
    },
    thumbnails: [
      {
        type: String,
      },
    ],
  })
);

export function validateProduct(product) {
  const schema = {
    category: Joi.string().required(),
    title: Joi.string().max(50).required(),
    numberInStock: Joi.number().min(0).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().required(),
    url: Joi.string().required(),
    thumbnails: Joi.array().items(Joi.string().required()),
  };
  return Joi.validate(product, schema);
}

// exports.Product = Product;
// exports.validate = validateProduct;
