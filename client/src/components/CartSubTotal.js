import React from "react";
import { Link } from "react-router-dom";
import { getCurrentUser, guideNextPage } from "../utilities";

const CartSubTotal = ({ subtotal, data }) => {
  const handleCheckout = () => {
    localStorage.setItem("cartItems", JSON.stringify(data));
  };

  const user = getCurrentUser();
  return (
    <div className="mx-10 mt-10">
      <div className="flex md:justify-end justify-center font-semibold text-xl">
        <p className="pr-10">Subtotal</p>
        <p>${subtotal}</p>
      </div>
      <p className="md:text-right text-center pt-5">
        Taxes and shipping calculated at checkout
      </p>
      <div className="md:text-right text-center pt-10">
        <Link to={guideNextPage(user)}>
          <button
            className="border border-black px-8 py-2 font-semibold bg-gray-700 hover:bg-gray-600 text-white w-full md:w-1/4"
            onClick={handleCheckout}
          >
            CHECK OUT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartSubTotal;
