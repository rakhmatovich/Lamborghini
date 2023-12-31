import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <div className="flex items-center w-full bg-[#181818] text-white px-10">
      <Link to="/">
        <img className="m-3" src="/logo.webp" alt="Logo" />
      </Link>
      <div className="flex justify-between flex-1">
        <div>
          <Link to="/models" className="mx-2">
            MODELS
            </Link>
          <Link to="/company" className="mx-2">
            COMPANY
          </Link>
          <Link to="/motorsport" className="mx-2">
            MOTORSPORT
          </Link>
        </div>
        <div className="flex items-center">
        <Link to="/shop" className="mx-2">
            SHOP
            </Link>
          <Link to="/museum" className="mx-2">
            MUSEUM
            </Link>
          <Link to="/store" className="mx-2">
            STORE
          </Link>
          <Link className="mx-2">
            <HiOutlineChatBubbleLeftRight size={25} />
          </Link>
          <Link className="mx-2">
            <BsSearch size={25} />
          </Link>
          <Link className="mx-2">
            <RxHamburgerMenu size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}
