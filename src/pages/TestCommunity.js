import React from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

const CommunityPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar active={false} />
      {/* L1  */}
      <div className="w-full px-[164px] mt-[200px] text-[50px] text-[#303B4A] font-ebold">
        DONBANGSEOK COMMUNITY
      </div>
      {/* L2 */}

      <div className="w-full px-[164px] mt-[57px] text-[30px] text-[#303B4A] font-md">
        {/* 돈방석은 글로벌 광고 시장의 판도를 바꾸기 위해 일하고 있습니다. */}
        {t("community_h")}
      </div>

      {/* L3 */}
      <div className="w-full px-[164px] mt-[27px] text-[20px] text-[#303B4A] font-md">
        {/* 다양한 채널을 통하여 유저간의 의견을 교환하고 ‘돈방석’ 플랫폼을 개선
        하기 위한 활동이 가능합니다. */}
        {t("community_subh")}
      </div>

      {/* L3 */}
      <div className="w-full px-[164px] mt-[79px] h-[688px] overflow-hidden">
        <img
          className="object-contain"
          src={require("./../assets/images/community/banner.png")}
        />
      </div>

      {/* L4 */}
      <div className="w-full px-[164px] mt-[73px] text-[50px] text-[#303B4A] font-bold uppercase">
        CHANNEL
      </div>

      {/* L5 */}
      <div className="w-full px-[164px] mt-[57px] text-[23px] text-[#303B4A] font-md leading-[40px]">
        {/* 돈방석 플랫폼의 다양한 채널에 참여해보세요. */}
        {t("community_channel_text")}
      </div>

      {/* L6 */}
      <div className="w-full px-[164px] mt-[84px] text-[23px] flex flex-row space-x-[99px] text-[#303B4A] font-md uppercase">
        <div className="w-[408px] h-[296px] relative z-0">
          <img src={require("./../assets/images/community/discord.png")} />
          <div className="absolute z-10 top-0 flex flex-1 w-full h-full items-center justify-center">
            <img
              className="w-[170px]"
              src={require("./../assets/images/community/ch1.png")}
            />
          </div>
        </div>
        <a
          target={"_blank"}
          href={"https://www.instagram.com/donbangseok/"}
          className="w-[408px] h-[296px] relative"
        >
          <img src={require("./../assets/images/community/insta.png")} />
          <div className="absolute z-10 top-0 flex flex-1 w-full h-full items-center justify-center">
            <img
              className="w-[170px]"
              src={require("./../assets/images/community/ch2.png")}
            />
          </div>
        </a>
        <a
          target={"_blank"}
          href={"https://www.instagram.com/donbangseok/"}
          className="w-[408px] h-[296px] relative"
        >
          <img src={require("./../assets/images/community/twitter.png")} />
          <div className="absolute z-10 top-0 flex flex-1 w-full h-full items-center justify-center">
            <img
              className="w-[170px]"
              src={require("./../assets/images/community/ch3.png")}
            />
          </div>
        </a>
      </div>

      {/* NEWS */}
      <div className="bg-[#F6F6F6] py-[102px] mt-[114px]">
        <div className=" w-full px-[164px]  text-[#303B4A] text-[50px] font-bold">
          NEWS
        </div>
        <div className=" w-full px-[164px] pb-[69px]  text-[#303B4A] text-[23px] font-md mt-[57px]">
          {/* 돈방석 플랫폼의 각종 이벤트, 뉴스를 확인할 수 있습니다. */}
          {t("community_news_t")}
        </div>

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
    </>
  );
};

const Block = (props) => {
  return (
    <div className="w-full px-[279px] my-[69px] flex flex-row">
      <div className="w-[408px] h-[296px] bg-[#EBEBEB]">
        <img
          src={require(`./../assets/images/community/${props.pimage}.png`)}
        />
      </div>

      <div className="flex flex-1 bg-red- pl-[73px] flex-col justify-center space-y-[59px]">
        <div className="text-[18px] text-[#303B4A]">
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

export default CommunityPage;
