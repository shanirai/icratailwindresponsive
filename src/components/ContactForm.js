import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
// import { faker } from "@faker-js/faker";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  useTranslation,
} from "react-i18next";


const schema = yup
  .object({
    firstName: yup.string().required().label('First name'),
    lastName: yup.string().required().label('Last name'),
    companyName: yup.string().required().label('Company name'),
    phoneNumber: yup.number().positive().integer().required().label('Phone number'),
    email: yup.string().email().required().label('Email'),
    inquiry: yup.string().required().label('Inquiry'),
  })
  .required();

const ContactForm = (props) => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    props.setActive(!props.active);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    // console.log("DATA ", data);
    setLoading(true);
    try {
      // const data2 = {
      //   firstName: faker.name.findName(),
      //   lastName: faker.name.lastName(),
      //   companyName: faker.company.companyName(),
      //   phoneNumber: faker.phone.phoneNumber(),
      //   email: faker.internet.email(),
      //   inquiry: faker.lorem.paragraph(),
      // };
      console.log(data);
      Axios.post(
        "https://52.79.33.190:3000/api/cs/regContact",
        data
      ).then((res) => {
        console.log(res);
        setLoading(false);
        handleClick();
      });
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      handleClick();
    }
    // setLoading(false);
  };

  return (
    <>
      <div className="fixed w-screen h-screen bg-black bg-opacity-50 z-50 top-0 flex flex-row justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full md:h-auto md:h-none md:w-[608px] bg-white opacity-100 rounded-none md:rounded-[18px]"
        >
          {/* L1 */}
          <div className="text-[#333333] text-2xl md:text-[40px] font-bold text-center mt-[49px]">
            {/* Contact Us */}
            {t("contact_us")}
          </div>
          <div className="text-[#333333] text-[15px] font-regular text-center mt-[11px]">
            {/* 문의를 남겨주시면 담당자가 연락을 드립니다. */}
            {t("contact_enquiry")}
          </div>

          {/* L2 fields */}
          <div className="px-6 md:px-[55px] mt-[51px]">
            {/* 1 */}
            <div className="flex flex-row space-x-[16px]">
              {/* name */}
              <div className=" w-full">
                <input
                  {...register("firstName", { required: true, maxLength: 100 })}
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  placeholder={t("contact_f_name")}
                  className="bg-[#D2D2D23D] h-[53px] rounded-[6px] w-full px-[16px] placeholder-shown:text-[#BDBDBD] focus:outline-none"
                />
                <div className="text-sm w-full mt-1 text-red-500">
                  {errors.firstName?.type === "required" &&
                    t("contact_f_name_err")}
                </div>
              </div>
              {/* castle */}
              <div className="w-full">
                <input
                  {...register("lastName", { required: true, maxLength: 100 })}
                  // value={castle}
                  // onChange={(e) => setCastle(e.target.value)}
                  placeholder={t("contact_l_name")}
                  className="bg-[#D2D2D23D] h-[53px] rounded-[6px] w-full px-[16px] placeholder-shown:text-[#BDBDBD] focus:outline-none"
                />
                <div className="text-sm w-full mt-1 text-red-500">
                  {errors.lastName?.type === "required" &&
                    "Last name is required"}
                </div>
              </div>
            </div>
            {/* company name */}
            <div className="w-full">
              <input
                {...register("companyName", { required: true, maxLength: 100 })}
                // value={company}
                // onChange={(e) => setCompany(e.target.value)}
                placeholder={t("contact_c_name")}
                className="bg-[#D2D2D23D] h-[53px] rounded-[6px] w-full mt-[12px] px-[16px] placeholder-shown:text-[#BDBDBD] focus:outline-none"
              />
              <div className="text-sm w-full mt-1 text-red-500">
                {errors.companyName?.type === "required" &&
                  "Company name is required"}
              </div>
            </div>
            {/* contact */}
            <div className="w-full">
              <input
                {...register("phoneNumber", { required: true, maxLength: 100 })}
                // value={contact}
                // onChange={(e) => setContact(e.target.value)}
                placeholder={t("contact_p_number")}
                className="bg-[#D2D2D23D] h-[53px] rounded-[6px] w-full mt-[12px] px-[16px] placeholder-shown:text-[#BDBDBD] focus:outline-none"
              />
              <div className="text-sm w-full mt-1 text-red-500">
                {errors.phoneNumber?.message    }
              </div>
            </div>
            {/* e-mail */}
            <div className="w-full">
              <input
                {...register("email", { required: true, maxLength: 100 })}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder={t("contact_email")}
                className="bg-[#D2D2D23D] h-[53px] rounded-[6px] w-full mt-[12px] px-[16px] placeholder-shown:text-[#BDBDBD] focus:outline-none"
              />
              <div className="text-sm w-full mt-1 text-red-500">
                {errors.email?.message}
              </div>
            </div>
            {/* message content */}
            <div className="w-full">
              <textarea
                {...register("inquiry", { required: true })}
                // value={content}
                // onChange={(e) => setContent(e.target.value)}
                placeholder={t("contact_message")}
                className="bg-[#D2D2D23D] h-[140px] rounded-[6px] w-full mt-[12px] p-[16px] placeholder-shown:text-[#BDBDBD] focus:outline-none"
              />
              <div className="text-sm w-full mt-1 text-red-500">
                {errors.inquiry?.message}
              </div>
            </div>
          </div>

          {/* L3 */}
          <div className="w-full my-[47px] flex flex-row justify-center items-center space-x-[16px] px-6 md:px-0">
            <div
              onClick={handleSubmit(onSubmit)}
              className="bg-[#37BBAF] w-[178px] h-[49px] flex flex-row justify-center items-center rounded-[12px] text-white cursor-pointer select-none"
            >
              {loading == true ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <div></div>
              )}

              {loading == true ? t("contact_loading") : t("contact_submit")}
            </div>

            {/* loading button starts */}
            {/* <div>
              <p className="text-center text-sm leading-5 text-gray-600 mb-2">
                Spin
              </p>
              <span className="inline-flex rounded-md shadow-sm">
                <div
                  type="div"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  div text
                </div>
              </span>
            </div> */}
            {/* loading button ends */}

            <div
              className="border-[#37BBAF] border w-[178px] h-[49px] flex flex-row justify-center items-center rounded-[12px] bg-white text-[#37BBAF] cursor-pointer select-none"
              onClick={handleClick}
            >
              {/* 취소 */}
              {t("contact_cancel")}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
