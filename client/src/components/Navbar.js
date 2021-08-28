import React, { useState } from "react";
import { FaBars, FaShoppingBag, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const products = useSelector((state) => state.entities.cart);
  return (
    <div>
      <nav class="flex bg-white p-3 flex-wrap border-gray-300 border-b px-5">
        <a href="#" class="p-2 mr-4 inline-flex items-center">
          <span class="text-xl text-black  uppercase tracking-wide font-extrabold">
            Nomadic
          </span>
        </a>

        <div className="flex ml-auto">
          <Link
            to="/cart"
            className=" lg:hidden  pt-4 hover:text-gray-600 text-gray-600 relative"
          >
            <div class=" absolute bottom-1/2 font-bold left-1/2 rounded-full h-4 w-5 flex items-center justify-center bg-gray-900 text-white">
              {products.length}
            </div>
            <FaShoppingBag size="25" />
          </Link>

          <button
            class="text-gray-600  lg:hidden hover:text-gray-600 outline-none ml-6 mt-2"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size="35" /> : <FaBars size="35" />}
          </button>
        </div>
        <div
          className={
            isOpen
              ? " top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
              : " hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
          }
          id="navigation"
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <a className="lg:inline-flex lg:w-auto w-full py-2 rounded text-gray-700 items-center justify-center hover:underline hover:text-black font-semibold lg:border-none border-b-2 lg:px-3 pt-5 ">
              <Link to="/">
                <span
                  className="hover:border-b-2"
                  onClick={() => setOpen(false)}
                >
                  Home
                </span>
              </Link>
            </a>
            <a
              href="#"
              className="lg:inline-flex lg:w-auto w-full py-2 rounded no-underline text-gray-700 items-center justify-center hover:underline hover:text-black font-semibold lg:border-none border-b-2 lg:px-3 pt-5"
            >
              <span onClick={() => setOpen(false)}>Login</span>
            </a>
            <a
              href="#"
              className="lg:inline-flex lg:w-auto w-full py-2 rounded text-gray-700 items-center justify-center hover:underline hover:text-black font-semibold lg:border-none border-b-2 lg:px-3 pt-5"
            >
              <span onClick={() => setOpen(false)}>Signup</span>
            </a>
            <a
              href="#"
              className="lg:inline-flex lg:w-auto w-full lg:px-3 pt-5 py-2 rounded text-gray-700 items-center justify-center hover:underline hover:text-black font-semibold"
            >
              <span onClick={() => setOpen(false)}>Contact</span>
            </a>
          </div>

          <div>
            <Link
              to="/cart"
              className="hidden lg:inline-flex lg:w-auto w-full lg:px-3 pt-5 py-2 rounded text-gray-700 items-center justify-center hover:text-gray-500 relative"
            >
              <div class=" absolute bottom-1/2 font-bold left-1/2 rounded-full h-4 w-5 flex items-center justify-center bg-gray-900 text-white">
                {products.length}
              </div>
              <FaShoppingBag size="25" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
