import React from "react";

const HowItWorks = () => {
  return (
    <div className="container py-10 sm:py-16 md:py-20 mx-auto px-4 sm:px-6">
      <div className="mx-auto mb-10 sm:mb-16 md:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-irish text-center">
          How It Works?
        </h1>
      </div>
      <div className="flex flex-col mx-auto gap-10 sm:gap-16 md:gap-20">
        <div className="flex flex-col">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] text-istok font-bold !ml-2 sm:!ml-4 md:!ml-10 text-center sm:text-left">
            Step 1: Upload Your Dental Image
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center mt-6 sm:mt-8 md:mt-10">
            <img
              src="/images/about-one.png"
              alt="step1"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-[150px] md:h-[150px] object-contain"
            />
            <div className="flex flex-col bg-[#E4EEFF] p-4 sm:p-6 md:p-10 w-full sm:w-auto md:w-[660px] rounded-3xl md:rounded-[60px]">
              <p className="text-black font-bold font-istok text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed">
                Upload a clear thermal or intra-oral image of your teeth using
                our simple upload tool? This image should clearly show your
                dental structure for accurate scanning.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] text-istok font-bold !ml-2 sm:!ml-4 md:!ml-10 text-center sm:text-left">
            Step 2: AI Scans Your Image Instantly
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center mt-6 sm:mt-8 md:mt-10">
            <img
              src="/images/about-two.png"
              alt="step1"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-[150px] md:h-[150px] object-contain"
            />
            <div className="flex flex-col bg-[#E4EEFF] p-4 sm:p-6 md:p-10 w-full sm:w-auto md:w-[660px] rounded-3xl md:rounded-[60px]">
              <p className="text-black font-bold font-istok text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed">
                Our smart AI model (built using CNN technology) analyzes the
                image and checks for:
                <br /> • Cavities
                <br /> • Early decay (caries)
                <br /> • Tooth cracks
                <br /> You'll instantly get a quick diagnosis result — visible
                directly on screen.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end w-full">
          <div className="flex flex-col w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] text-istok font-bold !ml-2 sm:!ml-4 md:!ml-10 text-center sm:text-left">
              Step 3: Login or Sign Up to Unlock Full Insights
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center mt-6 sm:mt-8 md:mt-10">
              <img
                src="/images/about-three.png"
                alt="step1"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-[150px] md:h-[150px] object-contain"
              />
              <div className="flex flex-col bg-[#E4EEFF] p-4 sm:p-6 md:p-10 w-full sm:w-auto md:w-[660px] rounded-3xl md:rounded-[60px]">
                <p className="text-black font-bold font-istok text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed">
                  To access personalized recommendations, you'll be asked to
                  sign in. Once logged in, you'll get:
                  <br /> ✔️ Tailored food suggestions
                  <br /> ✔️ Oral care tips based on your results
                  <br /> ✔️ Professional dental advice for your specific case
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-16 md:mt-20 px-4">
        <p className="font-istok-bold font-bold italic text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
          Still have questions?
          <br /> Use our built-in{" "}
          <b className="font-mono">AI Dental Assistant </b>to get instant
          answers about your diagnosis, treatments, or dental care.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
