// React packages
import React from "react";
// Third party packages
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import AboutMainSection from "../components/about/AboutMainSection";
import BlockchainTechnology from "../components/about/BlockchainTechnology";
import Whyus from "../components/about/Whyus";
import BenefitsAdvertiser, {
  MobileViewBenefitsAdvertiser,
} from "../components/about/BenefitsAdvertiser";
import BenefitsForUsers from "../components/about/BenefitsForUsers";
import Roadmap from "../components/about/Roadmap";

const AboutPage = () => {
  const { t } = useTranslation();

  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div className="w-full">
      {/* About main section */}
      <AboutMainSection />
      {/* Blockchanin technology */}
      <BlockchainTechnology />
      {/* Blockchanin technology advertise / business*/}
      <Whyus />
      {/* Benefits for advertiser*/}
      <BenefitsAdvertiser />
      {/* Benefits for users*/}
      <BenefitsForUsers />
      {/* Roadmap */}
      <Roadmap />
    </div>
  );
};

export default AboutPage;
