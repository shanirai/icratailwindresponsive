// React packages
import React from "react";
// Third party packages
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
// import Flip from "react-reveal/Flip";
import i18next from "i18next";
import cookies from "js-cookie";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function News() {
  //**translate hooks */
  const { t } = useTranslation();
  return (
    <div className=" w-full px-[30px] md:px-[36px] lg:px-[164px] bg-[#F6F6F6] py-12  lg:py-[102px] mt-12 lg:mt-[114px]">
      <div className="text-2xl md:text-xl text-[#303B4A] lg:text-[50px] leading-normal font-bold">
        NEWS
      </div>
      <div className=" text-sm   text-[#303B4A] lg:text-[23px] font-md mt-5 md:mt-7  lg:mt-[57px]">
        {/* 돈방석 플랫폼의 각종 이벤트, 뉴스를 확인할 수 있습니다. */}
        {t("community_news_t")}
      </div>
      <MobileViewNews hidden={`hidden`} marginTop={`mt-6`} />
      <div className="hidden md:block">
        <Block
          pimage={"post1"}
          ptext={t("community_post_text1")}
          pdate={t("community_post_date1")}
        />

        <div className="border border-b-[0.1px] mx-[164px]" />

        <Block
          pimage={"post2"}
          ptext={t("community_post_text2")}
          pdate={t("community_post_date2")}
        />

        <div className="border border-b-[0.1px] mx-[164px]" />
        <Block
          pimage={"post3"}
          ptext={t("community_post_text3")}
          pdate={t("community_post_date3")}
        />

        <div className="border border-b-[0.1px] mx-[164px]  mb-[69px]" />
      </div>
    </div>
  );
}

export default News;

export const Block = (props) => {
  return (
    <div className="md:px-[70px]   lg:px-[120px] my-7 md:my-12 lg:my-[69px] flex md:flex-row flex-col bg-white md:bg-transparent border border-[#0000001C] rounded-lg p-5 md:p-0 md:border-none">
      <div className="lg:w-[408px] w-full h-full  md:w-[177px] md:h-[129px] lg:h-[296px] ">
        <img
          className="rounded-lg md:rounded-none"
          src={require(`./../../assets/images/community/${props.pimage}.png`)}
        />
      </div>

      <div className="flex flex-1 pt-4 md:pt-0 bg-red- md:pl-16 lg:pl-[73px] flex-col justify-center space-y-[48px] lg:space-y-[59px]">
        <div className=" text-[16px] font-extrabold md:font-light lg:font-light leading-normal md:text-[18px] text-[#303B4A]">
          {/* 기사의 내용 기사의 내용 기사의 내용 기사의 내용 기사의 내용 기사의
          내용 기사의 내용 기사의 내용 기사의 내용 기사의 내용 기사의 내용
          기사의 내용 기사의 내용 기사의 내용 ……… */}
          {props.ptext}
        </div>
        <div className="text-[18px] text-[#B7B7B7]">{props.pdate}</div>
      </div>
    </div>
  );
};

export const MobileViewNews = (props) => {
  //**translate hooks */
  const { t } = useTranslation();
  //**props */
  const { hidden, marginTop } = props;

  return (
    <div className={`${marginTop}  block md:${hidden}  `}>
      <Carousel
        autoPlay={true}
        showArrows={false}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={true}
      >
        <Block
          pimage={"post1"}
          ptext={t("community_post_text1")}
          pdate={t("community_post_date1")}
        />
        <Block
          pimage={"post1"}
          ptext={t("community_post_text1")}
          pdate={t("community_post_date1")}
        />
        <Block
          pimage={"post1"}
          ptext={t("community_post_text1")}
          pdate={t("community_post_date1")}
        />
        <Block
          pimage={"post1"}
          ptext={t("community_post_text1")}
          pdate={t("community_post_date1")}
        />
      </Carousel>
    </div>
  );
};
