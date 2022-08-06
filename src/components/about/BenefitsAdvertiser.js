// React packages
import React from "react";
// Third party packages
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
// import Flip from "react-reveal/Flip";
import i18next from "i18next";
import cookies from "js-cookie";
// Custom components

function BenefitsAdvertiser() {
  //** language translation hooks */
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div className="w-full overflow-hidden lg:px-[160px] mt-24 pb-24 md:pb-0 md:mt-0 md:px-[30px] px-[30px] bg-[#F6F6F6] md:bg-transparent ">
      {/* BENEFITS FOR ADVERTISERS */}
      <div className="w-full mt-24 md:mt-24 lg:mt-[152px] lg:mb-[169.5px] md:mb-[67px]">
        {/* title */}
        <div className="font-bold text-2xl md:text-[30px] md:font-ebold text-left md:text-center text-[#333333] mb-9 md:mb-16 lg:mb-[97px]">
          {t("about_heading_4")}
        </div>
        {/* 3 CARDS */}
        <div className="w-full flex flex-col md:flex-row lg:justify-evenly md:justify-between">
          {/* card 1 */}
          <div className="w-full md:w-[33%] p-5 md:p-0 lg:p-0 mb-12 md:mb-0 lg:space-y-[62.75px] md:space-y-6 md:px-5 md:flex md:flex-col md:items-center bg-white md:bg-transparent  border md:border-none border-[#FFFFFF] rounded-lg">
            {/* <Fade left> */}
            <img
              className="lg:w-[356px] md:w-[151px]  text-center  "
              src={require("../../assets/images/marketing.png")}
              alt="marketing"
            />
            {/* </Fade> */}
            {/* <Fade right> */}
            <div className=" text-[16px] leading-normal md:text-xs lg:text-[22px]  lg:leading-normal text-[#303B4A] pt-4 md:pt-0  md:mx-0 text-center">
              {t("about_subheading_4_1")}
            </div>
            {/* </Fade> */}
          </div>

          {/* 2 */}
          <div className="w-full md:w-[33%] mb-12 md:mb-0 p-5 md:p-0 lg:p-0 lg:space-y-[62.75px] md:space-y-6 md:px-5 md:flex md:flex-col md:items-center bg-white md:bg-transparent  border md:border-none border-[#FFFFFF] rounded-lg ">
            {/* <Fade left> */}
            <img
              className="lg:w-[356px] md:w-[151px] "
              src={require("../../assets/images/social.png")}
              alt="social"
            />
            {/* </Fade> */}
            {/* <Fade right> */}
            <div className=" text-[16px] leading-normal md:text-xs lg:text-[22px]  lg:leading-normal text-[#303B4A] pt-4 md:pt-0 md:mx-0 text-center">
              {t("about_subheading_4_2")}
            </div>
            {/* </Fade> */}
          </div>

          {/* 3 */}
          <div className="w-full md:w-[33%] mb-12 md:mb-0 p-5 md:p-0 lg:space-y-[62.75px] md:space-y-6  md:px-5 md:flex md:flex-col md:items-center bg-white md:bg-transparent  border md:border-none border-[#FFFFFF] rounded-lg ">
            {/* <Fade left> */}
            <img
              className="lg:w-[356px] md:w-[151px] "
              src={require("../../assets/images/video.png")}
              alt="video"
            />
            {/* </Fade> */}
            {/* <Fade right> */}
            <div className=" text-[16px] leading-normal md:text-xs lg:text-[22px]  lg:leading-normal text-[#303B4A] pt-4 md:pt-0 md:mx-0 text-center">
              {t("about_subheading_4_3")}
            </div>
            {/* </Fade> */}
          </div>
        </div>
      </div>

      {/* 2 DIVS */}
      <div className="w-full flex flex-col md:flex-row lg:justify-evenly md:justify-between">
        {/* 1 */}
        <div className="w-full lg:w-4/12 md:w-[50%] mb-12 md:mb-0 p-5 md:p-0 space-y-[20px] md:space-y-[47px] flex flex-col items-center bg-white md:bg-transparent  border md:border-none border-[#FFFFFF] rounded-lg">
          {/* <Fade left> */}
          <img
            className="lg:w-[450px] md:w-[151px] "
            src={require("./../../assets/images/analysis1.png")}
            alt="image1"
          />
          {/* </Fade> */}
          {/* <Fade right> */}
          <div className=" text-[16px] leading-normal md:text-xs lg:text-[22px]  lg:leading-normal text-[#303B4A] mx-0 md:mx-0 text-center md:px-10 lg:px-0">
            {t("about_subheading_4_4")}
          </div>
          {/* </Fade> */}
        </div>
        {/* 2 */}
        <div className="w-full lg:w-4/12 md:w-[50%] p-5 md:p-0  space-y-[20px] md:space-y-[47px] flex flex-col items-center bg-white md:bg-transparent  border md:border-none border-[#FFFFFF] rounded-lg">
          {/* <Fade left> */}
          <img
            className="lg:w-[375px] md:w-[151px] "
            src={require("./../../assets/images/analysis2.png")}
            alt="image1"
          />
          {/* </Fade> */}
          {/* <Fade right> */}
          <div className=" text-[16px] leading-normal md:text-xs lg:text-[22px]  lg:leading-normal text-[#303B4A] mx-0 md:mx-0 text-center md:px-10 lg:px-0">
            {t("about_subheading_4_5")}
          </div>
          {/* </Fade> */}
        </div>
        {/* 2 */}
        {/* <div className="w-full md:w-7/12 flex flex-col items-center justify-center">
          // <Fade left>
            <img
              className="w-8/12 md:w-full mx-auto"
              src={require("./../assets/images/analysis2.png")}
              alt="image 2"
            />
          // </Fade>

          // <Fade right>
            <div className="text-md md:text-[22px] text-[#303B4A] mx-8 md:mx-0 mt-8 md:mt-10 text-center">
              {t("about_subheading_4_5")}
            </div>
          // </Fade>
        </div> */}
      </div>
    </div>
  );
}

export default BenefitsAdvertiser;
