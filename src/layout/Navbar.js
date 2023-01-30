import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { useProduct } from "../context/ProductProvider";

const Navbar = () => {
  const {
    state: { cart },
  } = useProduct();

  return (
    <nav className="h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5">
      <ul className="h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900">
        <h1 className="flex-1">
          <Link to="/"> Moon Tech</Link>
        </h1>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/top-rated">Top Rated</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <Link to="/">
          <li title="Wishlist" className="bg-indigo-500 p-2 rounded-full">
            <IoIosListBox className="text-white" />
          </li>
        </Link>
        <Link to="/cart">
          <li title="Cart" className="bg-indigo-500 p-2 rounded-full relative">
            {cart?.length > 0 && (
              <small className="absolute -top-0 -right-1 bg-orange-500 px-1 rounded-full text-white">
                {cart?.length}
              </small>
            )}
            <BsFillCartFill className="text-white " />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
