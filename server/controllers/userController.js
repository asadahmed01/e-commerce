import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const stripe = Stripe(process.env.SECRET_KEY, {
  apiVersion: "2020-08-27",
});

export const getPublishablekey = (req, res) => {
  res.send({
    publishableKey: process.env.PUBLISH_KEY,
  });
};

export const chargePayment = async (req, res) => {
  const { paymentMethodType, currency, customer } = req.body;
  console.log(req.body);
  // Create a PaymentIntent with the amount, currency, and a payment method type.

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000,
      currency: currency,
      payment_method_types: [paymentMethodType],
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
      gg,
    });
  } catch (e) {
    res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
};
