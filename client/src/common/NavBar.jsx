import React, { useEffect, useState } from "react";
import { FaChevronDown, FaSearch, FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCartTotal } from "../redux/CartSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state) => state.cart);
  console.log("Before dispatch");
  dispatch(getCartTotal());
  console.log("After dispatch");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [totalItems]);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className="mx-auto container">
      <div className="flex justify-between py-5">
        <div className="text-[#80c407] text-3xl font-bold">
          तरकारी<span>Bazar</span>
        </div>
        <div className="flex gap-5 items-center text-gray-500 text-lg font-semibold">
          <NavLink to="/" className="nav-item nav-link active">
            Home
          </NavLink>
          <NavLink to="/shop" className="">
            Shop
          </NavLink>
          <NavLink to="/shop-details" className="">
            Shop Detail
          </NavLink>

          <div className="relative">
            <NavLink
              to="/category"
              className="flex items-center gap-1"
              onClick={toggleDropdown}
            >
              Category{" "}
              <span className="pt-1">
                <FaChevronDown />
              </span>
            </NavLink>

            {isDropdownOpen && (
              <div className="dropdown-content flex flex-col  absolute ">
                {/* Add your dropdown menu items here */}
                <NavLink to="/category/item1" className="dropdown-item">
                  Item 1
                </NavLink>
                <NavLink to="/category/item2" className="dropdown-item">
                  Item 2
                </NavLink>
                {/* Add more items as needed */}
              </div>
            )}
          </div>

          <NavLink to="/contact" className="">
            Contact
          </NavLink>
        </div>
        <div className="flex gap-5 text-[#80c407]  text-3xl">
          <div>
            <FaSearch />
          </div>
          <div className="relative">
            <FaShoppingBag />
            <span className="text-[14px] absolute top-[-2px] right-[-4px]  bg-yellow-400 rounded-full h-5 w-4 mb-2 flex items-center p-1  ">
              {totalItems}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
