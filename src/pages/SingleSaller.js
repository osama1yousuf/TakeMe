import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { appInfoAction } from "../store/Slice/appInfoSlice";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "../component/header";
import { BsFillCaretDownFill, BsFillCursorFill, BsFillStarFill, BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import Caresoul from "../element/Caresoul";

const SingleSaller = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const [stateValue, setStateValue] = useState('');
    const [selectedId, setSelectedId] = useState(null)
    useEffect(() => {
        const { state } = location;
        console.log(state?.value.products);
        setStateValue(state?.value);
    }, [location]);
    useEffect(() => {
        dispatch(appInfoAction.sideBar(false))
    })
    const handleShow = (e) => {
        if (selectedId === null) {
          setSelectedId(e.id)
        } else {
          setSelectedId(null)
        }
      }
    return (
        <div>
            <Header>
                <h1 className="text-white font-black mt-1 text-lg">{stateValue.name}</h1>
            </Header>
            <div className="bg-gray-100">
            <div style={{direction:"rtl"}} className="flex cursor-pointer py-2">
                <div className="w-14 m-3">
                    <img src={stateValue.imagePath} />
                </div>
                <div>
                    <h1 className="font-black text-lg">{stateValue.name}</h1>
                    <h3 className="text-sm">{stateValue.city}</h3>
                    <p className="text-xs">`{stateValue.productsCountMsg}</p>
                    <div className="flex gap-2 mt-3">
                        <BsFillStarFill style={{ color: "#02ac84" }} />
                        <h3 style={{ color: "#02ac84" }} className="text-sm">
                            {stateValue.ratingMsg}
                        </h3>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-3">
                    <a style={{background:"#02ac84" , borderRadius:"50%" ,color:"white"}} className="mx-2 p-3" href='tel:${stateValue.phone}'>
                      <BsFillTelephoneFill size={25} />
                    </a>
                    <a style={{background:"#02ac84" ,  borderRadius:"50%",color:"white"}} className="mx-2 p-3" href={stateValue.whatsappLink}>
                      <BsWhatsapp size={25}/>
                    </a>
                    <a style={{background:"#02ac84" , borderRadius:"50%" , color:"white"}} className="mx-2 p-3" href={stateValue.navigateLink}
                    >
                      <BsFillCursorFill size={25}/>
                    </a>
                  </div>
            </div>
            <div style={{direction:"rtl"}} className="p-4">
                  <Caresoul>
                    {stateValue.products ? stateValue.products[1].map((newVal, i) => {
                      return (
                        <div style={{ width: "full" }}>
                          <div className="flex item-center mt-3">
                            <img src={newVal.images[0].imagePath} alt={newVal.name} />
                          </div>
                          <div className="flex justify-between mt-4">
                            <h1 className="font-semibold text-2xl">{newVal.name}</h1>
                            < BsFillCaretDownFill size={"20px"} onClick={(e) => handleShow(newVal)} className="mx-5 mt-2 cursor-pointer" style={{ color: "#02ac84" }} />
                          </div>
                          <div className="text-sm p-3" style={{
                            display: newVal.id === selectedId ? "block" : "none"
                          }} dangerouslySetInnerHTML={{ __html: newVal.description.replace(/<div>\n<img-key>(.*?)<\/img-key>/g, '<div class="flex">\n<img class="ml-3" width="20px" height="auto" src="$1"/>') }}>

                          </div>
                          <div className="mt-2">
                            <h2 className="font-thin text-lg" >{newVal.saleDetails.title}</h2>
                            <h2 className="font-hairline text-sm">{newVal.saleDetails.priceMsg}</h2>
                            <h2 className="font-hairline text-sm mt-2"><span style={{ color: "#02ac84" }}> **  </span>{newVal.saleDetails.statusMsg}</h2>
                          </div>
                        </div>
                      )
                    }): "" }
                  </Caresoul>
                  <div className="flex justify-center my-2">
                    <a style={{background:"#02ac84" , borderRadius:"50%" ,color:"white"}} className="mx-2 p-3" href='tel:${stateValue.phone}'>
                      <BsFillTelephoneFill size={25} />
                    </a>
                    <a style={{background:"#02ac84" ,  borderRadius:"50%",color:"white"}} className="mx-2 p-3" href={stateValue.whatsappLink}>
                      <BsWhatsapp size={25}/>
                    </a>
                    <a style={{background:"#02ac84" , borderRadius:"50%" , color:"white"}} className="mx-2 p-3" href={stateValue.navigateLink}
                    >
                      <BsFillCursorFill size={25}/>
                    </a>
                  </div>
                </div>
        </div>
    )
}
export default SingleSaller