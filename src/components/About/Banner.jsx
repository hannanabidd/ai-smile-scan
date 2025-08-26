import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-[80vh] bg-cover bg-center px-4"
        style={{ backgroundImage: "url('/images/about-bg.png')" }}
      >
        <div className="container flex flex-col justify-center relative">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-alfa text-white absolute top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 px-4">
            About AI SMILESCAN
          </h1>
          <div className="flex flex-col lg:flex-row justify-center mt-20 sm:mt-24 md:mt-28 lg:mt-0">
            <div className="flex justify-center lg:justify-end w-full lg:w-1/2 font-normal lg:mr-20 mb-6 lg:mb-0">
              <div className="flex flex-col items-center justify-center w-full lg:w-2/5 px-4 lg:px-0">
                <p className="text-center text-sm sm:text-base md:text-lg lg:text-[20px] font-istok-bold mt-4 sm:mt-6 md:mt-10 font-bold leading-relaxed">
                  AI SmileScan is a web-based diagnostic tool that uses AI to
                  detect cavities and misalignment from dental images. It aims
                  to make oral healthcare more accurate, faster, and accessible
                  — especially for under served communities.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/images/about-main.png"
                alt="about"
                className="w-full max-w-md lg:w-3/4 h-auto lg:h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
