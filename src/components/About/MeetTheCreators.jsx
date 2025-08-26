import React from "react";

export const MeetTheCreators = () => {
  const creators = [
    {
      name: "MANAL IMDAD",
      role: "UI/UX Designer & Backend Developer",
      responsibilities: [
        "Designed the complete UI/UX in Figma",
        "Developed backend with FastAPI and integrated the trained model",
        "Planned scan logic, result categorization, and user flow",
        "Co-authored the research paper for publication",
      ],
      email: "manalimdad100@gmail.com",
      location: "Lahore, Pakistan",
    },
    {
      name: "IFRA IEMAN",
      role: "Frontend Developer & Documentation",
      responsibilities: [
        "Built the frontend pages and interactive flows",
        "Styled the user interface with HTML/CSS (or React, if used)",
        "Led the literature review and technical documentation",
        "Co-authored the research paper for publication",
      ],
      email: "itsifraeman@gmail.com",
      location: "Lahore, Pakistan",
    },
  ];

  return (
    <div className="bg-[#E4EEFF] mt-10 sm:mt-16 md:mt-20">
      <div className="container mx-auto py-10 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="mx-auto mb-8 sm:mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-irish">
            Meet the Creators
          </h1>
        </div>
        <div className="mb-8 sm:mb-10">
          <p className="font-istok-bold font-bold italic text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed px-4">
            We are final-year BSCS students from the University of South Asia,
            working together to build an intelligent and accessible dental
            diagnosis platform using AI. From design to development to research
            — AI SmileScan is our joint mission to improve smiles through
            technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-10 max-w-[800px] mx-auto">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl md:rounded-[60px] py-6 sm:py-8 md:py-10 px-6 sm:px-10 md:px-14 shadow-md w-full flex flex-col gap-4 sm:gap-5"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-center md:text-left">
                {creator.name}
              </h2>
              <p className="mt-2 text-center md:text-left">
                <span className="font-bold">Role:</span> <br />
                <span className="italic text-sm sm:text-base">
                  {creator.role}
                </span>
              </p>
              <p className="mt-4 font-bold text-center md:text-left">
                Responsibilities:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                {creator.responsibilities.map((item, i) => (
                  <li key={i} className="italic">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-center md:text-left">
                📧 <span className="font-bold">Email:</span> <br />
                <span className="text-sm sm:text-base break-all">
                  {creator.email}
                </span>
              </p>
              <p className="mt-2 text-center md:text-left text-sm sm:text-base">
                📍 {creator.location}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 sm:mt-20 flex flex-col items-center gap-2 text-center px-4">
          <h2 className="font-mono font-medium text-lg sm:text-xl md:text-2xl">
            🎓 Supervised by
          </h2>
          <h3 className="font-mono font-bold text-lg sm:text-xl md:text-2xl !mt-2 sm:!mt-4">
            Mr. Muhammad Toseef Javaid
          </h3>
          <p className="font-mono font-medium text-base sm:text-lg md:text-2xl leading-relaxed">
            Department of Computer Science, University of South Asia
          </p>
        </div>
      </div>
    </div>
  );
};
