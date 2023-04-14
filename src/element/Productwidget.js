import React from "react";

const Productwidget = (props) => {
  return (
    <div
      style={{
        direction: "rtl",
      }}
      className={` h-auto p-2 bg-white m-2`}
    >
      <div
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          textAlign: "center",
          background: "#02ac84",
          color: "white",
          display: props.range < 100 ? "none" : "block",
        }}
        className="relative top-2 right-5"
      >
        {props.totalNumberOfProducts}
      </div>
      <div className="flex justify-center aligin-center">
        <img
          className="p-5"
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
