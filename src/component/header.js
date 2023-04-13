import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
       {props.children}
      </div>
      <div className="flex">
        {/* <h2>{info.footerText}</h2> */}
        <Link to={'/'}>
        <img className="my-6  h-3" src={info.logoPath} alt="TakeMe" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
