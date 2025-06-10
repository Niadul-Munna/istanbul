import React from "react";

const FeaturePage = () => {
  return (
    <div className="flex relative items-center justify-center h-screen w-full  ">
      <div className="bg-orange-500 w-64 h-64 absolute text-3xl flex items-center justify-center font-bold z-50 rounded-full shadow border/30   left-1/2 ">
        1
      </div>
      <div className="bg-pink-500 w-64 h-64 absolute text-3xl flex items-center justify-center font-bold z-20  rounded-full shadow border/30 bottom-1/2 ">
        2
      </div>
      <div className="bg-green-500 w-64 h-64 absolute text-3xl flex items-center justify-center font-bold z-30 rounded-full shadow border/30   right-1/2 ">
        3
      </div>
      <div className="bg-blue-500 w-64 h-64 absolute text-3xl flex items-center justify-center font-bold z-40 rounded-full shadow border/30   top-1/2 ">
        4
      </div>
    </div>
  ); 
};

export default FeaturePage;
