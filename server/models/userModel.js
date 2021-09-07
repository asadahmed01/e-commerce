import Joi from "joi";
import mongoose from "mongoose";

export const User = mongoose.model(
  "Users",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    address: {
      street: String,
      city: String,
      postalcode: String,
      province: String,
      country: String,
    },

    orders: [
      {
        id: Number,
        title: String,
        price: Number,
        url: String,
        description: String,
        added: Boolean,
        quantity: Number,
      },
    ],

    isAdmin: Boolean,
  })
);

export function validateUser(user) {
  const schema = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
  };
  return Joi.validate(user, schema);
}
