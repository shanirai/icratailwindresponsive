// React packages
import React from "react";
// Third party packages
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
// import Flip from "react-reveal/Flip";
import i18next from "i18next";
import cookies from "js-cookie";
// Custom components

function Roadmap() {
  //** language translation hooks */
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div className="w-full h-full bg-red- my-0 md:my-24 mb-24  md:mb-[131.61px]">
      {/* title */}
      {/* <Fade top> */}
      <div className="font-bold text-2xl md:text-[30px] text-left px-[30px] md:px-[0px] md:text-center text-[#333333] mb-8 md:mb-[111px]">
        {t("about_heading_6")}
      </div>
      {/* </Fade> */}
      {/* <Fade bottom> */}
      {currentLanguageCode !== "kr" ? (
        <img
          className="w-[330px] md:w-full mx-auto h-full   md:px-[127.5px] bg-red-"
          src={require("./../../assets/images/roadmap4.png")}
          alt="roadmap"
        />
      ) : (
        <img
          className="w-full h-full md:px-[127.5px] bg-red-"
          src={require("./../../assets/images/roadmap.png")}
          alt="roadmap"
        />
      )}
      {/* </Fade> */}
    </div>
  );
}

export default Roadmap;
