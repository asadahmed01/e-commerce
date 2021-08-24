import React, { useState } from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const Thumbnail = ({ item }) => {
  const [curr, setcurr] = useState("");
  const [active, setActive] = useState("");
  const handleThumbnail = (src, e, i) => {
    const clicked = e.target.getAttribute("data-index");
    setActive(Number(clicked));
    setcurr(src);
  };
  return (
    <div className="lg:w-1/2 lg:pr-5">
      <img src={curr || item.url} className="" />

      <div className="flex lg:p-5 justify-center mt-5">
        {(item.thumbnails || []).map((item, i) => (
          <img
            key={i}
            data-index={i}
            src={item}
            className={
              active === i
                ? "w-20 lg:w-24 lg:h-24 h-20 p-2 border-2 border-gray-600"
                : "w-20 lg:w-24 lg:h-24 h-20 p-2"
            }
            onClick={(e) => handleThumbnail(item, e, i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Thumbnail;

// className="lg:w-1/2 lg:pr-5 pb-4"
