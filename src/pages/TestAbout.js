import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Fade from "react-reveal/Fade";
// import Flip from "react-reveal/Flip";
import i18next from "i18next";
import cookies from "js-cookie";

const AboutPage = () => {
  const { t } = useTranslation();

  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div className="h-full w-full bg-purple- opacity- relative">
        <Navbar logo={"dark"} />
        <div className="">
          <img
            className="w-full h-screen bg-cover object-cover"
            // src={require("./../assets/images/banner.png")}
            src={require("./../assets/images/about_page_banner.gif")}
            // alt="banner"
          />
        </div>

        <div className="absolute top-0 px-6 md:pl-[161px] flex flex-col h-full w-full bg-red- justify-center">
          {/* L1 */}
          <Fade left>
            <div className="text-3xl md:text-[50px] w-full md:w-[873px] leading-normal md:leading-[70px] font-bold text-[#333333]">
              {t("about_heading_1")}
            </div>
          </Fade>
          {/* L2 */}
          <Fade right>
            <div className="text-xl font-regular md:text-[23px] mt-[46px] w-full md:w-[873px] text-[#333333] leading-normal">
              {t("about_description_1")}
            </div>
          </Fade>
          {/* L3 */}
          {/* <div className="mt-[78px]">
          <button className="w-[211px] h-[65px] rounded-[15px] bg-[#303B4A]"></button>
          <button className="w-[211px] h-[65px] rounded-[15px] bg-[#303B4A] ml-[30px]"></button>
        </div> */}
        </div>
      </div>

      {/* SOCIAL SECTION */}
      {/* <div className="pl-[86px] h-[195px] bg-[#303B4A] flex flex-row w-full items-center">
        <button className="w-[211px] h-[65px] rounded-[15px] bg-[#414955] text-white text-[20px]">
          Whitepaper(EN)
        </button>
        <button className="w-[211px] h-[65px] rounded-[15px] bg-[#414955] text-white text-[20px] ml-[30px]">
          Whitepaper(KR)
        </button> */}

      {/* 1 */}
      {/* <div className="w-[70px] h-[70px] rounded-full bg-[#414955] ml-[90px]">
          <img src={require("./../assets/images/yt.png")} alt="social media" />
        </div>
        <div className="w-[70px] h-[70px] rounded-full bg-[#414955] ml-[30px]">
          <img
            src={require("./../assets/images/talk.png")}
            alt="social media"
          />
        </div>
        <div className="w-[70px] h-[70px] rounded-full bg-[#414955] ml-[30px]">
          <img src={require("./../assets/images/ig.png")} alt="social media" />
        </div>
      </div> */}

      {/* BLOCKCHAIN TECHNOLOGY */}
      <div className="bg-[#F4F4F4] pt-[112px] text-center ">
        {/* title */}
        {/* <Fade left> */}
        <div className="font-bold text-2xl md:text-[30px] text-[#333333]">
          {t("about_heading_2")}
        </div>
        {/* </Fade> */}
        {/* text */}
        {/* <Fade right> */}
        <div className="w-11/12 md:w-[1355px] text-md md:text-[20px] font-bold mx-auto mt-[37.5px] pb-8 md:pb-[100px] text-[#303B4A] leading-[35px]">
          {t("about_subheading_2")}
        </div>
        {/* </Fade> */}

        {/* images + text */}
        <div className="bg-red- w-full flex flex-col md:flex-row justify-around space-y-24 md:space-y-0  pb-20">
          {/* 1 */}
          {/* <Fade left> */}
          <div className="flex flex-col justify-between items-center bg-white h-[328px] w-[417px] shadow-2xl rounded-[20px] pt-[16px]">
            <img
              className="w-6/12 md:w-[201px]"
              src={require("./../assets/images/bt/coins.png")}
              alt="coin"
            />
            <div className="text-lg pt-6 md:mt-0 md:text-[20px] text-[#303B4A] pb-10">
              {t("about_card_1")}
            </div>
          </div>
          {/* </Fade> */}

          {/* 2 */}
          {/* <Fade bottom> */}
          <div className="flex flex-col items-center justify-between bg-white shadow-2xl rounded-[20px] px-[79px] pt-[60px]">
            <img
              className="w-10/12 md:w-[412px]"
              src={require("./../assets/images/bt/group.png")}
              alt="group"
            />
            <div className="text-lg pt-6 md:pt-0 md:text-[20px] text-[#303B4A] pb-10">
              {t("about_card_2")}
            </div>
          </div>
          {/* </Fade> */}

          {/* 3 */}
          {/* <Fade right> */}
          <div className="flex flex-col w-[417px] justify-between items-center bg-green- bg-white rounded-[20px] shadow-2xl pt-[67px]">
            <img
              className="w-6/12 md:w-[297px]"
              src={require("./../assets/images/bt/shield.png")}
              alt="shield"
            />
            <div className="text-lg pb-10 md:mt-0 md:text-[20px] text-[#303B4A]">
              {t("about_card_3")}
            </div>
          </div>
          {/* </Fade> */}
        </div>
      </div>

      <div className="bg-[#F4F4F4] w-full flex flex-row justify-center  mt-[-20px] pb-[14px] relative z-20">
        <img
          className="w-2/12 md:w-[46px]"
          src={require("./../assets/images/down-arrow.png")}
          alt="down arrow"
        />
      </div>

      {/* PHONE IMAGE */}
      <div className="bg-[#F4F4F4] w-full flex flex-col items-center justify-center z-10">
        {/* <Fade bottom> */}
        <img
          className="w-full md:w-[500px] mx-auto -p-8"
          src={require("../assets/images/phone.gif")}
          alt="phone"
        />
        {/* </Fade> */}
      </div>

      <div className="bg-[#F4F4F4] w-full flex flex-row justify-center pt-[58.39px] pb-[89.39px]">
        <img
          className="w-2/12 md:w-[46px]"
          src={require("./../assets/images/down-arrow.png")}
          alt="down arrow"
        />
      </div>

      <div className="w-full mt-36 md:mt-[88.76px] flex flex-row items-center bg-red-">
        {/* title */}
        {/* <Fade top> */}
        {/* <div className="w-full border border-b-[1px] border-black" /> */}
        <div className="w-full font-bold text-2xl md:text-[30px] text-center text-[#333333]">
          {t("about_heading_3")}
        </div>
        {/* <div className="w-full border border-b-[1px] border-black" /> */}
        {/* </Fade> */}
      </div>

      {/* BLOCK 1 */}
      <div className="flex flex-col py-16 md:flex-row justify-between mt-[88px] items-center md:px-[201px] mx-auto bg-white">
        {/* <Fade left> */}
        <div className="w-5/12">
          <img
            // className="w-11/12 md:w-[796px]"
            src={require("../assets/images/building-people.png")}
            alt="people"
          />
        </div>
        {/* </Fade> */}
        {/* <Fade right> */}
        <div className="w-7/12 text-md mt-8 md:mt-0 md:text-[30px] text-[#303B4A] text-left md:ml-[118.12px] font-ebold">
          {t("about_heading_3_1")}
          <div className="mt-8 md:mt-[25px] md:text-[23px] text-left text-[#303B4A] font-light">
            {t("about_subheading_3_1")}
          </div>
        </div>
        {/* </Fade> */}
      </div>

      {/* BLOCK 2 */}
      <div className="flex flex-col py-16 md:flex-row justify-between items-center md:px-[201px] mx-auto bg-[#F4F4F4]">
        {/* <Fade left> */}
        <div className="w-5/12">
          <img
            // className="w-11/12 md:w-[796px]"
            src={require("../assets/images/gamification.png")}
            alt="people"
          />
        </div>
        {/* </Fade> */}
        {/* <Fade right> */}
        <div className="w-7/12 text-md mt-8 md:mt-0 md:text-[30px] text-[#303B4A] text-left md:ml-[118.12px] font-ebold">
          {t("about_heading_3_2")}
          <div className="mt-8 md:mt-[25px] md:text-[23px] text-left text-[#303B4A] font-light">
            {t("about_subheading_3_2")}
          </div>
        </div>
        {/* </Fade> */}
      </div>

      {/* BLOCK 3 */}
      <div className="flex flex-col py-16 md:flex-row justify-between items-center md:px-[201px] mx-auto bg-white">
        {/* <Fade left> */}
        <div className="w-5/12">
          <img
            // className="w-11/12 md:w-[796px]"
            src={require("../assets/images/nft_image.png")}
            alt="people"
          />
        </div>
        {/* </Fade> */}
        {/* <Fade right> */}
        <div className="w-7/12 text-md mt-8 md:mt-0 md:text-[30px] text-[#303B4A] text-left md:ml-[118.12px] font-ebold">
          {t("about_heading_3_3")}
          <div className="mt-8 md:mt-[25px] md:text-[23px] text-left text-[#303B4A] font-light">
            {t("about_subheading_3_3")}
          </div>
        </div>
        {/* </Fade> */}
      </div>

      {/* BLOCK 4 */}
      <div className="flex flex-col py-16 md:flex-row justify-between items-center md:px-[201px] mx-auto bg-[#F4F4F4]">
        {/* <Fade left> */}
        <div className="w-5/12">
          <img
            // className="w-11/12 md:w-[796px]"
            src={require("../assets/images/check.png")}
            alt="people"
          />
        </div>
        {/* </Fade> */}
        {/* <Fade right> */}
        <div className="w-7/12 text-md mt-8 md:mt-0 md:text-[30px] text-[#303B4A] text-left md:ml-[118.12px] font-ebold">
          {t("about_heading_3_4")}
          <div className="mt-8 md:mt-[25px] md:text-[23px] text-left text-[#303B4A] font-light">
            {t("about_subheading_3_4")}
          </div>
        </div>
        {/* </Fade> */}
      </div>

      {/* BENEFITS FOR ADVERTISERS */}
      <div className="w-full mt-36 md:mt-[152px] md:mb-[169.5px]">
        {/* title */}
        <div className="font-bold text-2xl md:text-[30px] text-center text-[#333333] mb-[97px]">
          {t("about_heading_4")}
        </div>
        {/* 3 CARDS */}
        <div className="w-full flex flex-col md:flex-row justify-evenly">
          {/* 1 */}
          <div className="w-full md:w-3/12 mb-24 md:mb-0 space-y-[62.75px]">
            {/* <Fade left> */}
            <img
              src={require("../assets/images/marketing.png")}
              alt="marketing"
            />
            {/* </Fade> */}
            {/* <Fade right> */}
            <div className="text-md md:text-[22px] text-[#303B4A] mx-8 md:mx-0 text-center">
              {t("about_subheading_4_1")}
            </div>
            {/* </Fade> */}
          </div>

          {/* 2 */}
          <div className="w-full md:w-3/12 mb-24 md:mb-0 space-y-[62.75px]">
            {/* <Fade left> */}
            <img src={require("../assets/images/social.png")} alt="social" />
            {/* </Fade> */}
            {/* <Fade right> */}
            <div className="text-md md:text-[22px] text-[#303B4A] mx-8 md:mx-0 text-center">
              {t("about_subheading_4_2")}
            </div>
            {/* </Fade> */}
          </div>

          {/* 3 */}
          <div className="w-full md:w-3/12 mb-24 md:mb-0 space-y-[62.75px]">
            {/* <Fade left> */}
            <img src={require("../assets/images/video.png")} alt="video" />
            {/* </Fade> */}
            {/* <Fade right> */}
            <div className="text-md md:text-[22px] text-[#303B4A] mx-8 md:mx-0 text-center">
              {t("about_subheading_4_3")}
            </div>
            {/* </Fade> */}
          </div>
        </div>
      </div>

      {/* 2 DIVS */}
      <div className="w-full md:w-8/12 mx-auto flex flex-col md:flex-row bg-red- justify-center space-x-[201px] space-y-10 md:space-y-0 ">
        {/* 1 */}
        <div className="w-full md:w-4/12 space-y-[47px]">
          {/* <Fade left> */}
          <img
            className="w-8/12 md:w-full mx-auto"
            src={require("./../assets/images/analysis1.png")}
            alt="image1"
          />
          {/* </Fade> */}
          {/* <Fade right> */}
          <div className="text-md md:text-[22px] text-[#303B4A] mx-8 md:mx-0 text-center">
            {t("about_subheading_4_4")}
          </div>
          {/* </Fade> */}
        </div>
        {/* 1 */}
        <div className="w-full md:w-4/12 space-y-[47px]">
          {/* <Fade left> */}
          <img
            className="w-8/12 md:w-full mx-auto"
            src={require("./../assets/images/analysis2.png")}
            alt="image1"
          />
          {/* </Fade> */}
          {/* <Fade right> */}
          <div className="text-md md:text-[22px] text-[#303B4A] mx-8 md:mx-0 text-center">
            {t("about_subheading_4_5")}
          </div>
          {/* </Fade> */}
        </div>
        {/* 2 */}
        {/* <div className="w-full md:w-7/12 flex flex-col items-center justify-center">
          // <Fade left>
            <img
              className="w-8/12 md:w-full mx-auto"
              src={require("./../assets/images/analysis2.png")}
              alt="image 2"
            />
          // </Fade>

          // <Fade right>
            <div className="text-md md:text-[22px] text-[#303B4A] mx-8 md:mx-0 mt-8 md:mt-10 text-center">
              {t("about_subheading_4_5")}
            </div>
          // </Fade>
        </div> */}
      </div>

      {/* BENEFITS FOR USERS */}
      <div
        style={{ paddingTop: 92.87, paddingBottom: 92.87 }}
        className="w-full mt-36 md:mt-[266px] md:mb-[169.5px] bg-[#F4F4F4]"
      >
        {/* title */}
        {/* <Fade top> */}
        <div className="font-bold text-2xl md:text-[30px] text-center text-[#333333] md:mb-[97px]">
          {t("about_heading_5")}
        </div>
        {/* </Fade> */}
        {/* 3 CARDS */}
        <div className="w-full flex flex-col md:flex-row justify-evenly">
          {/* 1 */}
          {/* <Flip left delay={200}> */}
          <div className="w-full md:w-3/12 space-y-[44px]">
            <img src={require("../assets/images/likes.png")} alt="likes" />
            <div className="text-[22px] text-center text-[#303B4A]">
              {t("about_subheading_5_1")}
            </div>
          </div>
          {/* </Flip> */}

          {/* 2 */}
          {/* <Flip left delay={200}> */}
          <div className="w-full md:w-3/12 space-y-[44px]">
            <img src={require("../assets/images/gen-coin.png")} alt="likes" />
            <div className="text-[22px] text-center text-[#303B4A]">
              {t("about_subheading_5_2")}
            </div>
          </div>
          {/* </Flip> */}

          {/* 3 */}
          {/* <Flip left delay={200}> */}
          <div className="w-full md:w-3/12 space-y-[44px]">
            <img src={require("../assets/images/pizza.png")} alt="likes" />
            <div className="text-[22px] text-center text-[#303B4A]">
              {t("about_subheading_5_3")}
            </div>
          </div>
          {/* </Flip> */}
        </div>
      </div>

      {/* ROADMAP */}
      <div className="w-full h-full bg-red- my-24 md:mb-[131.61px]">
        {/* title */}
        {/* <Fade top> */}
        <div className="font-bold text-2xl md:text-[30px] text-center text-[#333333] mb-24 md:mb-[111px]">
          {t("about_heading_6")}
        </div>
        {/* </Fade> */}
        {/* <Fade bottom> */}
        {currentLanguageCode !== "kr" ? (
          <img
            className="w-full h-full md:px-[127.5px] bg-red-"
            src={require("./../assets/images/roadmap4.png")}
            alt="roadmap"
          />
        ) : (
          <img
            className="w-full h-full md:px-[127.5px] bg-red-"
            src={require("./../assets/images/roadmap.png")}
            alt="roadmap"
          />
        )}
        {/* </Fade> */}
      </div>

      {/* DOWNLOAD THE WHITE PAPER. */}
      {/* <div className="relative bg-red- w-full h-full md:h-[910px] flex flex-col justify-center"> */}

      {/* <div className="absolute bottom-0 -z-10">
          <img
            className="object-fit "
            src={require("./../assets/images/mask.png")}
            alt="mask"
          />
        </div> */}

      {/* <div className="absolute top-0 -z-10">
          <img
            className="object-cover w-full md:h-full h-96"
            src={require("./../assets/images/white-mask.png")}
            alt="white-mask"
          />
        </div> */}

      {/* top layer */}
      {/* <div className="md:ml-[129px]">
          <div className="text-2xl md:text-[40px] text-[#333333] font-bold text-center md:text-left pt-20 md:pt-0">
            DOWNLOAD THE WHITE PAPER.
          </div>
          <div className="flex flex-col md:flex-row mt-[40px] space-y-6 md:space-y-0 items-center">
            <div className="w-10/12 md:w-[348px] h-16 md:h-[90px] border-[3px] border-[#37BBAF] bg-white rounded-[15px] flex flex-row justify-center items-center">
              <div className="text-[#707070] text-md md:text-[20px]">Whitepaper(en)</div>
            </div>
            <div className="w-10/12 md:w-[348px] h-16 md:h-[90px] border-[3px] border-[#37BBAF] bg-white rounded-[15px] flex flex-row justify-center items-center md:ml-[33px]">
              <div className="text-[#707070] text-md md:text-[20px]">Whitepaper(kr)</div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default AboutPage;
