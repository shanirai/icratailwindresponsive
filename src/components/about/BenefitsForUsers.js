// React packages
import React from "react";
// Third party packages
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
// import Flip from "react-reveal/Flip";
import i18next from "i18next";
import cookies from "js-cookie";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function BenefitsForUsers() {
  //** language translation hooks */
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div className="w-full">
      <div
        style={{ paddingTop: 92.87, paddingBottom: 92.87 }}
        className="w-full  mt-0 lg:mt-32 md:mt-[120px] md:mb-[40.5px] md:bg-[#F4F4F4] px-[30px] md:px-[30px] lg:px-[140px] bg-white  "
      >
        {/* title */}
        {/* <Fade top> */}
        <div className="font-bold text-left text-2xl lg:text-[30px]  lg:leading-normal md:text-xl md:font-extrabold lg:font-bold md:text-center text-[#333333]  mb-10 md:mb-7  lg:mb-[97px]">
          {t("about_heading_5")}
        </div>
        {/* Mobile view Slider */}
        <MobileViewBenefitsForUser hidden={`hidden`} marginTop={`mt-6`} />
        {/* </Fade> */}
        {/* 3 CARDS */}
        <div className="w-full md:flex flex-col md:flex-row  md:justify-between hidden">
          {/* 1 */}
          {/* <Flip left delay={200}> */}
          <div className="w-full md:w-[33%] space-y-5 lg:space-y-[44px] border border-[#0000001C] md:border-none rounded-lg p-5 md:p-0">
            <img src={require("../../assets/images/likes.png")} alt="likes" />
            <div className="lg:text-[22px] lg:leading-normal text-[16px] leading-normal text-xs  text-center text-[#303B4A]">
              {t("about_subheading_5_1")}
            </div>
          </div>
          {/* </Flip> */}

          {/* 2 */}
          {/* <Flip left delay={200}> */}
          <div className="w-full md:w-[33%] space-y-5 lg:space-y-[44px] border border-[#0000001C] md:border-none rounded-lg p-5 md:p-0">
            <img
              src={require("../../assets/images/gen-coin.png")}
              alt="likes"
            />
            <div className="lg:text-[22px] lg:leading-normal text-[16px] leading-normal text-xs  text-center text-[#303B4A]">
              {t("about_subheading_5_2")}
            </div>
          </div>
          {/* </Flip> */}

          {/* 3 */}
          {/* <Flip left delay={200}> */}
          <div className="w-full md:w-[33%] space-y-5 lg:space-y-[44px] border border-[#0000001C] md:border-none rounded-lg p-5 md:p-0">
            <img src={require("../../assets/images/pizza.png")} alt="likes" />
            <div className="lg:text-[22px] lg:leading-normal text-[16px] leading-normal text-xs  text-center text-[#303B4A]">
              {t("about_subheading_5_3")}
            </div>
          </div>
          {/* </Flip> */}
        </div>
      </div>
    </div>
  );
}

export default BenefitsForUsers;

export const MobileViewBenefitsForUser = (props) => {
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
        showThumbs={false}
      >
        {/* first card */}
        <div className="w-full md:w-[33%] space-y-5 lg:space-y-[44px] border border-[#0000001C] md:border-none rounded-lg p-5 md:p-0">
          <img src={require("../../assets/images/likes.png")} alt="likes" />
          <div className="lg:text-[22px] lg:leading-normal text-[16px] leading-normal text-xs  text-center text-[#303B4A]">
            {t("about_subheading_5_1")}
          </div>
        </div>
        {/* second card */}
        <div className="w-full md:w-[33%] space-y-5 lg:space-y-[44px] border border-[#0000001C] md:border-none rounded-lg p-5 md:p-0">
          <img src={require("../../assets/images/gen-coin.png")} alt="likes" />
          <div className="lg:text-[22px] lg:leading-normal text-[16px] leading-normal text-xs  text-center text-[#303B4A]">
            {t("about_subheading_5_2")}
          </div>
        </div>
        {/* third card */}
        <div className="w-full md:w-[33%] space-y-5 lg:space-y-[44px] border border-[#0000001C] md:border-none rounded-lg p-5 md:p-0">
          <img src={require("../../assets/images/pizza.png")} alt="likes" />
          <div className="lg:text-[22px] lg:leading-normal text-[16px] leading-normal text-xs  text-center text-[#303B4A]">
            {t("about_subheading_5_3")}
          </div>
        </div>
      </Carousel>
    </div>
  );
};
