import React from "react";

const Productwidget = (props) => {
  return (
    <div
    onClick={(e) => props.productClick(e)}
      style={{
        direction: "rtl",
      }}
      className={` h-auto py-1 bg-white m-1`}
    >
      <div
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          textAlign: "center",
          background: "#02ac84",
          color: "white",
          display: props.range < 100 ? "none" : "block",
        }}
        className="relative top-2 right-5"
      >
       <p style={{fontSize:"16px" , padding:"4px"}}> {props.totalNumberOfProducts}</p>
      </div>
      <div className="flex justify-center aligin-center">
        <img
          className={`${props.range < 100 ? "p-1" : 'p-4'}`}
          width={"100%"}
          height={"auto"}
          src={props.imagePath}
        />
      </div>
      <div
        style={{ display: props.range < 100 ? "none" : "block" }}
        className={`${props.range < 100 ? "" : "p-4"}`}
      >
        <h1>{props.title}</h1>
        <h3>{props.subTitle}</h3>
        <h3>{props.priceStartingFromMsg}</h3>
      </div>
    </div>
  );
};

export default Productwidget;
