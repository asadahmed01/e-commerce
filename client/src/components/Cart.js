import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCounter from "./cartCounter";
import CartMobile from "./CartMobile";
import CartSubTotal from "./CartSubTotal";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.entities.cart);
  const total = products.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  );
  return (
    <div className="py-10">
      <h1 className="text-center pt-8 pb-3 md:text-5xl text-3xl font-bold tracking-wider">
        Your cart
      </h1>
      <Link to="/">
        <p className="underline text-center cursor-pointer">
          Continue Shopping
        </p>
      </Link>
      <div className="md:table mt-10 mx-10 hidden  pb-5">
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
          {products.map((product, i) => (
            <div className="table-row" key={i}>
              <div className="table-cell pt-5 border-gray-300 border-b pb-3">
                <div className="flex">
                  <img
                    src={product.url}
                    className="w-24 h-24 pr-4"
                    alt="product image"
                  />
                  <p>{product.title}</p>
                </div>
              </div>
              <div className="table-cell pt-5 border-gray-300 border-b pb-3">
                {product.price}
              </div>
              <div className="table-cell pt-5 border-gray-300 border-b pb-3">
                <CartCounter item={product} qty={product.quantity} />
              </div>

              <div className="table-cell pt-5 border-gray-300 border-b pb-3">
                {product.quantity * product.price}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <CartMobile data={products} />
      </div>

      <CartSubTotal subtotal={total} />
    </div>
  );
};

export default Cart;
