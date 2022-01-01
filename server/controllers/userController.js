import Stripe from "stripe";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { User, validateUser } from "../models/userModel.js";
import bcrypt from "bcryptjs";

dotenv.config();
const stripe = Stripe(process.env.SECRET_KEY, {
  apiVersion: "2020-08-27",
});

export const getPastOrders = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });

  if (!user)
    return res.json({ msg: "No account with email exists.", status: 400 });
  else res.send(user.orders);
};

export const getPublishablekey = (req, res) => {
  res.send({
    publishableKey: process.env.PUBLISH_KEY,
  });
};

export const chargePayment = async (req, res) => {
  const { paymentMethodType, currency, user, amount, address, orders } =
    req.body;
  const newOrder = orders[0];
  console.log(newOrder);
  // Create a PaymentIntent with the amount, currency, and a payment method type.

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: currency,
      payment_method_types: [paymentMethodType],
    });

    //update the user orders and address.

    // Send publishable key and PaymentIntent details to client

    if (user) {
      const filter = { _id: user.id };
      const update = { address: address, $push: { orders: newOrder } };
      const foundUser = await User.findOneAndUpdate(filter, update, {
        new: true,
      });
      foundUser.save();
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } else
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
  } catch (e) {
    res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
};

export const register = async (req, res) => {
  const { email, password, name } = req.body;

  const { error } = validateUser(req.body);

  if (error)
    return res.json({ message: error.details[0].message, status: 400 });
  //validate
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res.json({
        status: 400,
        message: "An account with this email already exist",
      });

    //salting and hashing the password the user enters
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    //construct the new user object
    const newUser = User({
      email,
      password: hashedPassword,
      name,
      isAdmin: false,
    });

    //save the user to the Databasee
    const savedUser = await newUser.save();
    res.json("Success");
  } catch (error) {
    res.json({ error: error.message, status: 500 });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validate the input fields
    if (!email || !password)
      return res.json({ msg: "All fields are required", status: 400 });
    const user = await User.findOne({ email: email });

    if (!user)
      return res.json({ msg: "No account with email exists.", status: 400 });
    //compare the password entered to the password stored in the DB
    const isMatch = await bcrypt.compare(password, user.password);
    //if no match, send error messsage
    if (!isMatch) res.json({ msg: "Password is incorrect.", status: 400 });
    //if passwords match, generate JWT token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
        address: user.address,
        orders: user.orders,
      },
      process.env.JWT_SECRET
    );
    res.json({ jwt: token });
  } catch (error) {
    res.json({ error: error.message, status: 500 });
  }
};
