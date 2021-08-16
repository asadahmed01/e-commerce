import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const data = [
    {
      id: 1,
      name: "Gucci",
      price: 250.5,
      url: "https://cdn.shopify.com/s/files/1/0260/1061/5830/products/Main_cumulus_olive_1024x1024@2x.png?v=1583784852",
    },
    {
      id: 2,
      name: "Gucci",
      price: 250.5,
      url: "https://cdn.shopify.com/s/files/1/0260/1061/5830/products/Main_cumulus_olive_1024x1024@2x.png?v=1583784852",
    },
    {
      id: 3,
      name: "Gucci",
      price: 250.5,
      url: "https://cdn.shopify.com/s/files/1/0260/1061/5830/products/Main_cumulus_olive_1024x1024@2x.png?v=1583784852",
    },
    {
      id: 4,
      name: "Gucci",
      price: 250.5,
      url: "https://cdn.shopify.com/s/files/1/0260/1061/5830/products/Main_cumulus_olive_1024x1024@2x.png?v=1583784852",
    },
    {
      id: 4,
      name: "Gucci",
      price: 250.5,
      url: "https://cdn.shopify.com/s/files/1/0260/1061/5830/products/Main_cumulus_olive_1024x1024@2x.png?v=1583784852",
    },
    {
      id: 4,
      name: "Gucci",
      price: 250.5,
      url: "https://cdn.shopify.com/s/files/1/0260/1061/5830/products/Main_cumulus_olive_1024x1024@2x.png?v=1583784852",
    },
    {
      id: 4,
      name: "Gucci",
      price: 250.5,
      url: "https://cdn.shopify.com/s/files/1/0260/1061/5830/products/Main_cumulus_olive_1024x1024@2x.png?v=1583784852",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-4 gap-4 gap">
        {data.map((item) => (
          <div className="lg:p-3" key={item.id}>
            <Link to={{ pathname: `product/${item.id}`, query: { item } }}>
              <div className="hover:underline cursor-pointer">
                <div className="  overflow-hidden">
                  <img
                    src={item.url}
                    className="transform hover:scale-110 transition delay-150 duration-300 ease-in-out"
                  />
                </div>

                <p className="mt-3 font-semibold text-lg ">{item.name}</p>
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