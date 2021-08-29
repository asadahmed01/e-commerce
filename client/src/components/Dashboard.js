import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addProduct } from "../store/productSlice";

const Dashboard = (props) => {
  //const { state } = props.location;
  const isEdit = props.location.state !== undefined;
  console.log(isEdit);
  const [postData, setPostData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    url: "",
    numberInStock: 0,
    thumbnails: [],
  });
  const [error, setError] = useState("");

  const getFiles = (data) => {
    setPostData({ ...postData, thumbnails: data });
  };
  //dispatch a post request here
  const dispatch = useDispatch();
  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (
      postData.title === "" ||
      postData.price === "" ||
      postData.description === "" ||
      postData.url === "" ||
      postData.category === "" ||
      postData.numberInStock === ""
    ) {
      setError("some field are blank, please fill them out.");
      return;
    }
    setError("");
    //dispatch a post request to the backend
    const response = dispatch(addProduct(postData));
    console.log(response);
    toast.success("product added to the database", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
    });

    setPostData({
      title: "",
      price: "",
      description: "",
      selectedFile: "",
      category: "",
      numberInStock: 0,
    });
  };
  return (
    <div className="md:w-1/2 md:m-auto m-5">
      <form
        className="md:w-full w-full rounded leading-loose mr-2 mb-10"
        onSubmit={hanldeSubmit}
      >
        <p className="text-gray-800 font-medium text-xl py-5">
          Product information
        </p>
        <div className="">
          <label className="block text-sm text-gray-00" for="cus_name">
            Title
          </label>
          <input
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded "
            name="name"
            type="text"
            placeholder="Product Title"
            value={isEdit ? props.location.state.item.title : postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </div>

        <div className="">
          <label className="block text-sm text-gray-00" for="cus_name">
            Category
          </label>
          <input
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded "
            name="category"
            type="text"
            placeholder="Product Category"
            value={
              isEdit ? props.location.state.item.category : postData.category
            }
            onChange={(e) =>
              setPostData({ ...postData, category: e.target.value })
            }
          />
        </div>

        <div className="">
          <label className="block text-sm text-gray-00" for="cus_name">
            Number in Stock
          </label>
          <input
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded "
            name="numberInStock"
            type="number"
            placeholder="Number in stock"
            value={
              isEdit
                ? props.location.state.item.numberInStock
                : postData.numberInStock
            }
            onChange={(e) =>
              setPostData({ ...postData, numberInStock: e.target.value })
            }
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm text-gray-600">Description</label>
          <input
            className="w-full px-5  py-2 text-gray-700 bg-gray-200 rounded"
            name="description"
            type="text"
            placeholder="Product description"
            value={
              isEdit
                ? props.location.state.item.description
                : postData.description
            }
            onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
            }
          />
        </div>
        <div className="mt-2">
          <label className=" block text-sm text-gray-600">Price</label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            name="price"
            type="text"
            placeholder="Price"
            value={isEdit ? props.location.state.item.price : postData.price}
            onChange={(e) =>
              setPostData({ ...postData, price: e.target.value })
            }
          />
        </div>
        {isEdit && (
          <div className="flex justify-between py-5">
            {props.location.state.item.thumbnails.map((item, i) => (
              <img
                src={item}
                alt="thumbnail image"
                key={i}
                className="h-24 w-24 border border-gray-300"
              />
            ))}
          </div>
        )}
        <div className="mt-2">
          <label className=" block text-sm text-gray-600">Product image</label>
          <FileBase64
            type="file"
            name="url"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({
                ...postData,
                url: base64 || props.location.state.item.url,
              })
            }
          />
        </div>
        <div className="inline-block mt-2 w-full pr-1">
          <label className=" block text-sm text-gray-600">
            Product thumbnails
          </label>
          <FileBase64
            multiple={true}
            onDone={(data) => {
              getFiles(data);
              console.log(data);
              //setPostData({ ...postData, thumbnails: data });
            }}
          />
        </div>

        <div className="text-left">
          <p className="text-red-500">{error}</p>
        </div>
        <div className="">
          <button
            className="md:w-1/2 w-full px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded mt-10"
            type="submit"
          >
            {isEdit ? "UPDATE PRODUCT" : "ADD PRODUCT"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
