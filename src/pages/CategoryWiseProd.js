import React, { useState } from "react";
import Defaultlayout from "../component/defaultLayout";
import { useSelector } from "react-redux";
import CategoryWidget from "../element/categoryWidget";
import categories from "../assets/data/categories.json";
const CategoryWiseProd = () => {
  const info = useSelector((state) => state.appInfo.appInfo);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const handleCategary = (id) => {
    setSelectedCategory(id);
  };

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
        <div className="flex justify-center aligin-center m-auto">
          <input
            className="rangeinput"
            style={{
              width: "90%",
              direction: "rtl",
              background:
                "linear-gradient(to right, green 0%, green 50%, #fff 50%, #fff 100%)",
            }}
            type="range"
          ></input>
        </div>
      </div>
    </Defaultlayout>
  );
};
export default CategoryWiseProd;
