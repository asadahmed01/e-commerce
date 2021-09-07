import React from "react";
import { Link } from "react-router-dom";

const CheckoutOptions = () => {
  return (
    <div className="lg:grid grid-cols-2 pt-5 mx-10 mt-20">
      <div className="lg:border-r-2 border-gray-300 lg:pr-10 pb-10 text-center">
        <p className="font-semibold tracking-widest">Checkout as a Guest</p>
        <p className="text-gray-600 pt-3">No account? No problem.</p>
        <Link to="/checkout">
          <button className="text-white tracking-wider bg-gray-900 rounded mt-5 py-2 px-3 font-semibold w-full">
            Continue as Guest
          </button>
        </Link>
      </div>
      <div className="lg:pl-10 lg:border-none border-t-2 border-gray-300 text-center pb-10 lg:pt-0 pt-10">
        <p className="font-semibold tracking-widest">Sign In or Sign Up</p>
        <p className="text-gray-500 pt-3">Sign In to checkout fasters</p>
        <Link to="/signin">
          <button className="text-white tracking-wider bg-gray-900 rounded mt-5 py-2 px-3 font-semibold w-full">
            Sing In
          </button>
        </Link>

        <div className="border-b-2 border-gray-300 lg:mx-48 mx-28 ">
          <Link to="/register">
            <p className="pt-5 text-gray-600 cursor-pointer ">Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOptions;
