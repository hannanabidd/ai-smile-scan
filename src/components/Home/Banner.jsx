import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-[80vh] bg-cover bg-center px-4"
        style={{ backgroundImage: "url('/images/banner-bg.png')" }}
      >
        <div className="container flex flex-col justify-center">
          <div className="flex flex-col w-full md:w-1/2 text-white items-center font-normal text-center md:gap-8 gap-2">
            <h1 className="text-3xl sm:text-4xl md:text-[54px] font-alfa mb-2">
              Welcome to
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-[70px] font-alfa mb-2">
              AI SMILESCAN
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-[40px] font-alfa mb-8 md:mb-14">
              Upload, Diagnose, Smile Brighter
            </h2>
            <button className="w-full max-w-[359px] h-16 md:h-[84px] rounded-[50px] border-[5px] font-istok-bold text-base md:text-[20px] border-dark-purple bg-[#9077FF80]/25 text-white font-semibold shadow-inner shadow-black/25 backdrop-blur-sm">
              Upload your dental image
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
