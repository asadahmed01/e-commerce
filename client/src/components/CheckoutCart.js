import React from "react";

const CheckoutCart = () => {
  const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const total = items.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  );
  return (
    <div className="md:ml-2 md:pl-5 md:border-l border-gray-300 pb-14 h-full">
      <h3 className="pb-5 underline">Order Summary</h3>
      {items.map((item, i) => (
        <div
          className="flex justify-between p-5 border-b border-gray-200"
          key={i}
        >
          <div className="flex">
            <div>
              <img
                src={item.url}
                className="w-20 h-20 mr-4 rounded m-2 border border-gray-400"
              />
              <p className="m-2">Qty: {item.quantity}</p>
            </div>

            <p>{item.title}</p>
          </div>

          <p>${item.price}</p>
        </div>
      ))}
      <div className="flex justify-between pt-5 border-b border-gray-300 pb-5">
        <p>Total</p>
        <p className="font-bold text-3xl font-mono">${total}</p>
      </div>
    </div>
  );
};

export default CheckoutCart;
