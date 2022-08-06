// React packages
import React from "react";
// Third party packages
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
// import Flip from "react-reveal/Flip";
import i18next from "i18next";
import cookies from "js-cookie";
// Custom components
import Header from "../common/Header";

function AboutMainSection() {
  //** language translation hooks */
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div className="h-full w-full bg-purple- opacity- relative">
      {/* <Navbar logo={"dark"} /> */}
      <Header logo={`dark`} />
      <div className="">
        <img
          className="w-full lg:h-[700px] h-[500px] md:h-[430px] overflow-hidden"
          // src={require("./../assets/images/banner.png")}
          src={require("./../../assets/images/about_page_banner.gif")}
          alt="banner"
        />
        {/* <img
          className="w-full  overflow-hidden  md:hidden"
          // src={require("./../assets/images/banner.png")}
          src={require("./../../assets/images/about-bg-mobile.png")}
          alt="banner"
        /> */}
      </div>

      <div className="absolute top-40 md:top-28 lg:top-0 px-[30px]  md:px-[35px] lg:px-[160px] flex flex-col h-full w-full bg-red- lg:justify-center  ">
        {/* L1 */}
        <Fade left>
          <div className="text-[28px] md:text-[30px] lg:text-[50px] w-full lg:w-[60%] md:w-[60%]  leading-normal  font-bold text-[#333333]">
            {t("about_heading_1")}
          </div>
        </Fade>
        {/* L2 */}
        <Fade right>
          <div className="text-lg font-light  mt-6 lg:mt-[46px] w-full lg:w-[59%] md:w-[60%] text-[#333333] leading-normal">
            {t("about_description_1")}
          </div>
        </Fade>
        {/* L3 */}
        {/* <div className="mt-[78px]">
          <button className="w-[211px] h-[65px] rounded-[15px] bg-[#303B4A]"></button>
          <button className="w-[211px] h-[65px] rounded-[15px] bg-[#303B4A] ml-[30px]"></button>
        </div> */}
      </div>
    </div>
  );
}

export default AboutMainSection;
