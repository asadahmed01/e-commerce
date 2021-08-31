import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
(async () => {
  const { publishableKey } = await fetch(
    `${process.env.REACT_APP_BASE_URL}/config`
  ).then((response) => response.json());

  const stripePromise = loadStripe(publishableKey);
  ReactDOM.render(
    <React.StrictMode>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </React.StrictMode>,
    document.getElementById("root")
  );
})();
