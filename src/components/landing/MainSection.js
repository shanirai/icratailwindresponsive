// React packages
import React from "react";
import { Link } from "react-router-dom";
// Third packages
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
// Custom components
import Header from "../common/Header";

function MainSection(props) {
  //**translate hooks */
  const { t } = useTranslation();

  const handleClick = () => {
    props.setActive(!props.active);
  };
  //** language translate */
  const currentLanguageCode = cookies.get("i18next") || "en";
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full relative">
        <img
          className="w-full md:h-[500px] lg:h-screen  h-[80vh] bg-red- object-cover"
          src={require("./../../assets/images/home/home-bg-2.png")}
          alt="bg"
        />
        {/* layer */}
        <div className="absolute bg-red- opacity- w-full h-full top-0 flex flex-col sm:flex-row  ">
          <Header />
          <div className="w-full lg:w-1/2 flex flex-col bg-red- h-full justify-center lg:pl-[163px] px-[30px] md:px-[30px] pt-12  md:pt-12 lg:pt-0 ">
            {/* <div className="animate__animated animate__fadeInDown text-2xl md:text-[50px] px-5 md:px-0"> */}
            <Fade top>
              <div className="text-2xl md:text-[50px] px-0 sm:px-5 md:px-0">
                <div className="text-white text-4xl sm:text-3xl lg:text-7xl  font-ebold">
                  {t("h_s1_title")}
                </div>
                <div className="md:w-[60%] lg:w-[100%]  text-white text-lg  lg:text-4xl leading-normal lg:leading-[55px] md:mt-7 mt-4 ">
                  {t("h_s1_subtitle")}
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="mt-0 md:mt-7 lg:mt-[66px] text-xl xs:text-center md:text-left md:text-[28px] mb-0 md:mb-0 flex flex-col md:flex-row items-baseline md:space-y-0 space-y-8">
                <Link
                  to="/comingsoon"
                  className="w-[211px] h-14 md:h-[65px] px-14 bg-[#303B4A] rounded-[15px] sm:flex flex-row justify-center items-center hidden "
                >
                  <img
                    className=""
                    src={require("./../../assets/images/home/appstore.png")}
                    alt="bg"
                  />
                </Link>
                <Link
                  to="/comingsoon"
                  className="w-[211px] h-14 md:h-[65px] px-12 bg-[#303B4A] rounded-[15px] md:ml-[30px] hidden sm:flex flex-row justify-center items-center"
                >
                  <img
                    className=""
                    src={require("./../../assets/images/home/googleplay.png")}
                    alt="bg"
                  />
                </Link>
                {/* Download app new button added for only mobile view */}
                <Link
                  to="/comingsoon"
                  className="w-[166px] h-[43px] bg-[#fff] rounded-[15px] text-[15px] text-[#45A596] sm:ml-[42px] ml-[0px] cursor-pointer sm:hidden flex justify-center items-center"
                >
                  Download app
                </Link>
              </div>
            </Fade>
          </div>

          <div className="w-full sm:w-1/2 bg-red- flex sm:flex-col flex-row justify-center items-center">
            <img
              className="w-full sm:w-10/12"
              src={require("./../../assets/images/home/cube.gif")}
              alt="bg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
