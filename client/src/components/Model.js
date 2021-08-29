import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Model = ({ data, isOpen }) => {
  const products = useSelector((state) => state.entities.cart);
  const { url, name } = data;
  const [open, setOpen] = useState(true);
  //console.log(isOpen);
  const hide = () => {};
  return (
    <div
      className={
        open
          ? "h-auto top-0 right-0 lg:w-1/4 w-full p-4 bg-white shadow-2xl sticky lg:absolute"
          : "hidden"
      }
    >
      <div className="flex justify-between">
        <h1 className="border-b">JUST ADDED TO YOUR CART</h1>
        <button
          className="text-2xl text-gray-500"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </button>
      </div>

      <div className="flex justify-between mt-3">
        <div className="w-1/2 flex justify-between">
          <img src={url} className="w-16 h-16" />
          <p className="font-semibold text-xl">{name}</p>
        </div>
        <p>{}</p>
      </div>
      <button className="border border-black w-full my-8 py-2 text-sm font-bold">
        <Link to="/cart">VIEW CART ({products.length})</Link>
      </button>
      <span className="border-b">
        <Link to="/">
          <p className="underline text-center">Continue shopping</p>
        </Link>
      </span>
    </div>
  );
};

export default Model;
