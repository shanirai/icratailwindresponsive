// React packages
import React from "react";
// Third party packages
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
// import Flip from "react-reveal/Flip";
import i18next from "i18next";
import cookies from "js-cookie";

function CommunityMainSection() {
  //**translate hooks */
  const { t } = useTranslation();

  return (
    <div className="w-full px-[30px] md:px-[36px] lg:px-[164px]">
      <div className="  mt-10 md:mt-32 lg:mt-[200px] lg:text-[50px] text-2xl md:text-3xl leading-normal text-[#303B4A] font-ebold">
        DONBANGSEOK COMMUNITY
      </div>
      <div className=" text-lg mt-6 lg:mt-[57px] lg:text-[30px]  text-[#333333] leading-normal font-ebold font-md">
        {/* 돈방석은 글로벌 광고 시장의 판도를 바꾸기 위해 일하고 있습니다. */}
        {t("community_h")}
      </div>
      <div className=" mt-4 md:mt-[24px] md:text-xs text-sm  lg:text-[20px] text-[#303B4A] font-md">
        {/* 다양한 채널을 통하여 유저간의 의견을 교환하고 ‘돈방석’ 플랫폼을 개선
        하기 위한 활동이 가능합니다. */}
        {t("community_subh")}
      </div>
      <div className=" mt-4 md:mt-12 lg:mt-[79px] h-full overflow-hidden">
        <img
          className="object-contain"
          src={require("./../../assets/images/community/banner.png")}
        />
      </div>
    </div>
  );
}

export default CommunityMainSection;
