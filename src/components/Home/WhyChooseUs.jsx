import React from "react";

const steps = [
  {
    title: "Instant AI Diagnosis",
    description:
      "→ Get fast, accurate cavity and misalignment detection in seconds.",
    image: "/images/why-one.png",
  },
  {
    title: "Accurate & Consistent Results",
    description: (
      <ul className="list-none ml-4">
        <li>
          {" "}
          → AI removes human error and gives consistent, unbiased results
        </li>
        <li> → Trained on real-world dental datasets</li>
      </ul>
    ),
    image: "/images/why-two.png",
  },
  {
    title: "Cavity Detection",
    description: (
      <ul className="list-none ml-4">
        <li> → Detects cavities</li>
        <li> → Prevents further damage through early AI spotting</li>
      </ul>
    ),
    image: "/images/why-three.png",
  },
  {
    title: "Braces & Alignment Scanning",
    description: (
      <ul className="list-none ml-4">
        <li> → Identifies misalignment</li>
        <li> → Recommends orthodontic solutions before it gets worse</li>
      </ul>
    ),
    image: "/images/why-three.png",
  },
  {
    title: "Personalized Diet & Care",
    description: (
      <ul className="list-none ml-4">
        <li> → Tailored food and care suggestions based on your diagnosis</li>
      </ul>
    ),
    image: "/images/why-five.png",
  },
  {
    title: "Remote Accessibility",
    description: (
      <ul className="list-none ml-4">
        <li> → Use it from home or anywhere</li>
        <li> → No clinic visit needed until truly necessary</li>
      </ul>
    ),
    image: "/images/why-six.png",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto py-8 sm:py-12 md:py-[90px] px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[64px] font-irish text-[#110252] text-center mb-8 sm:mb-10 md:mb-12 px-4">
        Why Choose AI SmileScan?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-16 justify-items-center mt-12 sm:mt-16 md:mt-20 max-w-[1100px] mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md px-4 sm:px-6 py-8 sm:py-10 md:py-14 flex flex-col items-start min-h-[200px] sm:min-h-[220px] w-full max-w-xs font-istok"
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-10 h-10 sm:w-[50px] sm:h-[50px] object-contain mb-6 sm:mb-8 md:mb-12"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary !mb-4 sm:!mb-6 leading-tight">
              {step.title}
            </h3>
            <div className="text-sm sm:text-base md:text-xl text-black leading-relaxed">
              {step.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
