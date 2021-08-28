import React from "react";
import CartCounter from "./cartCounter";

function CartMobile({ data }) {
  return (
    <div className="mx-10 border-gray-300 border-b pb-3 pt-10">
      <div className="flex justify-between border-gray-300 border-b pb-3">
        <p>PRODUCT</p>
        <p>PRICE</p>
      </div>
      {data.map((item, i) => (
        <div className="flex justify-between pt-10">
          <div className="flex">
            <img src={item.url} className="w-24 h-24 pr-4" />
            <p>{item.title}</p>
          </div>
          <div>
            <div className="">${item.price}</div>
            <div className="pt-5">
              <CartCounter item={item} qty={item.quantity} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartMobile;
