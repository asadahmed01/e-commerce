import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import Model from "./Model";
import Thumbnail from "./Thumbnail";

const ProductDetails = (props) => {
  const [openModel, setOpenModel] = useState(false);
  const { state } = props.location;
  const dispatch = useDispatch();
  const addItemToCart = () => {
    if (openModel) {
      setOpenModel(false);
      setTimeout(() => {
        setOpenModel(true);
      }, 200);
    } else setOpenModel(true);
    dispatch(addToCart(state.item));
  };
  return (
    <div>
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

          <button className="border border-black w-full lg:w-3/4 py-3 mt-8 text-sm font-semibold bg-gray-700 hover:bg-gray-600 text-white">
            BUY NOW
          </button>

          <p className="text-gray-500 mt-10">{state.item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
