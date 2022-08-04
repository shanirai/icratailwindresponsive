// React packages
import React from "react";
// Third party packages
import Fade from "react-reveal/Fade";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
// Custom packages

function CTABanner({ handleClick }) {
  //**translate hooks */
  const { t } = useTranslation();
  //**language translate */
  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div className="w-full relative h-[472px] mb-0 flex flex-row justify-center items-center">
      <div className="w-full bg-black opacity-50 bottom-0 absolute h-[455px]  -z-10"></div>
      <img
        className="absolute bottom-0 -z-20 w-full h-[455px]"
        src={require("./../../assets/images/home/back-mask.png")}
      />

      <div className="lg:space-x-[200px] flex md:flex-row flex-col ">
        {/* 1 */}
        {/* <Fade left> */}
        <div>
          <div
            className="px-[70px] py-[30px] rounded-[15px] border border-white flex justify-center items-center cursor-pointer"
            // onClick={handleClick}
          >
            <div className="font-bold text-white">
              {/* 광고 문의하기 */}
              {t("h_s8_h1")}
            </div>
          </div>

          <div className="font-[15px] text-white mt-[28px] text-center">
            {/* 문의를 남겨주시면 담당자가 연락을 드립니다. */}
            {t("h_s8_sh1")}
          </div>
        </div>
        {/* </Fade> */}

        {/* 2 */}
        {/* <Fade bottom> */}
        <div>
          <div
            className="px-[70px] py-[30px] rounded-[15px] border border-white flex justify-center items-center cursor-pointer"
            onClick={handleClick}
          >
            <div className="font-bold text-white">
              {/* 광고 문의하기 */}
              {t("h_s8_h2")}
            </div>
          </div>

          <div className="font-[15px] text-white mt-[28px] text-center">
            {/* 문의를 남겨주시면 담당자가 연락을 드립니다. */}
            {t("h_s8_sh2")}
          </div>
        </div>
        {/* </Fade> */}

        {/* 3 */}
        {/* <Fade right> */}
        <div>
          <div
            className="px-[70px] py-[30px] rounded-[15px] border border-white flex justify-center items-center cursor-pointer"
            // onClick={handleClick}
          >
            <div className="font-bold text-white">
              {/* FAQs */}
              {t("h_s8_h3")}
            </div>
          </div>

          <div className="font-[15px] text-white mt-[28px] text-center">
            {/* 문의를 남겨주시면 담당자가 연락을 드립니다. */}
            {t("h_s8_sh3")}
          </div>
        </div>
        {/* </Fade> */}
      </div>
    </div>
  );
}

export default CTABanner;
