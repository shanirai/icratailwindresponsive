// React packages
import React from "react";
// Third party packages
import Fade from "react-reveal/Fade";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
// Custom packages

function SocialContainer() {
  //**translate hooks */
  const { t } = useTranslation();

  //   const handleClick = () => {
  //     props.setActive(!props.active);
  //   };

  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div className="md:pl-[164px] px-[30px] h-full py-10 md:py-0 md:h-[195px] bg-[#303B4A] z-10 flex flex-row  justify-between md:flex-row md:justify-start w-full items-center">
      <div className="flex flex-row bg-red- justify-around md:justify-start">
        <Fade left>
          <button
            onClick={() => {
              window.open(
                "https://app.gitbook.com/o/bF5XUzDCSg1nIRyBcfAv/s/qx0wfol8mQicbGPuhvI5/"
              );
            }}
            className="px-7 py-4   md:w-[211px] lg:h-16  rounded-[15px] bg-[#414955] text-white text-sm md:text-[20px]"
          >
            Whitepaper
            {/* Whitepaper(EN) */}
          </button>
        </Fade>
      </div>

      <div className="flex flex-row bg-red- w-full justify-end lg:justify-start ">
        {/* 1 */}
        <Fade left delay={200}>
          <div className="lg:w-[70px] lg:h-[70px] w-[43px] h-[43px]  lg:my-6  rounded-full bg-[#414955] lg:ml-[37px] ml-[10px] flex flex-col justify-center">
            <img src={require("./../../assets/images/ig.png")} alt="ig" />
          </div>
        </Fade>
        <Fade left delay={400}>
          <div className="lg:w-[70px] lg:h-[70px] w-[43px] h-[43px]  lg:my-6 md:my-0 lg:p-[17px] p-[12px] flex flex-col justify-center items-center rounded-full bg-[#414955] lg:ml-[37px] ml-[10px]">
            {" "}
            <img src={require("./../../assets/images/discord.png")} alt="ig" />
          </div>
        </Fade>
        <Fade left delay={600}>
          <div className="lg:w-[70px] lg:h-[70px] w-[43px] h-[43px]  lg:my-6 md:my-0 lg:p-[17px] p-[12px] flex flex-col justify-center items-center rounded-full bg-[#414955] lg:ml-[37px] ml-[10px]">
            {" "}
            <img src={require("./../../assets/images/twitter.png")} alt="ig" />
          </div>{" "}
        </Fade>
      </div>
    </div>
  );
}

export default SocialContainer;
