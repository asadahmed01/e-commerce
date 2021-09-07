import React from "react";
import { FaBan } from "react-icons/fa";

const NotFound = () => {
  return (
    <div>
      <p className="m-auto text-5xl font-bold text-center my-20 text-red-500 animate-pulse">
        Not Authorized
      </p>
      <FaBan className="mx-auto mt-10 text-red-500" size="150" />
    </div>
  );
};

export default NotFound;
