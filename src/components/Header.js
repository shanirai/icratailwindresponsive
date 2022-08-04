import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { CloseIcons, HemburgerIcons } from "./common/Icons";

const Header = (props) => {
  const { t } = useTranslation();

  const [changeColor, setChangeColor] = useState(
    props.active == false ? true : false
  );
  const [active, setActive] = useState(false);

  const currentLanguageCode = cookies.get("i18next") || "en";

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
        } z-50 fixed w-full top-0 hidden lg:block`}
      >
        <div className="w-10/12 mx-auto bg- h-[84px] flex flex-row justify-between items-center">
          {/* L */}
          <NavLink to="/" className="w-[207.2px] h-[33.13px]">
            {changeColor === true || props.logo == "dark" ? (
              <img
                src={require("./../assets/images/logos/dark-logo.png")}
                alt="dark logo"
              />
            ) : (
              <img
                src={require("./../assets/images/logos/light-logo.png")}
                alt="dark logo"
              />
            )}
          </NavLink>

          {/* M */}
          <div className="flex flex-row justify-end w-full text-[17px] cursor-pointer font-bold space-x-[66px]">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#41BFB3] font-ebold"
                  : changeColor === true
                  ? "text-black"
                  : "text-white"
              }
            >
              About
              {/* {t("nav_about")} */}
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#41BFB3] font-ebold"
                  : changeColor === true
                  ? "text-black"
                  : "text-white"
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
                  ? "text-[#41BFB3] font-ebold"
                  : changeColor === true
                  ? "text-black"
                  : "text-white"
              }
            >
              Community
              {/* {t("nav_community")} */}
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive
                  ? "text-[#41BFB3] font-ebold"
                  : changeColor === true
                  ? "text-black"
                  : "text-white"
              }
            >
              Team
              {/* {t("nav_team")} */}
            </NavLink>
          </div>

          {/* R */}
          <div className="flex flex-row items-center">
            {/* <div className="relative">
              <input
                className="border-b-2 outline-none bg-transparent"
                type="search"
              ></input>
              <img
                className="absolute right-0 top-0 w-[25.02px]"
                src={require("./../assets/images/search.png")}
                alt="search"
              />
            </div> */}

            <Link
              to="/comingsoon"
              className="w-[166px] h-[43px] bg-[#37BBAF] rounded-[15px] text-[15px] text-white ml-[42px] cursor-pointer flex justify-center items-center"
            >
              Download the app
              {/* {t("nav_download")} */}
            </Link>

            <div className="flex flex-row space-x-[15px] ml-[34px] items-center">
              <img
                className="h-[26px]"
                src={require("./../assets/images/globe.png")}
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
        } bg-red z-50 h-14 fixed top-0 block md:block lg:hidden outline-none`}
      >
        <div className="w-full h-full flex flex-row items-center justify-between px-5">
          <NavLink to="/" className="bg-red-">
            {changeColor === true || props.logo == "dark" ? (
              <img
                src={require("./../assets/images/logos/dark-logo.png")}
                alt="dark logo"
                className="h-5 w-50"
              />
            ) : (
              <img
                src={require("./../assets/images/logos/light-logo.png")}
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
