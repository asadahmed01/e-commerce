import React from "react";
import { Link } from "react-router-dom";
import CartCounter from "./cartCounter";
import CartMobile from "./CartMobile";
import CartSubTotal from "./CartSubTotal";

const Cart = () => {
  return (
    <div>
      <h1 className="text-center pt-8 pb-3 md:text-5xl text-3xl font-bold tracking-wider">
        Your cart
      </h1>
      <Link to="/">
        <p className="underline text-center cursor-pointer">
          Continue Shopping
        </p>
      </Link>
      <div className="md:table mt-10 mx-10 hidden border-gray-300 border-b pb-5">
        <div className="table-row-group ">
          <div className="table-row">
            <div className="table-cell w-1/2 border-gray-300 border-b pb-3">
              PRODUCT
            </div>
            <div className="table-cell w-1/4 border-gray-300 border-b pb-3">
              PRICE
            </div>
            <div className="table-cell w-1/4 border-gray-300 border-b pb-3">
              QUANTITY
            </div>
            <div className="table-cell md:w-1/4  border-gray-300 border-b pb-3">
              TOTAL
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell pt-5">
              <div className="flex">
                <img
                  src="https://cdn.shopify.com/s/files/1/0260/1061/5830/products/Main_cumulus_olive_1024x1024@2x.png?v=1583784852"
                  className="w-24 h-24 pr-4"
                />
                <p>Gucci</p>
              </div>
            </div>
            <div className="table-cell pt-5 ">250.50</div>
            <div className="table-cell pt-5 ">
              <CartCounter />
            </div>

            <div className="table-cell pt-5 ">250.20</div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <CartMobile />
      </div>

      <CartSubTotal />
    </div>
  );
};

export default Cart;
