import React from "react";
import CheckoutCart from "./CheckoutCart";

const Checkout = () => {
  return (
    <div className="mx-10 md:flex mt-20">
      <div className="md:hidden md:w-1/2 w-full">
        <CheckoutCart />
      </div>
      <form className="md:w-1/2 w-full rounded leading-loose mr-2 mb-10">
        <p className="text-gray-800 font-medium text-xl py-5">
          Customer information
        </p>
        <div className="">
          <label className="block text-sm text-gray-00" for="cus_name">
            Name
          </label>
          <input
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required=""
            placeholder="Your Name"
            aria-label="Name"
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm text-gray-600" for="cus_email">
            Email
          </label>
          <input
            className="w-full px-5  py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Your Email"
            aria-label="Email"
          />
        </div>
        <div className="mt-2">
          <label className=" block text-sm text-gray-600" for="cus_email">
            Address
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Street"
            aria-label="Email"
          />
        </div>
        <div className="mt-2">
          <label className="hidden text-sm  text-gray-600" for="cus_email">
            City
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="City"
            aria-label="Email"
          />
        </div>
        <div className="inline-block mt-2 w-1/2 pr-1">
          <label className=" block text-sm text-gray-600" for="cus_email">
            Country
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Country"
            aria-label="Email"
          />
        </div>
        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label className=" block text-sm text-gray-600" for="cus_email">
            Postal Code
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Postal Code"
            aria-label="Email"
          />
        </div>

        <div className="mt-4">
          <button
            className="md:w-1/2 w-full px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded mt-10"
            type="submit"
          >
            Continue to Payment
          </button>
        </div>
      </form>

      <div className="hidden md:block md:w-1/2 w-full">
        <CheckoutCart />
      </div>
    </div>
  );
};

export default Checkout;
