// React packages
import React from "react";
// Third party packages
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
// import Flip from "react-reveal/Flip";
import i18next from "i18next";
import cookies from "js-cookie";

function Channel() {
  //**translate hooks */
  const { t } = useTranslation();

  return (
    <div className="w-full px-[30px] md:px-[36px] lg:px-[164px] mt-[73px]">
      <div className=" text-2xl md:text-xl text-[50px] leading-normal text-[#303B4A] font-bold ">
        Channel
      </div>
      <div className=" mt-5 md:mt-7 text-sm lg:mt-[57px] lg:text-[23px] text-[#303B4A] font-md leading-[40px]">
        {/* 돈방석 플랫폼의 다양한 채널에 참여해보세요. */}
        {t("community_channel_text")}
      </div>
      <div className=" mt-6 lg:mt-[84px] text-[23px] flex md:flex-row flex-col md:space-x-5  lg:space-x-[99px] text-[#303B4A] font-md uppercase">
        <div className="lg:w-[408px] md:w-[245px] w-[233px] h-[175px] lg:h-[296px] relative z-0 ">
          <img src={require("./../../assets/images/community/discord.png")} />
          <div className="absolute z-10 top-0 flex flex-1 w-full h-full items-center justify-center">
            <img
              className="w-[170px]"
              src={require("./../../assets/images/community/ch1.png")}
            />
          </div>
        </div>
        <a
          target={"_blank"}
          href={"https://www.instagram.com/donbangseok/"}
          className="lg:w-[408px] md:w-[245px] w-[233px]  h-[175px] lg:h-[296px] relative z-0 "
        >
          <img src={require("./../../assets/images/community/insta.png")} />
          <div className="absolute z-10 top-0 flex flex-1 w-full h-full items-center justify-center">
            <img
              className="w-[170px]"
              src={require("./../../assets/images/community/ch2.png")}
            />
          </div>
        </a>
        <a
          target={"_blank"}
          href={"https://www.instagram.com/donbangseok/"}
          className="lg:w-[408px] md:w-[245px] w-[233px] h-[175px] lg:h-[296px] relative z-0 "
        >
          <img src={require("./../../assets/images/community/twitter.png")} />
          <div className="absolute z-10 top-0 flex flex-1 w-full h-full items-center justify-center">
            <img
              className="w-[170px]"
              src={require("./../../assets/images/community/ch3.png")}
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Channel;
