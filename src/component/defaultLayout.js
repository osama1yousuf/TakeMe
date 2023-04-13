import React, { useState, useEffect } from "react";
import Header from "./header";
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
      <Header handleSideBar={handleSideBar} />
      <div className="flex">
        <Sidebar showSide={showSideBar} />
        <div className={` w-full absolute`}>{props.children}</div>
      </div>
    </>
  );
};

export default Defaultlayout;
