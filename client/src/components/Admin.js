import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProduct,
  getAllProducts,
  loadProducts,
} from "../store/productSlice";

const Admin = () => {
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();
  const p = useSelector(getAllProducts);
  useEffect(() => {
    dispatch(loadProducts());

    setproducts(p);
  }, []);

  return (
    <div>
      <div className="text-right py-10 mr-5 pb-20">
        <span className="bg-green-600 px-6 pb-2 rounded-full md:mr-10 text-white text-6xl hover:bg-green-700 hover:shadow-2xl">
          <Link to="/dashboard">+</Link>
        </span>
      </div>

      <h1 className="lg:text-center text-left lg:text-3xl text-2xl font-semibold pl-3">
        Edit products
      </h1>
      <div className="bg-gray-600 text-white p-3 mb-8 lg:mt-12 mt-8">
        <div className="grid md:grid-cols-7 grid-cols-2 border-gray-300 border-b font-bold">
          <p>IMAGE</p>
          <p>TITLE</p>
          <p className="lg:block hidden">PRICE</p>
          <p className="lg:block hidden">DESCRIPTION</p>
          <p className="lg:block hidden">QTY</p>
        </div>
        {products.map((item, i) => (
          <div key={i} className="pb-8">
            <div className="grid md:grid-cols-7 grid-cols-2 border-gray-300 border-b py-5 items-center text-lg">
              <img
                src={item.url}
                alt="image"
                className="max-h-24 max-w-24 mb-8"
              />
              <p className="mb-8">{item.title}</p>
              <p className="lg:block hidden">{item.price}</p>
              <p className="lg:block hidden">
                {item.description.substring(0, 50).concat("...")}
              </p>
              <p className="lg:block hidden">{item.numberInStock}</p>
              <button
                className="p-2 pt- 5 bg-red-600 lg:mr-2 mr-5 text-xl hover:bg-red-700"
                onClick={() => dispatch(deleteProduct(item._id))}
              >
                Delete
              </button>

              <button className="bg-blue-600 p-2 ml-5 lg:ml-2 text-xl hover:bg-blue-700">
                <Link
                  to={{
                    pathname: `dashboard/${item._id}`,

                    state: { item },
                  }}
                >
                  Edit
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
