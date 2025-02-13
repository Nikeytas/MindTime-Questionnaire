import React from "react";

const HowItWorks: React.FC = () => {
  const steps = [
    "Answer a set of questions",
    "Our engine analyzes your answers, your profile, and over 1000 specialists' information.",
    "Get a shortlist and schedule your initial appointment",
  ];

  return (
    <div className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold text-gray-900">How It Works</h2>
      <ul className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="min-w-fit">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1F74AD] text-xs font-medium text-white">
                {index + 1}
              </span>
            </div>
            <p className="text-sm text-gray-700">{step}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HowItWorks;
