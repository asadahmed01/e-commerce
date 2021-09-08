import React from "react";

const Footer = () => {
  const currentTime = new Date();
  return (
    <div className="bg-gray-600   bottom-0 w-full mt-20 py-5">
      <di>
        <p className="text-gray-100 text-center">
          &copy; Asad Ahmed {currentTime.getFullYear()}
        </p>
      </di>
    </div>
  );
};

export default Footer;
