import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutCart from "./CheckoutCart";
import InputForm from "./InputForm";

const Checkout = () => {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    country: "",
    province: "",
    postalcode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mx-10 md:flex mt-20">
      <div className="md:hidden md:w-1/2 w-full">
        <CheckoutCart />
      </div>
      <form className="md:w-1/2 w-full rounded leading-loose mr-2 mb-10">
        <p
          className="text-gray-800 font-medium text-xl py-5"
          onSubmit={handleSubmit}
        >
          Customer information
        </p>
        <InputForm
          type="text"
          value={customerInfo.name}
          placeholder="Your Name"
          label="Name"
          name="name"
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, name: e.target.value })
          }
        />
        <div className="mt-2">
          <InputForm
            type="text"
            value={customerInfo.email}
            placeholder="Your Emails"
            label="Email"
            name="email"
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, email: e.target.value })
            }
          />
        </div>
        <div className="mt-2">
          <InputForm
            type="text"
            value={customerInfo.street}
            placeholder="123 streetname"
            label="Street"
            name="street"
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, street: e.target.value })
            }
          />
        </div>
        <div className="mt-2">
          <InputForm
            type="text"
            value={customerInfo.city}
            placeholder="City"
            label="City"
            name="city"
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, city: e.target.value })
            }
          />
        </div>
        <div className="inline-block mt-2 w-1/2 pr-1">
          <InputForm
            type="text"
            value={customerInfo.country}
            placeholder="Country"
            label="Country"
            name="country"
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, country: e.target.value })
            }
          />
        </div>
        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <InputForm
            type="text"
            value={customerInfo.postalcode}
            placeholder="1A1 1A1"
            label="Postal Code"
            name="postalcode"
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, postalcode: e.target.value })
            }
          />
        </div>

        <div className="mt-4">
          <Link
            to={{
              pathname: "/payment",

              state: { customerInfo },
            }}
          >
            <button
              className="md:w-1/2 w-full px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded mt-10"
              type="submit"
            >
              Continue to Payment
            </button>
          </Link>
        </div>
      </form>

      <div className="hidden md:block md:w-1/2 w-full">
        <CheckoutCart />
      </div>
    </div>
  );
};

export default Checkout;
