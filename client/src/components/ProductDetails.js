import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Model from "./Model";
import Thumbnail from "./Thumbnail";

const ProductDetails = (props) => {
  const [openModel, setOpenModel] = useState(false);
  const { state } = props.location;
  const addItemToCart = () => {
    if (openModel) {
      setOpenModel(false);
      setTimeout(() => {
        setOpenModel(true);
      }, 200);
    } else setOpenModel(true);
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
        {/* <div className="lg:w-1/2 lg:pr-5 pb-4">
          {/* <img src={state.item.url} className="lg:p-5" /> */}

        {/* </div> */}

        <Thumbnail item={state.item} />
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold tracking-wide">
            {state.item.name}
          </h1>
          <p className="font-semibold mt-6 text-xl font-sans">
            ${state.item.price}
          </p>

          <button
            className="border border-black w-full lg:w-3/4 py-3 mt-8 text-sm font-semibold hover:bg-black hover:text-white"
            onClick={addItemToCart}
          >
            ADD TO CART
          </button>

          <button className="border border-black w-full lg:w-3/4 py-3 mt-8 text-sm font-semibold bg-gray-700 hover:bg-gray-600 text-white">
            BUY NOW
          </button>

          <p className="text-gray-500 mt-10">
            Light as air. The Cirrus rucksack is encased in cloud-like
            waterproof nylon and features ample interior and exterior pockets,
            including built-in phone + battery pockets to stay powered up on the
            go. Luggage slip and secure passport sleeve make it the perfect
            travel companion. Adventure away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
