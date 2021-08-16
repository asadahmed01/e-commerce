import React from "react";
import { removeItem } from "../store/productSlice";

const ProductDetails = (props) => {
  const { query } = props.location;
  return (
    <div className="lg:flex md:px-28 px-8 pt-5 md:pt-16">
      <div className="w-1/2 md:pr-5 pb-4">
        <img src={query.item.url} />
      </div>
      <div className="w-1/2">
        <h1 className="text-3xl font-bold tracking-wide">Gucci</h1>
        <p>$250</p>
      </div>
    </div>
  );
};

export default ProductDetails;
