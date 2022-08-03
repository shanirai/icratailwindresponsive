import React from "react";
import Navbar from "../components/Navbar";

const ComingSoonPage = () => {
  return (
    <div className="h-full">
      <Navbar active={false} />
      <div className=" my-0 md:my-32 py-0 md:py-40 pb-16">
        <div className="w-11/12 md:w-8/12 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="w-11/12 md:4/12 text-[#434343]">
            <div className="text-3xl md:text-6xl my-6 md:my-14 font-bold">Coming Soon!</div>
            <div className="text-3xl md:text-4xl my-6 md:my-10 font-sbold">Pilot Service will be opened!</div>
            <div className="text-3xl md:text-4xl my-6 md:my-10 font-sbold">7th April !</div>
          </div>

          <div className="w-full md:w-8/12">
            <img src={require("./../assets/images/comingsoon.png")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
