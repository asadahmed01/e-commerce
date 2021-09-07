import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../store/cartSlice";

const PastOrders = (props) => {
  //const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const { orders: items } = props.location.state;
  console.log(props.location.state);
  const dispatch = useDispatch();
  const handleReorder = (item) => {
    dispatch(addToCart(item));
    toast.info(`${item.title} added to cart`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div>
      {items.length < 1 ? (
        <p className="text-center mt-20 text-gray-500 text-2xl">
          No orders to show ...
        </p>
      ) : (
        <div className="lg:mt-20 mt-10">
          <p className="text-center text-2xl font-semibold my-10">
            Here are your past orders
          </p>
          {items.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center hover:bg-green-100 py-1 px-4 border-l-2 border-gray-200 font-semibold text-gray-800"
            >
              <div className="bg-green-500 rounded-full">
                <img src={item.url} className="w-16 h-16 rounded-full p-px" />
              </div>

              <p>{item.title}</p>
              <p>${item.price}</p>
              <p className="hidden">Qty: {item.quantity}</p>
              <button
                className="py-2 px-1 text-white tracking-wider bg-green-600 font-semibold rounded-full"
                onClick={() => handleReorder(item)}
              >
                Order Again
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PastOrders;
