import { prettyDOM } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addProduct,
  loadProducts,
  getAllProducts,
  getStatus,
} from "../store/productSlice";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import SkeletonProduct from "./Skeleton/SkeletonProduct";

import Shimmer from "./Skeleton/Shimmer";

const Home = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState([]);
  const [enableCategory, setEnableCategory] = useState(false);
  const products = useSelector(getAllProducts);
  let loading = useSelector(getStatus);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  const handleCategorySelect = (item) => {
    setItem(item);
    setEnableCategory(true);
  };
  let filtered = [];
  filtered = enableCategory
    ? products.filter((p) => p._id === item._id)
    : products;

  const handleReset = () => {
    setEnableCategory(false);
    window.location.reload();
  };
  return (
    <div>
      {loading ? (
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-2 gap-0 h-screen ml-5 mt-40">
            <SkeletonProduct />
            <SkeletonProduct />
            <SkeletonProduct />
            <SkeletonProduct />
            <Shimmer />
          </div>
        </div>
      ) : (
        <div className="lg:px-20 pt-10 px-8 pb-10" id="main">
          <div>
            {" "}
            <p>Browse by category</p>
            <Categories
              items={products}
              selectedItem={item}
              onreset={handleReset}
              onItemSelect={handleCategorySelect}
            />
          </div>
          <h1 className="text-center font-bold text-3xl py-5">
            {!enableCategory ? "All Products" : item.category}
          </h1>
          <ProductCard data={filtered} />
        </div>
      )}
    </div>
  );
};

export default Home;
