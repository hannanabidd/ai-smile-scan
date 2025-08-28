import React, { useState } from "react";
import { Link } from "react-router-dom";

const RECOMMENDATION_VARIANTS = [
  {
    id: "healthy",
    heading: "Your teeth look healthy!",
    headingIcon: "/images/results-no-issues.svg",
    subtitle:
      "No dental issues were found in your scan.\nHere's how to keep it that way:",
    diet: [
      "Eat crunchy fruits & vegetables (e.g. apples, carrots)",
      "Limit sugar & soda",
    ],
    oralCare: [
      "Brush 2x daily with fluoride toothpaste",
      "Floss once a day",
      "Use a mild mouthwash",
    ],
    pro: ["Get a checkup every 6 months", "Keep your dental reports safe"],
  },
  {
    id: "earlyDecay",
    heading: "Early-stage tooth decay detected.",
    headingIcon: "/images/result-early-stage.svg",
    subtitle: "Time to stop it before it turns into a cavity!",
    diet: [
      "Cut down on sugar",
      "Drink water after meals",
      "Eat more calcium-rich foods (cheese, yogurt)",
    ],
    oralCare: [
      "Brush gently with fluoride",
      "Focus on back teeth & crevices",
      "Rinse with a fluoride mouthwash",
    ],
    pro: [
      "Book a preventive cleaning session",
      "Ask your dentist about enamel-repair treatments",
    ],
  },
  {
    id: "cavity",
    heading: "Cavity detected in your scan.",
    headingIcon: "/images/result-cavity.svg",
    subtitle: "This may require a dental filling.",
    diet: [
      "Avoid sticky sweets",
      "Drink fluoridated water",
      "Increase fiber (leafy greens, oats)",
    ],
    oralCare: [
      "Brush with extra care around affected area",
      "Don't skip flossing!",
      "Rinse mouth after snacking",
    ],
    pro: [
      "Visit your dentist for an evaluation",
      "Likely treatment: filling or inlay",
    ],
  },
  {
    id: "crack",
    heading: "Crack detected in your tooth.",
    headingIcon: "/images/result-crack.svg",
    subtitle: "This could lead to pain or deeper damage if untreated.",
    diet: [
      "Avoid nuts, hard candy, or chewing ice",
      "Eat soft, room-temperature foods",
    ],
    oralCare: [
      "Brush gently near affected area",
      "Don't clench or grind teeth (use mouthguard at night if needed)",
    ],
    pro: [
      "See a dentist ASAP",
      "Possible treatment: bonding, crown, or observation",
    ],
  },
  {
    id: "cariesCavity",
    heading: "Caries + cavity found.",
    headingIcon: null,
    subtitle: "Decay has progressed — prompt action needed.",
    diet: [
      "Cut down on sugar + sticky carbs",
      "Rinse after meals",
      "Avoid acidic drinks (e.g., soda)",
    ],
    oralCare: [
      "Brush using circular motions",
      "Focus on sensitive areas",
      "Use desensitizing toothpaste if needed",
    ],
    pro: [
      "Visit your dentist immediately",
      "Treatment likely: deep cleaning + filling",
    ],
  },
  {
    id: "cavityCrackUrgent",
    heading: "Cavity & crack both detected.",
    headingIcon: null,
    subtitle: "Multiple issues found — urgent dental attention recommended.",
    diet: [
      "Avoid crunchy or sticky food",
      "Rinse mouth with lukewarm water",
      "Eat soft fruits & dairy",
    ],
    oralCare: [
      "Use soft-bristle brush",
      "Floss with care",
      "Avoid biting on the affected side",
    ],
    pro: [
      "Urgent visit needed",
      "Likely: filling + crown or protective restoration",
    ],
  },
  {
    id: "cariesCrackEarly",
    heading: "Caries & crack detected.",
    headingIcon: null,
    subtitle:
      "Two issues that need attention — but can still be managed early.",
    diet: [
      "Reduce acidic food & beverages",
      "Increase dairy & mineral-rich foods",
      "Avoid chewing hard snacks",
    ],
    oralCare: [
      "Use fluoride toothpaste",
      "Rinse with warm salt water to soothe sensitivity",
      "Brush gently",
    ],
    pro: [
      "Book a dentist visit within a few days",
      "X-ray may be needed for deeper crack evaluation",
    ],
  },
  {
    id: "multipleSevere",
    heading: "Multiple issues found: decay, cavity, and crack.",
    headingIcon: null,
    subtitle:
      "This is a serious dental condition. Immediate attention is advised.",
    diet: [
      "Switch to soft, non-acidic food",
      "Avoid hot/cold extremes",
      "Rinse mouth after every meal",
    ],
    oralCare: [
      "Avoid brushing too hard",
      "Use enamel-repair toothpaste",
      "Try oil pulling for natural soothing (optional)",
    ],
    pro: [
      "Emergency dentist visit recommended",
      "Likely treatment: cavity restoration + structural support",
    ],
  },
];

const SectionCard = ({ title, items, bg }) => (
  <div
    className={`${bg} px-4 sm:px-8 md:px-14 py-6 sm:py-8 min-h-[160px] sm:min-h-[200px] md:h-[221px] rounded-3xl md:rounded-[54px] w-full flex flex-col gap-3 sm:gap-4 relative`}
  >
    <h2 className="text-lg sm:text-xl md:text-[24px] lg:text-[32px] font-bold font-istok">
      {title}
    </h2>
    <ul className="text-sm sm:text-base md:text-[18px] lg:text-[28px] font-istok font-normal leading-relaxed list-none mt-4 md:space-y-2 space-y-0">
      {items.map((text, i) => (
        <li key={i}>→{text}</li>
      ))}
    </ul>
    <img
      src={
        title.includes("Diet")
          ? "/images/diet.svg"
          : title.includes("Oral")
          ? "/images/oralcare.svg"
          : "/images/professional-suggestion.svg"
      }
      alt={`${title}-image`}
      className="h-16 w-16 sm:h-20 sm:w-20 md:h-[200px] md:w-[200px] absolute right-2 sm:right-4 md:right-0 -mr-0 sm:-mr-12 md:-mr-20 -mt-4 sm:-mt-6 md:-mt-10 opacity-80 md:opacity-100"
    />
  </div>
);

export const Recommendations = () => {
  const [idx] = useState(() =>
    Math.floor(Math.random() * RECOMMENDATION_VARIANTS.length)
  );

  const active = RECOMMENDATION_VARIANTS[idx];

  return (
    <div className="bg-color">
      <div className="container flex flex-col h-full w-full mx-auto py-8 sm:py-12 md:py-20 px-4 sm:px-6">
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-[30px] lg:text-[40px] font-irish text-[#110252] text-center mb-3 leading-tight">
            Personalized Recommendations
          </h2>
        </div>

        <div className="flex justify-center items-center flex-col w-full mt-12 sm:mt-16 md:mt-20">
          <div className="flex flex-col gap-4 sm:gap-6 text-center">
            {active.headingIcon ? (
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center">
                <img
                  src={active.headingIcon}
                  alt="result"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-auto md:h-auto"
                />
                <p className="text-lg sm:text-xl md:text-[24px] lg:text-[40px] font-irish text-center">
                  {active.heading}
                </p>
              </div>
            ) : (
              <p className="text-lg sm:text-xl md:text-[24px] lg:text-[40px] font-irish text-center">
                {active.heading}
              </p>
            )}

            <p className="text-base sm:text-lg md:text-[20px] lg:text-[30px] font-istok text-center whitespace-pre-line leading-relaxed">
              {active.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-10 w-full max-w-4xl">
            <SectionCard
              title="Diet Advice:"
              items={active.diet}
              bg="bg-[#9077FF80]"
            />
            <SectionCard
              title="Oral Care Tips:"
              items={active.oralCare}
              bg="bg-[#DCF6F6]"
            />
            <SectionCard
              title="Professional Suggestion:"
              items={active.pro}
              bg="bg-[#62BFEC]"
            />
          </div>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-[100px] text-center px-4">
          <p className="text-lg sm:text-xl md:text-[26px] lg:text-[32px] font-istok leading-relaxed">
            Need help ?<br /> Talk with our{" "}
          </p>
          <Link to="/chatbot">
            <button className="w-full max-w-[359px] h-12 sm:h-16 md:h-[84px] rounded-[50px] border-[3px] sm:border-[4px] md:border-[5px] font-istok-bold text-sm sm:text-base md:text-[27px] border-dark-purple bg-[#9077FF80]/50 text-white font-semibold shadow-inner shadow-black/25 backdrop-blur-sm mt-4 sm:mt-6 transition-transform hover:scale-105">
              AI Dental Assistant
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
