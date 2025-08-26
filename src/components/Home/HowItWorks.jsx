import React from "react";

const steps = [
  {
    title: "Upload your dental image",
    image: "/images/works-one.png",
  },
  {
    title: "Let our AI analyze it",
    image: "/images/works-two.png",
  },
  {
    title: "Get diagnosis+ recommendations",
    image: "/images/works-three.png",
  },
];

const HowItWorks = () => {
  return (
    <div
      className="container mx-auto py-8 sm:py-12 md:py-[90px] px-4 sm:px-6 md:px-0 bg-cover bg-center text-[#110252]"
      style={{ backgroundImage: "url('/images/how-it-works-bg.png')" }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-[64px] font-irish text-center px-4">
        How It Works?
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 justify-between mt-12 sm:mt-16 md:mt-28 mb-8 md:mb-14 mx-4 sm:mx-8 md:mx-[90px]">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full sm:w-auto md:w-[250px]"
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px] object-cover mb-4"
            />
            <h3 className="text-lg sm:text-xl md:text-[40px] font-irish text-center leading-tight">
              {step.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
