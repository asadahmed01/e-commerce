import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/cartSlice";
import Model from "./Model";
import Thumbnail from "./Thumbnail";
import { getCurrentUser } from "../utilities";

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  const data = [];
  const [openModel, setOpenModel] = useState(false);
  const { state } = props.location;
  data.push(state.item);
  const user = getCurrentUser();

  const addItemToCart = () => {
    if (openModel) {
      setOpenModel(false);
      setTimeout(() => {
        setOpenModel(true);
      }, 200);
    } else setOpenModel(true);
    dispatch(addToCart(state.item));
  };
  const buyNow = () => {
    dispatch(addToCart(state.item));
    //const tt = useSelector((state) => state.entities.cart);
    //localStorage.setItem("cartItems", JSON.stringify(data));
  };
  return (
    <div className="pb-20">
      {openModel && (
        <span className="transform transition-all">
          {" "}
          <Model data={state.item} isOpen={openModel} />
        </span>
      )}
      <div className="lg:flex lg:px-28 px-8 pt-5 lg:pt-16 my-5">
        <Thumbnail item={state.item} />
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold tracking-wide">
            {state.item.title}
          </h1>
          <p className="font-semibold mt-6 text-xl font-sans">
            ${state.item.price}
          </p>

          <button
            className={`border border-black w-full lg:w-3/4 py-3 mt-8 text-sm font-semibold hover:bg-black hover:text-white ${
              state.item.numberInStock <= 0 &&
              "bg-yellow-500 text-white hover:bg-yellow-500 cursor-not-allowed"
            }`}
            onClick={addItemToCart}
            disabled={state.item.numberInStock <= 0}
          >
            {state.item.numberInStock > 0 ? "ADD TO CART" : "OUT OF STOCK"}
          </button>
          <Link to={user ? "/checkout" : "/guestregister"}>
            <button
              className="border border-black w-full lg:w-3/4 py-3 mt-8 text-sm font-semibold bg-gray-700 hover:bg-gray-600 text-white"
              disabled={state.item.numberInStock <= 0}
              onClick={buyNow}
            >
              BUY NOW
            </button>
          </Link>
          <p className="text-gray-500 mt-10">{state.item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
