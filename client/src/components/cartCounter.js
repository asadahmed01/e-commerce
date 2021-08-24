import React, { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const CartCounter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) setCounter(counter - 1);
  };
  return (
    <div>
      <div className="flex mt-5">
        <button
          className="border border-black p-1 mr-3 hover:text-gray-500 rounded"
          onClick={handleIncrement}
        >
          <FaPlus />
        </button>
        <p className="font-bold text-xl">{counter}</p>
        <button
          className="border border-black p-1 ml-3 hover:text-gray-500 rounded"
          onClick={handleDecrement}
        >
          {counter > 1 ? <FaMinus /> : <FaTrash color="gray" />}
        </button>
      </div>
    </div>
  );
};

export default CartCounter;
