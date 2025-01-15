"use client"; // Ensure client-side rendering

import React, { useState } from 'react';
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full h-[80px] text-[#000000] flex justify-between px-4 md:px-8 lg:px-16 bg-transparent">
      {/* Navigation Links */}
      <div className="flex gap-4 md:gap-8 lg:gap-12 items-center">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Icons */}
      <div className="flex gap-4 md:gap-6 lg:gap-8 items-center relative">
        <FaRegUser size={26} />
        <IoIosSearch size={26} />
        <CiHeart size={26} />

        {/* Cart Icon with Dropdown */}
        <div className="relative">
          <IoCartOutline size={26} onClick={toggleDropdown} className="cursor-pointer" />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
              <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/SingleProduct">SingleProduct</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/cartsidebar">Cart Sidebar</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/Accounts">Accounts</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/checkout">Checkout</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/cart">Cart</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
