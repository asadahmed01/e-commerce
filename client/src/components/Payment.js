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

const Payment = (props) => {
  const [loading, setloading] = useState(false);
  const { state } = props.location;

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
          customer: state.customerInfo,
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
        history.push("/");
      }, 2000);
    }
    setloading(false);
  };
  return (
    <form
      className="mx-auto lg:w-1/2 w-full mt-10 px-4"
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

      <div className="text-center">
        {loading ? <FaSpinner size="30" className="mt-5" /> : ""}

        <button className="lg:px-8 py-2 text-white font-light tracking-wider bg-gray-900 rounded mt-10 text-2xl w-full">
          Pay Now
        </button>
      </div>
    </form>
  );
};

export default Payment;
