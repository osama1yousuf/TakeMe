import React, { useState } from "react";
import Defaultlayout from "../component/defaultLayout";
import { useSelector } from "react-redux";
import CategoryWidget from "../element/categoryWidget";
import categories from "../assets/data/categories.json";
import "../assets/style/productCategary.css";
import product from "../assets/data/product.json";
import Productwidget from "../element/Productwidget";
const CategoryWiseProd = () => {
  const [range, setRange] = useState(100);
  const info = useSelector((state) => state.appInfo.appInfo);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const handleCategary = (id) => {
    setSelectedCategory(id);
  };

  function handleRangeChange(event) {
    const val =
      (event.target.value - event.target.min) /
      (event.target.max - event.target.min);
    event.target.style.backgroundImage =
      "-webkit-gradient(linear,right top, left top,  " +
      "color-stop(" +
      val +
      ", #02ac84 )," +
      "color-stop(" +
      val +
      ",  #C5C5C5)" +
      ")";
    setRange(event.target.value);
  }
  return (
    <Defaultlayout>
      <img width={"100%"} src={info.coverPath} alt="coverPath" />
      <div>
        <div className="w-full h-auto block overflow-x-scroll">
          <div className="w-fit-content h-auto overflow-x-scroll flex flex-row-reverse flex-rtl text-left">
            {categories.length > 0
              ? categories.map((val, index) => {
                  return (
                    <CategoryWidget
                      handleCategary={(e) => handleCategary(val.id)}
                      key={val.id}
                      imagePath={val.imagePath}
                      name={val.name}
                      id={val.id}
                      selectedCategory={selectedCategory}
                    />
                  );
                })
              : ""}
          </div>
        </div>
        <div className="range-wrap flex justify-center aligin-center m-auto">
          <input
            min={0}
            max={100}
            step={50}
            value={range}
            onInput={handleRangeChange}
            id="salePrice"
            className="rangeinput my-2"
            type="range"
          ></input>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            range == 50
              ? "1fr 1fr"
              : range == 0
              ? "1fr 1fr 1fr 1fr"
              : range == 100
              ? "1fr"
              : "",
        }}
        className="w-full bg-gray-200"
      >
        {product.map((val, ind) => {
          return (
            <Productwidget
              key={val.id}
              totalNumberOfProducts={val.totalNumberOfProducts}
              imagePath={val.imagePath}
              title={val.title}
              subTitle={val.saleDetails.title}
              priceStartingFromMsg={val.saleDetails.priceStartingFromMsg}
              range={range}
            />
          );
        })}
      </div>
    </Defaultlayout>
  );
};
export default CategoryWiseProd;
