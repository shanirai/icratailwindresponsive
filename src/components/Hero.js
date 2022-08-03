import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    // <div className="h-[745px] w-full bg-purple-200 pt-[163px] pl-[86px]">
    <div className="h-full md:h-[745px] w-full bg-purple- relative">
      <div className="absolute -z-10">
        <img
          className="mt-[-50px] bg-cover object-cover"
          // src={require("./../assets/images/banner.png")}
          src={require("./../assets/images/about_page_banner.gif")}
          // alt="banner"
        />
      </div>

      <div className="pt-36 md:pt-[163px] px-6 md:pl-[86px]">
        {/* L1 */}
        <div className="text-3xl md:text-[50px] w-full md:w-[873px] leading-normal md:leading-[70px] font-bold text-[#333333]">
          {t("about_heading_1")}
        </div>

        {/* L2 */}
        <div className="text-xl font-regular md:text-[23px] mt-[46px] w-full md:w-[873px] text-[#333333] leading-normal">
          {t("about_description_1")}
        </div>
        {/* L3 */}
        {/* <div className="mt-[78px]">
          <button className="w-[211px] h-[65px] rounded-[15px] bg-[#303B4A]"></button>
          <button className="w-[211px] h-[65px] rounded-[15px] bg-[#303B4A] ml-[30px]"></button>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
