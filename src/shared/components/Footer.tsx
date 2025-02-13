import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getQuestionsThunk } from "../store/questionnaireStore/questionnaireReducer";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import { questionnaireActions, RootState } from "../store/globalStore";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [nextQuestionId, setNextQuestionId] = useState<number | null>(null);

  const { currentQuestionIndex, questions, selectedAnswers } = useAppSelector(
    (state: RootState) => state.questionnaire,
  );

  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion) {
      const selectedOption = selectedAnswers[currentQuestion.Id];
      const nextId = selectedOption ? selectedOption[0].GoToQuestionId : null;
      setNextQuestionId(nextId);
    }
  }, [currentQuestionIndex, questions, selectedAnswers]);

  const handleNext = () => {
    if (nextQuestionId) {
      dispatch(questionnaireActions.setVisitedQuestion(nextQuestionId));
      navigate(`/questionnaire/${nextQuestionId}`);
    } else {
      navigate("/result");
    }
  };

  const handlePrevious = () => {
    navigate(-1);
  };

  const handleStartQuestionnaire = () => {
    dispatch(getQuestionsThunk());
    navigate("/questionnaire/1000");
  };

  if (location.pathname === "/result") {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 ${location.pathname.startsWith("/questionnaire") ? "h-16" : "h-28"} w-full border-t border-gray-300 bg-white px-4 pt-2 pb-4 shadow-md md:h-16`}
    >
      <div className="mx-auto flex w-full max-w-4xl items-center gap-4">
        {location.pathname === "/home" && (
          <div className="flex w-full flex-col items-center gap-4 md:flex-row-reverse md:justify-start">
            <button
              onClick={handleStartQuestionnaire}
              className="min-w-auto rounded-lg bg-[#E8214C] px-6 py-3 text-center text-base font-medium whitespace-nowrap text-white transition hover:bg-[#c91d40]"
            >
              Start Questionnaire
            </button>
            <span className="cursor-pointer text-gray-500 hover:underline">
              Skip for now
            </span>
          </div>
        )}

        {location.pathname.startsWith("/questionnaire") && (
          <div className="flex w-full flex-row-reverse items-center justify-start gap-4">
            <button
              onClick={handleNext}
              className="w-full rounded-lg bg-[#1F74AD] px-6 py-3 text-center text-base font-medium text-white transition hover:bg-[#1b5e89] md:w-auto"
            >
              Continue
            </button>
            <button
              onClick={handlePrevious}
              className="rounded-lg border border-gray-400 bg-white px-6 py-3 text-center text-base font-medium text-gray-600 transition hover:bg-gray-100"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
