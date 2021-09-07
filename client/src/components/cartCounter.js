import React, { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { decrementItem, incrementItem, removeItem } from "../store/cartSlice";

const CartCounter = ({ item, qty }) => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.entities.cart);
  console.log(carts.length);
  return (
    <div>
      <div className="flex mt-5">
        <button
          className="border border-black p-1 mr-3 hover:text-gray-500 rounded"
          onClick={() => dispatch(decrementItem(item))}
        >
          {qty > 1 ? (
            <FaMinus />
          ) : (
            <FaTrash
              color="orange"
              onClick={() => dispatch(removeItem(item._id))}
            />
          )}
        </button>
        <p className="font-bold text-xl">{qty}</p>

        <button
          className="border border-black p-1 ml-3 hover:text-gray-500 rounded"
          onClick={() => dispatch(incrementItem(item))}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartCounter;
