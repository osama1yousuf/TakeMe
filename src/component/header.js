import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const Header = (props) => {
  const info = useSelector((state) => state.appInfo.appInfo);
  return (
    <div className="w-full max-w-screen-xxl gr flex justify-evenly">
      <div className="my-4 mx-1">
        <button
          onClick={props.handleSideBar}
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          //   onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
      <div className="my-4 mx-1">
        <div className="flex">
          <input
            className="gr w-40  border-b-2 border-white placeholder-white text-white outline-none text-right"
            type="text"
            placeholder="חיפוש"
          ></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 text-white mx-2 my-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <div className="flex">
        {/* <h2>{info.footerText}</h2> */}
        <img className="my-6  h-3" src={info.logoPath} alt="TakeMe" />
      </div>
    </div>
  );
};

export default Header;
