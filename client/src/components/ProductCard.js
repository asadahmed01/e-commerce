import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <div className="pb-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-2 gap-4">
        {data.map((item) => (
          <div className="lg:p-3" key={item._id}>
            <Link
              to={{
                pathname: `product/${item._id}`,

                state: { item },
              }}
            >
              <div className="hover:underline cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    src={item.url}
                    className="transform hover:scale-110 transition delay-150 duration-300 ease-in-out md:w-60 md:h-60 h-40 w-40"
                    alt="product image"
                  />
                </div>

                <p className="mt-3 font-semibold text-lg ">{item.title}</p>
              </div>
              <div className="font-semibold text-lg font-family-helvatica">
                <p>{item.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
