import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { getCurrentUser } from "../utilities";

const Payment = () => {
  const [loading, setloading] = useState(false);
  const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const address = JSON.parse(localStorage.getItem("address"));
  const user = getCurrentUser();
  console.log(user);
  const total = items.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  );
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    if (!stripe || !elements) return;
    //create payment intent on the server
    const { error: backenderror, clientSecret } = await fetch(
      `${process.env.REACT_APP_CREATE_INTENT_URL}/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodType: "card",
          currency: "cad",
          user,
          orders: items,
          address,
          amount: total,
        }),
      }
    ).then((r) => r.json());

    if (backenderror) {
      setloading(false);
      return toast.warn(`${backenderror.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    //comfirm payment on the client
    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(
            CardCvcElement,
            CardExpiryElement,
            CardNumberElement
          ),
        },
      });
    if (stripeError) {
      setloading(false);
      return toast.warn(`${stripeError.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    toast.success(`${paymentIntent.id} : ${paymentIntent.status}`, {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    if (paymentIntent.status === "succeeded") {
      setTimeout(() => {
        //window.location.pathname = "/";
        history.push("/");
      }, 2000);
    }
    localStorage.removeItem("cartItems");
    localStorage.removeItem("address");
    setloading(false);
  };
  return (
    <form
      className="mx-auto lg:w-1/2 w-full mt-10 px-4 pb-20"
      onSubmit={handleSubmit}
    >
      <label>Card Number</label>
      <CardNumberElement
        className="text-5xl p-5 font-bold border border-indigo-600 hover:shadow-2xl mb-4"
        fontSize="30"
      />

      <label>Expiray Date</label>
      <CardExpiryElement className="text-5xl p-5 font-bold border border-indigo-600 hover:shadow-2xl mb-4" />
      <label>CCV</label>
      <CardCvcElement className="p-5 font-bold border border-indigo-600 hover:shadow-2xl" />

      <div className="flex justify-center items-center flex-col">
        {loading ? (
          <FaSpinner size="40" className="mt-3 animate-spin text-gray-500" />
        ) : (
          ""
        )}

        <button className="lg:px-8 py-2 text-white font-light tracking-wider bg-gray-900 rounded mt-5 text-2xl w-full">
          Pay Now (${total})
        </button>
      </div>
    </form>
  );
};

export default Payment;
