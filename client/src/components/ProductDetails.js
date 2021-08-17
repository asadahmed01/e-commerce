import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Model from "./Model";

const ProductDetails = (props) => {
  const [openModel, setOpenModel] = useState(false);
  const { state } = props.location;
  const hideNotification = () => {
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
        <div className="lg:w-1/2 lg:pr-5 pb-4">
          <img src={state.item.url} className="lg:p-5" />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold tracking-wide">Gucci</h1>
          <p className="font-semibold mt-6 text-xl font-sans">$250.50</p>
          <div className="flex mt-5">
            <button className="border border-black p-2 mr-3 hover:text-gray-500">
              <FaPlus />
            </button>
            <p className="font-bold text-xl">1</p>
            <button className="border border-black p-2 ml-3 hover:text-gray-500">
              <FaMinus />
            </button>
          </div>
          <button
            className="border border-black w-full lg:w-1/2 py-3 mt-8 text-sm font-semibold hover:bg-black hover:text-white"
            onClick={hideNotification}
          >
            ADD TO CART
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
