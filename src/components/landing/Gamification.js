// React packages
import React from "react";
// Third party packages
import Fade from "react-reveal/Fade";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
// Custom packages

function Gamification() {
  //**translate hooks */
  const { t } = useTranslation();
  //**language translate */
  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div className="w-full bg-white">
      <div className="w-10/12 md:w-[80%] mx-auto flex flex-col md:flex-row mt-16 lg:mt-24 ">
        {/* left */}
        <Fade left>
          <div className="w-full md:w-2/5 ">
            <div className="text-[#35BBAE] text-[16px] font-extrabold md:font-bold md:text-[22px] ">
              {/* gamification */}
              {t("h_s5_title")}
            </div>
            <div className="text-[#313131] text-2xl  font-ebold md:text-xl md:font-extrabold  lg:text-[45px]  mt-8 md:mt-[49px] lg:leading-[60px]">
              {/* 다양한 게임을 통한 IDC 코인 쟁탈전! */}
              {t("h_s5_heading")}
            </div>
            <div className="text-[#313131] text-[16px] md:text-sm mt-6 lg:mt-[51px] leading-normal">
              {t("h_s5_subheading")}

              {/* 베스트 리뷰, 행운의 룰렛, 가격을 맞춰라! 등 재미있는 돈방석
                게이미피케이션을 통해 IDC 코인을 쟁탈하세요! */}
            </div>
          </div>
        </Fade>
        {/* right */}
        <div className="w-full bg-red- md:w-2/3 flex flex-row ml-0 md:ml-[100px] self-center mt-3 md:mt-0  lg:my-24 md:my-0">
          {/* 1 */}
          <div className="transition delay-300 animate-[bounce_1.5s_ease-in-out_infinite] flex flex-col justify-around w-2/12 md:w-1/4">
            <div className="relative">
              <img
                className="w-[82px] absolute"
                src={require("./../../assets/images/home/likes.png")}
              />
              <img
                className=""
                src={require("./../../assets/images/home/messages.png")}
              />
            </div>

            <div className="relative">
              <img
                className="absolute top-[-60px] right-[-51px]"
                src={require("./../../assets/images/home/small-heart.png")}
              />
              <img
                className=""
                src={require("./../../assets/images/home/hand.png")}
              />
            </div>
          </div>

          {/* 2 */}
          <div className="animate-[bounce_1.2s_ease-in-out_infinite] w-8/12 md:w-2/4 relative">
            <img
              className="absolute w-[62px] right-[40px] bottom-[283px]"
              src={require("./../../assets/images/home/happy-r.png")}
            />
            <img
              className="absolute w-[62px] left-[10px] bottom-[150px]"
              src={require("./../../assets/images/home/c.png")}
            />
            <img
              className=""
              src={require("./../../assets/images/home/donbangseok.png")}
            />
          </div>

          {/* 3 */}
          <div className="animate-[bounce_0.9s_ease-in-out_infinite] flex flex-row items-center w-1/12 md:w-1/4 ">
            <div className="relative">
              <img
                className="absolute top-0 right-0 w-[56px]"
                src={require("./../../assets/images/home/happy-l.png")}
              />
              <img
                className="absolute bottom-0 left-0 w-[56px]"
                src={require("./../../assets/images/home/ball.png")}
              />
              <img
                className=""
                src={require("./../../assets/images/home/lucky.png")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gamification;
