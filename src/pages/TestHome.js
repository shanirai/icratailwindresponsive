import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";

import Fade from "react-reveal/Fade";
import MainSection from "../components/landing/MainSection";

const HomePage = (props) => {
  const { t } = useTranslation();

  const handleClick = () => {
    props.setActive(!props.active);
  };

  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <>
      <div className="w-full">
        <div className="w-full relative">
          <img
            className="w-full h-screen bg-red- object-cover"
            src={require("./../assets/images/home/home-bg-2.png")}
          />

          {/* layer */}
          <div className="absolute bg-red- opacity- w-full h-full top-0 flex flex-row">
            <Navbar />
            <div className="w-1/2 flex flex-col bg-red- h-full justify-center pl-[163px]">
              {/* <div className="animate__animated animate__fadeInDown text-2xl md:text-[50px] px-5 md:px-0"> */}
              <Fade top>
                <div className="text-2xl md:text-[50px] px-5 md:px-0">
                  <div className="text-white text-7xl font-ebold">
                    {t("h_s1_title")}
                  </div>
                  <div className="text-white text-4xl leading-normal md:leading-[55px] mt-12">
                    {t("h_s1_subtitle")}
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="mt-16 md:mt-[66px] text-xl xs:text-center md:text-left md:text-[28px] mb-20 md:mb-0 flex flex-col md:flex-row items-center md:space-y-0 space-y-8">
                  <Link
                    to="/comingsoon"
                    className="w-[211px] h-14 md:h-[65px] px-14 bg-[#303B4A] rounded-[15px] flex flex-row justify-center items-center"
                  >
                    <img
                      className=""
                      src={require("./../assets/images/home/appstore.png")}
                    />
                  </Link>
                  <Link
                    to="/comingsoon"
                    className="w-[211px] h-14 md:h-[65px] px-12 bg-[#303B4A] rounded-[15px] md:ml-[30px] flex flex-row justify-center items-center"
                  >
                    <img
                      className=""
                      src={require("./../assets/images/home/googleplay.png")}
                    />
                  </Link>
                </div>
              </Fade>
            </div>

            <div className="w-1/2 bg-red- flex flex-col justify-center items-center">
              <img
                className="w-10/12"
                src={require("./../assets/images/home/cube.gif")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL SECTION */}
      <div className="md:pl-[164px] h-full py-10 md:py-0 md:h-[195px] bg-[#303B4A] z-10 flex flex-col md:flex-row md:justify-start w-full items-center">
        <div className="flex flex-row bg-red- justify-around md:justify-start">
          <Fade left>
            <button
              onClick={() => {
                window.open(
                  "https://app.gitbook.com/o/bF5XUzDCSg1nIRyBcfAv/s/qx0wfol8mQicbGPuhvI5/"
                );
              }}
              className="w-5/12 mt-6 md:mt-0 md:w-[211px] h-14 md:h-[65px] rounded-[15px] bg-[#414955] text-white text-sm md:text-[20px]"
            >
              Whitepaper
              {/* Whitepaper(EN) */}
            </button>
          </Fade>
        </div>

        <div className="flex flex-row bg-red- w-full md:justify-start justify-evenly">
          {/* 1 */}
          <Fade left delay={200}>
            <div className="w-[70px] h-[70px]  my-6 md:my-0  rounded-full bg-[#414955] ml-[37px] flex flex-col justify-center">
              <img src={require("./../assets/images/ig.png")} alt="ig" />
            </div>
          </Fade>
          <Fade left delay={400}>
            <div className="w-[70px] h-[70px]  my-6 md:my-0 p-[17px] flex flex-col justify-center items-center rounded-full bg-[#414955] ml-[37px]">
              {" "}
              <img src={require("./../assets/images/discord.png")} alt="ig" />
            </div>
          </Fade>
          <Fade left delay={600}>
            <div className="w-[70px] h-[70px]  my-6 md:my-0 p-[17px] flex flex-col justify-center items-center rounded-full bg-[#414955] ml-[37px]">
              {" "}
              <img src={require("./../assets/images/twitter.png")} alt="ig" />
            </div>{" "}
          </Fade>
        </div>
      </div>

      {/* <img src={require("./../assets/images/Cube-final.gif")} alt="ig" /> */}

      {/* SOME TEXT SECTION */}
      <div className="w-full h-full justify-center items-center bg-[#F6F6F6]">
        <div className="w-10/12 mx-auto flex flex-row items-center py-[185px]">
          <div className="w-1/2 my-36 md:my-0 flex justify-center items-center">
            <Fade left>
              <video
                loop
                autoPlay
                muted
                className="w-[649px] h-[356px] rounded-xl overflow-hidden"
              >
                <source
                  src={
                    // "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4"
                    "https://mps-promotion-video.s3.ap-northeast-2.amazonaws.com/12-09%EB%8F%88%EB%B0%A9%EC%84%9D_1.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </Fade>
          </div>

          <div className="w-1/2 bg-red- md:my-0 text-start font-bold text-xl md:text-[27px] leading-10 md:leading-[41px] text-[#313131] space-y-[32px]">
            <Fade right>
              <div className="border-l-[5px] font-ebold border-[#37BBAF] pl-[30px]">
                {t("h_s2_p1")}
              </div>
              <div className="border-l-[5px] font-ebold border-[#37BBAF] pl-[30px]">
                {t("h_s2_p2")}
              </div>
              <div className="border-l-[5px] font-ebold border-[#37BBAF] pl-[30px]">
                {t("h_s2_p3")}
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* QUIZ EVENT */}
      <div className="w-full">
        {/* CONTAINER */}
        <div className="flex flex-col md:flex-row w-10/12 md:w-8/12 mx-auto bg-red- my-24 md:mt-[217px]">
          {/* left */}
          <div className="w-full md:w-2/3">
            {/* text */}
            <Fade left>
              <div className="text-[#35BBAE] text-[20px] font-bold mb-14 md:mb-[43px]">
                Quiz event
                {/* {t("h_s3_title")} */}
              </div>
              <div className="text-[#313131] text-3xl md:text-[45px] font-ebold w-full md:w-[450px] leading-normal md:leading-[60px] mb-12 md:mb-[70px]">
                {/* 매주 열리는 <br /> 돈방석 퀴즈 타-임 <br /> 브랜드 토큰 쏜다! */}
                {t("h_s3_heading")}
              </div>
            </Fade>

            <Fade left delay={1500}>
              <div className="text-[#313131] text-[18px] mb-8 md:mb-[20px] font-bold">
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
            <div className="flex flex-row mt-[45px] flex-wrap justify-start -ml-6 space-x-5 bg-red-">
              <Fade bottom delay={300}>
                {" "}
                <CollabCard amount={"100,000"} logo={"burger-king"} />
              </Fade>
              <Fade bottom delay={600}>
                {" "}
                <CollabCard amount={"50,000"} logo={"starbuck"} />
              </Fade>
              <Fade bottom delay={900}>
                {" "}
                <CollabCard amount={"30,000"} logo={"pab"} />
              </Fade>
              <Fade bottom delay={1200}>
                {" "}
                <CollabCard amount={"80,000"} logo={"dominos"} />
              </Fade>
            </div>
          </div>

          {/* right */}
          <div className="w-full md:w-1/3">
            <img
              className="animate-[bounce_1.5s_ease-in-out_infinite]"
              src={require("./../assets/images/home/input.png")}
            />
          </div>
        </div>
      </div>

      {/* Review Rewards */}
      <div className="w-full bg-[#F6F6F6]">
        <div className="w-10/12 md:w-8/12 mx-auto flex flex-col md:flex-row">
          <img
            className="animate-[bounce_1.5s_ease-in-out_infinite] w-full md:w-2/3 my-10 md:my-[95px]"
            src={require("./../assets/images/home/two.png")}
          />
          {/* right */}
          <Fade right>
            <div className="w-full md:w-1/3">
              <div className="text-[#35BBAE] text-[20px] font-bold mt-10 md:mt-[217px]">
                {/* Review Rewards */}
                {t("h_s4_title")}
              </div>
              <div className="text-[#313131] text-3xl md:text-[45px] font-ebold mt-[43px] leading-[60px]">
                {/* SNS 리뷰 남기면 <br /> IDC 코인 리워드 지급 */}
                {t("h_s4_heading")}
              </div>
              <div className="text-[#313131] text-[18px] font-bold mt-[51px] mb-24 md:mb-0">
                {/* 브랜드 토큰 사용 후기를 SNS에 남겨주세요. 사용 금액의 최대 5%
                상당 IDC 코인을 드립니다. */}
                {t("h_s4_subheading")}
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* Gamification */}
      <div className="w-full bg-white">
        <div className="w-10/12 md:w-8/12 mx-auto flex flex-col md:flex-row mt-24 md:mt-[236px]">
          {/* left */}
          <Fade left>
            <div className="w-full md:w-1/3 ">
              <div className="text-[#35BBAE] text-[20px] font-bold">
                {/* Gamification */}
                {t("h_s5_title")}
              </div>
              <div className="text-[#313131] text-3xl md:text-[45px] font-ebold mt-[49px] leading-[60px]">
                {/* 다양한 게임을 통한 IDC 코인 쟁탈전! */}
                {t("h_s5_heading")}
              </div>
              <div className="text-[#313131] text-[18px] mt-[51px] leading-[30px]">
                {t("h_s5_subheading")}

                {/* 베스트 리뷰, 행운의 룰렛, 가격을 맞춰라! 등 재미있는 돈방석
                게이미피케이션을 통해 IDC 코인을 쟁탈하세요! */}
              </div>
            </div>
          </Fade>
          {/* right */}
          <div className="w-full bg-red- md:w-2/3 flex flex-row ml-0 md:ml-[100px] self-center my-24 md:my-0">
            {/* 1 */}
            <div className="transition delay-300 animate-[bounce_1.5s_ease-in-out_infinite] flex flex-col justify-around w-2/12 md:w-1/4">
              <div className="relative">
                <img
                  className="w-[82px] absolute"
                  src={require("./../assets/images/home/likes.png")}
                />
                <img
                  className=""
                  src={require("./../assets/images/home/messages.png")}
                />
              </div>

              <div className="relative">
                <img
                  className="absolute top-[-60px] right-[-51px]"
                  src={require("./../assets/images/home/small-heart.png")}
                />
                <img
                  className=""
                  src={require("./../assets/images/home/hand.png")}
                />
              </div>
            </div>

            {/* 2 */}
            <div className="animate-[bounce_1.2s_ease-in-out_infinite] w-8/12 md:w-2/4 relative">
              <img
                className="absolute w-[62px] right-[40px] bottom-[283px]"
                src={require("./../assets/images/home/happy-r.png")}
              />
              <img
                className="absolute w-[62px] left-[10px] bottom-[150px]"
                src={require("./../assets/images/home/c.png")}
              />
              <img
                className=""
                src={require("./../assets/images/home/donbangseok.png")}
              />
            </div>

            {/* 3 */}
            <div className="animate-[bounce_0.9s_ease-in-out_infinite] flex flex-row items-center w-1/12 md:w-1/4 ">
              <div className="relative">
                <img
                  className="absolute top-0 right-0 w-[56px]"
                  src={require("./../assets/images/home/happy-l.png")}
                />
                <img
                  className="absolute bottom-0 left-0 w-[56px]"
                  src={require("./../assets/images/home/ball.png")}
                />
                <img
                  className=""
                  src={require("./../assets/images/home/lucky.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coin Earn */}
      <div className="w-full bg-[#F6F6F6]">
        <div className="w-10/12 md:w-8/12 mx-auto flex flex-col md:flex-row">
          {/* left */}
          <div className="w-full md:w-1/3 bg-red- flex flex-col items-end mt-36 md:mt-[300px]">
            <Fade left>
              <div className="text-[#35BBAE] text-[20px] font-bold">
                {/* Coin Earn */}
                {t("h_s6_title")}
              </div>

              <div className="relative">
                {/* <div className="w-[150px] border-4 bg-[#35BBAE] border-[#35BBAE] absolute bottom-3 right-0 -z-10"></div> */}
                <div className="text-[#313131] text-3xl md:text-[35px] font-ebold mt-[45px] text-right leading-[60px]">
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
                <div className="text-[#313131] text-3xl md:text-[35px] font-ebold mt-[45px] text-right leading-[60px]">
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
          <div className="w-full md:w-2/3 flex flex-col md:flex-row ml-0 md:ml-[100px] space-x-[40px]">
            <div className="w-full md:w-1/2 mt-36 md:mt-[212px]">
              <div className="animate-[bounce_2s_ease-in-out_infinite] bg-white rounded-2xl py-[10px] pr-[-5px] shadow-2xl">
                <img src={require("./../assets/images/home/view-1.png")} />
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-36 md:mt-[408px] mb-36 md:mb-[173px]">
              <div className="animate-[bounce_1.5s_ease-in-out_infinite] bg-white rounded-2xl py-[30px] shadow-2xl">
                <img
                  className=""
                  src={require("./../assets/images/home/view-2.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR SECTION */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="mt-[114px] text-[20px] font-bold ">
          {/* 돈방석 다운로드 */}
          {t("h_s7_title")}
        </div>
        <div className="w-[198px] h-[198px] text-center my-[46px] text-[#313131] font-regular">
          {/* <Fade top> */}
          <img src={require("./../assets/images/QRCODE.png")} />
          {/* </Fade> */}
        </div>
        <div className="mb-[178px] uppercase">
          {/* QR IMAGE */}
          {t("h_s7_text")}
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="w-full relative h-[472px] mb-0 flex flex-row justify-center items-center">
        <div className="w-full bg-black opacity-50 bottom-0 absolute h-[455px]  -z-10"></div>
        <img
          className="absolute bottom-0 -z-20 w-full h-[455px]"
          src={require("./../assets/images/home/back-mask.png")}
        />

        <div className="space-x-[200px] flex flex-row">
          {/* 1 */}
          {/* <Fade left> */}
          <div>
            <div
              className="px-[70px] py-[30px] rounded-[15px] border border-white flex justify-center items-center cursor-pointer"
              // onClick={handleClick}
            >
              <div className="font-bold text-white">
                {/* 광고 문의하기 */}
                {t("h_s8_h1")}
              </div>
            </div>

            <div className="font-[15px] text-white mt-[28px] text-center">
              {/* 문의를 남겨주시면 담당자가 연락을 드립니다. */}
              {t("h_s8_sh1")}
            </div>
          </div>
          {/* </Fade> */}

          {/* 2 */}
          {/* <Fade bottom> */}
          <div>
            <div
              className="px-[70px] py-[30px] rounded-[15px] border border-white flex justify-center items-center cursor-pointer"
              onClick={handleClick}
            >
              <div className="font-bold text-white">
                {/* 광고 문의하기 */}
                {t("h_s8_h2")}
              </div>
            </div>

            <div className="font-[15px] text-white mt-[28px] text-center">
              {/* 문의를 남겨주시면 담당자가 연락을 드립니다. */}
              {t("h_s8_sh2")}
            </div>
          </div>
          {/* </Fade> */}

          {/* 3 */}
          {/* <Fade right> */}
          <div>
            <div
              className="px-[70px] py-[30px] rounded-[15px] border border-white flex justify-center items-center cursor-pointer"
              // onClick={handleClick}
            >
              <div className="font-bold text-white">
                {/* FAQs */}
                {t("h_s8_h3")}
              </div>
            </div>

            <div className="font-[15px] text-white mt-[28px] text-center">
              {/* 문의를 남겨주시면 담당자가 연락을 드립니다. */}
              {t("h_s8_sh3")}
            </div>
          </div>
          {/* </Fade> */}
        </div>
      </div>
    </>
  );
};

const CollabCard = (props) => {
  return (
    <div className="w-6/12 md:w-3/12 my-5 md:my-0">
      <div className="w-11/12 md:w-[163px] h-[192px] bg-white drop-shadow-xl flex flex-col justify-evenly items-center rounded-[8px]">
        <img
          className="w-[40.33px]"
          src={require(`./../assets/images/home/${props.logo}.png`)}
        />
        <div className="w-full px-5">
          <div className="border border-grey border-b-[0.8px] w-full"></div>
        </div>
        <div className="font-[13px] text-[#272727] font-sbold">
          {props.amount} MPS
        </div>
      </div>
    </div>
  );
};

export default HomePage;
