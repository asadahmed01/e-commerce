import React from "react";

const Categories = (props) => {
  const { items, selectedItem, onItemSelect, onreset } = props;
  return (
    <div>
      {items.map((item) => (
        <button
          key={item._id}
          onClick={() => onItemSelect(item)}
          className={
            selectedItem === item
              ? "font-semibold py-2 px-4 text-white bg-black rounded"
              : "bg-transparent  text-black font-semibold  py-2 px-4 border-b border-gray-500 mx-2 my-3"
          }
        >
          {item.category}
        </button>
      ))}
      <button
        onClick={onreset}
        className="font-semibold py-2 px-4 text-black rounded border-b border-gray-500 mx-2 focus:bg-black focus:text-white md:my-3"
      >
        All
      </button>
    </div>
  );
};

export default Categories;
