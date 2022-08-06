// React packages
import React from "react";
// Third party packages
import Fade from "react-reveal/Fade";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
// Custom packages

function ProductIntro() {
  //**translate hooks */
  const { t } = useTranslation();

  //   const handleClick = () => {
  //     props.setActive(!props.active);
  //   };

  //**language translate */
  const currentLanguageCode = cookies.get("i18next") || "en";

  return (
    <div class=" w-full  px-[30px] md:px-[36px] lg:px-[160px] h-full justify-center items-center bg-[#F6F6F6]">
      <div className="w-full mx-auto py-[50px]  lg:py-[185px]">
        <div class="grid grid-cols-1 gap-4  sm:grid-cols-2 sm:gap-6 ">
          <div>
            <Fade left>
              <video
                loop
                autoPlay
                muted
                className="w-[649px] h-[200px] lg:h-[356px] rounded-xl overflow-hidden  "
              >
                <source
                  src={
                    // "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4"
                    "https://mps-promotion-video.s3.ap-northeast-2.amazonaws.com/12-09%EB%8F%88%EB%B0%A9%EC%84%9D_1.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </Fade>
          </div>

          <div className="text-start  font-bold text-[16px] leading-[24px] text-sm  lg:text-[27px]  lg:leading-[41px] text-[#313131] space-y-[32px] order-first sm:order-last ">
            <Fade right>
              <div className="lg:border-l-[5px] border-l-[2px]   font-light lg:font-ebold border-[#37BBAF] pl-4 lg:pl-[30px]">
                {t("h_s2_p1")}
              </div>
              <div className="lg:border-l-[5px] border-l-[2px]  font-light lg:font-ebold border-[#37BBAF] pl-4 lg:pl-[30px]">
                {t("h_s2_p2")}
              </div>
              <div className="lg:border-l-[5px] border-l-[2px]  font-light lg:font-ebold border-[#37BBAF] pl-4 lg:pl-[30px]">
                {t("h_s2_p3")}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductIntro;
