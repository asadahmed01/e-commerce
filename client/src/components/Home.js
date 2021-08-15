import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addProduct,
  loadProducts,
  getAllProducts,
} from "../store/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <div>
      {products.map((item) => (
        <li key={item._id}>{item.category}</li>
      ))}
      <button
        onClick={() =>
          dispatch(
            addProduct({
              category: "shiit",
              title: "title",
              price: 12,
              url: "url",
              description: "description",
              numberInStock: 55,
            })
          )
        }
      >
        Add Product
      </button>
    </div>
  );
};

export default Home;
