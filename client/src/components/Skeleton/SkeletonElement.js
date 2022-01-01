import React from "react";
import "./skeleton.css";
const SkeletonElement = ({ type }) => {
  const classes = `skeleton ${type}`;
  return (
    <div className="products">
      <div className={classes}></div>
    </div>
  );
};

export default SkeletonElement;
