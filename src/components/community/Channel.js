// React packages
import React from "react";
// Third party packages
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import Marquee from "react-fast-marquee";
// import Flip from "react-reveal/Flip";
import i18next from "i18next";
import cookies from "js-cookie";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Channel() {
  //**translate hooks */
  const { t } = useTranslation();

  return (
    <div className="w-full px-[30px] md:px-[36px] lg:px-[164px] mt-[73px]">
      <div className=" text-2xl md:text-xl md:font-ebold lg:text-[50px] leading-normal text-[#303B4A] font-bold ">
        Channel
      </div>
      <div className=" mt-5 md:mt-7 text-sm lg:mt-[57px] lg:text-[23px] text-[#303B4A] font-md leading-[40px]">
        {/* 돈방석 플랫폼의 다양한 채널에 참여해보세요. */}
        {t("community_channel_text")}
      </div>
      {/* Mobile view slider component */}
      <MobileViewChannelCard hidden={`hidden`} marginTop={`mt-6`} />
      {/* mobile view slider end */}
      <div className=" mt-6 lg:mt-[84px] text-[23px] hidden  md:flex md:flex-row flex-row space-x-5 md:space-x-5  lg:space-x-[99px] text-[#303B4A] font-md uppercase">
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

export const MobileViewChannelCard = (props) => {
  //**props */
  const { hidden, marginTop } = props;
  return (
    <div className={`${marginTop} flex flex-row md:${hidden}`}>
      <Carousel
        autoPlay={true}
        showArrows={false}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={true}
      >
        <div className=" flex flex-col  relative z-0   h-[200px] ">
          <img src={require("./../../assets/images/community/discord.png")} />
          <div className="absolute z-10 top-0 flex flex-1 w-full h-full items-center justify-center p-10">
            <img
              className="w-[170px]"
              src={require("./../../assets/images/community/ch1.png")}
            />
          </div>
        </div>
        <div className=" flex flex-col  relative z-0   h-[200px] ">
          <img src={require("./../../assets/images/community/discord.png")} />
          <div className="absolute z-10 top-0 flex flex-1 w-full h-full items-center justify-center p-10">
            <img
              className="w-[170px]"
              src={require("./../../assets/images/community/ch1.png")}
            />
          </div>
        </div>
        <div className=" flex flex-col  relative z-0   h-[200px] ">
          <img src={require("./../../assets/images/community/discord.png")} />
          <div className="absolute z-10 top-0 flex flex-1 w-full h-full items-center justify-center p-10">
            <img
              className="w-[170px]"
              src={require("./../../assets/images/community/ch1.png")}
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};
