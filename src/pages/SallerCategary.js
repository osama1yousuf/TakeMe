import React, { useEffect, useState } from "react";
import productSaller from "../assets/data/sallerProduct.json";
import Header from "../component/header";
import { BsFillStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { appInfoAction } from "../store/Slice/appInfoSlice";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const SallerCategary = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1
    );
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };
  useEffect(() => {
    dispatch(appInfoAction.sideBar(false));
    setData(productSaller);
  }, []);
  return (
    <di>
      <Header>
        <h1>Saller</h1>
      </Header>
      <div className="bg-gray-200">
        {data
          ? data.map((val, ind) => {
              return (
                <div
                  className="aligin-center mt-2 p-2 bg-white"
                  style={{ direction: "rtl" }}
                >
                  <div className="flex ">
                    <div className="w-14 m-3">
                      <img src={val.imagePath} />
                    </div>
                    <div>
                      <h1 className="font-black text-lg">{val.name}</h1>
                      <h3 className="text-sm">{val.city}</h3>
                      <p className="text-xs">{val.productsCountMsg}</p>
                      <div className="flex gap-2 mt-3">
                        <BsFillStarFill style={{ color: "#02ac84" }} />
                        <h3 style={{ color: "#02ac84" }} className="text-sm">
                          {val.ratingMsg}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              );
            })
          : ""}
      </div>
    </di>
  );
};

export default SallerCategary;
