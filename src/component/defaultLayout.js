import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./Footer";
import Sidebar from "./sidebar";
const Defaultlayout = (props) => {
const [showSideBar, setShowSideBar] = useState(false);
const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
useEffect(() => {
    if (showSideBar) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [showSideBar]);
  return (
    <>
      <Header handleSideBar={handleSideBar} >
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
      </Header>
      <div className="flex">
        <Sidebar showSide={showSideBar} />
        <div className={` w-full absolute`}>{props.children}</div>
      </div>
      <div className="absolute">
      <Footer />
      </div>
    </>
  );
};

export default Defaultlayout;
