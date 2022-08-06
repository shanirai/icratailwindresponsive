// React  packages
import React from "react";
// Third party packages
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
// Custom components
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
  //** language translation hooks */
  const { t } = useTranslation();

  //** navigation bar color handler */
  const handleClick = () => {
    props.setActive(!props.active);
  };

  //** language  */
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

export default HomePage;
