import React, { useEffect, useState } from "react";
import productSaller from "../assets/data/sallerProduct.json";
import Header from "../component/header";
import { BsFillStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { appInfoAction } from "../store/Slice/appInfoSlice";
import Carousel from "react-elastic-carousel";
import "../assets/style/sallerCategory.css";
import { BsXLg } from "react-icons/bs";
import {
  BsFillCaretDownFill,
  BsFillTelephoneFill,
  BsWhatsapp,
  BsFillCursorFill,
} from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
const SallerCategary = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [headerValue, setHeaderValue] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [caresoulImg, setCaresoulImg] = useState([]);
  const [showCaresoul, setShowCaresoul] = useState(false);
  useEffect(() => {
    const { state } = location;
    setHeaderValue(state?.value);
  }, [location]);
  useEffect(() => {
    dispatch(appInfoAction.sideBar(false));
    console.log(productSaller);
    setData(productSaller);
  }, []);
  const handleShow = (e) => {
    if (selectedId === null) {
      setSelectedId(e.id);
    } else {
      setSelectedId(null);
    }
  };
  const singleSaller = (e) => {
    console.log(e.id);
    navigate(`/singlesaller/${e.id}`);
  };
  const caresoulModal = (e) => {
    setCaresoulImg(e.images);
    setShowCaresoul(true);
  };
  const closeCaresoul = () => {
    setShowCaresoul(false);
  };
  return (
    <div style={{ width: "100%" }}>
      <BsXLg
        onClick={closeCaresoul}
        style={{
          color: "white",
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: "999999",
          display: showCaresoul ? "block" : "none",
        }}
      />
      <Carousel
        showArrows={false}
        pagination={false}
        style={{
          display: showCaresoul ? "flex" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 9999,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {caresoulImg &&
          caresoulImg.map((val, ind) => {
            return (
              <div key={ind}>
                <img width={"100%"} src={val.imagePath} />
              </div>
            );
          })}
      </Carousel>
      <Header>
        <h1 className="text-white font-black mt-1 text-lg">{headerValue}</h1>
      </Header>
      <div className="bg-gray-200">
        {data
          ? data.map((val, ind) => {
              return (
                <div
                  className="aligin-center mt-2 p-2 bg-white"
                  style={{ direction: "rtl" }}
                >
                  <div
                    onClick={(e) => singleSaller(val)}
                    className="flex cursor-pointer"
                  >
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
                  <div className="max-w-lg">
                    <Carousel
                      showArrows={false}
                      paginationColor="#23322"
                      paginationActiveColor="#000"
                    >
                      {val.products[1].map((newVal, i) => {
                        return (
                          <div style={{ width: "full", direction: "rtl" }}>
                            <div
                              className="flex item-center mt-3"
                              onClick={(e) => caresoulModal(newVal)}
                            >
                              <img
                                src={newVal.images[0].imagePath}
                                alt={newVal.name}
                              />
                            </div>
                            <div className="flex justify-between mt-4">
                              <h1 className="font-semibold text-2xl">
                                {newVal.name}
                              </h1>
                              <BsFillCaretDownFill
                                size={"20px"}
                                onClick={(e) => handleShow(newVal)}
                                className="mx-5 mt-2 cursor-pointer"
                                style={{ color: "#02ac84" }}
                              />
                            </div>
                            <div
                              className="text-sm p-3"
                              style={{
                                display:
                                  newVal.id === selectedId ? "block" : "none",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: newVal.description.replace(
                                  /<div>\n<img-key>(.*?)<\/img-key>/g,
                                  '<div class="flex">\n<img class="ml-3" width="20px" height="auto" src="$1"/>'
                                ),
                              }}
                            ></div>
                            <div
                              className="mt-2"
                              onClick={(e) => caresoulModal(newVal)}
                            >
                              <h2 className="font-thin text-lg">
                                {newVal.saleDetails.title}
                              </h2>
                              <h2 className="font-hairline text-sm">
                                {newVal.saleDetails.priceMsg}
                              </h2>
                              <h2 className="font-hairline text-sm mt-2">
                                <span style={{ color: "#02ac84" }}> ** </span>
                                {newVal.saleDetails.statusMsg}
                              </h2>
                            </div>
                          </div>
                        );
                      })}
                    </Carousel>
                    <div className="flex justify-center my-2">
                      <a
                        style={{
                          background: "#02ac84",
                          borderRadius: "50%",
                          color: "white",
                        }}
                        className="mx-2 p-3"
                        href="tel:${val.phone}"
                      >
                        <BsFillTelephoneFill size={25} />
                      </a>
                      <a
                        style={{
                          background: "#02ac84",
                          borderRadius: "50%",
                          color: "white",
                        }}
                        className="mx-2 p-3"
                        href={val.whatsappLink}
                      >
                        <BsWhatsapp size={25} />
                      </a>
                      <a
                        style={{
                          background: "#02ac84",
                          borderRadius: "50%",
                          color: "white",
                        }}
                        className="mx-2 p-3"
                        href={val.navigateLink}
                      >
                        <BsFillCursorFill size={25} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default SallerCategary;
