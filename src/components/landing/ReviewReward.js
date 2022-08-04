// React packages
import React from "react";
// Third party packages
import Fade from "react-reveal/Fade";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
// Custom packages

function ReviewReward() {
  //**translate hooks */
  const { t } = useTranslation();
  //**language translate */
  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div className="w-full bg-[#F6F6F6] mt-[-100px] lg:mt-0">
      <div className="w-10/12 md:w-8/12 mx-auto flex flex-col md:flex-row">
        <img
          className="animate-[bounce_1.5s_ease-in-out_infinite] w-full md:w-2/3 my-10 md:my-[95px] order-last sm:order-first"
          src={require("./../../assets/images/home/two.png")}
        />
        {/* right */}
        <Fade right>
          <div className="w-full md:w-1/3">
            <div className="text-[#35BBAE] md:text-[20px] text-[16px] font-extrabold md:font-bold mt-20  md:mt-[217px]">
              {/* Review Rewards */}
              {t("h_s4_title")}
            </div>
            <div className="text-[#313131] text-2xl leading-8  md:text-[45px] font-ebold md:mt-[43px] mt-8 md:leading-[60px]">
              {/* SNS 리뷰 남기면 <br /> IDC 코인 리워드 지급 */}
              {t("h_s4_heading")}
            </div>
            <div className="text-[#313131] text-[16px] md:text-[18px] font-bold mt-7 md:mt-[51px] mb-0 lg:mb-24 md:mb-0">
              {/* 브랜드 토큰 사용 후기를 SNS에 남겨주세요. 사용 금액의 최대 5%
                상당 IDC 코인을 드립니다. */}
              {t("h_s4_subheading")}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default ReviewReward;
