import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#1F212E] mt-6 mx-6 rounded-4xl h-screen relative">
      <div className="grid grid-cols-9 place-items-center   h-full w-full ">
        <div className="bg-[#7EFFE7] w-[1px]  h-full"></div>
        <div className="bg-[#BAAAFF] w-[1px]  h-full"></div>
        <div className="bg-[#7EFFE7] w-[1px]  h-full"></div>
        <div className="bg-[#BAAAFF] w-[1px]  h-full"></div>
        <div className="bg-[#7EFFE7] w-[20px]  h-full"></div>
        <div className="bg-[#BAAAFF] w-[1px]  h-full"></div>
        <div className="bg-[#7EFFE7] w-[1px]  h-full"></div>
        <div className="bg-[#BAAAFF] w-[1px]  h-full"></div>
        <div className="bg-[#7EFFE7] w-[1px]  h-full"></div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-white z-30 absolute top-0 left-1/2 -translate-x-1/2">
          Build remarkable startup website with Istanbul
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
