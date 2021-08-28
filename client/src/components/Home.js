import { prettyDOM } from "@testing-library/react";
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
  console.log(products);
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <div className="lg:px-20 pt-10 px-8">
      <h1 className="text-center font-bold text-3xl py-5">All Products</h1>
      <ProductCard data={products} />
    </div>
  );
};

export default Home;
