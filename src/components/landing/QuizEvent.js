// React packages
import React from "react";
// Third party packages
import Fade from "react-reveal/Fade";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import CollabCard from "./CollabCard";
// Custom packages

function QuizEvent() {
  const { t } = useTranslation();

  //   const handleClick = () => {
  //     props.setActive(!props.active);
  //   };

  //**language translate */
  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div className="w-full ">
      {/* CONTAINER */}
      <div className="flex flex-col md:flex-row w-10/12 lg:w-8/12 md:w-[80%] mx-auto bg-red-  my-24 lg:mt-[217px]">
        {/* left */}
        <div className="w-full md:w-2/3">
          {/* text */}
          <Fade left>
            <div className="text-[#35BBAE] md:text-[20px] text-[16px] font-extrabold md:font-bold mb-10 lg:mb-14 md:mb-[30px]">
              Quiz event
              {/* {t("h_s3_title")} */}
            </div>
            <div className="text-[#313131] text-2xl lg:text-3xl md:text-[22px] font-ebold w-full md:w-[450px] leading-normal md:leading-[33px] mb-12 md:mb-7 lg:mb-[70px]">
              {/* 매주 열리는 <br /> 돈방석 퀴즈 타-임 <br /> 브랜드 토큰 쏜다! */}
              {t("h_s3_heading")}
            </div>
          </Fade>

          <Fade left delay={1500}>
            <div className="text-[#313131] md:font-extrabold text-[18px] mb-1 lg:mb-5 md:mb-[9px] ">
              {/* 브랜드 토큰이란? */}
              {t("h_s3_question")}
            </div>
            <div className="text-[#313131] text-[18px] font-regular w-full leading-[30px]">
              {/* 블록체인 기반의 브랜드 전용 코인으로 퀴즈 이벤트 당첨 시
                지급됩니다. 브랜드 토큰으로 브랜드 제품 구매 및 서비스 이용이
                가능합니다. */}
              {t("h_s3_answer")}
            </div>
          </Fade>

          {/* MULTIPLE CARDS */}
          <div className="flex flex-row  mt-8 lg:mt-[45px]  flex-wrap justify-start  lg:-ml-6 lg:space-x-5 space-x-3  bg-red-">
            <Fade bottom delay={300}>
              <CollabCard amount={"100,000"} logo={"burger-king"} />
            </Fade>
            <Fade bottom delay={600}>
              <CollabCard amount={"50,000"} logo={"starbuck"} />
            </Fade>
            <Fade bottom delay={900}>
              <CollabCard amount={"30,000"} logo={"pab"} />
            </Fade>
            <Fade bottom delay={1200}>
              <CollabCard amount={"80,000"} logo={"dominos"} />
            </Fade>
          </div>
        </div>

        {/* right */}
        <div className="w-full md:w-1/3">
          <img
            className="animate-[bounce_1.5s_ease-in-out_infinite]"
            src={require("./../../assets/images/home/input.png")}
          />
        </div>
      </div>
    </div>
  );
}

export default QuizEvent;
