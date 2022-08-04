// React packages
import React from "react";
// Third party packages
import Fade from "react-reveal/Fade";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
// Custom packages

function CollabCard(props) {
  return (
    <div>
      <div className=" md:w-[163px] w-[65px] h-[90px]   md:h-[192px] bg-white drop-shadow-xl flex flex-col lg:justify-evenly  justify-center items-center rounded-[10px]">
        <img
          className="lg:w-[40.33px] w-[20px]"
          src={require(`./../../assets/images/home/${props.logo}.png`)}
        />
        <div className="w-full px-5">
          <div className="border border-grey border-b-[0.8px] w-full"></div>
        </div>
        <div className="lg:font-[13px] text-[6px] text-[#272727] font-sbold mt-4 lg:mt-0">
          {props.amount} MPS
        </div>
      </div>
    </div>
  );
}

export default CollabCard;
