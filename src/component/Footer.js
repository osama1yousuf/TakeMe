import React from "react";
import { useSelector } from "react-redux";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
const Footer = () => {
  const info = useSelector((state) => state.appInfo.appInfo);
  console.log(info);
  return (
    <div className="bg-black flex justify-around items-center w-full fixed bottom-0 left-0 ">
      <h2 style={{ fontWeight: "bolder" }} className="text-white">
        TakeMe
      </h2>
      <h2 style={{ fontSize: "12px" }} className="text-white">
        ⓒ 2022
      </h2>
      <div className="flex">
        <a target="_blank" href={info.whatsappLink}>
          <BsWhatsapp className="mx-3 my-2 text-white" />
        </a>
        <a target="_blank" href={info.facebookLink}>
          <BsFacebook className="mx-3 my-2 text-white" />
        </a>
        <a target="_blank" href={info.instagramLink}>
          <BsInstagram className="mx-3 my-2 text-white" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
