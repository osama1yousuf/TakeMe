import React from "react";

const CategoryWidget = (props) => {
  return (
    <div className="w-full h-auto">
      <div
        onClick={(e) => props.handleCategary(props.id)}
        className={`rounded-full mx-3 mt-3 ${
          props.id === props.selectedCategory ? "opacity-100" : "opacity-30"
        }`}
        style={{
          cursor: "pointer",
          border:props.id === props.selectedCategory ? "5px solid #02ac84" : "1px solid gray",
          padding:props.id === props.selectedCategory ? "1px" : "5px",
          // border: "1px solid gray",
          // padding: "5px",
          width: "55px",
          height: "55px",
        }}
      >
        <img
          className="rounded-full"
          style={{ height: "100%", width: "100%" }}
          src={props.imagePath}
          alt={props.name}
        />
      </div>
      <h1 className="text-center ">{props.name}</h1>
    </div>
  );
};

export default CategoryWidget;
