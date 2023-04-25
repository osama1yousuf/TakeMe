import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace, MdMenu } from "react-icons/md";
const Header = (props) => {
  const navigate = useNavigate();
  const showSideBar = useSelector((state) => state.appInfo.showSideBar);
  const info = useSelector((state) => state.appInfo.appInfo);
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div style={{position:'sticky' , top:"0" , zIndex:"1"}} className="w-full max-w-screen-xxl gr flex justify-around">
      <div className="my-4 mx-1">
        {showSideBar === true ? (
          <button
            onClick={props.handleSideBar}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <MdMenu style={{ fontSize: "25px" }} className="text-white" />
          </button>
        ) : (
          <button
            onClick={handleBack}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <MdKeyboardBackspace
              style={{ fontSize: "30px" }}
              className="text-white mr-1"
            />
          </button>
        )}
      </div>
      <div className="my-4 mx-1">{props.children}</div>
      <div className="flex">
        {/* <h2>{info.footerText}</h2> */}
        <Link to={"/"}>
          <img className="my-6  h-3" src={info.logoPath} alt="TakeMe" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
