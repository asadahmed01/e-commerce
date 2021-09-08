import { prettyDOM } from "@testing-library/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addProduct,
  loadProducts,
  getAllProducts,
  getStatus,
} from "../store/productSlice";
import ProductCard from "./ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const loading = useSelector(getStatus);
  console.log(loading);
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <div className="">
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="">
          <p className="text-center pt-10 tracking-widest text-xl font-semibold pb-40">
            Welcome to Nomadic.
          </p>
          <p className="text-center pt-60 lg:pt-80">
            <a
              href="#main"
              className="border border-black px-8 py-2 font-semibold bg-gray-700 hover:bg-gray-600 text-white"
            >
              Start Shopping
            </a>
          </p>
        </div>
      </div>
      {loading ? (
        <p className="text-center mt-20 text-2xl text-gray-400 font-semibold animate-pulse">
          Loading ...
        </p>
      ) : (
        <div className="lg:px-20 pt-10 px-8 pb-10" id="main">
          <h1 className="text-center font-bold text-3xl py-5">All Products</h1>
          <ProductCard data={products} />
        </div>
      )}
    </div>
  );
};

export default Home;
