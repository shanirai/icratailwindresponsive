// React packages
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// Third party packages
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
// Custom components
import { CloseIcons, HemburgerIcons } from "./Icons";

const Header = (props) => {
  //** language translate hooks */
  const { t } = useTranslation();
  //** navigation change color state */
  const [changeColor, setChangeColor] = useState(
    props.active == false ? true : false
  );
  const [active, setActive] = useState(false);

  //** language translate */
  const currentLanguageCode = cookies.get("i18next") || "en";

  //** navbar color change handler */
  const changeNavbarColor = () => {
    if (props.active !== false) {
      if (window.scrollY >= 50) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <div
        className={`drop-shadow-sm ${
          changeColor === true ? "bg-white" : ""
        } z-50 fixed w-full top-0 hidden md:block lg:block`}
      >
        <div className="lg:w-[80%] md:w-full md:px-9 lg:px-0  mx-auto bg- h-[84px] flex flex-row lg:justify-between  items-center  ">
          {/* L */}
          <NavLink
            to="/"
            className="lg:w-[207.2px] md:w-[160px]  lg:h-[33.13px] md:h-auto"
          >
            {changeColor === true || props.logo == "dark" ? (
              <img
                src={require("./../../assets/images/logos/dark-logo.png")}
                alt="dark logo"
              />
            ) : (
              <img
                src={require("./../../assets/images/logos/light-logo.png")}
                alt="dark logo"
              />
            )}
          </NavLink>

          {/* M */}
          <div className="flex flex-row justify-end  w-full lg:text-[16px] md:text-[9px] leading-normal cursor-pointer font-bold items-center  lg:space-x-[66px] overflow-hidden">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#41BFB3] font-ebold md:mr-6 lg:mr-0"
                  : changeColor === true
                  ? "text-black md:mr-6 lg:mr-0"
                  : "text-white md:mr-6 lg:mr-0"
              }
            >
              About
              {/* {t("nav_about")} */}
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#41BFB3] font-ebold md:mr-6 lg:mr-0"
                  : changeColor === true
                  ? "text-black md:mr-6 lg:mr-0"
                  : "text-white md:mr-6 lg:mr-0"
              }
            >
              DonBangSeok
              {/* {t("nav_donbangseok")} */}
            </NavLink>
            {/* <NavLink to=""  className={({ isActive }) => isActive ? 'text-[#41BFB3]' : 'text-[#434343]'  }>Roadmap</NavLink> */}
            <NavLink
              to="/community"
              className={({ isActive }) =>
                isActive
                  ? "text-[#41BFB3] font-ebold md:mr-6 lg:mr-0"
                  : changeColor === true
                  ? "text-black md:mr-6 lg:mr-0"
                  : "text-white md:mr-6 lg:mr-0"
              }
            >
              Community
              {/* {t("nav_community")} */}
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive
                  ? "text-[#41BFB3] font-ebold md:mr-6 lg:mr-0"
                  : changeColor === true
                  ? "text-black md:mr-6 lg:mr-0"
                  : "text-white md:mr-6 lg:mr-0"
              }
            >
              Team
              {/* {t("nav_team")} */}
            </NavLink>
            <Link
              to="/comingsoon"
              className="lg:w-[166px] md:w-[70px] lg:h-[43px] md:h-[18px] bg-[#37BBAF] lg:rounded-[15px] md:rounded-lg lg:text-[16px] md:text-[7px] text-white lg:ml-[42px] cursor-pointer flex justify-center items-center"
            >
              Download app
              {/* {t("nav_download")} */}
            </Link>

            <div className="flex flex-row space-x-[15px] md:ml-6 lg:ml-[34px] justify-start items-center">
              <img
                className="h-[26px]"
                src={require("./../../assets/images/globe.png")}
              />
              <div
                className={`text-[13px] ${
                  currentLanguageCode === "en"
                    ? // ? "text-[#35BBAE]"
                      changeColor == true
                      ? "text-[#35BBAE]"
                      : "text-white"
                    : "text-[#434343]"
                } cursor-pointer`}
                onClick={() => i18next.changeLanguage("en")}
              >
                ENG
              </div>
              <div
                className={`text-[13px] ${
                  currentLanguageCode === "kr"
                    ? // ? "text-[#35BBAE]"
                      changeColor == true
                      ? "text-[#35BBAE]"
                      : "text-white"
                    : "text-[#434343]"
                } cursor-pointer`}
                onClick={() => i18next.changeLanguage("kr")}
              >
                KOR
              </div>
              {/* <div className="text-[13px] text-[#434343] cursor-pointer" onClick={() => i18next.changeLanguage('en')}>ENG</div>
              <div className="text-[13px] text-[#35BBAE] cursor-pointer" onClick={() => i18next.changeLanguage('kr')}>KOR</div> */}
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOM MOBILE NAVBAR STARTS */}
      <div
        className={`drop-shadow ${
          changeColor === true ? "bg-white w-full" : "w-full"
        } bg-red z-50 h-14 fixed top-0 block md:hidden lg:hidden outline-none`}
      >
        <div className="w-full h-full flex flex-row items-center justify-between px-5">
          <NavLink to="/" className="bg-red-">
            {changeColor === true || props.logo == "dark" ? (
              <img
                src={require("./../../assets/images/logos/dark-logo.png")}
                alt="dark logo"
                className="h-5 w-50"
              />
            ) : (
              <img
                src={require("./../../assets/images/logos/light-logo.png")}
                alt="light logo"
                className="h-5 w-50"
              />
            )}
          </NavLink>

          <div className="cursor-pointer">
            <div
              className="flex text-sm   md:mr-0  p-1"
              onClick={() => {
                setActive(!active);
              }}
            >
              {active ? (
                <CloseIcons iconColor={changeColor ? "#000000" : "white"} />
              ) : (
                <HemburgerIcons iconColor={changeColor ? "#000000" : "white"} />
              )}
            </div>
          </div>
        </div>

        <ul
          className={`flex flex-col lg:flex-row md:space-x-8 space-y-2 px-6 top-0 absolute -z-10 w-full  bg-white py-6 font-bold ${
            active === true
              ? "translate-y-0 ease-in-out duration-500 mt-14"
              : "-translate-y-full"
          }`}
          onClick={() => {
            setActive(!active);
          }}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive === true
                ? "block py-4 text-[#45A596]  border-b border-[#7070702E] md:bg-transparent md:p-0 dark:text-white  "
                : "block py-4  text-[#303B4A] bg-white border-b border-[#7070702E] md:bg-transparent md:p-0 dark:text-white  "
            }
            aria-current="page"
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive === true
                ? "block py-4 text-[#45A596]  border-b border-[#7070702E] md:bg-transparent md:p-0 dark:text-white ml-0"
                : "block py-4  text-[#303B4A] bg-white border-b border-[#7070702E] md:bg-transparent md:p-0 dark:text-white ml-0"
            }
            aria-current="page"
          >
            About
          </NavLink>
          <NavLink
            to={"/donbangseok"}
            className={({ isActive }) =>
              isActive === true
                ? "block py-4 text-[#45A596]  border-b border-[#7070702E] md:bg-transparent md:p-0 dark:text-white"
                : "block py-4  text-[#303B4A] bg-white border-b border-[#7070702E] md:bg-transparent md:p-0 dark:text-white"
            }
            aria-current="page"
          >
            DonBangSeok
          </NavLink>
          <NavLink
            to={"/community"}
            className={({ isActive }) =>
              isActive === true
                ? "block py-4 text-[#45A596]  border-b border-[#7070702E] md:bg-transparent md:p-0 dark:text-white"
                : "block py-4  text-[#303B4A] bg-white border-b border-[#7070702E] md:bg-transparent md:p-0 dark:text-white"
            }
            aria-current="page"
          >
            Community
          </NavLink>
          <NavLink
            to={"/team"}
            className={({ isActive }) =>
              isActive === true
                ? "block py-4 text-[#45A596]   md:bg-transparent md:p-0 dark:text-white"
                : "block py-4  text-[#303B4A] bg-white  md:bg-transparent md:p-0 dark:text-white"
            }
            aria-current="page"
          >
            Team
          </NavLink>
        </ul>
      </div>

      <div className="w-full bg-red- z-50 h-14 block md:hidden"></div>
      {/* CUSTOM MOBILE NAVBAR ENDS */}
    </>
  );
};

export default Header;
