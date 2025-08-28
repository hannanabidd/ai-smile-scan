import React, { useState, useEffect } from "react";

const Results = () => {
  const [currentResult, setCurrentResult] = useState(null);

  const diagnosisResults = [
    {
      text: "No issues detected",
      img: "results-no-issues.svg",
    },
    {
      text: "Early-stage decay (Caries)",
      img: "result-early-stage.svg",
    },
    {
      text: "Cavity Detected",
      img: "result-cavity.svg",
    },
    {
      text: "Crack Detected",
      img: "result-crack.svg",
    },
    {
      text: "Caries + Cavity Detected",
    },
    {
      text: "Cavity + Caries Detected",
    },
    {
      text: "Caries + Crack Detected",
    },
    {
      text: "Caries + Crack + Cavity Detected",
    },
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * diagnosisResults.length);
    setCurrentResult(diagnosisResults[randomIndex]);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container flex flex-col justify-center items-center h-full w-full mx-auto py-20">
      <div className="flex flex-col items-center md:w-[800px] w-full ">
        <h2 className="text-[30px] md:text-[40px] font-irish text-[#110252] text-center mb-3">
          Diagnosis Results
        </h2>
        <p className="font-istok text-[28px]">
          Based on your uploaded image, here's what our AI detected.
        </p>
      </div>
      <div className="flex flex-col md:w-[800px] w-full mt-10 h-[400px] bg-[#EDF2FA] justify-center items-center rounded-[40px]">
        <p className="font-bold text-2xl">image uploaded by user</p>
      </div>
      {currentResult && (
        <div className="flex items-center mt-10 gap-5">
          {currentResult.img && (
            <img src={`/images/${currentResult.img}`} alt="result-image" />
          )}
          <h2 className="text-2xl font-bold font-irish">
            Diagnosis: {currentResult.text}
          </h2>
        </div>
      )}
      <div className="flex flex-col items-center w-full mt-20">
        <p className="font-istok text-[28px] italic">
          Login or Sign Up to view personalized recommendations and chat with
          our AI dental assistant.
        </p>
        <div className="flex justify-center gap-5 mt-6">
          <button className="bg-primary text-white w-[120px] py-2 rounded-full">
            Login
          </button>
          <p className="font-irish text-[28px]">OR</p>
          <button className="bg-primary text-white w-[120px] py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
