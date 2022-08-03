import React from "react";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {
  useTranslation,
} from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#303B4A] py-[83px]">

      {/* COPYRIGHT TEXT */}
      <div className="flex flex-col md:flex-row justify-center relative items-center">
        {/* 1 */}
        <img
          className="h-[31.16px] md:absolute left-[165px]"
          src={require("./../assets/images/logos/light-logo.png")}
          alt="light-logo"
        />

        <div className="flex flex-col md:flex-row w-full bg-red- items-center justify-center space-x-12">
        {/* 2 */}
        <div className="text-white text-sm md:text-[13px] my-6 md:my-0 text-center">
          {/* COPYRIGHT 2018 ICRAFT21.COM ALL RIGHT RESERVED */}
          {t("foo_copyright")}
        </div>

        {/* 3 */}
        <div className="text-white text-sm md:text-[13px] text-center">
          {/* 개인정보 처리방침 */}
          {t("foo_privacy")}
        </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;
