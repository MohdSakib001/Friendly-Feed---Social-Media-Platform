import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

export const Header = ({ hamburger, handlehamburger }) => {
  function hamburgerOnClick() {
    handlehamburger(!hamburger);
  }

  return (
    <>
      <div className="bg-gray-600 shadow-lg">
        <ul className="px-3 md:w-4/5 md:ms-auto flex items-center justify-between">
          <div className="flex gap-5 items-center">
            {hamburger ? (
              <RxHamburgerMenu
                className="text-white text-2xl md:hidden active:scale-75 transition cursor-pointer"
                onClick={hamburgerOnClick}
              />
            ) : (
              <RxCross1
                className="text-white text-2xl md:hidden active:scale-75 transition"
                onClick={hamburgerOnClick}
              />
            )}

            <div className="text-blue-400 font-semibold tracking-wider text-lg cursor-pointer">
              Friendly Feed
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:mx-auto gap-x-2 sm:gap-x-3 lg:gap-x-5">
            <Link to="">
              <li className="py-2 my-2 text-white cursor-pointer">Home</li>
            </Link>

            <a href="https://portfolio-b4baf.web.app/contactme" target="_blank">
              <li className="py-2 my-2 text-white cursor-pointer">Contact</li>
            </a>

            <a href="https://portfolio-b4baf.web.app/" target="_blank">
              <li className="py-2 my-2 text-white cursor-pointer">About</li>
            </a>
          </div>
        </ul>
      </div>
    </>
  );
};
