// React packages
import React from "react";
// Third party packages
import { useTranslation } from "react-i18next";
// Custom comonents
import Header from "../components/common/Header";
import Channel from "../components/community/Channel";
import CommunityMainSection from "../components/community/CommunityMainSection";
import News from "../components/community/News";

const CommunityPage = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Header active={false} />
      {/* Community main section */}
      <CommunityMainSection />
      {/* Channel Section */}
      <Channel />
      {/* News Section */}
      <News />
    </div>
  );
};

export default CommunityPage;
