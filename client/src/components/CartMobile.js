import React from "react";
import CartCounter from "./cartCounter";

function CartMobile(props) {
  return (
    <div className="mx-10 border-gray-300 border-b pb-3 pt-10">
      <div className="flex justify-between border-gray-300 border-b pb-3">
        <p>PRODUCT</p>
        <p>PRICE</p>
      </div>

      <div className="flex justify-between pt-10">
        <div className="flex">
          <img
            src="https://cdn.shopify.com/s/files/1/0260/1061/5830/products/Main_cumulus_olive_1024x1024@2x.png?v=1583784852"
            className="w-24 h-24 pr-4"
          />
          <p>Gucci</p>
        </div>
        <div>
          <div className="">$250.50</div>
          <div className="pt-5">
            <CartCounter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartMobile;
