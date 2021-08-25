import React from "react";

const CheckoutCart = () => {
  return (
    <div className="md:ml-2 md:pl-5 md:border-l border-gray-300 pb-14 h-full">
      <h3 className="pb-5 underline">Order Summary</h3>
      <div className="flex justify-between p-5 border-b border-gray-200">
        <div className="flex">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0260/1061/5830/products/Main_cumulus_olive_1024x1024@2x.png?v=1583784852"
              className="w-20 h-20 mr-4 rounded m-2 border border-gray-400"
            />
            <p className="m-2">Qty: 2</p>
          </div>

          <p>Gucci</p>
        </div>
        <p>$195.20</p>
      </div>

      <div className="flex justify-between pt-5 border-b border-gray-300 pb-5">
        <p>Total</p>
        <p className="font-bold text-3xl">$195.00</p>
      </div>
    </div>
  );
};

export default CheckoutCart;
