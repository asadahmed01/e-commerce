import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addProduct,
  loadProducts,
  getAllProducts,
} from "../store/productSlice";
import ProductCard from "./ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <div className="lg:px-20 pt-10 px-8">
      <ProductCard />
    </div>
  );
};

export default Home;
