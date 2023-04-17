import React, { useEffect, useState } from "react";
import productSaller from "../assets/data/sallerProduct.json";
import Header from "../component/header";
import { BsFillStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { appInfoAction } from "../store/Slice/appInfoSlice";
import Caresoul from "../element/Caresoul";
import {BsFillCaretDownFill} from "react-icons/bs";
const SallerCategary = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [selectedId  , setSelectedId] = useState(null) 
  useEffect(() => {
    dispatch(appInfoAction.sideBar(false));
    console.log(productSaller);
    setData(productSaller);
  }, []);
  const handleShow =(e)=>{
    if (selectedId === null) {
      setSelectedId(e.id)
    }else{
      setSelectedId(null)
    }
  }
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
             <div className="max-w-lg">
              <Caresoul>
                {val.products[1].map((newVal , i)=>{
                    return(
                        <div style={{width:"full"}}>
                          <div className="flex item-center mt-3">
                          <img src={newVal.images[0].imagePath} alt={newVal.name} />
                          </div>
                          <div  className="flex justify-between mt-4">
                            <h1 className="font-semibold text-2xl">{newVal.name}</h1>
                           < BsFillCaretDownFill size={"20px"} onClick={(e)=> handleShow(newVal)} className="mx-5 mt-2" style={{color:"#02ac84"}} />
                          </div>
                          <div className="text-sm p-3" style={{
                            display:newVal.id === selectedId ? "block" : "none"
                          }}  dangerouslySetInnerHTML={{__html:newVal.description.replace(/<div>\n<img-key>(.*?)<\/img-key>/g, '<div class="flex">\n<img class="ml-3" width="20px" height="auto" src="$1"/>')}}>
                            
                          </div>
                          <div className="mt-2">
                            <h2 className="font-thin text-lg" >{newVal.saleDetails.title}</h2>
                            <h2 className="font-hairline text-sm">{newVal.saleDetails.priceMsg}</h2>
                            <h2 className="font-hairline text-sm mt-2"><span style={{color:"#02ac84"}}> **  </span>{newVal.saleDetails.statusMsg}</h2>
                          </div>
                        </div>
                    )
                })}
              </Caresoul>
             </div>
              </div>
            );
          })
          : ""}
      </div>
    </di>
  );
};

export default SallerCategary;
