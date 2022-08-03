import React from "react";
import Navbar from "../components/Navbar";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

const TeamPage = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <Navbar active={false} />
      {/* L1 */}
      <Fade top>
        <div className="text-3xl md:text-[55px] font-bold -mt-14 md:mt-48 text-center mb-[60px] text-[#333333]">
          Developed by Global Blockchain Expert Team
          {/* {t("team_title")} */}
        </div>
      </Fade>

      {/* L2 */}
      {/* <div className="xs:text-lg md:text-[30px] w-full text-center mx-auto md:w-[833px] text-center text-[#333333] my-[29px]">
        The Icraft Blockchain team is specialized in development of Blockchain
        mainnet and Dapp
      </div> */}
      <div className="mt-0 md:pt-[60px]"></div>
      {/* Mr Yohan Seo */}
      <div className="mx-auto w-11/12 md:w-[672px] bg-white rounded-[13px] drop-shadow-[0_2px_39px_rgba(0,0,0,0.08)] ">
        <div className="flex flex-col justify-center items-center py-[31.5px]">
          {/* image */}
          <Fade top duration={300}>
            <img
              className="w-[125px] mb-6"
              alt="Yohan Seo"
              src={require("../assets/images/team/mryohan.png")}
            />
          </Fade>
          {/* name */}
          <Fade top duration={600}>
            <div className="text-[#303B4A] text-2xl md:text-[25px] font-bold">
              Yohan (Yeong-il) Seo
            </div>
          </Fade>
          {/* designation */}
          <Fade top duration={900}>
            <div className="text-[#B1B1B1] w-1/2 text-sm md:text-[18px] text-center my-2 md:my-4">
              Head of Blockchain Business Division, <br /> iCraft Co., Ltd.
              {/* {t("team_d")} */}
            </div>
          </Fade>
        </div>
        {/* <Fade right duration={1200}> */}
          <div className="pb-[31.5px]">
            <TextCard text="27 years of extensive experiences as 'Innovative Blockchain Specialist and Future Network Engineer' at KT and iCRAFT" />
            <TextCard text="Commercialization of Blockchain finance platform" />
            <TextCard text="Commercialization of 80 more Blockchain projects as the head of KT Blockchain Center for five years" />
            <TextCard text="KT SVP: Head of Blockchain Biz Center" />
            <TextCard text="KT VP: Head of Blockchain Center" />
            <TextCard text="Head of 'IoT Blockchain division in Korea society of Blockchain" />
            <TextCard text="Head of 'Policy & System division in Korea Open Blockchain Forum" />
            <TextCard text="Advisory committee member of the Ministry of Science and ICT for Blockchain technology planning/evaluation" />
            <TextCard text="International standardization expert in IETF, ITU-T, ISO TC307" />
          </div>
        {/* </Fade> */}
      </div>

      {/* Team Section */}
      <div className="text-center font-bold uppercase text-2xl md:text-3xl md:text-[40px] text-[#333333] mt-10 md:mt-[100px]  bg-green-">
        Team Members
        {/* {t("team_members")} */}
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between px-0 md:px-10">
        {/* Korean Team */}
        <div className="w-full md:w-6/12">
          {/* title */}
          {/* <div className="text-center font-bold uppercase text-3xl md:text-[40px] text-[#333333]  bg-green-">
            Korean Team
          </div> */}

          {/* grid */}
          <div className="bg-red- flex flex-row flex-wrap my-5 md:my-[115px]">
            <PersonCard delay={1} name="Evan Lee" image="evanlee" />
            <PersonCard delay={2} name="Koeun Kang" image="koeun" />
            <PersonCard delay={3} name="Sungchul Jung" image="jeong" />
            <PersonCard delay={4} name="Uiyeong Hwang" image="lee" />
            <PersonCard delay={5} name="Billy Park" image="billy" />
            <PersonCard delay={6} name="HyunWoo Kim" image="hyunwoo" />
            <PersonCard delay={7} name="DongHan Kim" image="donghan" />
            <PersonCard delay={8} name="Halim Song" image="jack" />
            <PersonCard delay={9} name="Seongwoo Lee" image="hwang" />
          </div>
        </div>

        {/* Global Team */}
        <div className="w-full md:w-6/12">
          {/* title */}
          {/* <div className="text-center font-bold uppercase  text-3xl md:text-[40px] text-[#333333]  bg-blue-">
            Global Team
          </div> */}

          {/* grid */}
          <div className="bg-red- flex flex-row flex-wrap my-5 md:my-[115px]">
            <PersonCard delay={10} name="Priti Kumari" image="priti" />
            <PersonCard delay={11} name="Mallikarjun Reddy" image="arjun" />
            <PersonCard delay={12} name="Arush Pande" image="arush" />
            <PersonCard delay={13} name="Navil Rodrigues" image="navil" />
            <PersonCard delay={14} name="Shrikant Jha" image="shrikant" />
            <PersonCard delay={15} name="Falguni Rawat" image="falguni" />
            {/* <PersonCard delay={1} name="Vinoth Shanmugam" image="vinoth" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const PersonCard = (props) => {
  return (
    <Fade right delay={props.delay * 100}>
      <div className="cursor-pointer w-4/12 flex flex-col justify-center items-center pb-16 md:pb-[152px] bg-red-">
        <img
          className="w-8/12 md:w-[107px]"
          src={require(`./../assets/images/team/${props.image}.png`)}
          alt="Team Member"
        />
        <div className="text-sm md:text-[25px] text-[#303B4A] font-semibold md:font-bold text-center mt-[22.11px] md:leading-10">
          {props.name}
        </div>
      </div>
    </Fade>
  );
};

const TextCard = (props) => {
  return (
    <div className="cursor-pointer border-l-[3px] border-[#37BBAF] mx-[23px] mb-[9.5px] px-[20px] text-[#494949] text-xs md:text-[18px] leading-normal md:leading-[25px]">
      {props.text}
    </div>
  );
};

export default TeamPage;
