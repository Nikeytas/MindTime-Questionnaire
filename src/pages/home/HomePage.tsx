import { useAppDispatch } from "../../shared/store/storeHooks";
import { questionnaireActions } from "../../shared/store/globalStore";
import { ClockIcon } from "@heroicons/react/24/outline";
import MindTimeLogo from "../../assets/MindTime_Logo.svg";
import HomePageSVG from "../../assets/home_page.svg";
import HowItWorks from "../../shared/components/HowItWorks";
import PageContainer from "../../shared/components/baseComponents/PageContainer";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(questionnaireActions.clearSelectedAnswers());
    dispatch(questionnaireActions.resetVisitedQuestions());
  }, [dispatch]);

  return (
    <PageContainer>
      <div className="container mx-auto flex flex-col items-center justify-center pb-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4">
            <img
              src={MindTimeLogo}
              alt="MindTime Logo"
              className="w-32 md:w-40"
            />
          </div>
          <div className="my-4 w-full max-w-xs md:max-w-md">
            <img src={HomePageSVG} alt="Home Illustration" className="w-full" />
          </div>
          <h2 className="text-2xl leading-tight font-bold text-[#055285] md:text-4xl">
            Get Matched with Top Mental Health Specialists
          </h2>
          <span className="my-2 inline-flex items-center gap-1 rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
            <ClockIcon className="w-4" />2 minutes to complete
          </span>
          <p className="mb-6 text-sm text-gray-600 md:text-base">
            Answer a few quick questions to receive a shortlist of trusted
            professionals tailored to your needs.
          </p>
        </div>

        <HowItWorks />
      </div>
    </PageContainer>
  );
};

export default HomePage;
