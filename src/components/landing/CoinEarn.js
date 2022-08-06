// React packages
import React from "react";
// Third party packages
import Fade from "react-reveal/Fade";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
// Custom packages

function CoinEarn() {
  //**translate hooks */
  const { t } = useTranslation();
  //**language translate */
  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div className="w-full bg-[#F6F6F6]">
      <div className="w-10/12 md:w-[90%] lg:w-[66%] mx-auto flex flex-col md:flex-row">
        {/* left */}
        <div className="w-full md:w-2/4 bg-red- flex flex-col lg:items-end items-start mt-16 lg:mt-36 ">
          <Fade left>
            <div className="text-[#35BBAE] md:text-[20px] text-[16px] font-extrabold md:font-bold">
              {/* Coin Earn */}
              {t("h_s6_title")}
            </div>

            <div className="relative">
              {/* <div className="w-[150px] border-4 bg-[#35BBAE] border-[#35BBAE] absolute bottom-3 right-0 -z-10"></div> */}
              <div className="text-[#313131] md:text-2xl  text-left lg:text-[35px] font-ebold  mt-6 lg:mt-[45px]  lg:text-right lg:leading-[60px]">
                {currentLanguageCode == "kr" ? (
                  <div>
                    볼수록 코인이 쌓이는 <br />{" "}
                    <span className="text-[#35BBAE]">브랜드 광고 영상</span>
                  </div>
                ) : (
                  <div>
                    Get paid to watch{" "}
                    <span className="text-[#35BBAE]">videos</span>
                  </div>
                )}

                {/* {t("h_s6_heading")}  */}
              </div>
            </div>

            <div className="relative">
              {/* <div className="w-[150px] border-4 bg-[#35BBAE] border-[#35BBAE] absolute bottom-3 right-0 -z-10"></div> */}
              <div className="text-[#313131] md:text-2xl  text-left lg:text-[35px] font-ebold  mt-6 lg:mt-[45px]  lg:text-right lg:leading-[60px]">
                {currentLanguageCode == "kr" ? (
                  <div>
                    받을수록 코인이 쌓이는
                    <br />{" "}
                    <span className="text-[#35BBAE]"> 광고 푸시 알람!</span>
                  </div>
                ) : (
                  <div>
                    Get paid to visit{" "}
                    <span className="text-[#35BBAE]">targeted ads</span>
                  </div>
                )}

                {/* {t("h_s6_subheading")} */}
              </div>
            </div>
          </Fade>
        </div>

        {/* right */}
        <div className="w-full md:w-2/3 flex flex-col md:flex-row ml-0 md:ml-[100px] space-x-0 lg:space-x-[40px]">
          <div className="w-full md:w-1/2 mt-16 lg:mt-[212px] md:mt-[150px] ">
            <div className="animate-[bounce_2s_ease-in-out_infinite] bg-white rounded-2xl py-[10px] pr-[-5px] shadow-2xl">
              <img src={require("./../../assets/images/home/view-1.png")} />
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 lg:mt-[308px] md:mt-[250px] mb-32 ">
            <div className="animate-[bounce_1.5s_ease-in-out_infinite] bg-white rounded-2xl py-[30px] shadow-2xl">
              <img
                className=""
                src={require("./../../assets/images/home/view-2.png")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinEarn;
