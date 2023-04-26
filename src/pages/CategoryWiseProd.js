import React, { useDebugValue, useEffect, useState } from "react";
import Defaultlayout from "../component/defaultLayout";
import { useDispatch, useSelector } from "react-redux";
import CategoryWidget from "../element/categoryWidget";
import categories from "../assets/data/categories.json";
import "../assets/style/productCategary.css";
import product from "../assets/data/product.json";
import Productwidget from "../element/Productwidget";
import { useNavigate } from "react-router-dom";
import { appInfoAction } from "../store/Slice/appInfoSlice";
import { BsXLg } from "react-icons/bs";
const CategoryWiseProd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
  const [modalValue, setModalValue] = useState(null);
  const [range, setRange] = useState(100);
  const info = useSelector((state) => state.appInfo.appInfo);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const handleCategary = (id) => {
    setSelectedCategory(id);
  };
  useEffect(() => {
    dispatch(appInfoAction.sideBar(true));
  }, []);
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
  const productClick = (e) => {
    console.log(e);
    if (range < 100) {
      setModalValue(e);
      setShowModal(true);
    } else {
      navigate("/sallercategary", { state: { value: e.title } });
    }
  };
  const salerList = () => {
    setShowModal(false);
    navigate("/sallercategary");
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex   flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div
                  style={{ direction: "rtl" }}
                  className="flex items-start justify-between p-5 border-solid border-slate-200 rounded-t"
                >
                  <div
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      textAlign: "center",
                      background: "#02ac84",
                      color: "white",
                    }}
                    className="relative top-2 "
                  >
                    <p style={{ fontSize: "16px", padding: "4px" }}>
                      {modalValue.totalNumberOfProducts}
                    </p>
                  </div>
                  <button
                    className="p-1 bg-transparent border-0 text-gray-700  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <BsXLg />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative  flex-auto justify-center">
                  <img
                    className={"p-4"}
                    width={"350px"}
                    height={"auto"}
                    src={modalValue.imagePath}
                  />
                </div>
                <div style={{ direction: "rtl" }} className={" p-4"}>
                  <h1>{modalValue.title}</h1>
                  <h3>{modalValue.saleDetails.title}</h3>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-2  border-solid border-slate-200 rounded-b">
                  <button
                    className="w-full bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) => salerList(e)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <Defaultlayout>
        <img width={"100%"} src={info.coverPath} alt="coverPath" />
        <div
          style={{
            position: "sticky",
            top: "60px",
            background: "white",
            zIndex: "1",
          }}
        >
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
                productClick={(e) => productClick(val)}
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
    </>
  );
};
export default CategoryWiseProd;
