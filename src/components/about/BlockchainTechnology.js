// React packages
import React from "react";
// Third party packages
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
// import Flip from "react-reveal/Flip";
import i18next from "i18next";
import cookies from "js-cookie";
// Custom components

function BlockchainTechnology() {
  //** language translation hooks */
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div className="w-full">
      <div className="bg-[#F4F4F4] lg:pt-[112px] md:pt-[70px] pt-20 md:text-center lg:text-center text-left px-[30px] md:px-[0px] lg:px-[0px]  ">
        {/* title */}
        {/* <Fade left> */}
        <div className="font-bold text-3xl  md:text-[30px] text-[#333333]">
          {t("about_heading_2")}
        </div>
        {/* </Fade> */}
        {/* text */}
        {/* <Fade right> */}
        <div className="lg:w-[80%] md:w-[85%]  md:text-[20px] text-[16px] leading-normal font-regular md:font-bold mx-auto mt-5 lg:mt-[37.5px] pb-8 lg:pb-[100px] text-[#313131] md:leading-[35px]">
          {t("about_subheading_2")}
        </div>
        {/* </Fade> */}

        {/* images + text */}
        <div className="bg-red- w-full flex flex-col md:flex-row justify-center md:space-x-10 space-y-10  md:space-y-0  pb-20">
          {/* 1 */}
          {/* <Fade left> */}
          <div className="flex flex-col md:px-3 md:pt-0 items-center bg-white md:w-[195px] md:h-[160px] h-[256px]  lg:h-[328px]  lg:w-[417px] shadow-2xl rounded-lg md:rounded-lg lg:rounded-[20px] lg:pt-[16px] ">
            <img
              className="w-6/12 lg:w-[201px] md:w-[92px]"
              src={require("./../../assets/images/bt/coins.png")}
              alt="coin"
            />
            <div className=" leading-normal lg:pt-6 md:pt-4 md:mt-0 lg:text-lg md:text-xs text-[#303B4A] lg:pb-10 md:pb-2 text-center">
              {t("about_card_1")}
            </div>
          </div>
          {/* </Fade> */}

          {/* 2 */}
          {/* <Fade bottom> */}
          <div className="flex flex-col items-center md:pt-6 pt-14  bg-white shadow-2xl px-4 md:px-4  h-[256px]   md:w-[195px] md:h-[160px]  lg:h-[328px]  lg:w-[417px] rounded-lg   md:rounded-lg lg:rounded-[20px] lg:px-[79px] lg:pt-[60px]">
            <img
              className=" md:w-[162px] w-[277px] lg:w-[412px]"
              src={require("./../../assets/images/bt/group.png")}
              alt="group"
            />
            <div className=" leading-normal lg:pt-24 pt-10 md:pt-6 md:mt-0 lg:text-lg md:text-xs text-[#303B4A] lg:pb-10 md:pb-2 text-center">
              {t("about_card_2")}
            </div>
          </div>
          {/* </Fade> */}

          {/* 3 */}
          {/* <Fade right> */}
          <div className="flex flex-col  md:px-4 md:pt-6  pt-14 lg:px-0  px-4 items-center bg-green- md:w-[195px] md:h-[160px] h-[256px]   lg:h-[328px]  lg:w-[417px]  bg-white rounded-lg md:rounded-lg lg:rounded-[20px] shadow-2xl lg:pt-[67px]">
            <img
              className="md:w-[137px] w-[196px] lg:w-[297px]"
              src={require("./../../assets/images/bt/shield.png")}
              alt="shield"
            />
            <div className=" leading-normal lg:pt-8 pt-10 md:pt-5 md:mt-0 lg:text-lg md:text-xs text-[#303B4A] lg:pb-10 md:pb-2 text-center">
              {t("about_card_3")}
            </div>
          </div>
          {/* </Fade> */}
        </div>
      </div>
      <div className="bg-[#F4F4F4] w-full flex flex-row justify-center  mt-[-20px] pb-[14px] relative z-20">
        <img
          className="w-2/12 md:w-[46px]"
          src={require("./../../assets/images/down-arrow.png")}
          alt="down arrow"
        />
      </div>
      {/* PHONE IMAGE */}
      <div className="bg-[#F4F4F4] w-full flex flex-col items-center justify-center z-10">
        {/* <Fade bottom> */}
        <img
          className="w-full md:w-[500px] mx-auto -p-8"
          src={require("./../../assets/images/phone.gif")}
          alt="phone"
        />
        {/* </Fade> */}
      </div>
      <div className="bg-[#F4F4F4] w-full flex flex-row justify-center pt-[58.39px] pb-[89.39px]">
        <img
          className="w-2/12 md:w-[46px]"
          src={require("./../../assets/images/down-arrow.png")}
          alt="down arrow"
        />
      </div>
    </div>
  );
}

export default BlockchainTechnology;
