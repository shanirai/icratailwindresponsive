// React packages
import React from "react";
// Third party packages
import Fade from "react-reveal/Fade";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
// Custom packages

function QRSection() {
  //**translate hooks */
  const { t } = useTranslation();
  //**language translate */
  const currentLanguageCode = cookies.get("i18next") || "en";
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[75px] md:mt-[114px] ">
      <div className="md:text-[20px] font-bold text-[16px]  ">
        {/* 돈방석 다운로드 */}
        {t("h_s7_title")}
      </div>
      <div className="w-[198px] h-[198px] text-center my-[46px] text-[#313131] font-regular">
        {/* <Fade top> */}
        <img src={require("./../../assets/images/QRCODE.png")} />
        {/* </Fade> */}
      </div>
      <div className="md:mb-[178px] mb-24 items-center text-center mx-[30px] lg:mx-0 ">
        {/* QR text */}
        {t("h_s7_text")}
      </div>
    </div>
  );
}

export default QRSection;
