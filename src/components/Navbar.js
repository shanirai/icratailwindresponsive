import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import i18next from "i18next";
import cookies from "js-cookie";
import {
  useTranslation,
} from "react-i18next";


const Navbar = (props) => {
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
        } z-50 fixed w-full top-0 hidden md:block`}
      >
        <div className="w-10/12 mx-auto bg- h-[84px] flex flex-row justify-between items-center">
          {/* L */}
          <NavLink to="/" className="w-[207.2px] h-[33.13px]">
            {changeColor === true || props.logo == 'dark' ? (
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

            <Link to="/comingsoon" className="w-[166px] h-[43px] bg-[#37BBAF] rounded-[15px] text-[15px] text-white ml-[42px] cursor-pointer flex justify-center items-center">
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
                    // ? "text-[#35BBAE]"
                    ? changeColor == true ? "text-[#35BBAE]" : "text-white"
                    : "text-[#434343]"
                } cursor-pointer`}
                onClick={() => i18next.changeLanguage("en")}
              >
                ENG
              </div>
              <div
                className={`text-[13px] ${
                  currentLanguageCode === "kr"
                    // ? "text-[#35BBAE]"
                    ? changeColor == true ? "text-[#35BBAE]" : "text-white"
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
        className={`w-full bg-white z-50 h-14 fixed top-0 block md:hidden outline-none ${
          changeColor === true ? "shadow-md" : ""
        }`}
      >
        <div className="w-full h-full flex flex-row items-center justify-between px-5 bg-white">
          <NavLink to="/" className="bg-red-">
            <img
              className="w-8/12"
              src={require("./../assets/images/logos/dark-logo.png")}
              alt="dark logo"
            />
          </NavLink>
          <div className="cursor-pointer">
            <div
              className="flex text-sm bg-white rounded-full md:mr-0 border-2 border-[#7DCBC6] p-1"
              onClick={() => {
                setActive(!active);
              }}
            >
              <svg
                className="w-5 h-5"
                fill="#7DCBC6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <ul
          className={`flex flex-col md:flex-row md:space-x-8 space-y-2 px-2.5 top-0 absolute -z-10 w-full  bg-white py-5 font-bold ${
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
                ? "block py-2 pr-4 pl-3 text-white bg-[#37BBAF] rounded md:bg-transparent md:p-0 dark:text-white"
                : "block py-2 pr-4 pl-3  text-[#434343] bg-white rounded md:bg-transparent md:p-0 dark:text-white bg-gray-200"
            }
            aria-current="page"
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive === true
                ? "block py-2 pr-4 pl-3 text-white bg-[#37BBAF] rounded md:bg-transparent md:p-0 dark:text-white"
                : "block py-2 pr-4 pl-3  text-[#434343] bg-white rounded md:bg-transparent md:p-0 dark:text-white bg-gray-200"
            }
            aria-current="page"
          >
            About
          </NavLink>
          <NavLink
            to={"/donbangseok"}
            className={({ isActive }) =>
              isActive === true
                ? "block py-2 pr-4 pl-3 text-white bg-[#37BBAF] rounded md:bg-transparent md:p-0 dark:text-white"
                : "block py-2 pr-4 pl-3  text-[#434343] bg-white rounded md:bg-transparent md:p-0 dark:text-white bg-gray-200"
            }
            aria-current="page"
          >
            DONBANGSEOK
          </NavLink>
          <NavLink
            to={"/community"}
            className={({ isActive }) =>
              isActive === true
                ? "block py-2 pr-4 pl-3 text-white bg-[#37BBAF] rounded md:bg-transparent md:p-0 dark:text-white"
                : "block py-2 pr-4 pl-3  text-[#434343] bg-white rounded md:bg-transparent md:p-0 dark:text-white bg-gray-200"
            }
            aria-current="page"
          >
            Community
          </NavLink>
          <NavLink
            to={"/team"}
            className={({ isActive }) =>
              isActive === true
                ? "block py-2 pr-4 pl-3 text-white bg-[#37BBAF] rounded md:bg-transparent md:p-0 dark:text-white"
                : "block py-2 pr-4 pl-3  text-[#434343] bg-white rounded md:bg-transparent md:p-0 dark:text-white bg-gray-200"
            }
            aria-current="page"
          >
            Team
          </NavLink>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive === true
                ? "block py-2 pr-4 pl-3 text-white bg-[#37BBAF] rounded md:bg-transparent md:p-0 dark:text-white"
                : "block py-2 pr-4 pl-3  text-[#37BBAF] bg-white rounded md:bg-transparent md:p-0 dark:text-white bg-gray-200"
            }
            aria-current="page"
          >
            <div className="flex flex-row space-x-[15px] items-center">
              <img
                className="h-[26px]"
                src={require("./../assets/images/globe.png")}
              />
              <div className="text-[13px] text-[#434343]">ENG</div>
              <div className="text-[13px] text-white">KOR</div>
            </div>
          </NavLink>
        </ul>
      </div>

      <div className="w-full bg-red- z-50 h-14 block md:hidden"></div>
      {/* CUSTOM MOBILE NAVBAR ENDS */}
    </>
  );
};

export default Navbar;
