import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";

import Fade from "react-reveal/Fade";
import MainSection from "../components/landing/MainSection";
import SocialContainer from "../components/landing/SocialContainer";
import ProductIntro from "../components/landing/ProductIntro";
import QuizEvent from "../components/landing/QuizEvent";
import ReviewReward from "../components/landing/ReviewReward";
import Gamification from "../components/landing/Gamification";
import CoinEarn from "../components/landing/CoinEarn";
import QRSection from "../components/landing/QRSection";
import CTABanner from "../components/landing/CTABanner";

const HomePage = (props) => {
  const { t } = useTranslation();

  const handleClick = () => {
    props.setActive(!props.active);
  };

  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <>
      <MainSection props={props} />
      {/* Social section */}
      <SocialContainer />
      {/* Sroduct intro section */}
      <ProductIntro />
      {/* Quiz section */}
      <QuizEvent />
      {/* Review reward section */}
      <ReviewReward />
      {/* Gamification */}
      <Gamification />
      {/* Coin earn */}
      <CoinEarn />
      {/* QR Code Section */}
      <QRSection />
      {/* CTA Banner Section / Contact Section */}
      <CTABanner handleClick={handleClick} />
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
