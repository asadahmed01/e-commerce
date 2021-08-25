import React from "react";

const Dashboard = () => {
  return (
    <div className="md:w-1/2 md:m-auto m-5">
      <form className="md:w-full w-full rounded leading-loose mr-2 mb-10">
        <p className="text-gray-800 font-medium text-xl py-5">
          Product information
        </p>
        <div className="">
          <label className="block text-sm text-gray-00" for="cus_name">
            Name
          </label>
          <input
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded "
            name="name"
            type="text"
            placeholder="Your Name"
            aria-label="Name"
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm text-gray-600">Description</label>
          <input
            className="w-full px-5  py-2 text-gray-700 bg-gray-200 rounded"
            name="description"
            type="text"
            placeholder="Product description"
          />
        </div>
        <div className="mt-2">
          <label className=" block text-sm text-gray-600">Price</label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            name="price"
            type="text"
            placeholder="Price"
          />
        </div>
        <div className="mt-2">
          <label className=" block text-sm text-gray-600" for="cus_email">
            Product image
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 rounded"
            name="image"
            type="file"
          />
        </div>
        <div className="inline-block mt-2 w-full pr-1">
          <label className=" block text-sm text-gray-600" for="cus_email">
            Product thumbnails
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 rounded"
            name="thumbnails"
            type="file"
            multiple="true"
          />
        </div>

        <div className="mt-4">
          <button
            className="md:w-1/2 w-full px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded mt-10"
            type="submit"
          >
            ADD PRODUCT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
