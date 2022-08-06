// React packages
import React from "react";
// Third party packages
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import Fade from "react-reveal/Fade";
// import Flip from "react-reveal/Flip";
import i18next from "i18next";
import cookies from "js-cookie";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// Custom components

function Whyus() {
  //** language translation hooks */
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div className="w-full overflow-hidden px-7 md:px-0 lg:px-0">
      <div className="w-full mt-20 md:mt-[88.76px] lg:mt-24 flex flex-row items-center bg-red-">
        {/* title */}
        {/* <Fade top> */}
        {/* <div className="w-full border border-b-[1px] border-black" /> */}
        <div className="w-full font-bold text-2xl md:text-[30px] md:font-ebold text-left md:text-center text-[#333333]">
          {t("about_heading_3")}
        </div>
        {/* <div className="w-full border border-b-[1px] border-black" /> */}
        {/* </Fade> */}
      </div>
      <MobileViewWhyus hidden={`hidden`} marginTop={`mt-6`} />
      <div className="md:block hidden ">
        {/* BLOCK 1 */}
        <div className="flex flex-col py-6 md:py-8 lg:py-16 md:flex-row justify-between mt-10 md:mt-[88px] items-center lg:px-[201px] md:px-[35px] px-4 mx-auto md:bg-white border md:border-none border-[#0000001C] rounded-lg ">
          {/* <Fade left> */}
          <div className="md:w-5/12 w-full ">
            <img
              // className="w-11/12 md:w-[796px]"
              src={require("../../assets/images/building-people.png")}
              alt="people"
            />
          </div>
          {/* </Fade> */}
          {/* <Fade right> */}
          <div className="md:w-7/12 w-full  mt-8 md:mt-0 md:text-[16px] leading-normal lg:text-[30px] text-[#303B4A] text-left md:ml-[60px]  lg:ml-[118.12px] font-ebold">
            {t("about_heading_3_1")}
            <div className="mt-4 md:mt-[16px] lg:mt-[25px]  md:text-[14px] lg:text-[23px] text-left text-[#303B4A] font-light">
              {t("about_subheading_3_1")}
            </div>
          </div>
          {/* </Fade> */}
        </div>

        {/* BLOCK 2 */}
        <div className="flex flex-col py-6 md:py-8 lg:py-16 md:flex-row justify-between items-center lg:px-[201px] md:px-[35px] px-4 mx-auto md:bg-[#F4F4F4] border md:border-none bg-white  border-[#0000001C] rounded-lg mt-5 md:mt-0">
          {/* <Fade left> */}
          <div className="md:w-5/12 w-full ">
            <img
              // className="w-11/12 md:w-[796px]"
              src={require("../../assets/images/gamification.png")}
              alt="people"
            />
          </div>
          {/* </Fade> */}
          {/* <Fade right> */}
          <div className="md:w-7/12 w-full text-[16px] leading-normal mt-8 md:mt-0 lg:text-[30px] text-[#303B4A] text-left lg:ml-[118.12px] md:ml-[60px] font-ebold">
            {t("about_heading_3_2")}
            <div className="mt-4 md:mt-[16px] lg:mt-[25px]  md:text-[14px] lg:text-[23px] text-left text-[#303B4A] font-light">
              {t("about_subheading_3_2")}
            </div>
          </div>
          {/* </Fade> */}
        </div>

        {/* BLOCK 3 */}
        <div className="flex flex-col py-6 md:py-8 lg:py-16 md:flex-row justify-between items-center lg:px-[201px] md:px-[35px] px-4  mx-auto md:bg-white border md:border-none border-[#0000001C] rounded-lg mt-5 md:mt-0 ">
          {/* <Fade left> */}
          <div className="md:w-5/12 w-full ">
            <img
              // className="w-11/12 md:w-[796px]"
              src={require("../../assets/images/nft_image.png")}
              alt="people"
            />
          </div>
          {/* </Fade> */}
          {/* <Fade right> */}
          <div className="md:w-7/12 w-full text-[16px] leading-normal mt-8 md:mt-0 lg:text-[30px] text-[#303B4A] text-left lg:ml-[118.12px] md:ml-[60px] font-ebold">
            {t("about_heading_3_3")}
            <div className="mt-4 md:mt-[16px] lg:mt-[25px]  md:text-[14px] lg:text-[23px] text-left text-[#303B4A] font-light">
              {t("about_subheading_3_3")}
            </div>
          </div>
          {/* </Fade> */}
        </div>

        {/* BLOCK 4 */}
        <div className="flex flex-col py-6 md:py-8 lg:py-16 md:flex-row justify-between items-center lg:px-[201px] md:px-[35px] px-4 mx-auto md:bg-[#F4F4F4] border md:border-none bg-white  border-[#0000001C] rounded-lg mt-5 md:mt-0">
          {/* <Fade left> */}
          <div className="md:w-5/12 w-full ">
            <img
              // className="w-11/12 md:w-[796px]"
              src={require("../../assets/images/check.png")}
              alt="people"
            />
          </div>
          {/* </Fade> */}
          {/* <Fade right> */}
          <div className="md:w-7/12 w-full text-[16px] leading-normal mt-8 md:mt-0 lg:text-[30px] text-[#303B4A] text-left lg:ml-[118.12px] md:ml-[60px] font-ebold">
            {t("about_heading_3_4")}
            <div className="mt-4 md:mt-[16px] lg:mt-[25px]  md:text-[14px] lg:text-[23px] text-left text-[#303B4A] font-light">
              {t("about_subheading_3_4")}
            </div>
          </div>
          {/* </Fade> */}
        </div>
      </div>
    </div>
  );
}

export default Whyus;

export const MobileViewWhyus = (props) => {
  //**translate hooks */
  const { t } = useTranslation();
  //**props */
  const { hidden, marginTop } = props;
  return (
    <div className={`${marginTop}  block md:${hidden}  `}>
      <Carousel
        autoPlay={true}
        showArrows={false}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={true}
      >
        {/* BLOCK 1 */}
        <div className="flex flex-col py-6 md:py-8 lg:py-16 md:flex-row justify-between mt-10 md:mt-[88px] items-center lg:px-[201px] md:px-[35px] px-4 mx-auto md:bg-white border md:border-none border-[#0000001C] rounded-lg ">
          {/* <Fade left> */}
          <div className="md:w-5/12 w-full ">
            <img
              // className="w-11/12 md:w-[796px]"
              src={require("../../assets/images/building-people.png")}
              alt="people"
            />
          </div>
          {/* </Fade> */}
          {/* <Fade right> */}
          <div className="md:w-7/12 w-full  mt-8 md:mt-0 md:text-[16px] leading-normal lg:text-[30px] text-[#303B4A] text-left md:ml-[60px]  lg:ml-[118.12px] font-ebold">
            {t("about_heading_3_1")}
            <div className="mt-4 md:mt-[16px] lg:mt-[25px]  md:text-[14px] lg:text-[23px] text-left text-[#303B4A] font-light">
              {t("about_subheading_3_1")}
            </div>
          </div>
          {/* </Fade> */}
        </div>

        {/* BLOCK 2 */}
        <div className="flex flex-col py-6 md:py-8 lg:py-16 md:flex-row justify-between items-center lg:px-[201px] md:px-[35px] px-4 mx-auto md:bg-[#F4F4F4] border md:border-none bg-white  border-[#0000001C] rounded-lg mt-5 md:mt-0">
          {/* <Fade left> */}
          <div className="md:w-5/12 w-full ">
            <img
              // className="w-11/12 md:w-[796px]"
              src={require("../../assets/images/gamification.png")}
              alt="people"
            />
          </div>
          {/* </Fade> */}
          {/* <Fade right> */}
          <div className="md:w-7/12 w-full text-[16px] leading-normal mt-8 md:mt-0 lg:text-[30px] text-[#303B4A] text-left lg:ml-[118.12px] md:ml-[60px] font-ebold">
            {t("about_heading_3_2")}
            <div className="mt-4 md:mt-[16px] lg:mt-[25px]  md:text-[14px] lg:text-[23px] text-left text-[#303B4A] font-light">
              {t("about_subheading_3_2")}
            </div>
          </div>
          {/* </Fade> */}
        </div>

        {/* BLOCK 3 */}
        <div className="flex flex-col py-6 md:py-8 lg:py-16 md:flex-row justify-between items-center lg:px-[201px] md:px-[35px] px-4  mx-auto md:bg-white border md:border-none border-[#0000001C] rounded-lg mt-5 md:mt-0 ">
          {/* <Fade left> */}
          <div className="md:w-5/12 w-full ">
            <img
              // className="w-11/12 md:w-[796px]"
              src={require("../../assets/images/nft_image.png")}
              alt="people"
            />
          </div>
          {/* </Fade> */}
          {/* <Fade right> */}
          <div className="md:w-7/12 w-full text-[16px] leading-normal mt-8 md:mt-0 lg:text-[30px] text-[#303B4A] text-left lg:ml-[118.12px] md:ml-[60px] font-ebold">
            {t("about_heading_3_3")}
            <div className="mt-4 md:mt-[16px] lg:mt-[25px]  md:text-[14px] lg:text-[23px] text-left text-[#303B4A] font-light">
              {t("about_subheading_3_3")}
            </div>
          </div>
          {/* </Fade> */}
        </div>

        {/* BLOCK 4 */}
        <div className="flex flex-col py-6 md:py-8 lg:py-16 md:flex-row justify-between items-center lg:px-[201px] md:px-[35px] px-4 mx-auto md:bg-[#F4F4F4] border md:border-none bg-white  border-[#0000001C] rounded-lg mt-5 md:mt-0">
          {/* <Fade left> */}
          <div className="md:w-5/12 w-full ">
            <img
              // className="w-11/12 md:w-[796px]"
              src={require("../../assets/images/check.png")}
              alt="people"
            />
          </div>
          {/* </Fade> */}
          {/* <Fade right> */}
          <div className="md:w-7/12 w-full text-[16px] leading-normal mt-8 md:mt-0 lg:text-[30px] text-[#303B4A] text-left lg:ml-[118.12px] md:ml-[60px] font-ebold">
            {t("about_heading_3_4")}
            <div className="mt-4 md:mt-[16px] lg:mt-[25px]  md:text-[14px] lg:text-[23px] text-left text-[#303B4A] font-light">
              {t("about_subheading_3_4")}
            </div>
          </div>
          {/* </Fade> */}
        </div>
      </Carousel>
    </div>
  );
};
