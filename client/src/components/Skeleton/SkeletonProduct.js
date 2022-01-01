import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonProduct = () => {
  return (
    <div className="skeleton-wrapper overflow-hidden">
      <div className="skeleton-product">
        <SkeletonElement type="thumbnail" />
        <SkeletonElement type="title" />
        <SkeletonElement type="price" />
      </div>
    </div>
  );
};

export default SkeletonProduct;
